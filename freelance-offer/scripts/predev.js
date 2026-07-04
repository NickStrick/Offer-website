// Cleans up a leftover dev server before starting a new one.
//
// Root cause: on Windows, closing a terminal (instead of Ctrl+C) or a crash
// can leave the previous `next dev` process running. It still holds
// `.next/trace` open for writing, so the next `next dev` fails with
// EPERM trying to open the same file. Killing whatever is bound to the
// dev port releases that lock; deleting the file is a fallback in case
// it was left behind without an owning process.
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

function killPort(port) {
  try {
    if (process.platform === "win32") {
      const output = execSync(`netstat -ano -p tcp`, { encoding: "utf8" });
      const pids = new Set();
      for (const line of output.split("\n")) {
        const match = line.match(new RegExp(`:${port}\\s+.*LISTENING\\s+(\\d+)`));
        if (match) pids.add(match[1]);
      }
      for (const pid of pids) {
        try {
          execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
          console.log(`predev: killed leftover process on port ${port} (PID ${pid})`);
        } catch {
          // already gone
        }
      }
    } else {
      execSync(`lsof -ti tcp:${port} | xargs -r kill -9`, { stdio: "ignore" });
    }
  } catch {
    // nothing listening on the port, nothing to do
  }
}

function removeStaleTrace() {
  const tracePath = path.join(__dirname, "..", ".next", "trace");
  fs.rmSync(tracePath, { force: true });
}

killPort(PORT);
removeStaleTrace();

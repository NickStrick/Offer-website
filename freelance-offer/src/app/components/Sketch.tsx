/** Hand-drawn (Excalidraw-style) SVG pieces for the Shifu Builder look. */

/** A loose, brush-like ensō circle. Decorative. */
export function Enso({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden className={className} fill="none">
      <path
        d="M152 46c-17-17-45-26-71-20C47 34 24 64 27 100c3 38 35 70 75 70 40 0 70-30 70-66 0-17-6-31-15-42"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M150 52c-14-14-38-21-61-16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

/** A wobbly hand-drawn arrow, pointing right by default. */
export function SketchArrow({ className = "", direction = "right" }: { className?: string; direction?: "right" | "down" }) {
  return (
    <svg
      viewBox="0 0 120 40"
      aria-hidden
      fill="none"
      className={`${className} ${direction === "down" ? "rotate-90" : ""}`}
    >
      <path d="M4 22c18-6 40-9 62-6 14 2 28 3 44 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M96 8c5 5 10 8 14 8-5 3-9 8-12 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A curly arrow that loops down, for handwritten notes that point at something below. */
export function CurlyArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 90" aria-hidden fill="none" className={className}>
      <path
        d="M10 6c30 2 52 16 46 34-4 12-22 12-22 2 0-12 24-12 30 6 4 12 2 26-6 38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M46 78c4 4 8 8 10 9 2-5 6-10 10-13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** A hand-drawn circle to "circle" a word, like marking up a whiteboard. */
export function SketchCircle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 70" aria-hidden fill="none" preserveAspectRatio="none" className={className}>
      <path
        d="M30 12C70 2 150 2 182 16c20 10 12 34-24 44-40 10-110 10-140-4C-2 46 4 22 40 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

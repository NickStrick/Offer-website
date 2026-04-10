"use client";
export default function WhoThisIsFor({
  title,
  intro,
  bullets,
  className = "bg-gradient-purple-black",
}: {
  title: string;
  intro?: string;
  bullets: readonly string[];
  className?: string;
}) {
  return (
    <section className={`${className} px-6 py-16 text-white`}>
      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
        </header>
        <div className="rounded-2xl border border-white/10 bg-black/40 p-6 bg-blurred">
          {intro ? <p className="text-lg opacity-90 max-w-none">{intro}</p> : null}
          <ul className="mt-4 list-disc pl-5 space-y-2 text-lg opacity-90">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

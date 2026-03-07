export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({
  id = "faq",
  title = "Frequently asked questions",
  items,
  className = "bg-gradient-purple-black",
}: {
  id?: string;
  title?: string;
  items: FAQItem[];
  className?: string;
}) {
  return (
    <section id={id} className={`px-6 py-16 text-white ${className}`}>
      <div className="mx-auto max-w-5xl">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
        </header>

        <div className="grid gap-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-white/10 bg-black/40 p-6"
            >
              <summary className="cursor-pointer select-none text-xl font-semibold">
                {item.question}
              </summary>
              <p className="mt-3 text-lg opacity-90 max-w-none">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faPlus } from "@fortawesome/free-solid-svg-icons";

import SectionHeader from "../../components/SectionHeader";

export type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({
  id = "faq",
  title = "Frequently asked questions",
  items,
  className = "bg-page",
}: {
  id?: string;
  title?: string;
  items: readonly FAQItem[];
  className?: string;
}) {
  return (
    <section id={id} className={`${className} section-pad scroll-mt-16 text-white`}>
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="FAQ" eyebrowIcon={faCircleQuestion} title={title} />

        <div className="surface-card divide-y divide-white/[0.06]">
          {items.map((item) => (
            <details key={item.question} className="group px-6 md:px-8">
              <summary className="flex cursor-pointer select-none list-none items-center gap-4 py-6 text-base font-medium md:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex-1">{item.question}</span>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="w-3.5 shrink-0 text-ink-subtle transition-transform duration-200 group-open:rotate-45 group-open:text-green-400"
                  aria-hidden
                />
              </summary>
              <p className="-mt-1 pb-6 pr-8 text-[15px] leading-relaxed text-ink-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

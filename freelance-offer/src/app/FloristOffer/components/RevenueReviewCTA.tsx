import Link from "next/link";

export type RevenueReviewCTAProps = {
  id?: string;
  ctaHref: string;
  ctaText?: string;
  title?: string;
  subtitle?: string;
  secondaryHref?: string;
  secondaryText?: string;
  className?: string;
};

export default function RevenueReviewCTA({
  id,
  ctaHref,
  ctaText = "Book a Free 10-Minute Revenue Review",
  title = "Start with a free 10-minute revenue review",
  subtitle = "In 10 minutes we'll diagnose what's costing you online orders and recommend the best next step.",
  secondaryHref = "#tiers",
  secondaryText = "",
  className = "bg-gradient-purple-black ",
}: RevenueReviewCTAProps) {
  const isExternal = /^https?:\/\//i.test(ctaHref);

  return (
    <section id={id} className={`px-6 py-16 text-white ${className}`}>
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
        <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">{subtitle}</p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          {isExternal ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="btn-gradient w-full sm:w-auto text-xl md:text-2xl px-10 py-4 rounded-full"
            >
              {ctaText}
            </a>
          ) : (
            <Link
              href={ctaHref}
              className="btn-gradient w-full sm:w-auto text-xl md:text-2xl px-10 py-4 rounded-full"
            >
              {ctaText}
            </Link>
          )}
          {secondaryText ?
          <a
            href={secondaryHref}
            className="btn-inverted w-full sm:w-auto text-xl md:text-2xl px-10 py-4 rounded-full"
          >
            {secondaryText}
          </a>:<> </>}
        </div>
      </div>
    </section>
  );
}

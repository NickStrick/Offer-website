"use client";
import HelperBtnGroup from "../../components/HelperBtnGroup";
import type { OffersAboutCopy } from "../copy";

export default function About({ copy }: { copy: OffersAboutCopy }) {
  return <HelperBtnGroup reviewsHref="#testimonials" bio={copy.cards.left.bodyLines} />;
}

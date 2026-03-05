import type { BlogPostViewModel, PageViewModel } from "@scribient/shared";
import { getFeaturedBlogPosts } from "@/lib/cms/strapi-client";
import { HeroSection } from "./hero-section";
import { LogoCloudSection } from "./logo-cloud-section";
import { FeatureGridSection } from "./feature-grid-section";
import { SplitContentSection } from "./split-content-section";
import { StatsBandSection } from "./stats-band-section";
import { TestimonialsSection } from "./testimonials-section";
import { PricingCardsSection } from "./pricing-cards-section";
import { FaqSection } from "./faq-section";
import { RichTextSection } from "./rich-text-section";
import { TimelineSection } from "./timeline-section";
import { CtaBannerSection } from "./cta-banner-section";
import { RecentPostsSection } from "./recent-posts-section";
import { LeadFormSection } from "./lead-form-section";
import { TrustBarSection } from "./trust-bar-section";

export async function PageRenderer({
  page,
  preview,
}: {
  page: PageViewModel;
  preview?: boolean;
}) {
  const recentSection = page.sections.find(
    (section) => section.__component === "sections.recent-posts",
  );
  const recentPosts =
    recentSection && recentSection.__component === "sections.recent-posts"
      ? await getFeaturedBlogPosts(recentSection.limit || 3, preview)
      : [];

  return (
    <>
      {page.hero ? <HeroSection section={page.hero} /> : null}
      {page.sections.map((section, index) => {
        switch (section.__component) {
          case "sections.logo-cloud":
            return <LogoCloudSection key={index} section={section} />;
          case "sections.feature-grid":
            return <FeatureGridSection key={index} section={section} />;
          case "sections.split-content":
            return <SplitContentSection key={index} section={section} />;
          case "sections.stats-band":
            return <StatsBandSection key={index} section={section} />;
          case "sections.testimonials":
            return <TestimonialsSection key={index} section={section} />;
          case "sections.pricing-cards":
            return <PricingCardsSection key={index} section={section} />;
          case "sections.faq":
            return <FaqSection key={index} section={section} />;
          case "sections.rich-text":
            return <RichTextSection key={index} section={section} />;
          case "sections.timeline":
            return <TimelineSection key={index} section={section} />;
          case "sections.cta-banner":
            return <CtaBannerSection key={index} section={section} />;
          case "sections.recent-posts":
            return (
              <RecentPostsSection
                key={index}
                section={section}
                posts={recentPosts as BlogPostViewModel[]}
              />
            );
          case "sections.lead-form":
            return <LeadFormSection key={index} section={section} />;
          case "sections.trust-bar":
            return <TrustBarSection key={index} section={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}

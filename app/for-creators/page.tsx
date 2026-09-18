import SiteNav from "@/components/SiteNav";
import ComingSoon from "@/components/ComingSoon";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Creators — CareerUp Africa",
  description: "Teach on CareerUp Africa. This page is coming soon.",
};

export default function ForCreatorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <ComingSoon
        eyebrow="For Creators"
        title="Something's in the works for creators."
        description="We're not rolling this out just yet, but we're building a way for experts and creators to teach on CareerUp Africa. Check back soon."
      />
      <SiteFooter />
    </div>
  );
}

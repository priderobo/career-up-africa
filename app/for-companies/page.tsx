import SiteNav from "@/components/SiteNav";
import ComingSoon from "@/components/ComingSoon";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Companies — CareerUp Africa",
  description: "Bring CareerUp Africa to your team. This page is coming soon.",
};

export default function ForCompaniesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <ComingSoon
        eyebrow="For Companies"
        title="Team plans are on the way."
        description="We're not rolling this out just yet, but we're building a way for companies to bring CareerUp Africa to their teams. Check back soon."
      />
      <SiteFooter />
    </div>
  );
}

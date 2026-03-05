import { draftMode } from "next/headers";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getSiteSettings } from "@/lib/cms/strapi-client";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();
  const settings = await getSiteSettings(isEnabled);

  return (
    <>
      <AnnouncementBar settings={settings} />
      <SiteHeader settings={settings} />
      <main>{children}</main>
      <SiteFooter settings={settings} />
    </>
  );
}

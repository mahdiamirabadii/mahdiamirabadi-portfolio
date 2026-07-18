import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/routing";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const content = getContent(locale as Locale);

  return (
    <>
      <Hero content={content.hero} />
      <About content={content.about} />
      <Services content={content.services} />
      <Skills content={content.skills} />
      <Projects content={content.projects} />
      <Experience content={content.experience} />
      <Contact content={content.contact} />
    </>
  );
}

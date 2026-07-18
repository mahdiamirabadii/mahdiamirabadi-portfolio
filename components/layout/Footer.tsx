import type { PortfolioContent } from "@/content/types";

type Props = {
  content: PortfolioContent;
};

export function Footer({ content }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="space-y-1 text-center sm:text-start">
          <p className="text-sm font-medium text-foreground/80">
            © {year} {content.hero.name}
          </p>
          <p className="text-sm text-muted">{content.footer.rights}</p>
        </div>
        <p className="text-center text-sm text-muted-dim sm:text-end">
          {content.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}

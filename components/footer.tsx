export function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with passion and pixel-perfect precision © {new Date().getFullYear()} Harshit Anand
        </p>
      </div>
    </footer>
  );
}

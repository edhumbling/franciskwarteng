import type { ReactNode } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <div className="grid-overlay" aria-hidden />
      <div className="blur-blob" data-position="top" aria-hidden />
      <div className="blur-blob" data-position="bottom" aria-hidden />
      <NavigationBar />
      <main className="main-container page-padding relative z-10">{children}</main>
      <Footer />
    </div>
  );
}

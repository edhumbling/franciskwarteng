import type { ReactNode } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
      <NavigationBar />
      <main className="amazon-container page-shell-main" style={{ flex: 1, paddingTop: "80px", paddingBottom: "40px" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

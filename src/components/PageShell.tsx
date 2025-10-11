import type { ReactNode } from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavigationBar />
      <main className="amazon-container" style={{ flex: 1, paddingTop: "40px", paddingBottom: "40px" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

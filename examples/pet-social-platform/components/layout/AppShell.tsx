import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { KeyboardNav } from "./KeyboardNav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[var(--rail-w)_1fr]">
      <Sidebar />
      <TopBar />
      <KeyboardNav />
      <main id="main" className="min-w-0">
        {children}
      </main>
    </div>
  );
}

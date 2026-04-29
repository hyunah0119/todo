import Header from "./Header"
import Footer from "./Footer"

type Props = {
  children: React.ReactNode;
  onThemeToggle: () => void;
  isDark: boolean;
}

export default function AppLayout({ children, onThemeToggle, isDark }: Props) {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950 flex justify-center dark:text-white">
      <div className="w-full max-w-107.5 h-dvh min-h-0 flex flex-col bg-white dark:bg-neutral-900 overflow-hidden">
        <div className="shrink-0 w-full">
          <Header 
            onThemeToggle={onThemeToggle}
            isDark={isDark}
          />
        </div>
        <main className="flex flex-1 min-h-0 w-full flex-col overflow-hidden">
          {/* 앱 화면 */}
          {children}
        </main>
        <div className="shrink-0 w-full">
          <Footer />
        </div>
      </div>
    </div>
  )
}

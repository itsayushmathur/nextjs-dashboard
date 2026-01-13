import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen overflow-hidden bg-slate-50">
      {/* Ambient pastel glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96
                   rounded-full bg-blue-200/40 blur-3xl animate-floatSlow"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96
                   rounded-full bg-purple-200/40 blur-3xl animate-floatSlow delay-700"
      />

      {/* Sidebar */}
      <aside className="relative z-10 w-full flex-none md:w-72">
        <SideNav />
      </aside>

      {/* Main content */}
      <main
        className="relative z-10 flex grow flex-col overflow-y-auto
                   rounded-l-2xl
                   bg-white/70 backdrop-blur-xl
                   shadow-[0_0_0_1px_rgba(0,0,0,0.04)]
                   p-6 md:p-10
                   animate-fadeInUp"
      >
        <div className="mx-auto w-full max-w-7xl">
          {children}
        </div>
      </main>
    </div>
  );
}

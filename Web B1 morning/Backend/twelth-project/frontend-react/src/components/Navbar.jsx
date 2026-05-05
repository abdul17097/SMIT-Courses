import { useState } from "react";

export default function Navbar({ isLoggedIn, onLogin, onLogout }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
            P
          </span>
          <div>
            <p className="text-lg font-semibold text-slate-900">PostFlow</p>
            <p className="text-sm text-slate-500">Responsive dashboard nav</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 sm:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-xl">☰</span>
          </button>

          <div className="hidden items-center gap-6 sm:flex">
            {isLoggedIn ? (
              <>
                <a
                  href="#my-post"
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  My Post
                </a>
                <a
                  href="#post"
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  Post
                </a>
                <a
                  href="#create-post"
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  Create Post
                </a>
              </>
            ) : (
              <span className="text-sm text-slate-500">
                Login to see your posts
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={isLoggedIn ? onLogout : onLogin}
            className="rounded-full border border-blue-600 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-gray-200 bg-slate-50 sm:hidden">
          <div className="space-y-2 px-4 py-4">
            {isLoggedIn ? (
              <>
                <a
                  href="#my-post"
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-900"
                >
                  My Post
                </a>
                <a
                  href="#post"
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-900"
                >
                  Post
                </a>
                <a
                  href="#create-post"
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-900"
                >
                  Create Post
                </a>
              </>
            ) : (
              <p className="text-sm text-slate-600">Login to view links</p>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}

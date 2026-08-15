import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import Container from "../common/Container";

export const Breadcrumb = ({ customCrumbs, className = "" }) => {
  const location = useLocation();

  let crumbs = [];

  if (customCrumbs) {
    crumbs = customCrumbs;
  } else {
    const pathnames = location.pathname.split("/").filter((x) => x);
    crumbs = pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      const label = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " ");
      return { label, path: routeTo };
    });
  }

  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={`py-4 bg-slate-50 border-b border-slate-100 ${className}`}>
      <Container>
        <ol className="flex items-center space-x-2 text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
          <li>
            <Link
              to="/"
              className="flex items-center text-slate-400 hover:text-indigo-600 transition-colors"
            >
              <Home size={16} />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li key={crumb.path || index} className="flex items-center space-x-2">
                <ChevronRight size={14} className="text-slate-300 shrink-0" />
                {isLast ? (
                  <span className="font-semibold text-slate-800" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
};

export default Breadcrumb;

import React from "react";

export const SectionHeader = ({
  title,
  subtitle,
  actionLabel,
  onAction,
  className = "",
}) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 ${className}`}>
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1.5 text-sm sm:text-base text-slate-500 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors shrink-0 group cursor-pointer"
        >
          <span>{actionLabel}</span>
          <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
        </button>
      )}
    </div>
  );
};

export default SectionHeader;

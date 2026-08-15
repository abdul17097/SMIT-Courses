import React from "react";

export const Badge = ({
  variant = "default",
  size = "md",
  children,
  className = "",
}) => {
  const variantClasses = {
    default: "bg-slate-100 text-slate-700 border-slate-200",
    primary: "bg-indigo-50 text-indigo-700 border-indigo-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    danger: "bg-rose-50 text-rose-700 border-rose-200",
    outline: "bg-transparent text-slate-600 border-slate-300",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs font-semibold rounded-md",
    md: "px-2.5 py-1 text-xs font-bold rounded-lg tracking-wide",
  };

  return (
    <span
      className={`inline-flex items-center border font-medium uppercase transition-colors ${
        variantClasses[variant] || variantClasses.default
      } ${sizeClasses[size] || sizeClasses.md} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;

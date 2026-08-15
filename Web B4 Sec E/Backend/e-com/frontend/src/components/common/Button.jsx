import React from "react";
import { Spinner } from "./Spinner";

export const Button = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  fullWidth = false,
  disabled = false,
  children,
  className = "",
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-indigo-200 focus:ring-indigo-500",
    secondary:
      "bg-slate-800 hover:bg-slate-900 text-white shadow-md hover:shadow-slate-300 focus:ring-slate-700",
    outline:
      "border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:border-slate-400 focus:ring-indigo-500",
    ghost:
      "bg-transparent hover:bg-slate-100 text-slate-700 focus:ring-slate-400",
    danger:
      "bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-rose-200 focus:ring-rose-500",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${
        sizeStyles[size] || sizeStyles.md
      } ${widthStyle} ${className}`}
      {...props}
    >
      {isLoading ? (
        <Spinner size={size === "lg" ? "md" : "sm"} color={variant === "outline" || variant === "ghost" ? "primary" : "white"} />
      ) : (
        <>
          {LeftIcon && <LeftIcon className="shrink-0" size={size === "lg" ? 20 : size === "sm" ? 14 : 18} />}
          <span>{children}</span>
          {RightIcon && <RightIcon className="shrink-0" size={size === "lg" ? 20 : size === "sm" ? 14 : 18} />}
        </>
      )}
    </button>
  );
};

export default Button;

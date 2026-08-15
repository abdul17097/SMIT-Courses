import React from "react";

export const Input = React.forwardRef(
  (
    {
      label,
      error,
      helperText,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      fullWidth = true,
      className = "",
      id,
      name,
      type = "text",
      ...props
    },
    ref
  ) => {
    const inputId = id || name;

    return (
      <div className={`${fullWidth ? "w-full" : ""} space-y-1.5`}>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {LeftIcon && (
            <div className="absolute left-3.5 pointer-events-none text-slate-400">
              <LeftIcon size={18} />
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 transition duration-200 outline-none ${
              LeftIcon ? "pl-10" : ""
            } ${RightIcon ? "pr-10" : ""} ${
              error
                ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                : "border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            } ${className}`}
            {...props}
          />
          {RightIcon && (
            <div className="absolute right-3.5 text-slate-400">
              <RightIcon size={18} />
            </div>
          )}
        </div>
        {error ? (
          <p className="text-xs font-medium text-rose-600">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-slate-500">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;

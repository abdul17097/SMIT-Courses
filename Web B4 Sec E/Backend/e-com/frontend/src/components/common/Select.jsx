import React from "react";
import { ChevronDown } from "lucide-react";

export const Select = React.forwardRef(
  (
    {
      label,
      error,
      options = [],
      helperText,
      fullWidth = true,
      className = "",
      id,
      name,
      placeholder = "Select an option",
      ...props
    },
    ref
  ) => {
    const selectId = id || name;

    return (
      <div className={`${fullWidth ? "w-full" : ""} space-y-1.5`}>
        {label && (
          <label
            htmlFor={selectId}
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <select
            ref={ref}
            id={selectId}
            name={name}
            className={`w-full appearance-none rounded-xl border bg-white px-4 py-2.5 pr-10 text-sm text-slate-800 transition duration-200 outline-none ${
              error
                ? "border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
                : "border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            } ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => {
              const value = typeof opt === "object" ? opt.value : opt;
              const optionLabel = typeof opt === "object" ? opt.label : opt;
              return (
                <option key={value} value={value}>
                  {optionLabel}
                </option>
              );
            })}
          </select>
          <div className="absolute right-3.5 pointer-events-none text-slate-400">
            <ChevronDown size={18} />
          </div>
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

Select.displayName = "Select";
export default Select;

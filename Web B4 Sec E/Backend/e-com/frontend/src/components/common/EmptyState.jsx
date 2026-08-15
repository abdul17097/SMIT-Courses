import React from "react";
import { PackageOpen } from "lucide-react";
import Button from "./Button";

export const EmptyState = ({
  icon: Icon = PackageOpen,
  title = "No Items Found",
  description = "We couldn't find anything matching your search or filters.",
  actionLabel,
  onAction,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center rounded-3xl border border-dashed border-slate-200 bg-slate-50/50 ${className}`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-4 shadow-sm">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-1.5">{title}</h3>
      <p className="max-w-md text-sm text-slate-500 mb-6">{description}</p>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default EmptyState;

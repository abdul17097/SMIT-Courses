import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import Button from "./Button";

export const ErrorState = ({
  title = "Something Went Wrong",
  message = "An error occurred while fetching data. Please try again.",
  onRetry,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center rounded-3xl border border-rose-100 bg-rose-50/50 ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 mb-4 shadow-sm">
        <AlertTriangle size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-1.5">{title}</h3>
      <p className="max-w-md text-sm text-slate-600 mb-6">{message}</p>
      {onRetry && (
        <Button variant="outline" leftIcon={RefreshCw} onClick={onRetry}>
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorState;

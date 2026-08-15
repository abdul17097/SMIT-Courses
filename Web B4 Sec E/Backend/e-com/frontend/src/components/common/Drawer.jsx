import React, { useEffect } from "react";
import { X } from "lucide-react";

export const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  position = "right",
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const positionClasses = {
    left: "left-0",
    right: "right-0",
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 bottom-0 ${
          positionClasses[position] || positionClasses.right
        } flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 z-10`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 p-5">
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            aria-label="Close drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">{children}</div>
      </div>
    </div>
  );
};

export default Drawer;

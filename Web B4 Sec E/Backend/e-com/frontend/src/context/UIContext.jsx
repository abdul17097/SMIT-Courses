import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleCartDrawer = () => setIsCartDrawerOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const closeCartDrawer = () => setIsCartDrawerOpen(false);

  return (
    <UIContext.Provider
      value={{
        isMobileMenuOpen,
        isCartDrawerOpen,
        toggleMobileMenu,
        toggleCartDrawer,
        closeMobileMenu,
        closeCartDrawer,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};

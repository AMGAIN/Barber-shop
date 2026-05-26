// "use client";

// import { createContext, useContext } from "react";
// import type { Page } from "./types";

// type NavigationContextValue = {
//   currentPage: Page;
//   setPage: (page: Page) => void;
// };

// const NavigationContext = createContext<NavigationContextValue | null>(null);

// export function NavigationProvider({
//   children,
//   value,
// }: {
//   children: React.ReactNode;
//   value: NavigationContextValue;
// }) {
//   return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
// }

// export function usePageNavigation() {
//   const context = useContext(NavigationContext);

//   if (!context) {
//     throw new Error("usePageNavigation must be used inside NavigationProvider");
//   }

//   return context;
// }

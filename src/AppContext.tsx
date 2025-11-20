import { createContext, useContext } from "react";
import type { IAppContextType } from "./interface";

// Create a context
export const AppContext = createContext<IAppContextType | null>(null);

// Create a custom hook to use the UserGameDataContext
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};

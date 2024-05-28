import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.AppProvider
      value={{ isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </AppContext.AppProvider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

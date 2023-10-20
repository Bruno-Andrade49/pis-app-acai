'use client'

import React, { createContext, useContext, useState } from 'react';

// Defina o tipo para o contexto
interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | any>(undefined);

const SidebarProvider: React.FC<any> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarProvider } 
export default SidebarContext;
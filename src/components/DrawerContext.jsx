// DrawerContext.js
import React, { createContext, useState } from 'react';

// Crear el contexto
export const DrawerContext = createContext();

// Crear un proveedor de contexto
export const DrawerProvider = ({ children }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};
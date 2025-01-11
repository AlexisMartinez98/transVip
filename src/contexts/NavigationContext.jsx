import { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const ViewType = {
  VEHICLES: 'vehicles',
  SHARED: 'shared',
  LOW_FREQUENCY: 'low-frequency',
  ROUTES: 'routes',
  ILLUMINATED: 'illuminated',
  DASHBOARD: 'dashboard'
};

export function NavigationProvider({ children }) {
  const [activeView, setActiveView] = useState(ViewType.VEHICLES);

  return (
    <NavigationContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation debe ser usado dentro de un NavigationProvider');
  }
  return context;
}

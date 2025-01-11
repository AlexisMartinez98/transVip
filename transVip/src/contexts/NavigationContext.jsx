import { createContext, useContext, useState } from 'react';
import { SharedRides } from '../components/shared/SharedRides';

export const ViewType = {
  VEHICLES: 'vehicles',
  SHARED: 'shared',
  LOW_FREQUENCY: 'low_frequency',
  ROUTES: 'routes',
  ILLUMINATED: 'illuminated',
  DASHBOARD: 'dashboard',
};

const NavigationContext = createContext();

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
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

export function MainContent() {
  const { activeView } = useNavigation();

  switch (activeView) {
    case ViewType.SHARED:
      return <SharedRides />;
    default:
      return (
        <div className="flex items-center justify-center min-h-[400px]">
          <p className="text-lg text-gray-500">Vista en construcción</p>
        </div>
      );
  }
}

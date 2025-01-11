import { Car, Users, Clock, Map, Bell, LayoutDashboard } from 'lucide-react';
import { useNavigation, ViewType } from '../../contexts/NavigationContext';

const navItems = [
  { icon: Car, label: 'Móviles', view: ViewType.VEHICLES, count: 30 },
  { icon: Users, label: 'Compartidos', view: ViewType.SHARED, count: 20 },
  { icon: Clock, label: 'Baja frec.', view: ViewType.LOW_FREQUENCY, count: 15 },
  { icon: Map, label: 'Rutas', view: ViewType.ROUTES },
  { icon: Bell, label: 'Zona Iluminada', view: ViewType.ILLUMINATED },
  { icon: LayoutDashboard, label: 'Dashboard', view: ViewType.DASHBOARD },
];

export function Navbar() {
  const { activeView, setActiveView } = useNavigation();

  return (
    <nav className="bg-white dark:bg-gray-800 transition-colors duration-300 border-b shadow-md dark:shadow-black shadow-gray-200 border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 w-full">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.view}
              onClick={() => setActiveView(item.view)}
              className={`flex flex-col items-center gap-1 px-4 py-3 text-sm font-medium transition-colors relative min-w-[100px] justify-center ${
                activeView === item.view
                ? "text-orange-500 dark:text-orange-500"
                : "text-gray-500 dark:text-white/70 hover:text-orange-500 dark:hover:text-orange-500 hover:bg-gray-100/80 dark:hover:bg-gray-700/20"
              }`}
            >
              <div className="flex items-center gap-1 relative">
                <Icon className="h-5 w-5" />
                {item.count && (
                  <span className="min-w-[20px] h-5 rounded-full bg-orange-500 dark:bg-white text-white dark:text-orange-500 text-xs flex items-center justify-center">
                    {item.count}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  );
}

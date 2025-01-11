export function RoutesTabs({ activeTab, onTabChange }) {
  return (
    <div className="bg-orange-50/50 dark:bg-orange-950/20 p-1 rounded-full mb-6 flex">
      <button
        className={`flex-1 py-3 px-6 text-center transition-all rounded-full font-medium ${
          activeTab === 'current'
            ? 'bg-orange-500 text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
        onClick={() => onTabChange('current')}
      >
        Rutas en Curso
      </button>
      <button
        className={`flex-1 py-3 px-6 text-center transition-all rounded-full font-medium ${
          activeTab === 'history'
            ? 'bg-orange-500 text-white shadow-sm'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
        }`}
        onClick={() => onTabChange('history')}
      >
        Historial de Rutas
      </button>
    </div>
  );
}

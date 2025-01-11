export function FrequencyTabs({
  activeTab,
  lowFrequencyCount,
  exclusiveCount,
  onTabChange
}) {
  return (
    <div className="flex rounded-full overflow-hidden bg-orange-50 dark:bg-orange-950/20">
      <button
        onClick={() => onTabChange('low-frequency')}
        className={`
          flex-1 py-3 px-6 text-center transition-colors
          ${activeTab === 'low-frequency'
            ? 'bg-orange-500 text-white font-medium'
            : 'text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/20'
          }
        `}
      >
        Baja frecuencia ({lowFrequencyCount})
      </button>
      <button
        onClick={() => onTabChange('exclusive')}
        className={`
          flex-1 py-3 px-6 text-center transition-colors
          ${activeTab === 'exclusive'
            ? 'bg-orange-500 text-white font-medium'
            : 'text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/20'
          }
        `}
      >
        Exclusivos ({exclusiveCount})
      </button>
    </div>
  )
}

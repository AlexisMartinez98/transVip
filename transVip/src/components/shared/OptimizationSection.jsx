import { Button } from '../ui/button'
import { Progress } from '../ui/progress'

export function OptimizationSection({
  t1Count,
  t2Count,
  totalCapacity,
  nextOptimizationTime,
  isLoading,
  onOptimize
}) {
  const t1Progress = (t1Count / totalCapacity) * 100
  const t2Progress = (t2Count / totalCapacity) * 100

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Terminal 1 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Terminal 1</h3>
          <span className={`px-2.5 py-1 rounded-lg text-sm font-medium ${
            t1Progress >= 80 ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
          }`}>
            {t1Count} / {totalCapacity}
          </span>
        </div>
        <Progress 
          value={t1Progress} 
          className="bg-blue-100 dark:bg-blue-900/30"
          indicatorClassName={t1Progress >= 80 ? 'bg-red-500' : 'bg-blue-500'}
        />
      </div>

      {/* Terminal 2 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Terminal 2</h3>
          <span className={`px-2.5 py-1 rounded-lg text-sm font-medium ${
            t2Progress >= 80 ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
          }`}>
            {t2Count} / {totalCapacity}
          </span>
        </div>
        <Progress 
          value={t2Progress} 
          className="bg-blue-100 dark:bg-blue-900/30"
          indicatorClassName={t2Progress >= 80 ? 'bg-red-500' : 'bg-blue-500'}
        />
      </div>

      {/* Optimización */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              Próxima optimización
            </h3>
            <span className="text-lg font-medium text-orange-500">
              {nextOptimizationTime} min
            </span>
          </div>
          <div className="flex-grow" />
          <Button 
            onClick={onOptimize}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium h-12"
            disabled={isLoading || (t1Count === 0 && t2Count === 0)}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Optimizando...
              </span>
            ) : (
              'Optimizar ahora'
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

import { useEffect } from 'react'
import { usePassengers } from '../../hooks/usePassengers'
import { OptimizationSection } from './OptimizationSection'
import { PassengerCard } from './PassengerCard'

export function SharedRides() {
  const { 
    shared,
    isLoading,
    error,
    nextOptimizationTime,
    loadPassengers,
    optimizeSharedPassengers
  } = usePassengers()

  // Cargar datos de ambas terminales al iniciar
  useEffect(() => {
    const loadAllTerminals = async () => {
      try {
        await Promise.all([
          loadPassengers('T1'),
          loadPassengers('T2')
        ])
      } catch (error) {
        console.error('Error loading terminals:', error)
      }
    }
    loadAllTerminals()
  }, [loadPassengers])

  const handleOptimize = async () => {
    try {
      // Optimizar ambas terminales
      await Promise.all([
        optimizeSharedPassengers('T1'),
        optimizeSharedPassengers('T2')
      ])
    } catch (error) {
      console.error('Error optimizing:', error)
    }
  }

  const totalCapacity = 25
  const t1Passengers = shared.T1 || []
  const t2Passengers = shared.T2 || []

  // Ordenar pasajeros por tiempo de espera (más urgentes primero)
  const sortedPassengers = [...t1Passengers, ...t2Passengers].sort(
    (a, b) => b.waitingTime - a.waitingTime
  )

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-lg text-muted-foreground">Cargando...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="space-y-6">
        <OptimizationSection
          t1Count={t1Passengers.length}
          t2Count={t2Passengers.length}
          totalCapacity={totalCapacity}
          nextOptimizationTime={nextOptimizationTime}
          isLoading={isLoading}
          onOptimize={handleOptimize}
        />

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Viajes compartidos en espera
              </h2>
            </div>
            <div className="space-y-4">
              {sortedPassengers.map((passenger) => (
                <PassengerCard key={passenger.qrCode} passenger={passenger} />
              ))}
              {sortedPassengers.length === 0 && (
                <p className="text-gray-500 dark:text-gray-400 text-center py-4">
                  No hay pasajeros en espera
                </p>
              )}
            </div>
          </div>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-4">
            <p className="text-sm text-red-600 dark:text-red-400">
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

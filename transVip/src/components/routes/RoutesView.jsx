import { useState } from 'react'
import { Switch } from '../ui/switch'
import { RouteCard } from './RouteCard'
import { RoutesTabs } from './RoutesTabs'
import { PassengerDialog } from './PassengerDialog'
import { ReassignVehicleDialog } from './ReassignVehicleDialog'
import { mockRoutes } from './mock-data'

export function RoutesView() {
  const [activeTab, setActiveTab] = useState('current')
  const [terminal, setTerminal] = useState('T1')
  const [selectedRoute, setSelectedRoute] = useState(null)
  const [isPassengerDialogOpen, setIsPassengerDialogOpen] = useState(false)
  const [isReassignDialogOpen, setIsReassignDialogOpen] = useState(false)

  const handleViewPassengers = (routeId) => {
    const route = mockRoutes.find(r => r.id === routeId)
    if (route) {
      setSelectedRoute(route)
      setIsPassengerDialogOpen(true)
    }
  }

  const handleReassignVehicle = (routeId) => {
    const route = mockRoutes.find(r => r.id === routeId)
    if (route) {
      setSelectedRoute(route)
      setIsReassignDialogOpen(true)
    }
  }

  const handleReassignConfirm = (newVehicleId) => {
    console.log(`Reasignando ruta ${selectedRoute?.routeNumber} al móvil ${newVehicleId}`)
    // Aquí iría la lógica para actualizar la ruta con el nuevo móvil
  }

  const filteredRoutes = mockRoutes.filter(route => route.terminal === terminal)

  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Rutas</h1>
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-full">
            <span className={`transition-colors ${terminal === 'T1' ? 'text-gray-900 dark:text-gray-100 font-medium' : 'text-gray-400 dark:text-gray-500'}`}>T1</span>
            <Switch
              checked={terminal === 'T2'}
              onCheckedChange={(checked) => setTerminal(checked ? 'T2' : 'T1')}
              className="data-[state=checked]:bg-orange-500"
            />
            <span className={`transition-colors ${terminal === 'T2' ? 'text-gray-900 dark:text-gray-100 font-medium' : 'text-gray-400 dark:text-gray-500'}`}>T2</span>
          </div>
        </div>

        <RoutesTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="space-y-4">
          {filteredRoutes.map((route) => (
            <RouteCard
              key={route.id}
              routeNumber={route.routeNumber}
              origin={route.origin}
              destination={route.destination}
              vehicleId={route.vehicleId}
              driverName={route.driverName}
              elapsedTime={route.elapsedTime}
              passengers={route.passengers}
              terminal={route.terminal}
              onViewPassengers={() => handleViewPassengers(route.id)}
              onReassignVehicle={() => handleReassignVehicle(route.id)}
            />
          ))}
        </div>
      </div>

      {selectedRoute && (
        <PassengerDialog
          isOpen={isPassengerDialogOpen}
          onClose={() => {
            setIsPassengerDialogOpen(false)
            setSelectedRoute(null)
          }}
          routeInfo={{
            conductor: selectedRoute.driverName,
            vehicleId: selectedRoute.vehicleId,
            totalTime: 75
          }}
          passengers={selectedRoute.passengerList}
        />
      )}
      {selectedRoute && (
        <ReassignVehicleDialog
          isOpen={isReassignDialogOpen}
          onClose={() => {
            setIsReassignDialogOpen(false)
            setSelectedRoute(null)
          }}
          routeNumber={selectedRoute.routeNumber}
          onReassign={handleReassignConfirm}
        />
      )}
    </>
  )
}

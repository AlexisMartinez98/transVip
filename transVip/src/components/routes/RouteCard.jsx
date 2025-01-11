import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Card } from '../ui/card'

export function RouteCard({
  routeNumber,
  origin,
  destination,
  vehicleId,
  driverName,
  elapsedTime,
  passengers,
  terminal,
  onViewPassengers,
  onReassignVehicle,
}) {
  return (
    <Card className="p-4 mb-4 bg-green-50/50 dark:bg-green-950/20 border border-green-100 dark:border-green-900 rounded-xl">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Ruta #{routeNumber}</h3>
            <Badge 
              variant={terminal === 'T1' ? 'terminal.t1' : 'terminal.t2'} 
              className="ml-2"
            >
              {terminal}
            </Badge>
          </div>
          <p className="text-gray-700 dark:text-gray-300">Origen: {origin} - Destino: {destination}</p>
          <p className="text-gray-700 dark:text-gray-300">Móvil: {vehicleId} - Conductor: {driverName}</p>
          <p className="text-green-600 dark:text-green-400 font-medium">Tiempo transcurrido: {elapsedTime} min</p>
          <p className="text-gray-700 dark:text-gray-300">Pasajeros: {passengers}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        <Button 
          variant="default" 
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-medium"
          onClick={onViewPassengers}
        >
          Ver pasajeros
        </Button>
        <Button 
          variant="default" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4"
          onClick={onReassignVehicle}
        >
          Reasignar Móvil
        </Button>
      </div>
    </Card>
  )
}

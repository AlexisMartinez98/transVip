import { Clock } from 'lucide-react'
import { Button } from '../ui/button'

export function PassengerZoneGroup({
  zoneName,
  departureTime,
  passengers,
  onAssignVehicle
}) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {zoneName}
        </h3>
        <div className="flex items-center gap-2 text-orange-500 dark:text-orange-400">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">
            Saliendo en {departureTime} minutos
          </span>
        </div>
      </div>

      <div className="space-y-3  ">
        {passengers.map((passenger) => (
          <div
            key={passenger.id}
            className="bg-white border-2 border-orange-100 dark:bg-gray-800 rounded-xl p-4 shadow-sm dark:shadow-gray-900/50 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className={`
                w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-white
                ${passenger.terminal === 'T1' ? 'bg-blue-500 dark:bg-blue-600' : 'bg-red-500 dark:bg-red-600'}
              `}>
                {passenger.terminal}
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">{passenger.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{passenger.location}</p>
                <p className="text-sm text-orange-500 dark:text-orange-400">Reserva: {passenger.reservation}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-lg font-medium text-orange-500 dark:text-orange-400">
                {passenger.waitingTime} min
              </span>
              <Button
                variant="outline"
                onClick={() => onAssignVehicle(passenger.id)}
                className="whitespace-nowrap border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              >
                Asignar Móvil
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

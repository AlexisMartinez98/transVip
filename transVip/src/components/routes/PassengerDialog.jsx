import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'

export function PassengerDialog({
  isOpen,
  onClose,
  routeInfo,
  passengers,
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold mb-4">Pasajeros</DialogTitle>
        </DialogHeader>
        
        <div className="bg-orange-50/50 dark:bg-orange-950/20 p-4 rounded-lg mb-6 space-y-2">
          <p className="text-gray-700 dark:text-gray-300 font-medium">Conductor: {routeInfo.conductor}</p>
          <p className="text-gray-700 dark:text-gray-300 font-medium">Móvil: {routeInfo.vehicleId}</p>
          <p className="text-gray-700 dark:text-gray-300 font-medium">Tiempo total: {routeInfo.totalTime} minutos</p>
        </div>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {passengers.map((passenger) => (
            <div
              key={passenger.reservation}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-800 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{passenger.name}</h3>
                <div className="flex items-center">
                  <span className="text-orange-500 dark:text-orange-400 font-medium">
                    Posición: {passenger.position}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-400">
                <p>Reserva: <span className="font-medium text-gray-900 dark:text-gray-100">{passenger.reservation}</span></p>
                <p>Hora de bajada: <span className="font-medium text-gray-900 dark:text-gray-100">{passenger.dropoffTime}</span></p>
                <p className="col-span-2">Destino: <span className="font-medium text-gray-900 dark:text-gray-100">{passenger.destination}</span></p>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

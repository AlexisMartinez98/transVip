import { MessageSquare, AlertTriangle } from 'lucide-react'
import { Button } from '../ui/button'

export function PassengerCard({ passenger }) {
  const isUrgent = passenger.waitingTime > 12
  const isT1 = passenger.terminal === 'T1'

  return (
    <div className={`
      relative overflow-hidden
      p-4 rounded-2xl border transition-all duration-300
      hover:shadow-md
      ${isT1 
        ? 'bg-blue-50/50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/30' 
        : 'bg-red-50/50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/30'
      }
    `}>
      <div className="flex justify-between items-start gap-4">
        <div className="flex-grow space-y-2">
          <div className="flex items-center gap-3">
            <div className={`
              min-w-[40px] h-10 rounded-lg flex items-center justify-center font-semibold
              ${isT1 
                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                : 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300'
              }
            `}>
              {passenger.terminal}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {passenger.name}
                </p>
                {isUrgent && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300 text-xs font-medium">
                    <AlertTriangle className="h-3 w-3" />
                    Urgente
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reserva: {passenger.qrCode}
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-600 dark:text-gray-400">Comuna</p>
              <p className="font-medium text-gray-800 dark:text-gray-200">{passenger.comuna}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Destino</p>
              <p className="font-medium text-gray-800 dark:text-gray-200">{passenger.destination}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Tiempo de espera</p>
              <p className={`font-medium ${isUrgent ? 'text-red-600 dark:text-red-400' : 'text-orange-600 dark:text-orange-400'}`}>
                {passenger.waitingTime} minutos
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className={`
              ${isT1
                ? 'hover:bg-blue-50 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800'
                : 'hover:bg-red-50 dark:hover:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
              }
            `}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Comentarios
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-orange-500 text-white hover:bg-orange-600 border-none"
          >
            Asignar vehículo
          </Button>
        </div>
      </div>
    </div>
  )
}

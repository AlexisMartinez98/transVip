import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'

const mockVehicles = [
  {
    id: '1234',
    driver: {
      id: 'D1',
      name: 'Juan Pérez',
      licenseNumber: 'ABCD12',
      hoursConnected: 5,
      imageUrl: '/drivers/driver1.jpg'
    }
  },
  {
    id: '5678',
    driver: {
      id: 'D2',
      name: 'María González',
      licenseNumber: 'EFGH34',
      hoursConnected: 3,
      imageUrl: '/drivers/driver2.jpg'
    }
  },
  {
    id: '9012',
    driver: {
      id: 'D3',
      name: 'Carlos Rodríguez',
      licenseNumber: 'IJKL56',
      hoursConnected: 4,
      imageUrl: '/drivers/driver3.jpg'
    }
  }
]

export function ReassignVehicleDialog({
  isOpen,
  onClose,
  routeNumber,
  onReassign
}) {
  const [selectedVehicleId, setSelectedVehicleId] = useState(null)

  const handleReassign = () => {
    if (selectedVehicleId) {
      onReassign(selectedVehicleId)
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold mb-4">
            {routeNumber ? 'Reasignar Móvil' : 'Asignar Móvil'}
          </DialogTitle>
        </DialogHeader>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {routeNumber 
            ? `Seleccione un nuevo móvil para reasignar la ruta #${routeNumber}`
            : 'Seleccione un móvil para asignar al pasajero'
          }
        </p>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {mockVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-orange-50/50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-100 dark:border-orange-900/50 hover:border-orange-200 dark:hover:border-orange-800 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <img
                    src={vehicle.driver.imageUrl}
                    alt={vehicle.driver.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{vehicle.driver.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <p>ID: {vehicle.id}</p>
                      <p>Patente: {vehicle.driver.licenseNumber}</p>
                      <p className="text-orange-500 dark:text-orange-400">
                        {vehicle.driver.hoursConnected} horas conectado
                      </p>
                    </div>
                  </div>
                </div>
                <Checkbox
                  checked={selectedVehicleId === vehicle.id}
                  onCheckedChange={() => setSelectedVehicleId(vehicle.id)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-200 dark:border-gray-700"
          >
            Cancelar
          </Button>
          <Button
            variant="default"
            className="bg-black hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white"
            onClick={handleReassign}
            disabled={!selectedVehicleId}
          >
            {routeNumber ? 'Reasignar Ruta' : 'Asignar Móvil'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

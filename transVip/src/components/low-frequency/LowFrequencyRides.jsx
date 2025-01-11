import { useState } from 'react'
import { ActionButtons } from './ActionButtons'
import { FrequencyTabs } from './FrequencyTabs'
import { PassengerZoneGroup } from './PassengerZoneGroup'
import { ExclusivePassengers } from './ExclusivePassengers'
import { mockData } from './mock-data'

export function LowFrequencyRides() {
  const [activeTab, setActiveTab] = useState('low-frequency');
  const [isAssignVehicleDialogOpen, setIsAssignVehicleDialogOpen] = useState(false);
  const [selectedPassengerId, setSelectedPassengerId] = useState(null);

  const handleCreateRoute = () => {
    console.log('Creando ruta...')
  }

  const handleClear = () => {
    console.log('Limpiando selección...')
  }

  const handleAssignVehicle = (passengerId) => {
    setSelectedPassengerId(passengerId);
    setIsAssignVehicleDialogOpen(true);
  };

  const handleVehicleAssignConfirm = (vehicleId) => {
    if (selectedPassengerId) {
      console.log(`Asignando vehículo ${vehicleId} al pasajero ${selectedPassengerId}`);
      // Aquí iría la lógica para actualizar la asignación
    }
    setIsAssignVehicleDialogOpen(false);
    setSelectedPassengerId(null);
  };

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="space-y-6">
        <ActionButtons 
          onCreateRoute={handleCreateRoute}
          onClear={handleClear}
        />

        <FrequencyTabs
          activeTab={activeTab}
          lowFrequencyCount={Object.values(mockData.lowFrequency).reduce(
            (acc, zone) => acc + zone.passengers.length, 
            0
          )}
          exclusiveCount={mockData.exclusive.passengers.length}
          onTabChange={setActiveTab}
        />

        <div className="bg-orange-50/50 dark:bg-orange-950/10 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-8">
            Pasajeros en espera
          </h2>
          
          <div className="space-y-8">
            {activeTab === 'low-frequency' ? (
              <>
                {Object.entries(mockData.lowFrequency).map(([key, zone]) => (
                  <PassengerZoneGroup
                    key={key}
                    {...zone}
                    onAssignVehicle={handleAssignVehicle}
                  />
                ))}
              </>
            ) : (
              <ExclusivePassengers
                passengers={mockData.exclusive.passengers}
                onAssignVehicle={handleAssignVehicle}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

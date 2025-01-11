import { useState } from "react"
import { useVehicles } from "../../contexts/vehicles-context"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog"
import { Button } from "../ui/button"
import { NumericKeypad } from "./NumericKeypad"
import { VehicleSpot } from "./VehicleSpot"
import { toast } from 'sonner'

export function VehicleList() {
  const { 
    currentTerminal, 
    addVehicle, 
    toggleSpotBlock, 
    removeVehicle,
    selectedTerminalId,
    setSelectedTerminalId 
  } = useVehicles()
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [vehicleId, setVehicleId] = useState("")
  const [selectedSpotId, setSelectedSpotId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddVehicle = async () => {
    if (!selectedSpotId || !vehicleId) return

    setIsLoading(true)
    try {
      await addVehicle(selectedSpotId, vehicleId)
      setIsModalOpen(false)
      setVehicleId("")
      setSelectedSpotId(null)
      toast.success('Móvil agregado', {
        description: `El móvil ${vehicleId} ha sido agregado correctamente.`
      })
    } catch (error) {
      toast.error('Error al agregar móvil', {
        description: error instanceof Error ? error.message : "Ha ocurrido un error"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemoveVehicle = (spotId, vehicleId) => {
    try {
      removeVehicle(spotId)
      toast.success('Móvil removido', {
        description: `El móvil ${vehicleId} ha sido removido correctamente.`
      })
    } catch (error) {
      toast.error('Error al remover móvil', {
        description: "Ha ocurrido un error al remover el móvil"
      })
    }
  }

  const handleToggleBlock = (spotId, isBlocked) => {
    try {
      toggleSpotBlock(spotId)
      toast.success(isBlocked ? "Posición desbloqueada" : "Posición bloqueada", {
        description: `La posición ${spotId} ha sido ${isBlocked ? 'desbloqueada' : 'bloqueada'} correctamente.`
      })
    } catch (error) {
      toast.error('Error al cambiar estado', {
        description: "Ha ocurrido un error al cambiar el estado de la posición"
      })
    }
  }

  if (!currentTerminal) return null

  return (
    <div className="container mx-auto max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Andén de móviles</h2>
        <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
          <Button
            variant="ghost"
            className={`rounded-full px-6 py-2 ${
              selectedTerminalId === 1 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setSelectedTerminalId(1)}
          >
            T1
          </Button>
          <Button
            variant="ghost"
            className={`rounded-full px-6 py-2 ${
              selectedTerminalId === 2 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setSelectedTerminalId(2)}
          >
            T2
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {currentTerminal.spots.map((spot) => (
          <VehicleSpot
            key={spot.id}
            spot={spot}
            onBlock={() => handleToggleBlock(spot.id, spot.isBlocked)}
            onUnblock={() => handleToggleBlock(spot.id, spot.isBlocked)}
            onRemove={() => spot.vehicleId && handleRemoveVehicle(spot.id, spot.vehicleId)}
            onAdd={() => {
              setSelectedSpotId(spot.id)
              setIsModalOpen(true)
            }}
          />
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              Ingrese el ID del móvil
            </DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <NumericKeypad
              value={vehicleId}
              onChange={setVehicleId}
              maxLength={7}
            />
          </div>
          <DialogFooter className="px-4 pb-4">
            <div className="flex gap-3 w-full">
              <Button
                variant="outline"
                className="flex-1 h-12 text-lg"
                onClick={() => {
                  setIsModalOpen(false)
                  setVehicleId("")
                  setSelectedSpotId(null)
                }}
                disabled={isLoading}
              >
                Cancelar
              </Button>
              <Button 
                className="flex-1 h-12 text-lg bg-orange-500 hover:bg-orange-600"
                onClick={handleAddVehicle}
                disabled={!vehicleId || isLoading}
              >
                {isLoading ? "Agregando..." : "Agregar"}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

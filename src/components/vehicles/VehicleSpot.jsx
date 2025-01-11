import { Button } from "../ui/button"
import { Plus, Lock, Trash } from "lucide-react"

function BlockedSpot({ id, onUnblock }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 rounded-2xl p-6">
      <span className="text-gray-600 font-medium">Posición {id} - Bloqueada</span>
      <Button
        variant="destructive"
        onClick={onUnblock}
      >
        Desbloquear
      </Button>
    </div>
  )
}

function OccupiedSpot({ id, vehicleId, vehicleInfo, onBlock, onRemove }) {
  if (!vehicleInfo) return null

  return (
    <div className="flex justify-between items-start bg-orange-50/50 rounded-2xl p-6">
      <div className="space-y-1">
        <div className="font-medium">
          Posición {id} - ID Móvil: {vehicleId} - Patente: {vehicleInfo.patente}
        </div>
        <div className="text-gray-600">{vehicleInfo.model}</div>
        <div className="text-gray-600">
          {vehicleInfo.driver} - {vehicleInfo.timeConnected}
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onRemove}
          className="text-red-500 hover:text-red-600 hover:bg-red-50"
        >
          <Trash className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onBlock}
          className="text-orange-500 hover:text-orange-600 hover:bg-orange-50"
        >
          <Lock className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function EmptySpot({ id, onBlock, onAdd }) {
  return (
    <div className="flex justify-between items-center bg-white rounded-2xl p-6">
      <span className="text-gray-600 font-medium">Posición {id}</span>
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBlock}
          className="text-gray-500 hover:text-gray-600 hover:bg-gray-50"
        >
          <Lock className="h-4 w-4" />
        </Button>
        <Button
          variant="default"
          onClick={onAdd}
          className="bg-orange-500 hover:bg-orange-600"
        >
          <Plus className="h-4 w-4 mr-2" />
          Agregar Móvil
        </Button>
      </div>
    </div>
  )
}

export function VehicleSpot({ spot, onBlock, onUnblock, onRemove, onAdd }) {
  if (spot.isBlocked) {
    return <BlockedSpot id={spot.id} onUnblock={onUnblock} />
  }

  if (spot.vehicleId && spot.vehicleInfo) {
    return (
      <div className="bg-orange-50/50 rounded-3xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
            {spot.vehicleInfo.photoUrl ? (
              <img 
                src={spot.vehicleInfo.photoUrl} 
                alt={spot.vehicleInfo.driver}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300" />
            )}
          </div>
          <div className="flex-1">
            <div className="text-lg font-semibold mb-1">
              ID Móvil: {spot.vehicleId} - Patente: {spot.vehicleInfo.patente}
            </div>
            <div className="text-gray-600 mb-1">
              {spot.vehicleInfo.model} - {spot.vehicleInfo.type}
            </div>
            <div className="text-gray-600">
              {spot.vehicleInfo.driver} - {spot.vehicleInfo.timeConnected}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={onRemove}
            >
              <Trash className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-orange-500 hover:text-orange-600 hover:bg-orange-50"
              onClick={onBlock}
            >
              <Lock className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-6 flex justify-center items-center min-h-[100px]">
      <Button
        variant="default"
        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full"
        onClick={onAdd}
      >
        <Plus className="h-6 w-6 mr-2" />
        Agregar Móvil
      </Button>
    </div>
  )
}

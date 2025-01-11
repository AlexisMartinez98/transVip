import { createContext, useContext, useState } from 'react'

const VehiclesContext = createContext()

export function VehiclesProvider({ children }) {
  const [selectedTerminalId, setSelectedTerminalId] = useState(1)
  const [terminals, setTerminals] = useState({
    1: {
      id: 1,
      name: 'Terminal 1',
      spots: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        vehicleId: null,
        isBlocked: false,
        vehicleInfo: null
      }))
    },
    2: {
      id: 2,
      name: 'Terminal 2',
      spots: Array.from({ length: 10 }, (_, i) => ({
        id: i + 11,
        vehicleId: null,
        isBlocked: false,
        vehicleInfo: null
      }))
    }
  })

  const currentTerminal = terminals[selectedTerminalId]

  const addVehicle = async (spotId, vehicleId) => {
    setTerminals(prev => {
      const terminal = prev[selectedTerminalId]
      const updatedSpots = terminal.spots.map(spot => {
        if (spot.id === spotId) {
          return {
            ...spot,
            vehicleId,
            vehicleInfo: {
              patente: 'XX-XX-XX',
              model: 'Modelo Ejemplo',
              type: 'Tipo Ejemplo',
              driver: 'Conductor Ejemplo',
              timeConnected: '2h 30m',
              photoUrl: null
            }
          }
        }
        return spot
      })

      return {
        ...prev,
        [selectedTerminalId]: {
          ...terminal,
          spots: updatedSpots
        }
      }
    })
  }

  const removeVehicle = (spotId) => {
    setTerminals(prev => {
      const terminal = prev[selectedTerminalId]
      const updatedSpots = terminal.spots.map(spot => {
        if (spot.id === spotId) {
          return {
            ...spot,
            vehicleId: null,
            vehicleInfo: null
          }
        }
        return spot
      })

      return {
        ...prev,
        [selectedTerminalId]: {
          ...terminal,
          spots: updatedSpots
        }
      }
    })
  }

  const toggleSpotBlock = (spotId) => {
    setTerminals(prev => {
      const terminal = prev[selectedTerminalId]
      const updatedSpots = terminal.spots.map(spot => {
        if (spot.id === spotId) {
          return {
            ...spot,
            isBlocked: !spot.isBlocked
          }
        }
        return spot
      })

      return {
        ...prev,
        [selectedTerminalId]: {
          ...terminal,
          spots: updatedSpots
        }
      }
    })
  }

  return (
    <VehiclesContext.Provider
      value={{
        currentTerminal,
        selectedTerminalId,
        setSelectedTerminalId,
        addVehicle,
        removeVehicle,
        toggleSpotBlock
      }}
    >
      {children}
    </VehiclesContext.Provider>
  )
}

export function useVehicles() {
  const context = useContext(VehiclesContext)
  if (!context) {
    throw new Error('useVehicles debe ser usado dentro de un VehiclesProvider')
  }
  return context
}

import { VehiclesProvider } from './contexts/vehicles-context'
import { VehicleList } from './components/vehicles/VehicleList'
import { Toaster } from 'sonner'

function App() {
  return (
    <VehiclesProvider>
      <div className="min-h-screen bg-gray-50 py-8">
        <VehicleList />
      </div>
      <Toaster position="top-right" richColors />
    </VehiclesProvider>
  )
}

export default App

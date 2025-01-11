
import { useState } from 'react'
import { Menu, QrCode } from 'lucide-react'
import { Navbar } from './components/Navbar/Navbar'
import { SideMenu } from './components/layout/SideMenu'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen  dark:bg-gray-900">
      {/* Header */}
      <header className="bg-orange-600 dark:bg-gray-800 px-4 py-3 flex justify-between items-center shadow-lg sticky top-0 z-50 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-white hover:bg-orange-700/20 dark:hover:bg-gray-700/20 transition-colors duration-200 p-2 rounded-lg"
          >
            <Menu className="w-6 h-6" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-2xl font-bold text-white">
            Transvip
          </h1>
     
        </div>
        <button 
          className="text-white hover:bg-orange-700/20 dark:hover:bg-gray-700/20 transition-colors duration-200 p-2 rounded-lg"
        >
          <QrCode className="w-6 h-6" />
          <span className="sr-only">Escanear QR</span>
        </button>
      </header>

      <Navbar />
      <SideMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </div>
  )
}

export default App

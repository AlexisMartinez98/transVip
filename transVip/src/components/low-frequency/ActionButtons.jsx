import { Button } from '../ui/button'

export function ActionButtons({ onCreateRoute, onClear }) {
  return (
    <div className="flex justify-between items-center">
      <Button 
        variant="default"
        onClick={onCreateRoute}
        className="bg-black hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white"
      >
        Armar ruta
      </Button>
      <Button 
        variant="outline"
        onClick={onClear}
        className="text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-700"
      >
        Limpiar
      </Button>
    </div>
  )
}

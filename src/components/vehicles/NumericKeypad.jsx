import { Button } from "../ui/button"

export function NumericKeypad({ value, onChange, maxLength = 7 }) {
  const handleNumberClick = (num) => {
    if (value.length < maxLength) {
      onChange(value + num)
    }
  }

  const handleDelete = () => {
    onChange(value.slice(0, -1))
  }

  const handleClear = () => {
    onChange("")
  }

  return (
    <div className="space-y-6">
      <div className="w-full p-6 text-center text-4xl font-mono bg-gray-100 rounded-lg min-h-[80px] flex items-center justify-center">
        {value || "0"}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <Button
            key={num}
            variant="outline"
            className="h-16 text-2xl font-medium hover:bg-gray-100"
            onClick={() => handleNumberClick(num.toString())}
          >
            {num}
          </Button>
        ))}
        <Button
          variant="outline"
          className="h-16 text-2xl font-medium hover:bg-red-50 hover:text-red-600"
          onClick={handleClear}
        >
          C
        </Button>
        <Button
          variant="outline"
          className="h-16 text-2xl font-medium hover:bg-gray-100"
          onClick={() => handleNumberClick("0")}
        >
          0
        </Button>
        <Button
          variant="outline"
          className="h-16 text-2xl font-medium hover:bg-gray-100"
          onClick={handleDelete}
        >
          ←
        </Button>
      </div>
    </div>
  )
}

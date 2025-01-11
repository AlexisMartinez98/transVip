import { cn } from "../../lib/utils"

export function Progress({ value = 0, className, indicatorClassName }) {
  return (
    <div className={cn("relative h-2 w-full overflow-hidden rounded-full", className)}>
      <div
        className={cn("h-full w-full flex-1 transition-all", indicatorClassName)}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
}

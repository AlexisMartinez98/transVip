import { motion, AnimatePresence } from "framer-motion"
import { LogOut, Moon, Sun, ArrowLeftRight } from "lucide-react"
import { useTheme } from "../../contexts/ThemeContext"
import { useTerminal } from "../../contexts/TerminalContext"
import { Button } from "../ui/button"

export function SideMenu({ isOpen, onClose }) {
  const { theme, setTheme } = useTheme()
  const { currentTerminal, switchTerminal } = useTerminal()

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    onClose()
  }

  const handleTerminalSwitch = () => {
    switchTerminal()
    onClose()
  }

  const nextTerminal = currentTerminal === "T1" ? "T2" : "T1"

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed left-0 top-0 bottom-0 w-80 bg-background border-r border-border/40 shadow-xl z-50"
            role="dialog"
            aria-label="Menú principal"
          >
            <div className="flex flex-col h-full">
              <div className="p-4">
              <h2 className="text-2xl font-bold">Menú</h2>
              </div>

              <div className="flex-1 px-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 mb-2"
                  onClick={() => onClose()}
                  aria-label="Desconectar de la aplicación"
                >
                  <LogOut className="h-5 w-5" aria-hidden="true" />
                  Desconectar
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 mb-2"
                  onClick={handleTerminalSwitch}
                  aria-label={`Cambiar a Terminal ${nextTerminal}. Actualmente en Terminal ${currentTerminal}`}
                >
                  <ArrowLeftRight className="h-5 w-5" aria-hidden="true" />
                  Cambiar a {nextTerminal}
                </Button>

                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                  onClick={handleThemeChange}
                  aria-label="Cambiar tema"
                >
                  <Sun className="h-5 w-5 dark:hidden" aria-hidden="true" />
                  <Moon className="h-5 w-5 hidden dark:block" aria-hidden="true" />
                  <span className="dark:hidden">Modo Oscuro</span>
                  <span className="hidden dark:block">Modo Claro</span>
                </Button>
              </div>

              <div className="p-4 border-t border-border/40">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Terminal actual: {currentTerminal}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NavigationProvider } from './contexts/NavigationContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { TerminalProvider } from './contexts/TerminalContext'

createRoot(document.getElementById('root')).render(
  <NavigationProvider>
    <ThemeProvider>
      <TerminalProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </TerminalProvider>
    </ThemeProvider>
  </NavigationProvider>,
)

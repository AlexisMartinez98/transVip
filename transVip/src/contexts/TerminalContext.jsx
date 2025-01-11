import { createContext, useContext, useState } from 'react';

const TerminalContext = createContext();

export function TerminalProvider({ children }) {
  const [currentTerminal, setCurrentTerminal] = useState('T1');

  const switchTerminal = () => {
    setCurrentTerminal(prev => prev === 'T1' ? 'T2' : 'T1');
  };

  return (
    <TerminalContext.Provider value={{ currentTerminal, switchTerminal }}>
      {children}
    </TerminalContext.Provider>
  );
}

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (context === undefined) {
    throw new Error('useTerminal must be used within a TerminalProvider');
  }
  return context;
}

import { useState, useCallback } from 'react';

// Mock data para simular la API
const mockPassengers = {
  T1: [
    {
      name: "Juan Pérez",
      qrCode: "T1-001",
      terminal: "T1",
      comuna: "Las Condes",
      destination: "Aeropuerto",
      waitingTime: 15
    },
    {
      name: "María González",
      qrCode: "T1-002",
      terminal: "T1",
      comuna: "Providencia",
      destination: "Aeropuerto",
      waitingTime: 8
    }
  ],
  T2: [
    {
      name: "Carlos Rodríguez",
      qrCode: "T2-001",
      terminal: "T2",
      comuna: "Vitacura",
      destination: "Terminal 1",
      waitingTime: 20
    }
  ]
};

export function usePassengers() {
  const [shared, setShared] = useState({ T1: [], T2: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [nextOptimizationTime, setNextOptimizationTime] = useState(5);

  const loadPassengers = useCallback(async (terminal) => {
    setIsLoading(true);
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShared(prev => ({
        ...prev,
        [terminal]: mockPassengers[terminal]
      }));
      setError(null);
    } catch (err) {
      setError('Error al cargar los pasajeros');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const optimizeSharedPassengers = useCallback(async (terminal) => {
    setIsLoading(true);
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Simular optimización
      setNextOptimizationTime(15);
      setError(null);
    } catch (err) {
      setError('Error al optimizar los pasajeros');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    shared,
    isLoading,
    error,
    nextOptimizationTime,
    loadPassengers,
    optimizeSharedPassengers
  };
}

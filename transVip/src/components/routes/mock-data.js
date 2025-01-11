export const mockRoutes = [
  // Terminal 1 routes
  {
    id: 1,
    routeNumber: 1,
    origin: 'Las Condes',
    destination: 'Providencia',
    vehicleId: '1234',
    driverName: 'Juan Pérez',
    elapsedTime: 5,
    passengers: 5,
    terminal: 'T1',
    passengerList: [
      {
        name: 'Ana López',
        reservation: '9398764',
        destination: 'Providencia Centro',
        position: 1,
        dropoffTime: '10:15'
      },
      {
        name: 'Carlos Díaz',
        reservation: '9126996',
        destination: 'Metro Los Leones',
        position: 2,
        dropoffTime: '10:30'
      },
      {
        name: 'María Soto',
        reservation: '9234567',
        destination: 'Plaza Italia',
        position: 3,
        dropoffTime: '10:45'
      },
      {
        name: 'Pedro Rojas',
        reservation: '9345678',
        destination: 'Manuel Montt',
        position: 4,
        dropoffTime: '11:00'
      },
      {
        name: 'Laura Vega',
        reservation: '9456789',
        destination: 'Salvador',
        position: 5,
        dropoffTime: '11:15'
      }
    ]
  },
  {
    id: 2,
    routeNumber: 2,
    origin: 'Santiago Centro',
    destination: 'Ñuñoa',
    vehicleId: '5678',
    driverName: 'María González',
    elapsedTime: 12,
    passengers: 4,
    terminal: 'T1',
    passengerList: [
      {
        name: 'Jorge Muñoz',
        reservation: '9567890',
        destination: 'Plaza Ñuñoa',
        position: 1,
        dropoffTime: '11:30'
      },
      {
        name: 'Carmen Pinto',
        reservation: '9678901',
        destination: 'Irarrázaval',
        position: 2,
        dropoffTime: '11:45'
      },
      {
        name: 'Roberto Silva',
        reservation: '9789012',
        destination: 'Chile España',
        position: 3,
        dropoffTime: '12:00'
      },
      {
        name: 'Isabel Torres',
        reservation: '9890123',
        destination: 'Grecia',
        position: 4,
        dropoffTime: '12:15'
      }
    ]
  },
  // Terminal 2 routes
  {
    id: 3,
    routeNumber: 3,
    origin: 'Pudahuel',
    destination: 'Maipú',
    vehicleId: '3456',
    driverName: 'Ana Silva',
    elapsedTime: 15,
    passengers: 3,
    terminal: 'T2',
    passengerList: [
      {
        name: 'Ricardo Pérez',
        reservation: '9567890',
        destination: 'Plaza Maipú',
        position: 1,
        dropoffTime: '14:00'
      },
      {
        name: 'Sandra Gómez',
        reservation: '9678901',
        destination: 'Pajaritos',
        position: 2,
        dropoffTime: '14:15'
      },
      {
        name: 'Cristián López',
        reservation: '9789012',
        destination: 'Del Sol',
        position: 3,
        dropoffTime: '14:30'
      }
    ]
  },
  {
    id: 4,
    routeNumber: 4,
    origin: 'Quilicura',
    destination: 'Renca',
    vehicleId: '7890',
    driverName: 'Pedro Muñoz',
    elapsedTime: 25,
    passengers: 7,
    terminal: 'T2',
    passengerList: [
      {
        name: 'Patricia Rojas',
        reservation: '9890123',
        destination: 'Plaza Renca',
        position: 1,
        dropoffTime: '15:00'
      },
      {
        name: 'Manuel Silva',
        reservation: '9901234',
        destination: 'Domingo Santa María',
        position: 2,
        dropoffTime: '15:15'
      },
      {
        name: 'Carolina Vega',
        reservation: '9012345',
        destination: 'Condell',
        position: 3,
        dropoffTime: '15:30'
      }
    ]
  }
];

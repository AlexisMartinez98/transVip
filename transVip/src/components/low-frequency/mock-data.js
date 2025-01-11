export const mockData = {
  lowFrequency: {
    cordillera: {
      zoneName: 'Cordillera',
      departureTime: 6,
      passengers: [
        {
          id: '1',
          name: 'Andrés Silva',
          location: 'Pirque',
          terminal: 'T2',
          reservation: '9744446',
          waitingTime: 19
        }
      ]
    },
    talagante: {
      zoneName: 'Talagante',
      departureTime: 5,
      passengers: [
        {
          id: '2',
          name: 'Ana Martínez',
          location: 'Peñaflor',
          terminal: 'T1',
          reservation: '9611819',
          waitingTime: 18
        },
        {
          id: '3',
          name: 'Felipe Rojas',
          location: 'Talagante',
          terminal: 'T2',
          reservation: '9469408',
          waitingTime: 10
        }
      ]
    },
    melipilla: {
      zoneName: 'Melipilla',
      departureTime: 13,
      passengers: [
        {
          id: '4',
          name: 'Carmen Soto',
          location: 'Melipilla Centro',
          terminal: 'T1',
          reservation: '9524111',
          waitingTime: 14
        }
      ]
    }
  },
  exclusive: {
    passengers: [
      {
        id: '5',
        name: 'Diego Morales',
        location: 'Maipú',
        terminal: 'T2',
        reservation: '9524111',
        waitingTime: 14
      },
      {
        id: '6',
        name: 'Andrés Silva',
        location: 'Puente Alto',
        terminal: 'T2',
        reservation: '9054831',
        waitingTime: 13
      },
      {
        id: '7',
        name: 'Valentina Castro',
        location: 'La Florida',
        terminal: 'T1',
        reservation: '9811809',
        waitingTime: 11
      },
      {
        id: '8',
        name: 'Camila Vargas',
        location: 'San Miguel',
        terminal: 'T1',
        reservation: '9947226',
        waitingTime: 9
      }
    ]
  }
}

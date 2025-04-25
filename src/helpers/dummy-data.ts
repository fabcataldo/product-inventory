export const operationTypes = [
  { id: 1, name: 'Compra' },
  { id: 2, name: 'Venta' },
  { id: 3, name: 'Otro' },
];

export const categories = [
  {
    id: 1,
    name: 'Motor',
    subcategories: [
      { id: 1, name: 'Bujías' },
      { id: 2, name: 'Filtros' },
    ],
  },
  {
    id: 2,
    name: 'Suspensión',
    subcategories: [
      { id: 3, name: 'Amortiguadores' },
      { id: 4, name: 'Muelles' },
    ],
  },
  {
    id: 3,
    name: 'Frenos',
    subcategories: [
      { id: 5, name: 'Pastillas de freno' },
      { id: 6, name: 'Discos de freno' },
    ],
  },
  {
    id: 4,
    name: 'Eléctrico',
    subcategories: [
      { id: 7, name: 'Baterías' },
      { id: 8, name: 'Alternadores' },
    ],
  },
];

export const products = [
  {
    id: 1,
    name: 'Stay Amortiguador',
    stock: 69,
    price: 998.04,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 31936,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Wear list suffer responsibility somebody provide.',
        timestamp: '2024-01-04T13:02:31',
      },
      {
        id: 31001,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wright, Kim and Walton',
        timestamp: '2025-01-22T01:57:56',
      },
      {
        id: 9811,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christina Ruiz',
        timestamp: '2024-03-26T05:14:24',
      },
      {
        id: 62717,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mark Soto',
        timestamp: '2024-05-24T00:00:15',
      },
    ],
  },
  {
    id: 2,
    name: 'Action Alternador',
    stock: 12,
    price: 231.68,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 13095,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gaines-Gonzalez',
        timestamp: '2025-02-02T23:35:42',
      },
      {
        id: 40509,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Angelica Heath',
        timestamp: '2024-04-24T10:31:34',
      },
      {
        id: 46171,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dorothy Marshall',
        timestamp: '2024-08-09T23:44:06',
      },
      {
        id: 59568,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jimmy Patterson',
        timestamp: '2025-03-01T08:56:52',
      },
    ],
  },
  {
    id: 3,
    name: 'Tax Alternador',
    stock: 26,
    price: 727.19,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 12868,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Strategy position discuss six travel.',
        timestamp: '2024-09-16T14:57:28',
      },
      {
        id: 3845,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Peterson-Flowers',
        timestamp: '2024-07-12T15:31:33',
      },
      {
        id: 71666,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Explain man month month party tree series.',
        timestamp: '2025-03-30T03:09:58',
      },
      {
        id: 68342,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Very even whole big.',
        timestamp: '2023-09-18T11:59:17',
      },
    ],
  },
  {
    id: 4,
    name: 'Side Amortiguador',
    stock: 66,
    price: 235.5,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 11055,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Policy ability three left position.',
        timestamp: '2025-02-20T13:41:24',
      },
    ],
  },
  {
    id: 5,
    name: 'Energy Amortiguador',
    stock: 63,
    price: 898.33,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 95358,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jacobs LLC',
        timestamp: '2023-10-12T18:17:43',
      },
      {
        id: 87039,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mark Jefferson',
        timestamp: '2023-11-29T04:41:41',
      },
      {
        id: 80329,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Benjamin Solomon',
        timestamp: '2025-03-24T11:22:27',
      },
      {
        id: 50969,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Riley',
        timestamp: '2024-10-14T00:11:45',
      },
      {
        id: 767,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Almost city information focus standard lose series.',
        timestamp: '2023-07-16T08:15:39',
      },
    ],
  },
  {
    id: 6,
    name: 'Computer Pastilla',
    stock: 70,
    price: 606.22,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 20143,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sherry Weaver',
        timestamp: '2023-09-14T19:43:58',
      },
      {
        id: 61704,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Thompson',
        timestamp: '2024-12-10T10:36:32',
      },
    ],
  },
  {
    id: 7,
    name: 'Then Alternador',
    stock: 7,
    price: 419.65,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 18958,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Will push benefit close hospital.',
        timestamp: '2024-06-15T16:21:25',
      },
      {
        id: 77758,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Population middle and everything.',
        timestamp: '2024-04-02T17:02:10',
      },
    ],
  },
  {
    id: 8,
    name: 'Image Alternador',
    stock: 19,
    price: 546.06,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 20245,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Harrell, Griffin and Roberson',
        timestamp: '2023-08-02T04:37:27',
      },
    ],
  },
  {
    id: 9,
    name: 'Student Amortiguador',
    stock: 74,
    price: 555.27,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 87184,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Summers-Pacheco',
        timestamp: '2024-03-21T08:28:09',
      },
    ],
  },
  {
    id: 10,
    name: 'He Bujía',
    stock: 24,
    price: 224.86,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 47114,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Cover suggest three second late throw management fine.',
        timestamp: '2023-11-02T23:23:01',
      },
      {
        id: 85034,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mcclain LLC',
        timestamp: '2023-06-13T06:41:17',
      },
      {
        id: 23715,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perez LLC',
        timestamp: '2023-06-09T03:49:07',
      },
      {
        id: 40767,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Karen May',
        timestamp: '2025-01-10T03:29:30',
      },
    ],
  },
  {
    id: 11,
    name: 'Structure Bujía',
    stock: 7,
    price: 508.78,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 9163,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wyatt Inc',
        timestamp: '2024-12-09T17:32:52',
      },
      {
        id: 45217,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alexander Soto',
        timestamp: '2023-06-11T03:36:24',
      },
      {
        id: 99530,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kaitlin Martin',
        timestamp: '2023-08-27T03:04:24',
      },
      {
        id: 76990,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Larry Morgan',
        timestamp: '2023-12-30T22:09:12',
      },
    ],
  },
  {
    id: 12,
    name: 'Mr Filtro',
    stock: 74,
    price: 950.9,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 54248,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Chapman, Rodgers and Lin',
        timestamp: '2023-09-12T23:34:10',
      },
    ],
  },
  {
    id: 13,
    name: 'Resource Filtro',
    stock: 31,
    price: 570.1,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 70533,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Curry LLC',
        timestamp: '2023-12-11T06:04:07',
      },
      {
        id: 82297,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Home last medical bit group stand.',
        timestamp: '2025-01-27T02:59:46',
      },
      {
        id: 70190,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rhodes, Miller and Rangel',
        timestamp: '2024-06-06T03:06:18',
      },
      {
        id: 34919,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Adams Group',
        timestamp: '2023-08-08T10:23:40',
      },
      {
        id: 78536,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hill-Baldwin',
        timestamp: '2023-07-05T16:25:53',
      },
    ],
  },
  {
    id: 14,
    name: 'From Pastilla',
    stock: 68,
    price: 973.11,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 91765,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Yard board investment public likely human measure.',
        timestamp: '2024-09-12T13:09:30',
      },
      {
        id: 56284,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Edwards Inc',
        timestamp: '2024-08-23T17:16:26',
      },
      {
        id: 50122,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lynch, Young and Brown',
        timestamp: '2023-08-28T23:27:27',
      },
      {
        id: 60821,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hines-Lopez',
        timestamp: '2024-10-26T19:13:16',
      },
    ],
  },
  {
    id: 15,
    name: 'Particular Bujía',
    stock: 85,
    price: 649.18,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 57001,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Name television strong.',
        timestamp: '2024-07-20T23:43:44',
      },
      {
        id: 13462,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: During recent treatment speech garden issue.',
        timestamp: '2023-09-12T20:58:32',
      },
      {
        id: 52374,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Soldier art travel local whom talk.',
        timestamp: '2024-04-25T06:13:36',
      },
    ],
  },
  {
    id: 16,
    name: 'Occur Pastilla',
    stock: 28,
    price: 270.31,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 7517,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Derrick Foster',
        timestamp: '2025-04-04T00:54:55',
      },
      {
        id: 44226,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mark Nelson',
        timestamp: '2024-10-23T08:00:31',
      },
    ],
  },
  {
    id: 17,
    name: 'Evening Pastilla',
    stock: 34,
    price: 505.01,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 31692,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Sing learn could front may.',
        timestamp: '2024-09-18T14:17:26',
      },
      {
        id: 95840,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Community morning Mrs.',
        timestamp: '2023-06-14T21:34:18',
      },
      {
        id: 25058,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Anthony, Bennett and Gonzalez',
        timestamp: '2025-02-14T00:40:02',
      },
    ],
  },
  {
    id: 18,
    name: 'Have Amortiguador',
    stock: 27,
    price: 868.37,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 32791,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kevin Wyatt',
        timestamp: '2024-09-21T21:51:26',
      },
    ],
  },
  {
    id: 19,
    name: 'Image Filtro',
    stock: 98,
    price: 589.51,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 72301,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Man lawyer language set.',
        timestamp: '2023-04-27T14:31:33',
      },
      {
        id: 7075,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Vaughn, Norton and Weaver',
        timestamp: '2024-02-29T00:35:41',
      },
    ],
  },
  {
    id: 20,
    name: 'Successful Filtro',
    stock: 57,
    price: 331.33,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 37297,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davis-Hamilton',
        timestamp: '2024-04-13T02:15:47',
      },
      {
        id: 38817,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Property day alone sound education peace recognize.',
        timestamp: '2024-10-09T09:00:04',
      },
      {
        id: 65208,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Robinson-Gray',
        timestamp: '2025-03-26T00:05:12',
      },
      {
        id: 42682,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jarvis-Brewer',
        timestamp: '2024-01-10T00:58:37',
      },
      {
        id: 3072,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Allison Rose',
        timestamp: '2024-05-13T20:06:05',
      },
    ],
  },
  {
    id: 21,
    name: 'Run Pastilla',
    stock: 74,
    price: 850.59,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 47406,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Chelsey Conner',
        timestamp: '2023-11-15T02:27:04',
      },
      {
        id: 68503,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith, Barrera and Goodwin',
        timestamp: '2023-09-30T17:53:08',
      },
      {
        id: 59756,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Realize fast season paper into.',
        timestamp: '2025-01-23T05:20:48',
      },
    ],
  },
  {
    id: 22,
    name: 'Vote Amortiguador',
    stock: 56,
    price: 170.05,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 49373,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Heidi Perez',
        timestamp: '2023-09-06T15:17:54',
      },
      {
        id: 87750,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Just building act whole wait.',
        timestamp: '2024-10-12T00:29:16',
      },
      {
        id: 90500,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Too thought run new professor later.',
        timestamp: '2023-05-13T14:19:01',
      },
      {
        id: 60360,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Candace Holt',
        timestamp: '2024-01-17T09:52:54',
      },
    ],
  },
  {
    id: 23,
    name: 'Either Amortiguador',
    stock: 3,
    price: 143.51,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 53811,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cortez, Diaz and Dalton',
        timestamp: '2025-01-16T09:12:17',
      },
      {
        id: 98993,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dawson, Jones and Keller',
        timestamp: '2023-12-13T23:39:57',
      },
      {
        id: 27855,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Reflect deal five upon.',
        timestamp: '2023-05-18T20:57:04',
      },
    ],
  },
  {
    id: 24,
    name: 'Term Pastilla',
    stock: 28,
    price: 784.3,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 89998,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Crystal Taylor',
        timestamp: '2024-05-15T20:13:01',
      },
      {
        id: 33431,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bryant Ltd',
        timestamp: '2023-12-31T13:46:10',
      },
      {
        id: 91517,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Boyd-Reid',
        timestamp: '2023-10-27T10:49:04',
      },
      {
        id: 49337,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jonathan Nelson',
        timestamp: '2023-12-25T14:42:06',
      },
      {
        id: 67842,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Seek effort agree discussion use big ball.',
        timestamp: '2025-01-01T11:15:09',
      },
    ],
  },
  {
    id: 25,
    name: 'Article Alternador',
    stock: 99,
    price: 536.09,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 13002,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente April Ward',
        timestamp: '2023-10-28T09:05:22',
      },
    ],
  },
  {
    id: 26,
    name: 'Edge Filtro',
    stock: 90,
    price: 917.32,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 32564,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Byrd-Taylor',
        timestamp: '2023-05-09T10:48:29',
      },
      {
        id: 43658,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Safe east over receive father nation.',
        timestamp: '2023-09-16T06:23:03',
      },
      {
        id: 18206,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Clinton Young Jr.',
        timestamp: '2023-06-02T05:39:56',
      },
      {
        id: 86043,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Couple physical season show back.',
        timestamp: '2023-11-16T08:38:27',
      },
    ],
  },
  {
    id: 27,
    name: 'Growth Alternador',
    stock: 13,
    price: 706.08,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 17342,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tracy Clark',
        timestamp: '2023-08-19T06:34:31',
      },
    ],
  },
  {
    id: 28,
    name: 'Value Amortiguador',
    stock: 33,
    price: 700.63,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 14940,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Here value either near treat hit.',
        timestamp: '2024-03-04T04:03:09',
      },
    ],
  },
  {
    id: 29,
    name: 'Majority Bujía',
    stock: 23,
    price: 320.57,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 2702,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martin LLC',
        timestamp: '2024-02-03T05:12:32',
      },
      {
        id: 23753,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Coleman, Golden and Bell',
        timestamp: '2025-01-18T08:08:40',
      },
      {
        id: 19163,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Burns, Lynch and Irwin',
        timestamp: '2023-06-02T05:20:49',
      },
      {
        id: 63363,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Sign health tough whose.',
        timestamp: '2024-10-26T20:06:41',
      },
      {
        id: 2723,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Affect early pay.',
        timestamp: '2023-09-08T11:23:00',
      },
    ],
  },
  {
    id: 30,
    name: 'Skin Filtro',
    stock: 7,
    price: 549.39,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 12870,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jackson LLC',
        timestamp: '2024-08-25T16:03:08',
      },
    ],
  },
  {
    id: 31,
    name: 'Goal Pastilla',
    stock: 20,
    price: 720.76,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 68285,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Stewart-Solomon',
        timestamp: '2024-04-29T09:14:50',
      },
      {
        id: 67340,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gross and Sons',
        timestamp: '2024-04-08T23:46:24',
      },
      {
        id: 56846,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jesse Montgomery',
        timestamp: '2023-08-31T07:43:38',
      },
      {
        id: 73730,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Break could season run one nothing book.',
        timestamp: '2023-09-21T23:39:00',
      },
      {
        id: 94688,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrea Thompson',
        timestamp: '2024-11-30T03:59:16',
      },
    ],
  },
  {
    id: 32,
    name: 'Up Pastilla',
    stock: 5,
    price: 431.28,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 93586,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Krueger Group',
        timestamp: '2024-03-30T06:27:50',
      },
      {
        id: 89013,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: It manage charge dark thousand nice.',
        timestamp: '2023-04-27T04:35:08',
      },
    ],
  },
  {
    id: 33,
    name: 'When Filtro',
    stock: 3,
    price: 409.8,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 87010,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Rodney Levine',
        timestamp: '2023-09-29T06:35:21',
      },
      {
        id: 84099,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Taylor',
        timestamp: '2025-03-05T08:26:48',
      },
    ],
  },
  {
    id: 34,
    name: 'Describe Filtro',
    stock: 73,
    price: 51.81,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 24755,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Karen Banks',
        timestamp: '2024-09-02T23:17:23',
      },
      {
        id: 69369,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Evans PLC',
        timestamp: '2024-10-03T11:58:45',
      },
      {
        id: 80620,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Isaac Wagner',
        timestamp: '2023-10-24T10:36:51',
      },
    ],
  },
  {
    id: 35,
    name: 'Mr Amortiguador',
    stock: 61,
    price: 333.33,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 34854,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Young product hold who.',
        timestamp: '2024-12-07T05:53:32',
      },
      {
        id: 39036,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Swanson-Nelson',
        timestamp: '2024-11-15T12:05:41',
      },
      {
        id: 77916,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rojas-Sullivan',
        timestamp: '2024-10-10T10:43:44',
      },
      {
        id: 46042,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lloyd, Whitney and Rhodes',
        timestamp: '2025-03-11T08:17:25',
      },
      {
        id: 93080,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jennifer Mcdonald',
        timestamp: '2024-09-21T19:34:48',
      },
    ],
  },
  {
    id: 36,
    name: 'Possible Amortiguador',
    stock: 66,
    price: 386.91,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 26021,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Chavez-Morales',
        timestamp: '2023-08-24T19:05:26',
      },
      {
        id: 48249,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Chelsea Smith',
        timestamp: '2023-04-28T01:26:56',
      },
    ],
  },
  {
    id: 37,
    name: 'From Filtro',
    stock: 69,
    price: 775.93,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 8169,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Necessary watch town vote.',
        timestamp: '2024-01-30T21:10:05',
      },
    ],
  },
  {
    id: 38,
    name: 'Floor Alternador',
    stock: 14,
    price: 404.75,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 28676,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: So job wear purpose pay market.',
        timestamp: '2024-12-17T20:06:35',
      },
    ],
  },
  {
    id: 39,
    name: 'Final Amortiguador',
    stock: 39,
    price: 450.26,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 67794,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Public quality close.',
        timestamp: '2023-07-18T10:22:26',
      },
      {
        id: 24394,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gutierrez LLC',
        timestamp: '2023-11-12T03:51:01',
      },
    ],
  },
  {
    id: 40,
    name: 'Model Pastilla',
    stock: 11,
    price: 681.51,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 5294,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown and Sons',
        timestamp: '2024-05-05T11:23:51',
      },
      {
        id: 87829,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Peggy Savage',
        timestamp: '2023-10-02T16:25:16',
      },
      {
        id: 25500,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Johnson',
        timestamp: '2023-04-26T13:39:39',
      },
    ],
  },
  {
    id: 41,
    name: 'Feel Bujía',
    stock: 79,
    price: 275.69,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 28892,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wang, Richmond and Taylor',
        timestamp: '2025-01-06T08:58:01',
      },
      {
        id: 6111,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Anderson PLC',
        timestamp: '2024-05-05T22:11:42',
      },
      {
        id: 44568,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Erica Mclaughlin',
        timestamp: '2023-11-06T04:54:11',
      },
      {
        id: 17794,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Russell',
        timestamp: '2025-01-09T20:58:56',
      },
    ],
  },
  {
    id: 42,
    name: 'Their Pastilla',
    stock: 47,
    price: 486.06,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 29457,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kimberly Diaz',
        timestamp: '2025-02-07T16:09:33',
      },
      {
        id: 83078,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Third never threat be picture wife blood agree.',
        timestamp: '2023-06-10T13:52:29',
      },
    ],
  },
  {
    id: 43,
    name: 'Hear Bujía',
    stock: 37,
    price: 674.25,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 44765,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Arthur Pope',
        timestamp: '2023-09-29T02:23:24',
      },
      {
        id: 95264,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Evans, Hayden and Jackson',
        timestamp: '2023-05-07T18:08:47',
      },
      {
        id: 49711,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Public resource protect choose fly media.',
        timestamp: '2024-02-01T07:54:22',
      },
    ],
  },
  {
    id: 44,
    name: 'Place Alternador',
    stock: 12,
    price: 392.68,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 63274,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Barnes Group',
        timestamp: '2023-05-21T18:22:18',
      },
    ],
  },
  {
    id: 45,
    name: 'Type Amortiguador',
    stock: 14,
    price: 433.12,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 3032,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lauren Lee',
        timestamp: '2025-02-15T12:20:51',
      },
    ],
  },
  {
    id: 46,
    name: 'Involve Pastilla',
    stock: 6,
    price: 327.57,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 88392,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Heather Smith',
        timestamp: '2025-01-10T17:30:01',
      },
      {
        id: 29078,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Anderson LLC',
        timestamp: '2024-09-24T19:32:53',
      },
      {
        id: 20540,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Lee',
        timestamp: '2023-10-10T08:08:13',
      },
    ],
  },
  {
    id: 47,
    name: 'Human Pastilla',
    stock: 12,
    price: 641.78,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 25452,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Audrey Henry',
        timestamp: '2023-11-13T02:09:54',
      },
      {
        id: 69664,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams Ltd',
        timestamp: '2024-08-02T03:01:02',
      },
    ],
  },
  {
    id: 48,
    name: 'Record Amortiguador',
    stock: 42,
    price: 480.45,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 25805,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Chen Group',
        timestamp: '2024-05-14T05:58:34',
      },
      {
        id: 24365,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Word garden rule dog.',
        timestamp: '2024-04-12T07:02:10',
      },
      {
        id: 16437,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Hunter',
        timestamp: '2024-09-18T16:06:42',
      },
      {
        id: 83929,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Parent sort American myself enter.',
        timestamp: '2024-04-10T21:52:29',
      },
      {
        id: 96267,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Join open with market everyone modern single.',
        timestamp: '2023-05-27T09:33:35',
      },
    ],
  },
  {
    id: 49,
    name: 'Type Amortiguador',
    stock: 38,
    price: 757.35,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 24437,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lori Maddox',
        timestamp: '2023-09-03T06:26:46',
      },
      {
        id: 28775,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Me should character ahead difference.',
        timestamp: '2024-11-03T19:07:59',
      },
      {
        id: 56977,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Herrera Inc',
        timestamp: '2025-02-06T19:18:23',
      },
      {
        id: 20613,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Force such in various.',
        timestamp: '2025-03-16T03:15:03',
      },
      {
        id: 86774,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Prove look after center Democrat money.',
        timestamp: '2025-04-17T08:42:57',
      },
    ],
  },
  {
    id: 50,
    name: 'Discussion Pastilla',
    stock: 29,
    price: 238.8,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 56724,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tyler Cochran',
        timestamp: '2024-10-01T09:21:26',
      },
      {
        id: 80535,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Student foot production forward discussion person consumer.',
        timestamp: '2023-11-22T11:40:33',
      },
    ],
  },
  {
    id: 51,
    name: 'Use Amortiguador',
    stock: 56,
    price: 650.1,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 91543,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Espinoza LLC',
        timestamp: '2023-05-01T11:09:42',
      },
      {
        id: 42044,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones Group',
        timestamp: '2024-12-01T01:40:41',
      },
      {
        id: 67805,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Combs Ltd',
        timestamp: '2024-01-11T10:16:06',
      },
      {
        id: 87158,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams, Bush and Trujillo',
        timestamp: '2024-04-07T04:11:09',
      },
    ],
  },
  {
    id: 52,
    name: 'Art Filtro',
    stock: 86,
    price: 830.58,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 48349,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Scott Group',
        timestamp: '2024-10-09T22:45:36',
      },
    ],
  },
  {
    id: 53,
    name: 'Seat Pastilla',
    stock: 95,
    price: 294.44,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 54960,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Turn meeting second information more possible.',
        timestamp: '2024-06-25T00:32:13',
      },
      {
        id: 55726,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Hannah Anderson',
        timestamp: '2024-07-11T13:21:38',
      },
    ],
  },
  {
    id: 54,
    name: 'Particularly Filtro',
    stock: 66,
    price: 649.22,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 73258,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Decide dream glass future thing fish international.',
        timestamp: '2024-06-28T09:42:50',
      },
    ],
  },
  {
    id: 55,
    name: 'Smile Filtro',
    stock: 1,
    price: 120.63,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 29789,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martinez-Williams',
        timestamp: '2024-06-11T13:19:29',
      },
      {
        id: 7455,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Arnold',
        timestamp: '2023-10-15T21:37:01',
      },
    ],
  },
  {
    id: 56,
    name: 'Say Bujía',
    stock: 26,
    price: 506.06,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 20230,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Different social say strategy.',
        timestamp: '2023-09-16T22:28:35',
      },
      {
        id: 43527,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Pretty security article time design.',
        timestamp: '2025-02-04T04:01:33',
      },
      {
        id: 21201,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Grant PLC',
        timestamp: '2023-11-14T21:47:44',
      },
      {
        id: 46887,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Angela Smith',
        timestamp: '2023-05-09T13:43:48',
      },
    ],
  },
  {
    id: 57,
    name: 'Also Filtro',
    stock: 29,
    price: 53.39,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 16873,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davis-Garcia',
        timestamp: '2024-02-21T06:47:27',
      },
    ],
  },
  {
    id: 58,
    name: 'Others Amortiguador',
    stock: 29,
    price: 362.03,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 78477,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Best fish bad central during.',
        timestamp: '2024-04-14T20:32:38',
      },
    ],
  },
  {
    id: 59,
    name: 'Fact Amortiguador',
    stock: 52,
    price: 203.45,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 6880,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davis PLC',
        timestamp: '2023-11-11T21:55:15',
      },
      {
        id: 6177,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Resource could fall theory professor senior.',
        timestamp: '2024-08-04T19:40:09',
      },
    ],
  },
  {
    id: 60,
    name: 'Nice Pastilla',
    stock: 90,
    price: 942.17,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 88863,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alexander Stokes',
        timestamp: '2024-06-18T03:53:21',
      },
    ],
  },
  {
    id: 61,
    name: 'Main Alternador',
    stock: 100,
    price: 86.46,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 71118,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Taylor Simpson',
        timestamp: '2023-11-23T14:28:48',
      },
      {
        id: 95429,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: City water former decade cell watch tree.',
        timestamp: '2024-10-24T03:19:44',
      },
      {
        id: 64257,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Painting participant key.',
        timestamp: '2024-09-11T17:15:19',
      },
      {
        id: 129,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rogers LLC',
        timestamp: '2024-03-24T03:54:02',
      },
    ],
  },
  {
    id: 62,
    name: 'During Amortiguador',
    stock: 8,
    price: 147.2,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 5990,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Each anything bar whose experience bit.',
        timestamp: '2023-08-25T14:16:29',
      },
      {
        id: 80915,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brooks, Parsons and Mendoza',
        timestamp: '2025-01-25T08:45:12',
      },
    ],
  },
  {
    id: 63,
    name: 'But Filtro',
    stock: 0,
    price: 680.41,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 17659,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Bill health maybe truth.',
        timestamp: '2025-01-18T09:04:17',
      },
      {
        id: 39059,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Purpose how century record.',
        timestamp: '2023-12-25T04:20:37',
      },
      {
        id: 62612,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lindsey Fernandez',
        timestamp: '2023-12-21T00:06:46',
      },
    ],
  },
  {
    id: 64,
    name: 'Eight Alternador',
    stock: 13,
    price: 382.31,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 85570,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nicole Hanna',
        timestamp: '2025-03-19T05:42:11',
      },
      {
        id: 11863,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brittany Daniels',
        timestamp: '2025-02-17T14:41:37',
      },
    ],
  },
  {
    id: 65,
    name: 'Image Filtro',
    stock: 9,
    price: 785.85,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 22803,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Seven large during.',
        timestamp: '2024-03-17T23:35:27',
      },
    ],
  },
  {
    id: 66,
    name: 'Item Bujía',
    stock: 41,
    price: 97.3,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 97445,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Individual rest weight tree cold onto improve.',
        timestamp: '2023-12-23T13:33:54',
      },
      {
        id: 81777,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor David, Allen and Smith',
        timestamp: '2024-04-17T18:53:56',
      },
      {
        id: 83998,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Need entire well detail.',
        timestamp: '2024-02-11T05:31:56',
      },
    ],
  },
  {
    id: 67,
    name: 'Beautiful Pastilla',
    stock: 15,
    price: 63.97,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 57623,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thomas-Wong',
        timestamp: '2024-08-02T14:30:19',
      },
      {
        id: 28843,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Theresa Archer',
        timestamp: '2024-10-17T12:10:48',
      },
      {
        id: 25698,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sheppard-Cochran',
        timestamp: '2023-06-02T01:59:10',
      },
      {
        id: 91717,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Throughout student manager more.',
        timestamp: '2023-11-20T18:35:44',
      },
      {
        id: 38880,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: But eye first establish perform.',
        timestamp: '2024-08-23T04:09:04',
      },
    ],
  },
  {
    id: 68,
    name: 'Several Amortiguador',
    stock: 41,
    price: 544.45,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 99867,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Service material once official.',
        timestamp: '2024-09-04T00:15:50',
      },
      {
        id: 7542,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Jones',
        timestamp: '2025-03-17T11:04:55',
      },
      {
        id: 40261,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ramsey-Baker',
        timestamp: '2023-11-19T22:36:37',
      },
    ],
  },
  {
    id: 69,
    name: 'Even Filtro',
    stock: 29,
    price: 305.44,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 67231,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Cold rate end expert economic open note PM.',
        timestamp: '2023-10-22T00:29:06',
      },
    ],
  },
  {
    id: 70,
    name: 'Word Filtro',
    stock: 99,
    price: 696.01,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 68206,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Take store once late direction.',
        timestamp: '2023-06-11T07:19:31',
      },
    ],
  },
  {
    id: 71,
    name: 'Miss Amortiguador',
    stock: 27,
    price: 587.67,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 84882,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Santos Ltd',
        timestamp: '2024-01-28T22:55:30',
      },
      {
        id: 72919,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Sometimes computer opportunity student bed study.',
        timestamp: '2023-07-29T19:20:04',
      },
      {
        id: 40306,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ruiz, Rivera and Duncan',
        timestamp: '2025-02-20T23:49:34',
      },
      {
        id: 89512,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christine Wood',
        timestamp: '2023-12-04T12:37:36',
      },
    ],
  },
  {
    id: 72,
    name: 'Treat Filtro',
    stock: 26,
    price: 615.31,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 99774,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Walker, Paul and Michael',
        timestamp: '2024-07-13T08:17:44',
      },
      {
        id: 62957,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Russell Group',
        timestamp: '2023-06-05T04:12:21',
      },
      {
        id: 58319,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jackson Inc',
        timestamp: '2023-09-30T22:24:15',
      },
      {
        id: 13547,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Idea meet you surface past make court.',
        timestamp: '2023-09-19T15:17:18',
      },
    ],
  },
  {
    id: 73,
    name: 'Career Pastilla',
    stock: 49,
    price: 105.88,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 55525,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Region law arrive figure.',
        timestamp: '2024-05-28T03:47:44',
      },
    ],
  },
  {
    id: 74,
    name: 'Word Alternador',
    stock: 82,
    price: 133.57,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 98718,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Matthew Spencer',
        timestamp: '2023-12-08T06:15:38',
      },
      {
        id: 46273,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Jones',
        timestamp: '2023-11-14T03:48:59',
      },
      {
        id: 8986,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Barton, Thompson and Williams',
        timestamp: '2023-12-10T16:32:52',
      },
    ],
  },
  {
    id: 75,
    name: 'Measure Alternador',
    stock: 81,
    price: 70.82,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 98714,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jackson-Cole',
        timestamp: '2023-09-07T05:24:44',
      },
    ],
  },
  {
    id: 76,
    name: 'Thought Filtro',
    stock: 59,
    price: 939.73,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 60359,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Melvin Norman',
        timestamp: '2024-09-14T10:47:38',
      },
      {
        id: 18731,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mario Martinez',
        timestamp: '2025-03-22T00:10:52',
      },
      {
        id: 30816,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Elizabeth Johnson',
        timestamp: '2024-12-04T21:09:36',
      },
      {
        id: 67590,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Better step agent.',
        timestamp: '2024-10-09T11:23:05',
      },
      {
        id: 28093,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Tonight above few.',
        timestamp: '2023-10-06T05:14:24',
      },
    ],
  },
  {
    id: 77,
    name: 'Hour Filtro',
    stock: 51,
    price: 891.52,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 96533,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Bad could song condition.',
        timestamp: '2024-01-02T05:24:25',
      },
    ],
  },
  {
    id: 78,
    name: 'Finish Pastilla',
    stock: 26,
    price: 945.2,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 59867,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Anderson Group',
        timestamp: '2025-04-18T04:13:57',
      },
      {
        id: 98152,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Threat wait allow response half option toward perhaps.',
        timestamp: '2023-05-02T08:19:00',
      },
      {
        id: 27489,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Linda Smith',
        timestamp: '2023-11-13T18:16:08',
      },
      {
        id: 4867,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: The prepare hope theory perform industry.',
        timestamp: '2024-08-03T18:11:16',
      },
    ],
  },
  {
    id: 79,
    name: 'Mouth Amortiguador',
    stock: 74,
    price: 536.97,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 4443,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Barker-Ponce',
        timestamp: '2024-09-22T02:56:47',
      },
      {
        id: 94335,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Picture again least.',
        timestamp: '2024-07-21T22:41:11',
      },
      {
        id: 45001,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Phone reveal live member.',
        timestamp: '2024-10-31T00:54:56',
      },
    ],
  },
  {
    id: 80,
    name: 'Service Amortiguador',
    stock: 18,
    price: 66.78,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 2872,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Vance PLC',
        timestamp: '2024-11-20T20:31:03',
      },
      {
        id: 299,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sosa Group',
        timestamp: '2024-01-08T11:26:12',
      },
      {
        id: 66779,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Fund finally board chair a.',
        timestamp: '2023-07-16T14:36:41',
      },
      {
        id: 40987,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Real kind feeling under machine long.',
        timestamp: '2024-10-26T14:31:53',
      },
    ],
  },
  {
    id: 81,
    name: 'Development Pastilla',
    stock: 73,
    price: 175.72,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 89989,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Media traditional project reduce.',
        timestamp: '2025-03-15T14:03:19',
      },
      {
        id: 7854,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Burgess-Hall',
        timestamp: '2024-12-08T12:51:15',
      },
      {
        id: 67363,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Morrison, Aguirre and Robinson',
        timestamp: '2023-09-11T20:58:49',
      },
    ],
  },
  {
    id: 82,
    name: 'Their Pastilla',
    stock: 24,
    price: 802.06,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 24931,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: If week century that save American responsibility.',
        timestamp: '2024-10-12T17:38:31',
      },
      {
        id: 74437,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Popular none east surface voice guy road.',
        timestamp: '2024-07-29T06:04:33',
      },
    ],
  },
  {
    id: 83,
    name: 'Skin Alternador',
    stock: 36,
    price: 508.42,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 73868,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bonnie Smith',
        timestamp: '2023-05-03T07:45:53',
      },
      {
        id: 95233,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Harper, Martinez and Sherman',
        timestamp: '2024-09-04T23:54:55',
      },
      {
        id: 47963,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Deborah Stevenson',
        timestamp: '2023-11-25T21:15:56',
      },
    ],
  },
  {
    id: 84,
    name: 'Very Alternador',
    stock: 19,
    price: 619.46,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 77999,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Economy yeah again present.',
        timestamp: '2024-12-21T10:02:53',
      },
      {
        id: 56903,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jonathan Johnson',
        timestamp: '2024-05-31T00:38:47',
      },
      {
        id: 42251,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Sandoval, Gonzales and Dominguez',
        timestamp: '2024-12-12T07:25:56',
      },
      {
        id: 89684,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Memory end approach baby owner.',
        timestamp: '2023-11-01T05:15:26',
      },
      {
        id: 54659,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Long draw attention enough.',
        timestamp: '2025-04-08T11:33:25',
      },
    ],
  },
  {
    id: 85,
    name: 'Action Alternador',
    stock: 32,
    price: 683.07,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 54137,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Gonzalez',
        timestamp: '2024-10-11T18:20:04',
      },
      {
        id: 25960,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Medical degree science three.',
        timestamp: '2024-03-02T18:31:48',
      },
      {
        id: 3229,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Campbell-Benson',
        timestamp: '2023-07-29T16:06:10',
      },
    ],
  },
  {
    id: 86,
    name: 'Box Bujía',
    stock: 14,
    price: 340.25,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 63808,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William White',
        timestamp: '2024-12-11T20:05:37',
      },
      {
        id: 55185,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Blankenship',
        timestamp: '2025-03-16T11:25:59',
      },
    ],
  },
  {
    id: 87,
    name: 'Amount Alternador',
    stock: 2,
    price: 839.65,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 6644,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Hester',
        timestamp: '2025-01-01T01:31:14',
      },
      {
        id: 81260,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: History method human wish future as theory.',
        timestamp: '2025-02-12T13:32:34',
      },
    ],
  },
  {
    id: 88,
    name: 'By Alternador',
    stock: 64,
    price: 193.76,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 58243,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Rebecca Olsen',
        timestamp: '2024-09-28T21:52:25',
      },
      {
        id: 9499,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Improve say front eight green draw each that.',
        timestamp: '2023-12-24T15:49:55',
      },
      {
        id: 484,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jamie Acosta',
        timestamp: '2023-11-05T09:50:28',
      },
      {
        id: 8796,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bell, Gay and Snyder',
        timestamp: '2024-06-08T08:16:12',
      },
    ],
  },
  {
    id: 89,
    name: 'Democrat Amortiguador',
    stock: 21,
    price: 219.89,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 52199,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente James Hernandez',
        timestamp: '2023-07-14T21:06:18',
      },
      {
        id: 84093,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Moore-Weiss',
        timestamp: '2024-09-07T00:58:43',
      },
      {
        id: 28194,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Reyes-Cochran',
        timestamp: '2024-07-20T08:32:36',
      },
    ],
  },
  {
    id: 90,
    name: 'Voice Alternador',
    stock: 59,
    price: 427.24,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 76154,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Wide school feel show off drive.',
        timestamp: '2024-07-11T05:12:57',
      },
      {
        id: 69099,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jesse Zhang',
        timestamp: '2024-05-22T07:04:25',
      },
      {
        id: 82381,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lynch PLC',
        timestamp: '2024-10-19T06:46:02',
      },
      {
        id: 13243,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Howard-Mckinney',
        timestamp: '2023-10-18T04:59:15',
      },
      {
        id: 4626,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lawson, Thompson and Shaw',
        timestamp: '2025-03-22T01:08:18',
      },
    ],
  },
  {
    id: 91,
    name: 'Sit Pastilla',
    stock: 42,
    price: 886.6,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 21776,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hoffman-Wright',
        timestamp: '2024-07-05T04:06:30',
      },
      {
        id: 43877,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alex Johns',
        timestamp: '2024-02-09T12:04:24',
      },
    ],
  },
  {
    id: 92,
    name: 'Brother Bujía',
    stock: 41,
    price: 971.32,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 55363,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Diaz, Shaffer and Cross',
        timestamp: '2024-01-25T12:44:02',
      },
      {
        id: 52731,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jason Woods',
        timestamp: '2024-03-26T07:02:05',
      },
      {
        id: 7228,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Larson, White and Cobb',
        timestamp: '2024-01-13T11:13:58',
      },
    ],
  },
  {
    id: 93,
    name: 'Candidate Pastilla',
    stock: 39,
    price: 482.99,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 69228,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Gregory Nguyen',
        timestamp: '2024-01-27T08:49:49',
      },
      {
        id: 92832,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Four Congress second no practice town activity.',
        timestamp: '2023-08-10T21:18:53',
      },
      {
        id: 91107,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Most rate on traditional inside teach.',
        timestamp: '2024-10-21T02:22:14',
      },
    ],
  },
  {
    id: 94,
    name: 'Kitchen Amortiguador',
    stock: 43,
    price: 77.85,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 48287,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perez, Barnes and Williams',
        timestamp: '2024-11-08T11:48:57',
      },
      {
        id: 81278,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Danielle Melton',
        timestamp: '2024-01-15T23:12:22',
      },
    ],
  },
  {
    id: 95,
    name: 'Forget Pastilla',
    stock: 51,
    price: 420.9,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 55197,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Value teach government lawyer.',
        timestamp: '2024-09-28T04:07:11',
      },
    ],
  },
  {
    id: 96,
    name: 'Between Alternador',
    stock: 1,
    price: 932.6,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 54800,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alexis Bird',
        timestamp: '2024-09-29T00:40:59',
      },
      {
        id: 66651,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Robin Obrien',
        timestamp: '2023-09-10T11:17:14',
      },
    ],
  },
  {
    id: 97,
    name: 'Discover Amortiguador',
    stock: 66,
    price: 388.32,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 85643,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Calderon-Alvarez',
        timestamp: '2023-06-19T03:05:37',
      },
      {
        id: 10073,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fry-King',
        timestamp: '2024-03-26T06:50:49',
      },
      {
        id: 61908,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Certain sound change speak.',
        timestamp: '2024-07-28T21:04:37',
      },
      {
        id: 93287,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Wish region executive Congress probably manage.',
        timestamp: '2024-07-04T06:18:20',
      },
      {
        id: 14188,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones-Lamb',
        timestamp: '2025-01-11T10:25:40',
      },
    ],
  },
  {
    id: 98,
    name: 'White Pastilla',
    stock: 80,
    price: 902.82,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 89337,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cabrera, Bowman and Ross',
        timestamp: '2023-12-08T00:11:19',
      },
    ],
  },
  {
    id: 99,
    name: 'Him Pastilla',
    stock: 84,
    price: 812.98,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 41710,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sullivan-Delgado',
        timestamp: '2023-08-15T09:22:44',
      },
      {
        id: 95869,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Back would price work know young.',
        timestamp: '2023-08-30T23:14:07',
      },
      {
        id: 20887,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Wayne Diaz',
        timestamp: '2024-04-09T16:48:33',
      },
      {
        id: 46469,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones, Snyder and Montes',
        timestamp: '2025-04-05T20:12:48',
      },
      {
        id: 41317,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Them language each quality last half open.',
        timestamp: '2023-11-02T20:24:18',
      },
    ],
  },
  {
    id: 100,
    name: 'Pay Amortiguador',
    stock: 36,
    price: 936.46,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 43371,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martinez-Gordon',
        timestamp: '2024-07-05T18:58:25',
      },
      {
        id: 82847,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Roth and Sons',
        timestamp: '2023-05-23T14:29:24',
      },
      {
        id: 79173,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alexander Rivers',
        timestamp: '2025-03-28T03:50:12',
      },
    ],
  },
  {
    id: 101,
    name: 'Whatever Filtro',
    stock: 35,
    price: 387.74,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 50435,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams-Schneider',
        timestamp: '2024-07-31T20:32:27',
      },
      {
        id: 41904,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Store hotel forward glass effort.',
        timestamp: '2024-01-07T18:19:23',
      },
      {
        id: 19296,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: North nothing pay morning agent difficult offer.',
        timestamp: '2024-11-27T16:38:44',
      },
      {
        id: 45852,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Politics long first watch region keep prove.',
        timestamp: '2023-05-09T19:39:43',
      },
    ],
  },
  {
    id: 102,
    name: 'Half Pastilla',
    stock: 95,
    price: 336.04,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 96783,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Response read single information finish single tree single.',
        timestamp: '2024-12-04T23:33:41',
      },
      {
        id: 14809,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Berry PLC',
        timestamp: '2024-02-18T17:20:37',
      },
      {
        id: 17938,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Ball home Democrat space miss plant front.',
        timestamp: '2024-06-22T14:09:55',
      },
      {
        id: 97209,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Down research great enough.',
        timestamp: '2024-07-21T10:06:45',
      },
    ],
  },
  {
    id: 103,
    name: 'During Filtro',
    stock: 43,
    price: 955.99,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 55422,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Shoulder book natural show he dream.',
        timestamp: '2023-05-31T09:23:40',
      },
      {
        id: 39241,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Issue team interesting economic.',
        timestamp: '2024-09-07T12:28:59',
      },
      {
        id: 16563,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Child scene such lawyer.',
        timestamp: '2023-08-02T08:02:31',
      },
    ],
  },
  {
    id: 104,
    name: 'Sit Pastilla',
    stock: 24,
    price: 725.72,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 23528,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Thomas Vasquez',
        timestamp: '2025-04-19T13:11:11',
      },
    ],
  },
  {
    id: 105,
    name: 'Figure Amortiguador',
    stock: 99,
    price: 220.01,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 10194,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Roberts, Gallagher and Gould',
        timestamp: '2023-05-18T14:41:34',
      },
      {
        id: 31415,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Until discussion budget.',
        timestamp: '2024-04-02T11:59:14',
      },
    ],
  },
  {
    id: 106,
    name: 'Seven Amortiguador',
    stock: 96,
    price: 507.9,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 90019,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wood Ltd',
        timestamp: '2024-09-27T18:40:58',
      },
      {
        id: 45807,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alexis Burns',
        timestamp: '2024-07-22T11:59:33',
      },
    ],
  },
  {
    id: 107,
    name: 'Anyone Pastilla',
    stock: 23,
    price: 847.2,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 48202,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Page',
        timestamp: '2024-02-14T08:03:53',
      },
      {
        id: 29290,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Once explain throughout reach himself apply.',
        timestamp: '2024-04-14T04:05:45',
      },
      {
        id: 37136,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: All find area bad want bit data money.',
        timestamp: '2024-01-12T10:50:00',
      },
      {
        id: 52606,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mark Hall',
        timestamp: '2024-12-31T12:36:47',
      },
    ],
  },
  {
    id: 108,
    name: 'Former Amortiguador',
    stock: 70,
    price: 839.62,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 24412,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael English',
        timestamp: '2025-04-09T19:01:59',
      },
      {
        id: 32321,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jamie Montgomery',
        timestamp: '2023-06-06T20:45:45',
      },
      {
        id: 89447,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Tend down culture wish and president season.',
        timestamp: '2024-08-24T03:57:26',
      },
    ],
  },
  {
    id: 109,
    name: 'Herself Amortiguador',
    stock: 83,
    price: 658.05,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 86686,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rodriguez, Chan and Perkins',
        timestamp: '2025-04-18T06:18:11',
      },
      {
        id: 110,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Freeman LLC',
        timestamp: '2024-06-02T22:57:56',
      },
      {
        id: 20496,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Trevor Oneill',
        timestamp: '2023-09-02T11:09:28',
      },
    ],
  },
  {
    id: 110,
    name: 'Test Amortiguador',
    stock: 82,
    price: 292.73,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 22171,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lauren Parker',
        timestamp: '2023-06-08T23:15:42',
      },
      {
        id: 14644,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Mention now will.',
        timestamp: '2024-02-22T14:12:36',
      },
    ],
  },
  {
    id: 111,
    name: 'Probably Filtro',
    stock: 32,
    price: 633.03,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 85284,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Always evidence truth improve.',
        timestamp: '2024-01-26T13:24:21',
      },
      {
        id: 46183,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ashley Todd',
        timestamp: '2025-03-18T16:23:21',
      },
      {
        id: 80200,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Subject above home wind.',
        timestamp: '2023-10-05T22:08:06',
      },
      {
        id: 4516,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Krista Stewart',
        timestamp: '2024-05-16T06:12:45',
      },
      {
        id: 34109,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Angela Jordan',
        timestamp: '2024-11-25T04:58:46',
      },
    ],
  },
  {
    id: 112,
    name: 'Truth Pastilla',
    stock: 47,
    price: 360.79,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 12058,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Heart light lay artist eye guy imagine.',
        timestamp: '2024-05-27T20:42:54',
      },
      {
        id: 25962,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: See still those type rule leave hot.',
        timestamp: '2023-07-05T01:51:13',
      },
      {
        id: 5776,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mitchell Inc',
        timestamp: '2024-02-13T04:19:25',
      },
      {
        id: 83145,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Win up finally thought relationship leader man management.',
        timestamp: '2024-09-16T12:29:28',
      },
      {
        id: 15896,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Frost Group',
        timestamp: '2024-09-08T14:42:27',
      },
    ],
  },
  {
    id: 113,
    name: 'Red Alternador',
    stock: 59,
    price: 578.16,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 52982,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Chase-Hernandez',
        timestamp: '2024-05-01T11:48:32',
      },
      {
        id: 23765,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dawn Rogers DVM',
        timestamp: '2024-02-15T09:27:48',
      },
    ],
  },
  {
    id: 114,
    name: 'Military Alternador',
    stock: 16,
    price: 992.99,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 54766,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Megan Gonzales',
        timestamp: '2024-12-16T14:39:16',
      },
      {
        id: 73996,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Murphy, Lane and Brown',
        timestamp: '2025-01-15T08:56:35',
      },
      {
        id: 74810,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Large finally candidate daughter commercial project century.',
        timestamp: '2024-03-30T16:55:46',
      },
    ],
  },
  {
    id: 115,
    name: 'He Pastilla',
    stock: 25,
    price: 540.18,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 21793,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrew Collier',
        timestamp: '2023-06-08T21:42:18',
      },
      {
        id: 51060,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Reason benefit card hotel range goal land him.',
        timestamp: '2023-06-02T19:27:32',
      },
      {
        id: 37338,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Trujillo Inc',
        timestamp: '2025-04-08T06:18:12',
      },
      {
        id: 16206,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Population painting special short somebody family tend away.',
        timestamp: '2023-06-26T09:51:59',
      },
      {
        id: 52657,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Walker, Case and Tucker',
        timestamp: '2023-10-17T16:20:04',
      },
    ],
  },
  {
    id: 116,
    name: 'Can Pastilla',
    stock: 28,
    price: 659.98,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 82141,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nina Phillips',
        timestamp: '2023-08-19T11:22:13',
      },
      {
        id: 92637,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Adam Andrews',
        timestamp: '2025-03-25T09:39:35',
      },
    ],
  },
  {
    id: 117,
    name: 'Through Amortiguador',
    stock: 36,
    price: 472.54,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 58030,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Blake Wheeler',
        timestamp: '2023-11-23T15:23:57',
      },
      {
        id: 68280,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Must ready within more.',
        timestamp: '2023-11-20T06:21:26',
      },
      {
        id: 13876,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Lee',
        timestamp: '2025-02-24T17:24:10',
      },
      {
        id: 97523,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrew Miller',
        timestamp: '2024-08-10T09:42:03',
      },
    ],
  },
  {
    id: 118,
    name: 'Response Pastilla',
    stock: 80,
    price: 470.94,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 92106,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Forget finish camera threat upon young hot.',
        timestamp: '2024-11-11T12:07:50',
      },
      {
        id: 66038,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Yard themselves peace tell.',
        timestamp: '2023-06-15T15:53:33',
      },
      {
        id: 7125,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lisa Mcmillan',
        timestamp: '2024-11-29T00:56:26',
      },
    ],
  },
  {
    id: 119,
    name: 'Religious Filtro',
    stock: 65,
    price: 261.25,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 42553,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: College must paper term only.',
        timestamp: '2023-08-15T15:29:05',
      },
    ],
  },
  {
    id: 120,
    name: 'Particular Amortiguador',
    stock: 49,
    price: 157.59,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 43941,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Briana Bailey',
        timestamp: '2024-10-31T09:02:11',
      },
      {
        id: 84381,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Positive third their toward call outside.',
        timestamp: '2024-04-05T10:34:45',
      },
      {
        id: 14959,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kelly Wallace',
        timestamp: '2023-12-15T07:19:05',
      },
    ],
  },
  {
    id: 121,
    name: 'Doctor Filtro',
    stock: 85,
    price: 722.39,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 525,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Hard civil that father.',
        timestamp: '2024-03-31T11:43:13',
      },
      {
        id: 41803,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Larry Wilson',
        timestamp: '2023-06-22T02:19:41',
      },
      {
        id: 21957,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cole, Owens and Huff',
        timestamp: '2025-04-08T05:06:43',
      },
    ],
  },
  {
    id: 122,
    name: 'Save Alternador',
    stock: 24,
    price: 602.1,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 6802,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Robert Rose',
        timestamp: '2024-04-24T13:24:05',
      },
      {
        id: 18399,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Carter Ltd',
        timestamp: '2024-01-25T15:23:41',
      },
      {
        id: 71305,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Identify special list pick about.',
        timestamp: '2023-11-06T15:18:24',
      },
    ],
  },
  {
    id: 123,
    name: 'Develop Filtro',
    stock: 19,
    price: 314.63,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 98793,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Believe require gas food.',
        timestamp: '2023-09-22T22:17:20',
      },
      {
        id: 62676,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Melvin Jackson',
        timestamp: '2024-07-21T04:02:53',
      },
    ],
  },
  {
    id: 124,
    name: 'Of Bujía',
    stock: 15,
    price: 472.84,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 73993,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams-Brown',
        timestamp: '2024-04-08T06:00:04',
      },
    ],
  },
  {
    id: 125,
    name: 'Couple Alternador',
    stock: 86,
    price: 324.55,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 98318,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Film bring figure fish lawyer.',
        timestamp: '2024-12-22T03:43:48',
      },
      {
        id: 22767,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ariana Hall',
        timestamp: '2023-10-06T12:47:12',
      },
      {
        id: 32257,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Griffin PLC',
        timestamp: '2024-01-03T17:11:11',
      },
      {
        id: 71754,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Donald Barajas',
        timestamp: '2025-01-31T14:16:19',
      },
      {
        id: 52079,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Jones',
        timestamp: '2024-11-01T16:04:16',
      },
    ],
  },
  {
    id: 126,
    name: 'Marriage Bujía',
    stock: 77,
    price: 508.28,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 18726,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jordan Jackson',
        timestamp: '2024-04-02T02:37:11',
      },
      {
        id: 60131,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kenneth Dillon',
        timestamp: '2023-10-02T16:40:11',
      },
      {
        id: 99876,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Angel Davis',
        timestamp: '2024-05-02T18:06:52',
      },
    ],
  },
  {
    id: 127,
    name: 'Wear Amortiguador',
    stock: 75,
    price: 128.88,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 26849,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor White, Walker and Bradley',
        timestamp: '2024-04-10T07:19:10',
      },
      {
        id: 82390,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: List under indeed my.',
        timestamp: '2023-08-30T00:11:51',
      },
      {
        id: 10159,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lynn Williams',
        timestamp: '2023-11-11T04:55:51',
      },
      {
        id: 15541,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Grow us pay determine role reason maybe.',
        timestamp: '2023-09-15T04:17:37',
      },
    ],
  },
  {
    id: 128,
    name: 'Sea Bujía',
    stock: 34,
    price: 906.41,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 56912,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kelly Hill',
        timestamp: '2024-05-09T15:59:33',
      },
      {
        id: 57106,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Detail whatever citizen today which your.',
        timestamp: '2024-01-11T22:20:39',
      },
      {
        id: 84176,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: How different claim until.',
        timestamp: '2023-07-04T18:23:33',
      },
      {
        id: 20073,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Garcia, Simmons and Murphy',
        timestamp: '2024-11-15T00:53:03',
      },
    ],
  },
  {
    id: 129,
    name: 'Mr Bujía',
    stock: 12,
    price: 602.37,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 87753,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Inside imagine light.',
        timestamp: '2024-09-24T07:44:01',
      },
      {
        id: 45004,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Gregory Mahoney',
        timestamp: '2023-12-15T11:06:10',
      },
      {
        id: 86654,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kimberly Knox',
        timestamp: '2025-03-24T16:17:34',
      },
    ],
  },
  {
    id: 130,
    name: 'Medical Pastilla',
    stock: 67,
    price: 475.23,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 68855,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrea Blake',
        timestamp: '2023-07-19T05:58:04',
      },
      {
        id: 35986,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Politics detail safe.',
        timestamp: '2024-02-16T03:44:40',
      },
      {
        id: 40013,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Anderson, Singh and Perez',
        timestamp: '2024-05-20T22:42:49',
      },
      {
        id: 48365,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Glover, Scott and Wood',
        timestamp: '2024-11-27T11:42:25',
      },
      {
        id: 60917,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Away can memory say enter.',
        timestamp: '2024-05-31T14:36:43',
      },
    ],
  },
  {
    id: 131,
    name: 'Laugh Bujía',
    stock: 86,
    price: 81.58,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 25449,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Today stuff nature mean professional.',
        timestamp: '2024-11-18T09:31:22',
      },
      {
        id: 42447,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jennifer Harris',
        timestamp: '2024-12-27T03:24:57',
      },
    ],
  },
  {
    id: 132,
    name: 'Only Pastilla',
    stock: 75,
    price: 801.54,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 43881,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Schmidt PLC',
        timestamp: '2024-05-16T10:06:39',
      },
      {
        id: 65050,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Alexander Inc',
        timestamp: '2023-11-06T21:23:50',
      },
      {
        id: 23437,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Holland-Silva',
        timestamp: '2024-12-19T23:57:15',
      },
      {
        id: 41591,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Jones',
        timestamp: '2024-11-26T04:18:24',
      },
      {
        id: 20737,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kevin Mason',
        timestamp: '2023-10-20T14:36:10',
      },
    ],
  },
  {
    id: 133,
    name: 'Involve Pastilla',
    stock: 82,
    price: 425.38,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 72463,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Martinez',
        timestamp: '2023-07-08T12:52:42',
      },
      {
        id: 4035,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Seven than myself really event yard.',
        timestamp: '2023-08-03T04:20:22',
      },
      {
        id: 77589,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mccoy, Clark and Rivera',
        timestamp: '2023-10-05T19:34:09',
      },
      {
        id: 61119,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Porter, Taylor and Anderson',
        timestamp: '2024-11-08T07:41:38',
      },
    ],
  },
  {
    id: 134,
    name: 'Late Amortiguador',
    stock: 46,
    price: 95.94,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 32868,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Burgess, Rogers and Costa',
        timestamp: '2024-12-17T18:11:44',
      },
      {
        id: 41521,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sanchez, King and Mendoza',
        timestamp: '2024-02-14T12:43:44',
      },
      {
        id: 94624,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Shaffer Inc',
        timestamp: '2024-07-01T20:31:59',
      },
      {
        id: 18063,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kimberly Atkinson',
        timestamp: '2024-08-15T13:55:17',
      },
      {
        id: 57142,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Terry Campbell',
        timestamp: '2024-03-02T20:32:30',
      },
    ],
  },
  {
    id: 135,
    name: 'Prepare Pastilla',
    stock: 17,
    price: 902.41,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 98404,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mrs. Kaitlyn Guzman',
        timestamp: '2024-10-03T19:24:09',
      },
      {
        id: 74857,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Romero and Sons',
        timestamp: '2024-04-02T18:17:25',
      },
      {
        id: 88589,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miller, Kelly and Crawford',
        timestamp: '2023-10-04T11:14:00',
      },
      {
        id: 37099,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davis-Marquez',
        timestamp: '2023-08-19T18:08:20',
      },
      {
        id: 46629,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Terri Byrd',
        timestamp: '2024-11-10T13:42:38',
      },
    ],
  },
  {
    id: 136,
    name: 'Head Pastilla',
    stock: 63,
    price: 897.57,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 97756,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Blair, Stevens and Davis',
        timestamp: '2024-10-11T05:06:47',
      },
      {
        id: 90279,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Carl Fitzgerald',
        timestamp: '2024-02-21T05:01:33',
      },
    ],
  },
  {
    id: 137,
    name: 'Must Bujía',
    stock: 41,
    price: 438.74,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 28111,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Bad law country finish not.',
        timestamp: '2025-04-18T04:28:05',
      },
      {
        id: 10162,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Cowan',
        timestamp: '2025-02-15T05:06:45',
      },
    ],
  },
  {
    id: 138,
    name: 'Suddenly Filtro',
    stock: 11,
    price: 848.02,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 86220,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Use police onto base board.',
        timestamp: '2024-01-14T17:01:18',
      },
      {
        id: 6297,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Figueroa PLC',
        timestamp: '2023-12-04T18:58:26',
      },
      {
        id: 20388,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Heidi Long',
        timestamp: '2024-04-12T11:38:01',
      },
      {
        id: 69863,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Campbell PLC',
        timestamp: '2024-12-31T09:48:49',
      },
    ],
  },
  {
    id: 139,
    name: 'Air Pastilla',
    stock: 45,
    price: 784.53,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 66590,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Avoid decision instead outside attention agree military project.',
        timestamp: '2024-06-18T04:18:02',
      },
      {
        id: 14096,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente James Brown',
        timestamp: '2023-05-31T01:37:52',
      },
      {
        id: 7102,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams Ltd',
        timestamp: '2023-10-08T09:02:21',
      },
      {
        id: 18987,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Juarez-Lynn',
        timestamp: '2023-12-02T18:37:11',
      },
      {
        id: 30449,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Fitzgerald, Church and Dennis',
        timestamp: '2023-09-01T23:47:10',
      },
    ],
  },
  {
    id: 140,
    name: 'Manage Alternador',
    stock: 59,
    price: 857.65,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 83832,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kathryn Brown',
        timestamp: '2024-09-03T20:13:41',
      },
      {
        id: 71480,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Represent little only trouble detail.',
        timestamp: '2024-06-09T17:11:36',
      },
    ],
  },
  {
    id: 141,
    name: 'Around Filtro',
    stock: 40,
    price: 159.02,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 26106,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gonzalez, Liu and Walters',
        timestamp: '2023-10-31T10:43:48',
      },
      {
        id: 99830,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cruz, Garcia and Gilbert',
        timestamp: '2023-07-29T10:05:27',
      },
      {
        id: 15975,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Six necessary onto debate.',
        timestamp: '2024-06-13T22:50:24',
      },
    ],
  },
  {
    id: 142,
    name: 'Marriage Amortiguador',
    stock: 60,
    price: 881.47,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 16901,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Green affect because race chance your baby.',
        timestamp: '2024-08-30T23:29:23',
      },
    ],
  },
  {
    id: 143,
    name: 'Establish Filtro',
    stock: 18,
    price: 169.33,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 36105,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Send religious attorney moment religious eye.',
        timestamp: '2025-03-28T18:39:11',
      },
      {
        id: 8300,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Responsibility painting behavior collection.',
        timestamp: '2024-07-25T11:28:42',
      },
      {
        id: 54496,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones-Carter',
        timestamp: '2024-07-14T23:33:03',
      },
      {
        id: 61183,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Center majority add firm lay voice over.',
        timestamp: '2025-03-11T03:35:17',
      },
    ],
  },
  {
    id: 144,
    name: 'Or Alternador',
    stock: 44,
    price: 761.91,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 71043,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Natalie Carter',
        timestamp: '2024-05-04T01:56:07',
      },
      {
        id: 3782,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Mother lot benefit four decision.',
        timestamp: '2024-10-31T17:26:56',
      },
      {
        id: 68111,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: According short major education build.',
        timestamp: '2023-08-16T19:41:37',
      },
      {
        id: 65029,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Eric Johnson',
        timestamp: '2024-11-14T13:39:38',
      },
      {
        id: 30491,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Stage any positive art pattern in.',
        timestamp: '2023-09-28T02:28:59',
      },
    ],
  },
  {
    id: 145,
    name: 'Worker Pastilla',
    stock: 23,
    price: 724.0,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 97285,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gonzalez-Powers',
        timestamp: '2023-07-07T00:34:20',
      },
      {
        id: 23856,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Leg as agree director public six.',
        timestamp: '2025-04-25T05:22:55',
      },
      {
        id: 96714,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith Inc',
        timestamp: '2024-06-18T04:59:39',
      },
      {
        id: 75638,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Katherine Ramirez',
        timestamp: '2023-08-16T17:44:24',
      },
      {
        id: 62455,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martinez PLC',
        timestamp: '2023-11-21T04:40:08',
      },
    ],
  },
  {
    id: 146,
    name: 'Size Alternador',
    stock: 46,
    price: 912.6,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 62619,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Wish move international stuff.',
        timestamp: '2024-05-06T08:52:02',
      },
      {
        id: 97487,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Close party might carry establish listen.',
        timestamp: '2023-05-14T14:58:40',
      },
      {
        id: 62127,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Allen Ltd',
        timestamp: '2024-08-13T10:56:24',
      },
    ],
  },
  {
    id: 147,
    name: 'Participant Filtro',
    stock: 55,
    price: 103.06,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 46993,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Find firm put should produce become.',
        timestamp: '2025-02-24T14:34:59',
      },
      {
        id: 81452,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dawn Morse',
        timestamp: '2023-10-23T11:24:50',
      },
      {
        id: 96053,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Christian, Houston and Willis',
        timestamp: '2024-09-10T18:24:31',
      },
    ],
  },
  {
    id: 148,
    name: 'Who Bujía',
    stock: 21,
    price: 605.57,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 12591,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Mother series stage head career office.',
        timestamp: '2025-04-10T06:02:05',
      },
      {
        id: 6118,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cooper PLC',
        timestamp: '2024-03-01T20:32:24',
      },
      {
        id: 50249,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: War his commercial many show their business.',
        timestamp: '2024-07-09T04:36:20',
      },
    ],
  },
  {
    id: 149,
    name: 'Site Pastilla',
    stock: 60,
    price: 669.57,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 77357,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Wife stuff be join opportunity red yourself.',
        timestamp: '2023-07-11T04:22:15',
      },
      {
        id: 49460,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Car pressure artist successful.',
        timestamp: '2024-12-31T18:21:20',
      },
      {
        id: 74884,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Finish listen safe long collection beat.',
        timestamp: '2024-07-14T21:07:47',
      },
    ],
  },
  {
    id: 150,
    name: 'Author Amortiguador',
    stock: 57,
    price: 123.43,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 69987,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hill-Bell',
        timestamp: '2024-02-24T20:18:01',
      },
      {
        id: 11626,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Describe hotel number high debate.',
        timestamp: '2023-09-24T01:27:43',
      },
    ],
  },
  {
    id: 151,
    name: 'Of Alternador',
    stock: 3,
    price: 305.25,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 44722,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Her position general soldier popular who for.',
        timestamp: '2024-05-15T12:20:25',
      },
      {
        id: 61396,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Randall',
        timestamp: '2023-11-22T00:56:45',
      },
      {
        id: 57285,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Since record this both specific food.',
        timestamp: '2023-05-23T04:05:18',
      },
      {
        id: 45626,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Standard way bit require under star scientist.',
        timestamp: '2025-03-01T16:36:17',
      },
      {
        id: 92086,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Wendy Payne',
        timestamp: '2024-11-20T19:47:43',
      },
    ],
  },
  {
    id: 152,
    name: 'Home Pastilla',
    stock: 42,
    price: 76.19,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 81814,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amanda White',
        timestamp: '2024-04-26T00:44:29',
      },
      {
        id: 75082,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mary Garcia',
        timestamp: '2024-05-26T02:19:54',
      },
    ],
  },
  {
    id: 153,
    name: 'Serious Alternador',
    stock: 0,
    price: 193.53,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 21711,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Gonzalez, Townsend and Frederick',
        timestamp: '2024-05-15T15:09:46',
      },
      {
        id: 11497,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kelly Clark',
        timestamp: '2024-12-04T21:32:10',
      },
    ],
  },
  {
    id: 154,
    name: 'What Bujía',
    stock: 67,
    price: 206.93,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 51305,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Schultz-Brock',
        timestamp: '2024-01-16T03:48:12',
      },
      {
        id: 88413,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cody Petersen',
        timestamp: '2023-08-08T21:41:38',
      },
      {
        id: 24005,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joshua Hudson',
        timestamp: '2023-10-01T12:34:20',
      },
    ],
  },
  {
    id: 155,
    name: 'Laugh Amortiguador',
    stock: 7,
    price: 757.02,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 19460,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Out real thing government represent evening.',
        timestamp: '2023-10-28T22:30:19',
      },
      {
        id: 42253,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Hailey Watts',
        timestamp: '2024-08-06T18:30:12',
      },
      {
        id: 57212,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Society why degree foot field authority age author.',
        timestamp: '2024-01-29T22:15:01',
      },
      {
        id: 96273,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Brennan',
        timestamp: '2024-03-07T03:12:54',
      },
    ],
  },
  {
    id: 156,
    name: 'Sing Filtro',
    stock: 48,
    price: 497.12,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 63352,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Military weight son.',
        timestamp: '2024-03-27T03:03:07',
      },
    ],
  },
  {
    id: 157,
    name: 'Way Alternador',
    stock: 88,
    price: 453.54,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 63488,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Process simple hard everyone tough heavy use second.',
        timestamp: '2024-04-01T00:17:04',
      },
      {
        id: 29168,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Trial professional whether.',
        timestamp: '2025-04-19T23:43:04',
      },
      {
        id: 18729,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cody Smith',
        timestamp: '2025-03-05T22:51:24',
      },
      {
        id: 8292,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Scott White',
        timestamp: '2024-06-05T22:40:47',
      },
      {
        id: 16564,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Senior ten law couple.',
        timestamp: '2024-06-04T04:25:21',
      },
    ],
  },
  {
    id: 158,
    name: 'Democratic Bujía',
    stock: 88,
    price: 978.82,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 17870,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amber Watson',
        timestamp: '2025-03-22T01:52:53',
      },
    ],
  },
  {
    id: 159,
    name: 'Board Alternador',
    stock: 10,
    price: 446.62,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 42567,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Those budget again sit night girl.',
        timestamp: '2024-12-27T09:32:38',
      },
    ],
  },
  {
    id: 160,
    name: 'Few Alternador',
    stock: 7,
    price: 305.76,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 26222,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Harrison Group',
        timestamp: '2024-10-15T02:07:05',
      },
      {
        id: 55154,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Solis Ltd',
        timestamp: '2024-05-27T03:36:12',
      },
      {
        id: 74894,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Katie Cantu',
        timestamp: '2024-12-18T12:53:38',
      },
    ],
  },
  {
    id: 161,
    name: 'Last Bujía',
    stock: 31,
    price: 179.59,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 59728,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Quite million course list agent that task.',
        timestamp: '2023-10-27T00:39:42',
      },
      {
        id: 11888,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Salas LLC',
        timestamp: '2024-07-12T15:00:18',
      },
    ],
  },
  {
    id: 162,
    name: 'Newspaper Pastilla',
    stock: 5,
    price: 426.83,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 80991,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Phone east until expert must bag.',
        timestamp: '2023-05-17T05:37:03',
      },
      {
        id: 40769,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bryant, Owens and Oliver',
        timestamp: '2025-01-15T20:46:55',
      },
    ],
  },
  {
    id: 163,
    name: 'Along Amortiguador',
    stock: 94,
    price: 484.48,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 38082,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Let song theory avoid.',
        timestamp: '2023-09-19T22:46:44',
      },
    ],
  },
  {
    id: 164,
    name: 'Religious Alternador',
    stock: 52,
    price: 538.83,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 31989,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dana Harrison',
        timestamp: '2024-12-21T10:25:04',
      },
      {
        id: 69067,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jonathan Short',
        timestamp: '2025-03-06T17:45:17',
      },
      {
        id: 80378,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Young, Alvarado and Boyd',
        timestamp: '2024-06-19T17:42:48',
      },
      {
        id: 7140,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Ball believe notice three stage consider.',
        timestamp: '2023-07-15T05:33:23',
      },
    ],
  },
  {
    id: 165,
    name: 'Really Bujía',
    stock: 82,
    price: 337.53,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 31392,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Least pick until item.',
        timestamp: '2024-04-03T20:29:57',
      },
      {
        id: 16044,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brittany Moore',
        timestamp: '2024-07-25T17:38:18',
      },
      {
        id: 15097,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Stephanie Patterson',
        timestamp: '2024-03-02T03:11:53',
      },
      {
        id: 92326,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Operation author effect yes.',
        timestamp: '2023-07-18T20:57:44',
      },
      {
        id: 92282,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Black, Burns and Lowe',
        timestamp: '2024-03-09T22:10:20',
      },
    ],
  },
  {
    id: 166,
    name: 'Fast Alternador',
    stock: 69,
    price: 824.25,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 22094,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Schwartz-Roth',
        timestamp: '2024-02-25T07:28:17',
      },
    ],
  },
  {
    id: 167,
    name: 'Heart Filtro',
    stock: 42,
    price: 640.97,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 73446,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Stand however support subject.',
        timestamp: '2024-02-07T09:40:12',
      },
      {
        id: 68282,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Sort rather rich feeling radio including skin guess.',
        timestamp: '2024-11-20T19:51:55',
      },
      {
        id: 11015,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Look foreign land improve song majority against.',
        timestamp: '2024-02-10T05:59:47',
      },
    ],
  },
  {
    id: 168,
    name: 'Kind Bujía',
    stock: 37,
    price: 574.99,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 31252,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sharon Thompson',
        timestamp: '2024-03-28T23:33:10',
      },
      {
        id: 78149,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Five government hair class down.',
        timestamp: '2023-09-03T17:29:10',
      },
      {
        id: 96650,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Denise Robertson',
        timestamp: '2023-08-27T06:15:34',
      },
      {
        id: 59272,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cole Lee',
        timestamp: '2023-07-24T03:20:39',
      },
      {
        id: 88424,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Meyer-Sawyer',
        timestamp: '2025-04-05T21:36:47',
      },
    ],
  },
  {
    id: 169,
    name: 'Order Alternador',
    stock: 52,
    price: 393.47,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 67052,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Elizabeth Simmons',
        timestamp: '2024-01-12T13:24:00',
      },
      {
        id: 42588,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Reality blood forward.',
        timestamp: '2024-03-14T05:53:06',
      },
      {
        id: 82279,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christina Moore',
        timestamp: '2025-02-20T22:54:24',
      },
      {
        id: 36350,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Per best television specific child certain reveal none.',
        timestamp: '2025-02-15T00:32:09',
      },
      {
        id: 18500,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Southern memory method girl.',
        timestamp: '2025-04-16T05:05:06',
      },
    ],
  },
  {
    id: 170,
    name: 'Kitchen Bujía',
    stock: 75,
    price: 792.57,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 66562,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Chavez-Flores',
        timestamp: '2025-03-09T20:45:25',
      },
      {
        id: 7076,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lewis, Osborn and Campbell',
        timestamp: '2024-11-11T12:58:03',
      },
      {
        id: 51757,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sara Goodwin',
        timestamp: '2024-12-31T20:45:43',
      },
      {
        id: 56757,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cynthia Powell',
        timestamp: '2025-04-09T18:08:51',
      },
      {
        id: 92167,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Pamela Miller',
        timestamp: '2023-10-16T12:19:18',
      },
    ],
  },
  {
    id: 171,
    name: 'Step Alternador',
    stock: 81,
    price: 932.61,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 98932,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Short home life memory sit their.',
        timestamp: '2024-09-07T13:18:18',
      },
      {
        id: 97486,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sexton, Moses and Peterson',
        timestamp: '2024-11-06T21:06:14',
      },
      {
        id: 32028,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miller-Williams',
        timestamp: '2023-05-31T08:01:50',
      },
    ],
  },
  {
    id: 172,
    name: 'Public Pastilla',
    stock: 34,
    price: 447.79,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 15699,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Heather Ritter',
        timestamp: '2023-08-13T19:17:59',
      },
      {
        id: 75509,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Surface where perhaps though.',
        timestamp: '2023-05-18T21:26:56',
      },
      {
        id: 47316,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Recent right talk gun a everyone.',
        timestamp: '2025-04-25T13:48:46',
      },
      {
        id: 35230,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Three hit nearly eat same first.',
        timestamp: '2023-09-16T12:21:19',
      },
    ],
  },
  {
    id: 173,
    name: 'Ground Pastilla',
    stock: 89,
    price: 202.48,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 82447,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Nelson, Thomas and Willis',
        timestamp: '2024-04-29T04:47:24',
      },
    ],
  },
  {
    id: 174,
    name: 'Quite Filtro',
    stock: 41,
    price: 974.33,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 20552,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: If join wrong significant.',
        timestamp: '2023-06-09T22:16:08',
      },
    ],
  },
  {
    id: 175,
    name: 'Probably Pastilla',
    stock: 76,
    price: 659.67,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 90565,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cruz, Richard and Benson',
        timestamp: '2023-09-16T08:32:03',
      },
      {
        id: 38498,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Feeling whom fall former.',
        timestamp: '2023-10-04T16:10:55',
      },
      {
        id: 96219,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Angela Collins',
        timestamp: '2024-02-10T18:24:51',
      },
      {
        id: 46572,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Robles-Wright',
        timestamp: '2024-02-17T03:08:05',
      },
    ],
  },
  {
    id: 176,
    name: 'Able Alternador',
    stock: 6,
    price: 168.58,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 74778,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Item often page color force dream through matter.',
        timestamp: '2024-03-20T22:50:07',
      },
      {
        id: 49510,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Castro-Rhodes',
        timestamp: '2025-04-14T19:17:46',
      },
      {
        id: 52558,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Mission quickly game agree worry.',
        timestamp: '2023-09-27T20:58:17',
      },
    ],
  },
  {
    id: 177,
    name: 'Nice Bujía',
    stock: 27,
    price: 61.17,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 88319,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Leslie Collins',
        timestamp: '2024-03-19T13:52:47',
      },
      {
        id: 28188,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Higgins-Rivers',
        timestamp: '2024-07-10T07:30:11',
      },
      {
        id: 96214,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Become know letter attack officer society easy.',
        timestamp: '2023-06-15T08:39:21',
      },
      {
        id: 61998,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Larson Group',
        timestamp: '2023-09-02T02:40:16',
      },
    ],
  },
  {
    id: 178,
    name: 'Since Filtro',
    stock: 49,
    price: 195.8,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 22145,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Hold up east sign.',
        timestamp: '2024-02-28T17:48:35',
      },
      {
        id: 23108,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gregory-Allen',
        timestamp: '2023-09-03T19:42:12',
      },
    ],
  },
  {
    id: 179,
    name: 'Before Amortiguador',
    stock: 81,
    price: 752.91,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 79887,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Bit professor member town whom exactly less.',
        timestamp: '2025-02-11T09:31:51',
      },
      {
        id: 90414,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Meeting staff feeling.',
        timestamp: '2023-07-31T02:53:55',
      },
      {
        id: 50834,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Training skin stuff.',
        timestamp: '2024-04-02T13:20:17',
      },
      {
        id: 61241,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Murray-Rose',
        timestamp: '2024-04-07T13:31:04',
      },
    ],
  },
  {
    id: 180,
    name: 'Other Pastilla',
    stock: 98,
    price: 454.51,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 4047,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Whole popular boy put.',
        timestamp: '2023-09-07T05:36:33',
      },
    ],
  },
  {
    id: 181,
    name: 'Evening Amortiguador',
    stock: 78,
    price: 543.57,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 63324,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Carla Swanson',
        timestamp: '2024-03-30T00:22:58',
      },
      {
        id: 94404,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Want safe foot past perform.',
        timestamp: '2025-02-28T21:38:32',
      },
    ],
  },
  {
    id: 182,
    name: 'Green Alternador',
    stock: 49,
    price: 76.46,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 1069,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rodriguez-Thompson',
        timestamp: '2024-03-30T13:39:35',
      },
    ],
  },
  {
    id: 183,
    name: 'Collection Amortiguador',
    stock: 25,
    price: 387.67,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 56294,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wagner Group',
        timestamp: '2024-09-20T13:58:57',
      },
      {
        id: 91211,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Establish common morning population statement force add.',
        timestamp: '2025-01-22T15:34:18',
      },
      {
        id: 58904,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: From inside responsibility edge seek executive include.',
        timestamp: '2023-08-15T00:46:52',
      },
      {
        id: 36815,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Type trouble cold easy sea feel.',
        timestamp: '2023-07-22T22:06:59',
      },
    ],
  },
  {
    id: 184,
    name: 'Whether Amortiguador',
    stock: 7,
    price: 531.24,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 21182,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Pham Inc',
        timestamp: '2023-08-29T23:30:05',
      },
      {
        id: 72666,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Chris Brown',
        timestamp: '2024-01-07T01:47:30',
      },
      {
        id: 61176,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Linda Cook',
        timestamp: '2023-05-29T21:42:53',
      },
      {
        id: 99476,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Police believe fear candidate of include off research.',
        timestamp: '2024-03-09T18:31:12',
      },
      {
        id: 56195,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christopher Hunter',
        timestamp: '2023-11-29T04:03:30',
      },
    ],
  },
  {
    id: 185,
    name: 'Pay Filtro',
    stock: 71,
    price: 308.67,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 25140,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christina Jones',
        timestamp: '2023-09-02T22:46:49',
      },
      {
        id: 72991,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith-Phillips',
        timestamp: '2024-12-05T19:54:36',
      },
      {
        id: 82546,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jonathon Bridges',
        timestamp: '2024-02-01T16:12:50',
      },
      {
        id: 65330,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thomas PLC',
        timestamp: '2023-07-14T23:47:30',
      },
      {
        id: 50972,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Judith Gray',
        timestamp: '2024-01-14T03:50:22',
      },
    ],
  },
  {
    id: 186,
    name: 'About Bujía',
    stock: 39,
    price: 732.86,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 54277,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Graves, Simpson and Hopkins',
        timestamp: '2024-07-19T11:10:42',
      },
      {
        id: 40430,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Madison Jenkins',
        timestamp: '2023-06-06T04:02:35',
      },
    ],
  },
  {
    id: 187,
    name: 'Around Amortiguador',
    stock: 11,
    price: 735.34,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 62195,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Deep behavior film best art pressure goal.',
        timestamp: '2023-10-12T09:52:33',
      },
      {
        id: 96270,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Cup remain environment face.',
        timestamp: '2024-10-30T08:48:35',
      },
      {
        id: 14123,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Randall-Gardner',
        timestamp: '2024-02-18T01:38:53',
      },
      {
        id: 79301,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: As degree year performance heart able professional.',
        timestamp: '2023-08-15T01:31:24',
      },
    ],
  },
  {
    id: 188,
    name: 'Serious Pastilla',
    stock: 97,
    price: 640.53,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 7235,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Require machine movie character today machine.',
        timestamp: '2023-09-22T08:52:42',
      },
      {
        id: 95286,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Chair effort since cover little.',
        timestamp: '2023-08-02T15:17:26',
      },
    ],
  },
  {
    id: 189,
    name: 'Several Filtro',
    stock: 86,
    price: 272.67,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 32746,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Through stay way PM understand.',
        timestamp: '2024-04-27T06:16:02',
      },
    ],
  },
  {
    id: 190,
    name: 'Left Alternador',
    stock: 28,
    price: 734.51,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 30582,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michelle Lee',
        timestamp: '2024-05-24T03:44:28',
      },
      {
        id: 59588,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Return hit blood blood knowledge Congress help.',
        timestamp: '2023-12-30T11:02:28',
      },
      {
        id: 2163,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Model in avoid start ago.',
        timestamp: '2023-10-28T13:12:55',
      },
      {
        id: 37132,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Douglas Rasmussen',
        timestamp: '2024-09-13T22:40:16',
      },
    ],
  },
  {
    id: 191,
    name: 'Involve Filtro',
    stock: 33,
    price: 83.46,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 43635,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Aaron Nixon',
        timestamp: '2025-04-05T19:14:33',
      },
      {
        id: 96915,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Erika Haley',
        timestamp: '2023-09-01T22:53:58',
      },
    ],
  },
  {
    id: 192,
    name: 'Forget Pastilla',
    stock: 53,
    price: 96.81,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 99736,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams, Brown and Rice',
        timestamp: '2023-08-18T21:30:22',
      },
      {
        id: 65911,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Member politics represent myself very remember.',
        timestamp: '2024-06-04T16:42:31',
      },
      {
        id: 84569,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lisa Simmons',
        timestamp: '2024-05-12T20:42:53',
      },
    ],
  },
  {
    id: 193,
    name: 'Stuff Amortiguador',
    stock: 17,
    price: 115.47,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 45523,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Bad explain term international citizen up.',
        timestamp: '2024-08-18T21:55:26',
      },
      {
        id: 75344,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lee, Harper and Simmons',
        timestamp: '2024-05-01T17:50:11',
      },
      {
        id: 27429,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bailey, Smith and Logan',
        timestamp: '2023-05-05T23:19:28',
      },
    ],
  },
  {
    id: 194,
    name: 'Case Filtro',
    stock: 46,
    price: 445.6,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 3226,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Allen PLC',
        timestamp: '2023-11-11T06:23:38',
      },
      {
        id: 24953,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cynthia Lutz',
        timestamp: '2025-03-19T20:39:38',
      },
    ],
  },
  {
    id: 195,
    name: 'We Bujía',
    stock: 54,
    price: 470.97,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 66698,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Scott-Knight',
        timestamp: '2024-12-28T18:54:19',
      },
      {
        id: 65991,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Window daughter beautiful street.',
        timestamp: '2023-11-27T16:25:46',
      },
      {
        id: 9555,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Robert Barton',
        timestamp: '2024-09-21T09:26:28',
      },
      {
        id: 44559,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Yeah magazine culture dog alone help yourself.',
        timestamp: '2024-09-11T23:50:42',
      },
    ],
  },
  {
    id: 196,
    name: 'Necessary Pastilla',
    stock: 26,
    price: 983.8,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 54706,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Julia Hernandez',
        timestamp: '2024-11-15T03:21:55',
      },
      {
        id: 39843,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Veronica Lee',
        timestamp: '2023-04-29T01:45:02',
      },
      {
        id: 85955,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Ready condition fine while certainly rate.',
        timestamp: '2024-04-29T11:37:16',
      },
      {
        id: 74438,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Nor under purpose deep business suddenly option.',
        timestamp: '2025-03-31T14:59:41',
      },
      {
        id: 88707,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: New meeting agreement five century owner total.',
        timestamp: '2023-08-18T20:25:27',
      },
    ],
  },
  {
    id: 197,
    name: 'Like Amortiguador',
    stock: 95,
    price: 446.88,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 45253,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davis-Foley',
        timestamp: '2025-01-12T12:29:30',
      },
    ],
  },
  {
    id: 198,
    name: 'Three Bujía',
    stock: 91,
    price: 618.47,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 29696,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jennifer Johnson',
        timestamp: '2023-07-25T01:26:44',
      },
    ],
  },
  {
    id: 199,
    name: 'Foot Bujía',
    stock: 98,
    price: 709.79,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 21497,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Yourself however local.',
        timestamp: '2023-10-06T14:06:13',
      },
      {
        id: 90577,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Ever light own sing brother note.',
        timestamp: '2024-12-19T01:04:13',
      },
      {
        id: 8349,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gentry LLC',
        timestamp: '2024-01-10T17:30:54',
      },
      {
        id: 48257,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mercado, Flores and Barnes',
        timestamp: '2025-04-23T01:08:12',
      },
      {
        id: 3831,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bender-Macdonald',
        timestamp: '2024-11-27T18:04:27',
      },
    ],
  },
  {
    id: 200,
    name: 'Some Filtro',
    stock: 53,
    price: 423.44,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 44318,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Turner-Williams',
        timestamp: '2023-07-30T18:20:48',
      },
      {
        id: 14670,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Peterson',
        timestamp: '2024-01-20T16:51:54',
      },
      {
        id: 59413,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Behind whole next beyond man.',
        timestamp: '2025-02-19T12:47:43',
      },
      {
        id: 51869,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wilkins, Spencer and Miller',
        timestamp: '2024-08-05T04:08:31',
      },
    ],
  },
  {
    id: 201,
    name: 'Leader Filtro',
    stock: 100,
    price: 449.28,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 30133,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Address method writer stock police seem.',
        timestamp: '2023-09-01T20:34:07',
      },
      {
        id: 93647,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Peterson Group',
        timestamp: '2023-12-25T04:56:27',
      },
    ],
  },
  {
    id: 202,
    name: 'Chair Alternador',
    stock: 100,
    price: 732.15,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 86871,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ronald Garcia',
        timestamp: '2023-08-25T05:19:29',
      },
    ],
  },
  {
    id: 203,
    name: 'Indicate Alternador',
    stock: 69,
    price: 123.49,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 81598,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Santos',
        timestamp: '2025-04-18T03:19:06',
      },
      {
        id: 82954,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Vang, Roberts and Ross',
        timestamp: '2023-12-13T19:32:47',
      },
      {
        id: 15218,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Crystal Wright',
        timestamp: '2024-03-17T17:36:00',
      },
      {
        id: 10844,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Church',
        timestamp: '2024-07-21T19:33:03',
      },
      {
        id: 81399,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Listen question through consider development hospital.',
        timestamp: '2024-11-06T18:04:36',
      },
    ],
  },
  {
    id: 204,
    name: 'Image Alternador',
    stock: 21,
    price: 704.91,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 91061,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Terrance Jones',
        timestamp: '2023-07-05T15:09:33',
      },
      {
        id: 67611,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mays, Miller and Pope',
        timestamp: '2025-04-09T13:07:36',
      },
      {
        id: 21388,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rodriguez-Medina',
        timestamp: '2023-05-31T14:21:30',
      },
      {
        id: 58614,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown Group',
        timestamp: '2023-05-24T00:42:44',
      },
    ],
  },
  {
    id: 205,
    name: 'Everything Amortiguador',
    stock: 12,
    price: 786.52,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 70476,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Perform will man true.',
        timestamp: '2024-05-16T05:28:53',
      },
      {
        id: 10057,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jacob Williams',
        timestamp: '2025-03-05T04:42:18',
      },
    ],
  },
  {
    id: 206,
    name: 'Occur Pastilla',
    stock: 66,
    price: 222.01,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 59168,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Anthony Foster',
        timestamp: '2025-01-05T03:29:39',
      },
      {
        id: 88431,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Win simply easy tough number throughout sport.',
        timestamp: '2023-08-31T21:43:36',
      },
    ],
  },
  {
    id: 207,
    name: 'Open Filtro',
    stock: 59,
    price: 269.39,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 66484,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Cup benefit town.',
        timestamp: '2024-01-21T10:25:07',
      },
    ],
  },
  {
    id: 208,
    name: 'In Bujía',
    stock: 55,
    price: 709.72,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 58598,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Baldwin-Cox',
        timestamp: '2024-10-18T01:59:51',
      },
      {
        id: 51139,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tracy Hall',
        timestamp: '2025-03-26T00:58:50',
      },
    ],
  },
  {
    id: 209,
    name: 'Moment Alternador',
    stock: 18,
    price: 401.39,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 72123,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: All mention director rest international at late difference.',
        timestamp: '2025-02-03T17:08:13',
      },
      {
        id: 67261,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Or beat whatever my choose human.',
        timestamp: '2023-09-08T23:58:44',
      },
      {
        id: 11414,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ruiz-Ibarra',
        timestamp: '2024-12-03T13:43:37',
      },
      {
        id: 86746,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Much camera kitchen onto sort song ahead.',
        timestamp: '2023-12-04T13:10:02',
      },
      {
        id: 4163,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Darrell Rogers',
        timestamp: '2024-01-18T16:31:34',
      },
    ],
  },
  {
    id: 210,
    name: 'Mouth Pastilla',
    stock: 7,
    price: 667.11,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 57179,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Gas father pick sister least rise who.',
        timestamp: '2024-11-18T12:29:39',
      },
      {
        id: 73060,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Tyler LLC',
        timestamp: '2023-07-09T08:53:24',
      },
      {
        id: 98323,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Robert Hawkins',
        timestamp: '2024-02-22T13:35:39',
      },
      {
        id: 83736,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Donald Williams',
        timestamp: '2023-09-27T06:35:33',
      },
      {
        id: 80042,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Charge decade hour conference method listen.',
        timestamp: '2023-11-22T11:42:37',
      },
    ],
  },
  {
    id: 211,
    name: 'Analysis Pastilla',
    stock: 89,
    price: 256.44,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 54986,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Feeling fly mother your tax memory.',
        timestamp: '2024-06-21T02:40:40',
      },
      {
        id: 54865,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cynthia Deleon',
        timestamp: '2023-07-19T01:20:42',
      },
    ],
  },
  {
    id: 212,
    name: 'Have Alternador',
    stock: 4,
    price: 275.61,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 59614,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Feeling various decade stand.',
        timestamp: '2023-12-24T13:01:08',
      },
    ],
  },
  {
    id: 213,
    name: 'Situation Bujía',
    stock: 78,
    price: 861.75,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 3243,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Consider parent help mouth.',
        timestamp: '2025-01-17T13:04:07',
      },
      {
        id: 96625,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Charles Butler',
        timestamp: '2023-10-15T05:43:50',
      },
      {
        id: 51135,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ramirez-Rivera',
        timestamp: '2024-12-29T04:54:51',
      },
      {
        id: 41449,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Officer indicate song away charge.',
        timestamp: '2024-12-01T03:46:12',
      },
    ],
  },
  {
    id: 214,
    name: 'Total Amortiguador',
    stock: 58,
    price: 69.75,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 11253,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Alone dinner difficult mission phone early trade.',
        timestamp: '2024-09-02T18:15:21',
      },
      {
        id: 13104,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kimberly Larsen',
        timestamp: '2024-12-13T07:34:52',
      },
      {
        id: 45279,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor May Ltd',
        timestamp: '2025-02-05T09:54:02',
      },
    ],
  },
  {
    id: 215,
    name: 'Word Filtro',
    stock: 4,
    price: 543.81,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 53026,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Food strategy single compare far.',
        timestamp: '2025-03-28T01:32:42',
      },
      {
        id: 46555,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gregory, Cuevas and Fry',
        timestamp: '2024-10-15T15:26:56',
      },
      {
        id: 19186,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Listen teach character physical your firm player.',
        timestamp: '2023-05-22T06:09:51',
      },
      {
        id: 83897,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Garcia-Lamb',
        timestamp: '2024-05-31T12:52:04',
      },
      {
        id: 38087,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Military treatment five lay wear stuff.',
        timestamp: '2023-05-02T16:15:37',
      },
    ],
  },
  {
    id: 216,
    name: 'Read Filtro',
    stock: 10,
    price: 985.89,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 50402,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bailey, Davis and Lane',
        timestamp: '2023-05-30T16:57:53',
      },
      {
        id: 88022,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: May meeting put moment action room people.',
        timestamp: '2023-10-01T21:50:27',
      },
      {
        id: 29580,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hunter-Hoover',
        timestamp: '2025-01-16T08:33:23',
      },
      {
        id: 94403,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kevin Wilson',
        timestamp: '2024-06-12T12:51:49',
      },
      {
        id: 22498,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Arthur Clark',
        timestamp: '2023-06-24T23:27:27',
      },
    ],
  },
  {
    id: 217,
    name: 'National Pastilla',
    stock: 32,
    price: 204.8,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 45692,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Robert Patel',
        timestamp: '2024-08-13T14:34:07',
      },
      {
        id: 59459,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Faith Wright',
        timestamp: '2023-11-15T03:10:07',
      },
      {
        id: 69488,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Simply than even different value growth.',
        timestamp: '2023-08-01T21:11:40',
      },
      {
        id: 19464,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Laugh personal evening senior ball memory college.',
        timestamp: '2023-08-11T11:02:35',
      },
    ],
  },
  {
    id: 218,
    name: 'Entire Filtro',
    stock: 42,
    price: 756.03,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 53718,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Kennedy, Arnold and Ray',
        timestamp: '2024-11-20T16:17:11',
      },
      {
        id: 50598,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wilkerson Inc',
        timestamp: '2024-01-14T07:20:48',
      },
      {
        id: 30920,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sarah Black',
        timestamp: '2024-08-14T13:56:00',
      },
    ],
  },
  {
    id: 219,
    name: 'According Filtro',
    stock: 81,
    price: 505.1,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 58799,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Success fish recognize situation occur should financial.',
        timestamp: '2024-12-15T03:05:43',
      },
    ],
  },
  {
    id: 220,
    name: 'Significant Pastilla',
    stock: 15,
    price: 300.25,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 24695,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Evening economic energy me.',
        timestamp: '2023-07-13T21:32:11',
      },
      {
        id: 58949,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Beyond sit adult Mr.',
        timestamp: '2024-08-18T16:43:55',
      },
      {
        id: 65875,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Hodges',
        timestamp: '2024-02-01T19:35:01',
      },
      {
        id: 22481,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Maintain quickly himself edge drive deep nearly.',
        timestamp: '2023-12-05T21:39:50',
      },
      {
        id: 75101,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Craig Klein',
        timestamp: '2024-08-04T10:59:42',
      },
    ],
  },
  {
    id: 221,
    name: 'Instead Amortiguador',
    stock: 97,
    price: 317.11,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 36476,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Mrs environment prove run step.',
        timestamp: '2024-10-27T20:45:23',
      },
      {
        id: 9418,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Wright, Thornton and Roberts',
        timestamp: '2024-05-29T22:51:07',
      },
      {
        id: 23542,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Senior law magazine between heart.',
        timestamp: '2024-11-20T21:07:17',
      },
      {
        id: 360,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown, Kaiser and Parker',
        timestamp: '2025-01-13T22:30:26',
      },
    ],
  },
  {
    id: 222,
    name: 'Standard Pastilla',
    stock: 47,
    price: 732.39,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 96174,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Pollard, Simon and Hawkins',
        timestamp: '2023-10-12T04:37:27',
      },
      {
        id: 94072,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Although story play example which laugh.',
        timestamp: '2024-12-25T13:45:11',
      },
    ],
  },
  {
    id: 223,
    name: 'Doctor Filtro',
    stock: 5,
    price: 292.14,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 71388,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Woods and Sons',
        timestamp: '2025-04-05T03:21:49',
      },
      {
        id: 31703,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Daniels',
        timestamp: '2025-04-19T01:44:08',
      },
      {
        id: 84620,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dixon-Diaz',
        timestamp: '2024-02-20T15:08:37',
      },
      {
        id: 62079,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Salazar, Brown and Pacheco',
        timestamp: '2024-07-03T06:48:23',
      },
    ],
  },
  {
    id: 224,
    name: 'Soon Filtro',
    stock: 93,
    price: 500.51,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 7927,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Decide however try mother.',
        timestamp: '2025-03-21T20:01:42',
      },
      {
        id: 37960,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Gomez',
        timestamp: '2024-09-03T21:45:05',
      },
      {
        id: 86880,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dennis Mcdonald',
        timestamp: '2025-01-20T00:28:31',
      },
      {
        id: 75875,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Site father to dog.',
        timestamp: '2023-09-08T07:45:40',
      },
    ],
  },
  {
    id: 225,
    name: 'Bring Filtro',
    stock: 24,
    price: 646.63,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 76486,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Gregory Johnson',
        timestamp: '2025-01-20T17:59:57',
      },
      {
        id: 3033,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wagner, Ward and Carpenter',
        timestamp: '2023-05-17T19:24:57',
      },
      {
        id: 53340,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Crime individual too agreement.',
        timestamp: '2024-05-15T17:29:24',
      },
    ],
  },
  {
    id: 226,
    name: 'Able Amortiguador',
    stock: 80,
    price: 947.46,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 664,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Darrell Gay',
        timestamp: '2024-11-22T13:53:19',
      },
      {
        id: 21930,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Roberta Contreras',
        timestamp: '2024-07-29T10:02:29',
      },
      {
        id: 12698,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hobbs-Marquez',
        timestamp: '2024-04-28T06:33:38',
      },
      {
        id: 11263,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thomas Group',
        timestamp: '2024-04-01T01:37:40',
      },
    ],
  },
  {
    id: 227,
    name: 'Resource Filtro',
    stock: 53,
    price: 984.9,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 69786,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tanya Jensen',
        timestamp: '2024-04-09T02:32:22',
      },
      {
        id: 80755,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Matthew Wilson',
        timestamp: '2025-02-05T17:03:27',
      },
      {
        id: 973,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith, Murray and Adams',
        timestamp: '2023-10-13T10:38:45',
      },
      {
        id: 43260,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Neil Herrera',
        timestamp: '2023-11-07T10:39:05',
      },
      {
        id: 57489,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Option return letter man.',
        timestamp: '2023-11-05T23:07:59',
      },
    ],
  },
  {
    id: 228,
    name: 'Open Bujía',
    stock: 62,
    price: 230.62,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 51449,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Simply clear security discussion court.',
        timestamp: '2024-03-05T10:08:32',
      },
      {
        id: 23647,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Randall Ward',
        timestamp: '2023-08-25T23:20:54',
      },
      {
        id: 26959,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Toward seek down tree.',
        timestamp: '2025-03-15T06:54:38',
      },
      {
        id: 7647,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Next fact study star paper.',
        timestamp: '2023-05-28T17:25:24',
      },
      {
        id: 55369,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Mouth central summer approach organization light guess hold.',
        timestamp: '2024-07-30T20:19:41',
      },
    ],
  },
  {
    id: 229,
    name: 'Respond Pastilla',
    stock: 46,
    price: 353.05,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 92707,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Three might material our outside much.',
        timestamp: '2023-12-16T12:38:30',
      },
      {
        id: 40915,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Organization serve off lawyer.',
        timestamp: '2025-03-06T12:04:41',
      },
    ],
  },
  {
    id: 230,
    name: 'Maintain Pastilla',
    stock: 67,
    price: 165.16,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 91347,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Elliott Ltd',
        timestamp: '2024-10-02T13:06:16',
      },
      {
        id: 9421,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Foreign responsibility itself third so.',
        timestamp: '2023-12-20T10:33:52',
      },
      {
        id: 80701,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ramirez, Perez and Tran',
        timestamp: '2024-08-21T17:35:56',
      },
      {
        id: 20875,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Harmon-Kelley',
        timestamp: '2024-12-08T08:15:01',
      },
      {
        id: 84199,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Derrick Riddle',
        timestamp: '2024-10-19T11:02:51',
      },
    ],
  },
  {
    id: 231,
    name: 'Yard Alternador',
    stock: 62,
    price: 773.27,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 98891,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Seven actually candidate former model stand.',
        timestamp: '2023-12-11T22:54:02',
      },
      {
        id: 89327,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Houston',
        timestamp: '2023-07-07T00:12:51',
      },
      {
        id: 25584,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Heidi Brooks',
        timestamp: '2023-06-24T21:32:15',
      },
    ],
  },
  {
    id: 232,
    name: 'Race Filtro',
    stock: 7,
    price: 797.74,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 9261,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Green-Mason',
        timestamp: '2023-11-27T08:10:50',
      },
      {
        id: 76029,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wheeler PLC',
        timestamp: '2024-09-25T12:18:39',
      },
      {
        id: 87076,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martinez LLC',
        timestamp: '2024-04-05T15:05:55',
      },
      {
        id: 7734,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perez, Maddox and Braun',
        timestamp: '2023-06-22T08:09:08',
      },
    ],
  },
  {
    id: 233,
    name: 'Lose Alternador',
    stock: 24,
    price: 417.35,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 59315,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Glover-Warner',
        timestamp: '2024-06-10T11:40:41',
      },
    ],
  },
  {
    id: 234,
    name: 'Garden Filtro',
    stock: 81,
    price: 196.03,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 43348,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Way leave tend radio very difficult expert.',
        timestamp: '2023-05-10T07:43:15',
      },
      {
        id: 51593,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Wide budget me debate matter.',
        timestamp: '2023-08-23T05:50:43',
      },
      {
        id: 69500,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Steve Morris',
        timestamp: '2025-02-14T21:30:42',
      },
      {
        id: 57163,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Caldwell',
        timestamp: '2023-08-07T20:06:44',
      },
      {
        id: 99851,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Julie Ramsey',
        timestamp: '2023-09-15T19:26:48',
      },
    ],
  },
  {
    id: 235,
    name: 'Board Pastilla',
    stock: 63,
    price: 312.16,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 21095,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Walk real activity painting house.',
        timestamp: '2024-11-22T17:41:03',
      },
      {
        id: 68721,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Nguyen, Jennings and Jackson',
        timestamp: '2023-10-22T00:18:17',
      },
      {
        id: 51606,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Cup goal wide power some morning.',
        timestamp: '2023-10-08T06:41:38',
      },
      {
        id: 47665,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown, Foley and Flores',
        timestamp: '2023-07-01T13:45:30',
      },
      {
        id: 42814,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dwayne Good',
        timestamp: '2024-08-05T06:14:30',
      },
    ],
  },
  {
    id: 236,
    name: 'Wrong Amortiguador',
    stock: 41,
    price: 388.28,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 69204,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Scott Gonzalez',
        timestamp: '2024-07-23T15:30:07',
      },
      {
        id: 7564,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sexton Inc',
        timestamp: '2025-03-28T01:22:38',
      },
      {
        id: 48259,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Pm official support share middle next bank.',
        timestamp: '2023-06-20T12:27:52',
      },
      {
        id: 40295,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Melissa Roach',
        timestamp: '2025-04-01T08:22:21',
      },
      {
        id: 67798,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Health around get top.',
        timestamp: '2025-04-17T04:54:47',
      },
    ],
  },
  {
    id: 237,
    name: 'Probably Filtro',
    stock: 75,
    price: 97.68,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 36928,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ashley Adams',
        timestamp: '2024-04-06T13:58:31',
      },
      {
        id: 33470,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dr. Jessica Blankenship',
        timestamp: '2024-08-01T22:56:01',
      },
      {
        id: 66357,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Visit memory never property.',
        timestamp: '2024-09-01T19:17:42',
      },
      {
        id: 4057,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones LLC',
        timestamp: '2024-09-17T01:36:11',
      },
    ],
  },
  {
    id: 238,
    name: 'Card Bujía',
    stock: 0,
    price: 296.89,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 50616,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Firm on environment black alone.',
        timestamp: '2024-03-25T03:34:30',
      },
      {
        id: 11837,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ford-Castro',
        timestamp: '2023-12-11T01:24:36',
      },
      {
        id: 72416,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams PLC',
        timestamp: '2024-07-30T02:39:32',
      },
      {
        id: 23740,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Her letter blood market table teacher.',
        timestamp: '2024-02-17T20:00:59',
      },
      {
        id: 96514,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Benton PLC',
        timestamp: '2025-01-31T22:05:14',
      },
    ],
  },
  {
    id: 239,
    name: 'Worker Bujía',
    stock: 65,
    price: 194.67,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 27141,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davis, George and Williams',
        timestamp: '2024-06-24T20:25:48',
      },
      {
        id: 98957,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Hand low everything speech agreement early these these.',
        timestamp: '2024-07-21T09:59:02',
      },
      {
        id: 45593,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: College Mrs bill often whether city point.',
        timestamp: '2025-03-21T14:38:02',
      },
      {
        id: 25668,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jeanette Robinson',
        timestamp: '2024-10-07T00:38:29',
      },
      {
        id: 41925,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Karen Cuevas',
        timestamp: '2025-03-15T15:16:06',
      },
    ],
  },
  {
    id: 240,
    name: 'Improve Bujía',
    stock: 2,
    price: 558.76,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 83023,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Himself measure lay probably newspaper talk enough.',
        timestamp: '2023-05-05T02:03:50',
      },
      {
        id: 40516,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Opportunity attack born do point maintain.',
        timestamp: '2024-01-21T10:13:39',
      },
      {
        id: 86435,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tony Harrison',
        timestamp: '2023-10-01T12:15:08',
      },
      {
        id: 46241,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Matthew Burgess',
        timestamp: '2024-01-28T22:44:52',
      },
    ],
  },
  {
    id: 241,
    name: 'Themselves Alternador',
    stock: 14,
    price: 74.48,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 17995,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lee, Padilla and Dyer',
        timestamp: '2024-07-10T01:24:24',
      },
      {
        id: 95992,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Relationship until south good.',
        timestamp: '2024-02-07T09:58:56',
      },
      {
        id: 36556,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ryan Zhang',
        timestamp: '2024-01-23T07:20:19',
      },
      {
        id: 79813,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Garcia Inc',
        timestamp: '2023-12-30T02:52:26',
      },
    ],
  },
  {
    id: 242,
    name: 'Along Filtro',
    stock: 81,
    price: 919.23,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 29804,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith PLC',
        timestamp: '2024-12-05T11:57:09',
      },
    ],
  },
  {
    id: 243,
    name: 'Enough Bujía',
    stock: 61,
    price: 243.66,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 3653,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miller, Brown and Beard',
        timestamp: '2024-11-11T03:21:38',
      },
      {
        id: 35190,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Seth Merritt',
        timestamp: '2023-12-08T00:09:29',
      },
      {
        id: 24275,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Lawyer talk can game debate major above.',
        timestamp: '2023-12-17T00:32:31',
      },
      {
        id: 43119,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Banks Ltd',
        timestamp: '2023-11-04T09:56:18',
      },
    ],
  },
  {
    id: 244,
    name: 'Because Amortiguador',
    stock: 48,
    price: 544.27,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 27196,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Orr-Garcia',
        timestamp: '2023-12-18T10:33:55',
      },
      {
        id: 58021,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lee Turner',
        timestamp: '2024-08-16T22:04:09',
      },
    ],
  },
  {
    id: 245,
    name: 'Many Alternador',
    stock: 20,
    price: 344.65,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 56369,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jeffrey Ortiz',
        timestamp: '2025-03-25T17:48:34',
      },
    ],
  },
  {
    id: 246,
    name: 'Herself Alternador',
    stock: 40,
    price: 149.13,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 48944,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brandy Martinez',
        timestamp: '2023-12-05T15:04:55',
      },
      {
        id: 89572,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brittney Curtis',
        timestamp: '2025-01-14T07:15:07',
      },
    ],
  },
  {
    id: 247,
    name: 'Truth Alternador',
    stock: 97,
    price: 524.95,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 46858,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Keith Young',
        timestamp: '2024-09-10T07:37:50',
      },
      {
        id: 81379,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Sister Democrat well ball growth.',
        timestamp: '2025-03-23T19:08:37',
      },
      {
        id: 4294,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Valerie Nash',
        timestamp: '2023-06-02T12:36:35',
      },
      {
        id: 50349,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: East race each stage.',
        timestamp: '2024-11-26T18:11:08',
      },
      {
        id: 71326,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Wood',
        timestamp: '2024-02-09T15:02:44',
      },
    ],
  },
  {
    id: 248,
    name: 'Direction Filtro',
    stock: 23,
    price: 827.39,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 25982,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Of without main among cause.',
        timestamp: '2023-08-20T20:49:55',
      },
    ],
  },
  {
    id: 249,
    name: 'Her Pastilla',
    stock: 56,
    price: 231.02,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 89541,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Roman',
        timestamp: '2023-05-15T18:37:46',
      },
      {
        id: 27118,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ward-Solomon',
        timestamp: '2023-10-04T09:21:56',
      },
      {
        id: 11485,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perry Inc',
        timestamp: '2023-05-11T17:08:39',
      },
      {
        id: 91415,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Stephens, Flores and Wilson',
        timestamp: '2024-02-13T14:14:22',
      },
    ],
  },
  {
    id: 250,
    name: 'Also Bujía',
    stock: 66,
    price: 265.82,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 79121,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lee-Kim',
        timestamp: '2024-10-02T02:51:17',
      },
      {
        id: 64805,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sanchez and Sons',
        timestamp: '2024-09-14T16:58:55',
      },
      {
        id: 44618,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor King, Williams and Moore',
        timestamp: '2024-05-18T18:54:09',
      },
      {
        id: 82612,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Believe growth any after.',
        timestamp: '2024-11-18T09:28:27',
      },
      {
        id: 3329,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Bring follow knowledge step option rate.',
        timestamp: '2023-11-04T02:04:00',
      },
    ],
  },
  {
    id: 251,
    name: 'Before Bujía',
    stock: 44,
    price: 168.98,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 36814,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Beltran Ltd',
        timestamp: '2023-08-12T18:03:15',
      },
      {
        id: 32779,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brianna Stanley',
        timestamp: '2023-12-26T13:31:31',
      },
      {
        id: 44741,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kathy David',
        timestamp: '2023-07-26T11:39:42',
      },
      {
        id: 7301,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hebert-Scott',
        timestamp: '2023-12-05T02:38:02',
      },
      {
        id: 70038,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jennifer Cardenas',
        timestamp: '2024-08-10T03:29:36',
      },
    ],
  },
  {
    id: 252,
    name: 'Manage Pastilla',
    stock: 20,
    price: 329.88,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 69461,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Robert Hudson',
        timestamp: '2023-11-18T08:41:06',
      },
    ],
  },
  {
    id: 253,
    name: 'Light Amortiguador',
    stock: 41,
    price: 850.15,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 79743,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Maria Smith',
        timestamp: '2023-12-09T16:03:08',
      },
      {
        id: 23994,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ryan Gray',
        timestamp: '2024-06-02T05:30:28',
      },
    ],
  },
  {
    id: 254,
    name: 'Time Filtro',
    stock: 26,
    price: 90.18,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 45336,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Four wrong none ahead lawyer.',
        timestamp: '2024-07-30T11:30:48',
      },
      {
        id: 95081,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Terry, Knight and Pham',
        timestamp: '2024-03-26T11:34:38',
      },
    ],
  },
  {
    id: 255,
    name: 'Tough Pastilla',
    stock: 59,
    price: 618.45,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 90977,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dorsey-Mckenzie',
        timestamp: '2024-05-04T14:19:08',
      },
      {
        id: 26621,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Nelson, Brown and Johnson',
        timestamp: '2024-05-03T03:56:56',
      },
      {
        id: 51294,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hansen LLC',
        timestamp: '2024-01-22T08:04:01',
      },
    ],
  },
  {
    id: 256,
    name: 'Can Amortiguador',
    stock: 43,
    price: 609.43,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 68237,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mary Moore',
        timestamp: '2024-12-28T00:40:27',
      },
      {
        id: 74590,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gonzalez PLC',
        timestamp: '2024-10-10T13:04:13',
      },
      {
        id: 15022,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Pacheco',
        timestamp: '2024-03-18T17:50:28',
      },
      {
        id: 56951,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Represent vote address foreign public heart.',
        timestamp: '2024-06-12T00:08:59',
      },
    ],
  },
  {
    id: 257,
    name: 'Happen Pastilla',
    stock: 51,
    price: 802.87,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 8273,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Charles Mclean',
        timestamp: '2024-09-18T04:50:04',
      },
    ],
  },
  {
    id: 258,
    name: 'Business Alternador',
    stock: 53,
    price: 385.58,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 31469,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Suzanne Smith',
        timestamp: '2024-03-19T20:24:11',
      },
    ],
  },
  {
    id: 259,
    name: 'Nice Amortiguador',
    stock: 99,
    price: 526.88,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 34402,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Eileen Greene',
        timestamp: '2023-08-18T09:50:57',
      },
      {
        id: 35056,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Macias-Sanchez',
        timestamp: '2023-06-27T22:58:29',
      },
    ],
  },
  {
    id: 260,
    name: 'Seat Alternador',
    stock: 37,
    price: 211.44,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 22343,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Theresa Brown',
        timestamp: '2024-05-17T09:50:37',
      },
      {
        id: 16653,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Edwards PLC',
        timestamp: '2025-02-02T05:31:09',
      },
    ],
  },
  {
    id: 261,
    name: 'Carry Filtro',
    stock: 58,
    price: 429.51,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 91587,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Megan Moss',
        timestamp: '2025-02-11T14:58:01',
      },
      {
        id: 44301,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Robinson, Harris and Williams',
        timestamp: '2023-07-09T10:54:19',
      },
      {
        id: 65379,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Clark, Wright and Lawson',
        timestamp: '2023-05-14T09:55:32',
      },
    ],
  },
  {
    id: 262,
    name: 'Executive Pastilla',
    stock: 62,
    price: 106.97,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 80239,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith, Hickman and Alvarez',
        timestamp: '2024-12-08T20:44:48',
      },
      {
        id: 4498,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Finish include heavy the.',
        timestamp: '2024-03-09T09:19:16',
      },
      {
        id: 39920,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Samantha Wells',
        timestamp: '2023-10-26T00:25:50',
      },
      {
        id: 49113,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrew Sanders',
        timestamp: '2025-03-01T09:33:56',
      },
      {
        id: 18430,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ferguson-Henry',
        timestamp: '2024-11-04T20:00:27',
      },
    ],
  },
  {
    id: 263,
    name: 'Arm Alternador',
    stock: 18,
    price: 896.53,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 80703,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Travis Hansen',
        timestamp: '2023-10-28T19:35:11',
      },
      {
        id: 39441,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Official analysis officer carry.',
        timestamp: '2024-05-30T08:54:15',
      },
    ],
  },
  {
    id: 264,
    name: 'Cost Alternador',
    stock: 66,
    price: 787.8,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 30177,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cynthia Sexton',
        timestamp: '2024-01-24T04:42:50',
      },
      {
        id: 7796,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Mccarthy',
        timestamp: '2023-07-17T22:00:42',
      },
    ],
  },
  {
    id: 265,
    name: 'Practice Bujía',
    stock: 39,
    price: 313.8,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 6545,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dawn Davis',
        timestamp: '2025-02-23T15:23:56',
      },
      {
        id: 51226,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Gregory Jones',
        timestamp: '2025-04-01T02:48:39',
      },
      {
        id: 88602,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lambert LLC',
        timestamp: '2023-09-17T23:42:41',
      },
    ],
  },
  {
    id: 266,
    name: 'Smile Bujía',
    stock: 64,
    price: 838.46,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 73370,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kimberly Welch',
        timestamp: '2024-06-23T16:22:32',
      },
      {
        id: 10295,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Full might student.',
        timestamp: '2023-12-03T03:34:58',
      },
      {
        id: 55456,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Todd Newton',
        timestamp: '2025-01-28T16:28:37',
      },
      {
        id: 98182,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ramirez-Wright',
        timestamp: '2023-06-29T01:58:04',
      },
    ],
  },
  {
    id: 267,
    name: 'Three Bujía',
    stock: 5,
    price: 179.49,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 41748,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Barnett-Brown',
        timestamp: '2024-03-07T01:33:08',
      },
    ],
  },
  {
    id: 268,
    name: 'Popular Bujía',
    stock: 15,
    price: 56.46,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 81298,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brennan-Murray',
        timestamp: '2024-11-03T02:46:23',
      },
    ],
  },
  {
    id: 269,
    name: 'Nice Amortiguador',
    stock: 40,
    price: 162.97,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 16224,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sparks, Wilson and Salas',
        timestamp: '2023-05-17T23:14:47',
      },
    ],
  },
  {
    id: 270,
    name: 'Charge Filtro',
    stock: 98,
    price: 131.62,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 92471,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brian Livingston',
        timestamp: '2024-03-07T14:14:31',
      },
      {
        id: 82370,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hall-Avery',
        timestamp: '2023-07-08T00:42:03',
      },
      {
        id: 58240,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Pass behavior building future relationship would education.',
        timestamp: '2023-11-10T04:18:35',
      },
      {
        id: 14807,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Stephanie Owens',
        timestamp: '2023-09-23T10:45:34',
      },
    ],
  },
  {
    id: 271,
    name: 'Lot Alternador',
    stock: 75,
    price: 519.28,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 29122,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Include identify street thus enjoy health central.',
        timestamp: '2024-08-20T10:05:41',
      },
      {
        id: 45993,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jenkins LLC',
        timestamp: '2024-04-20T02:39:32',
      },
    ],
  },
  {
    id: 272,
    name: 'Student Alternador',
    stock: 94,
    price: 455.07,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 61574,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Value western page Mrs.',
        timestamp: '2024-09-29T20:42:36',
      },
    ],
  },
  {
    id: 273,
    name: 'Who Pastilla',
    stock: 2,
    price: 194.37,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 16175,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones-Henry',
        timestamp: '2023-12-31T00:37:29',
      },
    ],
  },
  {
    id: 274,
    name: 'Environmental Bujía',
    stock: 91,
    price: 370.42,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 39564,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Barnes-Thomas',
        timestamp: '2024-04-19T11:02:14',
      },
    ],
  },
  {
    id: 275,
    name: 'Author Alternador',
    stock: 90,
    price: 284.78,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 80769,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Katherine Jimenez',
        timestamp: '2024-09-17T04:59:34',
      },
      {
        id: 75562,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michelle Taylor',
        timestamp: '2024-07-09T02:15:24',
      },
      {
        id: 90020,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Carry seek wife standard suffer.',
        timestamp: '2023-04-28T22:50:26',
      },
      {
        id: 93490,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Pattern anyone development.',
        timestamp: '2024-01-05T08:25:06',
      },
      {
        id: 91790,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Thomas Wright',
        timestamp: '2024-01-26T20:46:02',
      },
    ],
  },
  {
    id: 276,
    name: 'Group Bujía',
    stock: 13,
    price: 757.12,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 30584,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: May state laugh tough less raise almost.',
        timestamp: '2025-02-08T02:31:05',
      },
      {
        id: 66524,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ruiz-Hammond',
        timestamp: '2024-05-15T02:54:41',
      },
      {
        id: 35223,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bentley and Sons',
        timestamp: '2025-02-21T04:41:15',
      },
      {
        id: 49904,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Zimmerman, Pacheco and Cox',
        timestamp: '2024-05-01T14:29:09',
      },
      {
        id: 78978,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Le, Brooks and Cook',
        timestamp: '2024-06-22T00:58:04',
      },
    ],
  },
  {
    id: 277,
    name: 'See Alternador',
    stock: 93,
    price: 876.69,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 35745,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Wife resource alone notice national visit live.',
        timestamp: '2023-07-01T06:13:42',
      },
      {
        id: 60423,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Eat without direction increase.',
        timestamp: '2024-08-07T19:25:12',
      },
      {
        id: 16548,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cook-Cole',
        timestamp: '2023-10-02T04:34:27',
      },
      {
        id: 29714,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gomez Inc',
        timestamp: '2024-11-29T02:33:52',
      },
    ],
  },
  {
    id: 278,
    name: 'Short Filtro',
    stock: 11,
    price: 679.96,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 18125,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente James Marsh',
        timestamp: '2024-05-23T06:48:39',
      },
      {
        id: 67567,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Holmes-Green',
        timestamp: '2025-03-13T04:02:55',
      },
      {
        id: 87309,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Diaz Inc',
        timestamp: '2023-12-12T17:37:20',
      },
    ],
  },
  {
    id: 279,
    name: 'Newspaper Bujía',
    stock: 71,
    price: 150.26,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 22798,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bryan Spears',
        timestamp: '2024-12-29T01:21:55',
      },
      {
        id: 48415,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Riggs',
        timestamp: '2023-08-19T09:59:35',
      },
    ],
  },
  {
    id: 280,
    name: 'Perform Filtro',
    stock: 32,
    price: 85.42,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 17172,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Walker, Wilson and Sanders',
        timestamp: '2023-09-05T02:00:12',
      },
      {
        id: 77484,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Public somebody know tree.',
        timestamp: '2024-09-20T10:51:33',
      },
      {
        id: 47248,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amber Rodriguez',
        timestamp: '2024-05-08T21:19:58',
      },
      {
        id: 10046,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Generation site go believe.',
        timestamp: '2023-10-25T00:42:46',
      },
      {
        id: 28356,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cooper PLC',
        timestamp: '2024-04-28T23:20:44',
      },
    ],
  },
  {
    id: 281,
    name: 'Phone Filtro',
    stock: 88,
    price: 103.76,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 25555,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Debate pattern democratic west tree film nice.',
        timestamp: '2024-05-03T01:24:18',
      },
      {
        id: 77471,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Arnold, Nelson and Mayer',
        timestamp: '2024-12-15T00:06:07',
      },
      {
        id: 11335,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Leblanc, Walker and Ramos',
        timestamp: '2024-10-16T15:31:41',
      },
      {
        id: 90343,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mathews, Vang and Molina',
        timestamp: '2024-01-28T00:32:20',
      },
    ],
  },
  {
    id: 282,
    name: 'Feeling Bujía',
    stock: 29,
    price: 406.99,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 92275,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Campos-Farrell',
        timestamp: '2025-03-08T17:42:28',
      },
    ],
  },
  {
    id: 283,
    name: 'Form Amortiguador',
    stock: 14,
    price: 871.25,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 15296,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Eric Scott',
        timestamp: '2024-10-12T12:51:20',
      },
      {
        id: 33895,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Nguyen, Wood and Norman',
        timestamp: '2025-03-17T14:54:38',
      },
      {
        id: 34477,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Farmer PLC',
        timestamp: '2024-05-08T15:27:40',
      },
    ],
  },
  {
    id: 284,
    name: 'My Filtro',
    stock: 56,
    price: 553.17,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 85407,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Student may protect who worker key.',
        timestamp: '2023-11-03T13:36:12',
      },
    ],
  },
  {
    id: 285,
    name: 'Clearly Pastilla',
    stock: 37,
    price: 101.93,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 1817,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Richard-Robles',
        timestamp: '2024-09-22T05:09:29',
      },
      {
        id: 16963,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor White PLC',
        timestamp: '2024-03-31T02:42:10',
      },
      {
        id: 93502,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Subject set despite good.',
        timestamp: '2023-08-31T00:34:14',
      },
    ],
  },
  {
    id: 286,
    name: 'Above Amortiguador',
    stock: 20,
    price: 209.98,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 73186,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor May Inc',
        timestamp: '2025-02-18T19:20:24',
      },
      {
        id: 5537,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Crystal Williamson',
        timestamp: '2025-02-09T08:32:19',
      },
    ],
  },
  {
    id: 287,
    name: 'Somebody Amortiguador',
    stock: 3,
    price: 424.03,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 68208,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Norma Davenport',
        timestamp: '2025-01-18T13:43:37',
      },
      {
        id: 80395,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Describe sing or government wish and politics.',
        timestamp: '2023-07-02T18:11:22',
      },
      {
        id: 30420,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Price',
        timestamp: '2024-01-29T04:04:37',
      },
      {
        id: 14884,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Barnes-Washington',
        timestamp: '2023-10-15T11:40:53',
      },
    ],
  },
  {
    id: 288,
    name: 'Walk Alternador',
    stock: 74,
    price: 397.09,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 39873,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Above buy here reach kind situation.',
        timestamp: '2024-03-11T13:44:23',
      },
      {
        id: 92879,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Ramirez',
        timestamp: '2023-04-29T15:11:16',
      },
    ],
  },
  {
    id: 289,
    name: 'Site Filtro',
    stock: 100,
    price: 822.09,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 84452,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jefferson-Moore',
        timestamp: '2023-09-09T13:06:48',
      },
      {
        id: 30109,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nathan Anderson',
        timestamp: '2023-09-27T15:31:15',
      },
      {
        id: 34546,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Payne, Mcintyre and Simpson',
        timestamp: '2025-01-09T05:33:07',
      },
      {
        id: 79979,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brandon Chang',
        timestamp: '2023-08-24T05:08:16',
      },
    ],
  },
  {
    id: 290,
    name: 'Student Amortiguador',
    stock: 93,
    price: 865.74,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 94160,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Butler-Stevenson',
        timestamp: '2024-04-21T23:58:37',
      },
      {
        id: 24779,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Lopez',
        timestamp: '2023-06-05T07:36:15',
      },
    ],
  },
  {
    id: 291,
    name: 'Piece Filtro',
    stock: 28,
    price: 263.03,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 49753,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Juarez-Francis',
        timestamp: '2023-05-22T10:05:55',
      },
      {
        id: 46607,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amanda Rivera',
        timestamp: '2024-04-08T22:28:00',
      },
      {
        id: 50829,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Within kind wait.',
        timestamp: '2024-08-26T01:33:56',
      },
    ],
  },
  {
    id: 292,
    name: 'Thought Filtro',
    stock: 33,
    price: 513.18,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 46609,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Banks, Hayes and Green',
        timestamp: '2024-12-13T10:06:36',
      },
      {
        id: 24135,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Morrison, Boone and Baker',
        timestamp: '2025-01-30T09:58:33',
      },
      {
        id: 84385,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Donald Suarez',
        timestamp: '2025-03-07T23:15:20',
      },
      {
        id: 13596,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Truth organization evening different.',
        timestamp: '2024-03-05T06:36:15',
      },
    ],
  },
  {
    id: 293,
    name: 'Magazine Bujía',
    stock: 4,
    price: 178.16,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 13092,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ortiz-Lee',
        timestamp: '2023-12-05T12:45:19',
      },
      {
        id: 81481,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Less open north place truth although.',
        timestamp: '2024-11-22T04:40:26',
      },
    ],
  },
  {
    id: 294,
    name: 'Seem Pastilla',
    stock: 6,
    price: 338.73,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 96534,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Personal miss college price them.',
        timestamp: '2024-04-18T14:11:28',
      },
      {
        id: 14590,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Movie new word shoulder mean choice.',
        timestamp: '2024-04-14T02:49:31',
      },
      {
        id: 53756,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Realize pattern best produce.',
        timestamp: '2023-11-08T15:45:55',
      },
      {
        id: 21658,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Book finish government use quickly.',
        timestamp: '2024-04-14T13:03:40',
      },
      {
        id: 2889,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jason Thomas',
        timestamp: '2025-03-24T12:13:13',
      },
    ],
  },
  {
    id: 295,
    name: 'Industry Bujía',
    stock: 42,
    price: 805.14,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 886,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Meet rest conference health avoid.',
        timestamp: '2025-01-08T12:29:31',
      },
      {
        id: 63108,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bean-Singh',
        timestamp: '2024-05-24T09:52:33',
      },
      {
        id: 99924,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Director sound set paper talk six.',
        timestamp: '2023-08-10T12:39:03',
      },
    ],
  },
  {
    id: 296,
    name: 'Money Pastilla',
    stock: 27,
    price: 995.11,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 69764,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Present less also war.',
        timestamp: '2024-12-15T18:52:37',
      },
      {
        id: 4358,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones, Foley and White',
        timestamp: '2024-08-15T17:28:38',
      },
    ],
  },
  {
    id: 297,
    name: 'Nation Bujía',
    stock: 63,
    price: 596.77,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 7894,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rodriguez Ltd',
        timestamp: '2024-05-05T14:00:35',
      },
      {
        id: 86600,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hunter Group',
        timestamp: '2024-08-18T18:58:24',
      },
    ],
  },
  {
    id: 298,
    name: 'Feel Alternador',
    stock: 78,
    price: 162.64,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 72565,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Director popular hair they sit rock fill region.',
        timestamp: '2024-08-28T23:54:48',
      },
      {
        id: 77622,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dillon-Price',
        timestamp: '2024-04-29T05:59:54',
      },
    ],
  },
  {
    id: 299,
    name: 'Go Alternador',
    stock: 66,
    price: 958.59,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 44345,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Garcia, Calderon and Carney',
        timestamp: '2024-12-31T18:17:17',
      },
      {
        id: 37985,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christina Mathis',
        timestamp: '2023-12-22T21:58:07',
      },
    ],
  },
  {
    id: 300,
    name: 'Experience Alternador',
    stock: 97,
    price: 418.33,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 44639,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andre Jordan',
        timestamp: '2023-06-22T02:54:57',
      },
      {
        id: 30711,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wells Ltd',
        timestamp: '2024-03-25T06:50:51',
      },
    ],
  },
  {
    id: 301,
    name: 'Sign Amortiguador',
    stock: 23,
    price: 561.95,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 19734,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Anne Gibson',
        timestamp: '2023-10-21T11:32:59',
      },
      {
        id: 86462,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fleming-Gordon',
        timestamp: '2024-05-26T19:52:17',
      },
      {
        id: 52358,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Gilbert',
        timestamp: '2024-08-07T06:36:58',
      },
      {
        id: 56988,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Enough arm employee way beautiful.',
        timestamp: '2024-08-29T14:06:57',
      },
      {
        id: 2671,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Abbott, Salazar and Ortiz',
        timestamp: '2025-02-17T14:48:44',
      },
    ],
  },
  {
    id: 302,
    name: 'Under Bujía',
    stock: 3,
    price: 624.16,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 62561,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Snow, Rivera and Bean',
        timestamp: '2024-08-14T20:00:33',
      },
    ],
  },
  {
    id: 303,
    name: 'Drop Alternador',
    stock: 88,
    price: 482.04,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 65975,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Fill happy treatment capital.',
        timestamp: '2024-06-23T00:42:11',
      },
      {
        id: 4564,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Peter Escobar',
        timestamp: '2024-09-03T05:28:51',
      },
      {
        id: 79891,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Rhonda Eaton',
        timestamp: '2025-01-16T13:02:35',
      },
    ],
  },
  {
    id: 304,
    name: 'Last Filtro',
    stock: 37,
    price: 539.79,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 9112,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fox, Mathews and Thompson',
        timestamp: '2024-06-18T09:45:00',
      },
      {
        id: 8087,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Understand together Mr sort.',
        timestamp: '2023-09-13T16:06:55',
      },
      {
        id: 54742,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith and Sons',
        timestamp: '2024-03-20T05:46:49',
      },
      {
        id: 18289,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Door allow get should describe take cost.',
        timestamp: '2023-06-01T19:24:35',
      },
    ],
  },
  {
    id: 305,
    name: 'Like Alternador',
    stock: 91,
    price: 116.83,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 60921,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Curry',
        timestamp: '2024-04-12T10:52:40',
      },
      {
        id: 24109,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Crime list network network away week natural.',
        timestamp: '2024-10-01T23:17:04',
      },
    ],
  },
  {
    id: 306,
    name: 'Situation Bujía',
    stock: 80,
    price: 485.05,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 33354,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kyle Barrett',
        timestamp: '2024-08-29T22:00:52',
      },
    ],
  },
  {
    id: 307,
    name: 'Team Pastilla',
    stock: 54,
    price: 579.12,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 48770,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Participant garden understand sign population.',
        timestamp: '2023-06-14T11:11:13',
      },
    ],
  },
  {
    id: 308,
    name: 'Down Filtro',
    stock: 87,
    price: 248.77,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 30448,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Moore, Young and Perez',
        timestamp: '2025-01-18T22:09:03',
      },
      {
        id: 15387,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Memory past family call.',
        timestamp: '2023-09-05T23:41:03',
      },
      {
        id: 6748,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mason PLC',
        timestamp: '2024-02-15T01:41:34',
      },
    ],
  },
  {
    id: 309,
    name: 'Protect Bujía',
    stock: 47,
    price: 461.49,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 96611,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cochran Inc',
        timestamp: '2025-02-01T18:12:50',
      },
      {
        id: 48504,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: World budget goal soldier.',
        timestamp: '2025-01-21T01:15:32',
      },
      {
        id: 49338,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Marks',
        timestamp: '2023-10-18T18:25:42',
      },
      {
        id: 43659,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Edward Saunders',
        timestamp: '2024-04-05T15:12:39',
      },
      {
        id: 79875,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Bailey',
        timestamp: '2024-05-15T13:37:00',
      },
    ],
  },
  {
    id: 310,
    name: 'General Bujía',
    stock: 40,
    price: 415.4,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 63814,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Laura Lam',
        timestamp: '2023-05-05T09:08:29',
      },
    ],
  },
  {
    id: 311,
    name: 'Cold Amortiguador',
    stock: 85,
    price: 625.16,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 90690,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Sense laugh involve head upon floor bar.',
        timestamp: '2023-11-21T13:34:55',
      },
      {
        id: 10417,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith-Mann',
        timestamp: '2024-12-23T13:03:34',
      },
      {
        id: 95347,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lewis, Rogers and Hicks',
        timestamp: '2024-11-08T00:57:46',
      },
      {
        id: 31689,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: News support executive establish recently stay choose.',
        timestamp: '2024-05-16T16:48:26',
      },
      {
        id: 64149,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Reality wrong place much.',
        timestamp: '2024-04-01T21:14:32',
      },
    ],
  },
  {
    id: 312,
    name: 'Education Filtro',
    stock: 100,
    price: 652.84,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 32717,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ramirez, Walsh and Allen',
        timestamp: '2024-03-23T18:17:58',
      },
      {
        id: 40714,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nicholas Richardson',
        timestamp: '2024-07-10T01:24:58',
      },
      {
        id: 86971,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Second laugh pull attack agent mouth.',
        timestamp: '2023-05-10T09:37:01',
      },
      {
        id: 60992,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Palmer, Fox and Martin',
        timestamp: '2024-02-19T05:04:23',
      },
    ],
  },
  {
    id: 313,
    name: 'Beat Pastilla',
    stock: 85,
    price: 459.37,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 40944,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Rita Vaughn',
        timestamp: '2024-12-07T09:30:56',
      },
      {
        id: 41386,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Madeline Rodriguez',
        timestamp: '2024-10-27T12:13:09',
      },
    ],
  },
  {
    id: 314,
    name: 'Message Filtro',
    stock: 1,
    price: 509.56,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 64099,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith Group',
        timestamp: '2025-01-31T14:05:04',
      },
      {
        id: 40710,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jordan Ltd',
        timestamp: '2025-04-09T03:24:38',
      },
      {
        id: 46733,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Perhaps him threat individual tax party hotel administration.',
        timestamp: '2024-01-18T04:08:33',
      },
    ],
  },
  {
    id: 315,
    name: 'Degree Amortiguador',
    stock: 42,
    price: 782.14,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 10397,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Clearly strategy bag event.',
        timestamp: '2024-03-28T01:05:55',
      },
    ],
  },
  {
    id: 316,
    name: 'Stay Alternador',
    stock: 37,
    price: 87.33,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 92835,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kaitlyn Taylor',
        timestamp: '2024-02-28T16:05:52',
      },
      {
        id: 52733,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Director mean phone cause station sell respond.',
        timestamp: '2024-06-10T08:27:34',
      },
    ],
  },
  {
    id: 317,
    name: 'Must Bujía',
    stock: 90,
    price: 883.35,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 12628,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Pamela Neal',
        timestamp: '2024-01-10T01:58:36',
      },
      {
        id: 23478,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Mason',
        timestamp: '2025-03-11T23:23:16',
      },
    ],
  },
  {
    id: 318,
    name: 'Support Bujía',
    stock: 74,
    price: 80.25,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 56076,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perkins Ltd',
        timestamp: '2024-12-29T17:28:15',
      },
    ],
  },
  {
    id: 319,
    name: 'General Bujía',
    stock: 61,
    price: 452.29,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 45715,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Miss Sydney Gibson',
        timestamp: '2023-11-07T04:26:11',
      },
      {
        id: 34805,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: In form yet know other.',
        timestamp: '2024-04-07T19:09:39',
      },
      {
        id: 18088,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bill Park',
        timestamp: '2025-01-19T18:51:31',
      },
      {
        id: 79741,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Noble-Davis',
        timestamp: '2024-07-20T12:16:42',
      },
      {
        id: 44160,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jackson Carlson',
        timestamp: '2024-07-09T11:37:16',
      },
    ],
  },
  {
    id: 320,
    name: 'Hospital Pastilla',
    stock: 14,
    price: 630.89,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 66795,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fisher-Curtis',
        timestamp: '2025-01-18T10:54:30',
      },
      {
        id: 79454,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Williams',
        timestamp: '2024-08-05T15:26:13',
      },
      {
        id: 13315,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Kelly PLC',
        timestamp: '2024-02-28T18:11:02',
      },
      {
        id: 8834,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sheila Price',
        timestamp: '2024-06-28T05:42:37',
      },
    ],
  },
  {
    id: 321,
    name: 'Everything Pastilla',
    stock: 21,
    price: 827.39,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 83847,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Follow walk smile behind land soldier prevent.',
        timestamp: '2024-10-19T02:18:35',
      },
      {
        id: 60103,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Emma Daniel',
        timestamp: '2024-08-31T12:14:10',
      },
    ],
  },
  {
    id: 322,
    name: 'Full Pastilla',
    stock: 68,
    price: 961.61,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 82661,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Up race two become crime.',
        timestamp: '2024-07-02T20:07:28',
      },
      {
        id: 5883,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Aaron Moore',
        timestamp: '2024-06-30T01:22:10',
      },
      {
        id: 6193,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Ground picture point training them I western.',
        timestamp: '2024-08-05T17:02:38',
      },
    ],
  },
  {
    id: 323,
    name: 'Very Alternador',
    stock: 98,
    price: 230.37,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 92289,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Melanie Smith',
        timestamp: '2024-04-20T00:35:03',
      },
      {
        id: 87754,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Palmer Inc',
        timestamp: '2023-10-24T02:52:29',
      },
    ],
  },
  {
    id: 324,
    name: 'Phone Alternador',
    stock: 87,
    price: 706.27,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 19084,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Our paper thing occur.',
        timestamp: '2023-07-08T22:25:43',
      },
      {
        id: 81077,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Report pay author.',
        timestamp: '2024-10-11T21:45:20',
      },
      {
        id: 48029,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Henderson Ltd',
        timestamp: '2023-06-11T07:44:29',
      },
      {
        id: 30660,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thornton PLC',
        timestamp: '2023-12-15T02:54:19',
      },
    ],
  },
  {
    id: 325,
    name: 'Job Amortiguador',
    stock: 88,
    price: 633.54,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 43512,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kathy Carlson',
        timestamp: '2024-06-29T04:22:41',
      },
      {
        id: 4233,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Individual put itself let base country.',
        timestamp: '2024-02-16T10:04:37',
      },
      {
        id: 69740,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Chad Alvarez',
        timestamp: '2024-06-20T17:20:06',
      },
    ],
  },
  {
    id: 326,
    name: 'Some Bujía',
    stock: 3,
    price: 980.09,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 58523,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Staff thank fall politics go then.',
        timestamp: '2024-10-23T21:13:38',
      },
      {
        id: 76991,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mack Group',
        timestamp: '2024-01-28T09:58:46',
      },
      {
        id: 33694,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Would trial Republican product face.',
        timestamp: '2024-05-21T12:21:54',
      },
      {
        id: 55965,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jason Taylor',
        timestamp: '2023-06-05T23:36:00',
      },
      {
        id: 96444,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bailey Roberts',
        timestamp: '2023-05-05T13:15:58',
      },
    ],
  },
  {
    id: 327,
    name: 'Significant Pastilla',
    stock: 45,
    price: 783.65,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 68688,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Laura Green',
        timestamp: '2024-07-19T04:27:04',
      },
      {
        id: 51049,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Howard',
        timestamp: '2024-10-15T12:26:02',
      },
      {
        id: 57297,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor White Inc',
        timestamp: '2024-08-07T16:30:52',
      },
      {
        id: 68933,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Point national management begin education mention whom.',
        timestamp: '2023-11-20T12:02:26',
      },
    ],
  },
  {
    id: 328,
    name: 'Audience Amortiguador',
    stock: 58,
    price: 460.56,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 47340,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mark Berry',
        timestamp: '2023-08-11T05:20:04',
      },
      {
        id: 11331,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Read color business power.',
        timestamp: '2024-10-05T02:11:23',
      },
      {
        id: 99220,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Picture list despite attack threat.',
        timestamp: '2024-07-18T23:04:25',
      },
      {
        id: 49079,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Flores Inc',
        timestamp: '2024-01-08T05:09:20',
      },
      {
        id: 66671,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lee Inc',
        timestamp: '2023-08-30T15:34:47',
      },
    ],
  },
  {
    id: 329,
    name: 'Community Bujía',
    stock: 3,
    price: 759.05,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 39811,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Barnes',
        timestamp: '2025-01-22T02:03:22',
      },
    ],
  },
  {
    id: 330,
    name: 'Think Filtro',
    stock: 64,
    price: 985.26,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 60688,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Two stand social bed.',
        timestamp: '2023-07-14T16:07:50',
      },
      {
        id: 82204,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jasmine Whitney',
        timestamp: '2024-08-25T06:57:34',
      },
      {
        id: 93803,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dr. James Hall',
        timestamp: '2024-07-08T19:53:46',
      },
      {
        id: 21358,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Chance system memory administration somebody else material.',
        timestamp: '2023-05-12T21:43:31',
      },
    ],
  },
  {
    id: 331,
    name: 'Reflect Bujía',
    stock: 36,
    price: 864.09,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 47592,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Rachel Fisher',
        timestamp: '2025-04-18T16:00:22',
      },
      {
        id: 75989,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Annette Rodriguez',
        timestamp: '2024-08-30T14:41:14',
      },
      {
        id: 95270,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Tough none deal project statement according beautiful.',
        timestamp: '2023-10-28T05:06:56',
      },
      {
        id: 69887,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Sport early nation those still.',
        timestamp: '2023-08-31T08:41:57',
      },
      {
        id: 57798,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Growth indeed water eight boy beat majority.',
        timestamp: '2024-02-10T23:03:34',
      },
    ],
  },
  {
    id: 332,
    name: 'Religious Amortiguador',
    stock: 82,
    price: 374.02,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 88143,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Diaz Inc',
        timestamp: '2025-04-01T01:24:54',
      },
      {
        id: 27956,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Greer Ltd',
        timestamp: '2024-11-11T03:07:26',
      },
      {
        id: 22139,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Behavior production into through reduce.',
        timestamp: '2023-05-22T00:53:41',
      },
    ],
  },
  {
    id: 333,
    name: 'Available Bujía',
    stock: 31,
    price: 126.72,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 93700,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mr. Isaac French',
        timestamp: '2023-08-15T13:28:12',
      },
      {
        id: 73512,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Away trial woman prepare machine air.',
        timestamp: '2023-07-27T10:12:09',
      },
      {
        id: 10439,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown Ltd',
        timestamp: '2024-03-02T16:07:51',
      },
    ],
  },
  {
    id: 334,
    name: 'Whom Filtro',
    stock: 5,
    price: 379.56,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 57469,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cooper, Burnett and Stewart',
        timestamp: '2024-08-03T10:23:32',
      },
      {
        id: 52351,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: House among task story.',
        timestamp: '2024-06-13T13:50:59',
      },
      {
        id: 51599,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Johnson Inc',
        timestamp: '2023-12-22T22:20:37',
      },
      {
        id: 6916,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alexander Gonzalez',
        timestamp: '2024-04-04T15:03:49',
      },
    ],
  },
  {
    id: 335,
    name: 'Sense Amortiguador',
    stock: 13,
    price: 919.39,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 96198,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Aaron Carpenter',
        timestamp: '2023-06-19T13:54:36',
      },
      {
        id: 90140,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Steven Gomez',
        timestamp: '2023-05-29T13:29:22',
      },
    ],
  },
  {
    id: 336,
    name: 'Character Amortiguador',
    stock: 98,
    price: 158.18,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 99279,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christina Davis',
        timestamp: '2023-09-15T13:29:13',
      },
      {
        id: 27480,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Curtis and Sons',
        timestamp: '2024-08-18T05:56:00',
      },
      {
        id: 39307,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michelle Pierce',
        timestamp: '2025-01-06T22:36:15',
      },
    ],
  },
  {
    id: 337,
    name: 'Business Alternador',
    stock: 58,
    price: 292.51,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 77964,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Stephanie Byrd',
        timestamp: '2023-07-31T14:32:39',
      },
      {
        id: 3399,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ashley Flores',
        timestamp: '2024-05-10T13:28:59',
      },
    ],
  },
  {
    id: 338,
    name: 'Stage Bujía',
    stock: 52,
    price: 395.47,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 58933,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Acosta Ltd',
        timestamp: '2024-08-17T22:54:37',
      },
      {
        id: 51117,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Paul Stevenson',
        timestamp: '2024-09-05T23:14:33',
      },
      {
        id: 15837,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Animal loss save box chair modern develop effect.',
        timestamp: '2024-11-30T04:51:33',
      },
    ],
  },
  {
    id: 339,
    name: 'Week Bujía',
    stock: 3,
    price: 591.51,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 82637,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gutierrez-Williams',
        timestamp: '2023-04-26T17:32:21',
      },
      {
        id: 62765,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cruz PLC',
        timestamp: '2024-08-14T15:16:31',
      },
      {
        id: 44382,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Keith Jordan',
        timestamp: '2025-02-17T17:03:06',
      },
      {
        id: 14891,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Parker-Price',
        timestamp: '2024-10-23T13:57:59',
      },
      {
        id: 15272,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Graham PLC',
        timestamp: '2025-01-02T19:36:23',
      },
    ],
  },
  {
    id: 340,
    name: 'Subject Amortiguador',
    stock: 66,
    price: 103.47,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 62312,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Piece bag reflect man.',
        timestamp: '2023-11-21T16:07:03',
      },
      {
        id: 50363,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miller PLC',
        timestamp: '2024-03-01T06:58:46',
      },
      {
        id: 25713,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Allen-Watson',
        timestamp: '2024-04-15T19:54:16',
      },
      {
        id: 395,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lewis-Dean',
        timestamp: '2024-07-18T12:03:48',
      },
      {
        id: 56809,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Wind figure ten thank chair.',
        timestamp: '2023-07-16T14:12:31',
      },
    ],
  },
  {
    id: 341,
    name: 'High Filtro',
    stock: 12,
    price: 115.0,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 7769,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Owens',
        timestamp: '2023-11-21T05:10:13',
      },
      {
        id: 24947,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Environmental these add.',
        timestamp: '2024-02-15T02:38:10',
      },
      {
        id: 11894,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Great want order own.',
        timestamp: '2024-07-09T16:28:50',
      },
      {
        id: 79035,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martinez, Scott and Johnson',
        timestamp: '2024-06-01T10:08:14',
      },
      {
        id: 9337,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Score listen important seem.',
        timestamp: '2025-03-09T14:51:11',
      },
    ],
  },
  {
    id: 342,
    name: 'Ground Pastilla',
    stock: 11,
    price: 913.3,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 39878,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Rhodes',
        timestamp: '2025-03-16T12:58:10',
      },
      {
        id: 70463,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente April Pugh',
        timestamp: '2025-04-04T18:51:36',
      },
      {
        id: 82947,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Weight market past create.',
        timestamp: '2024-06-22T18:42:28',
      },
    ],
  },
  {
    id: 343,
    name: 'Fact Pastilla',
    stock: 13,
    price: 686.55,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 93807,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brian Jones',
        timestamp: '2023-07-21T20:54:39',
      },
      {
        id: 12296,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bobby Jackson',
        timestamp: '2024-12-27T00:15:39',
      },
      {
        id: 65963,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Devin Wong',
        timestamp: '2024-03-20T18:14:05',
      },
      {
        id: 40475,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Understand discover share almost reality.',
        timestamp: '2023-08-30T10:53:51',
      },
      {
        id: 20993,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams-Faulkner',
        timestamp: '2024-05-01T16:51:22',
      },
    ],
  },
  {
    id: 344,
    name: 'Road Filtro',
    stock: 72,
    price: 868.79,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 91039,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Beth Mercer',
        timestamp: '2025-01-08T06:18:58',
      },
      {
        id: 85629,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Robinson-Reynolds',
        timestamp: '2025-03-27T15:37:19',
      },
      {
        id: 59641,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Perhaps easy organization follow conference.',
        timestamp: '2023-10-31T02:14:13',
      },
      {
        id: 91913,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Nor reveal attorney push.',
        timestamp: '2025-01-29T21:02:43',
      },
    ],
  },
  {
    id: 345,
    name: 'Their Filtro',
    stock: 74,
    price: 726.94,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 96248,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alexander Hill',
        timestamp: '2024-06-24T05:02:01',
      },
      {
        id: 55563,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Scott, Coleman and Thomas',
        timestamp: '2024-07-10T02:32:07',
      },
    ],
  },
  {
    id: 346,
    name: 'Show Pastilla',
    stock: 35,
    price: 850.29,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 41121,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Robert Woods',
        timestamp: '2024-07-22T22:32:27',
      },
      {
        id: 1123,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Susan Church',
        timestamp: '2023-05-31T17:13:31',
      },
      {
        id: 21170,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Race forward former significant last land.',
        timestamp: '2024-12-06T06:29:59',
      },
    ],
  },
  {
    id: 347,
    name: 'Various Alternador',
    stock: 55,
    price: 707.95,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 99989,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Thomas Lee',
        timestamp: '2023-08-29T18:01:33',
      },
      {
        id: 28497,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jack Hall',
        timestamp: '2024-06-03T21:23:41',
      },
      {
        id: 84760,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Decision begin goal add use help.',
        timestamp: '2023-09-08T13:26:23',
      },
      {
        id: 80685,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Campaign partner remain responsibility interview.',
        timestamp: '2023-05-22T11:37:45',
      },
      {
        id: 24655,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Patton-James',
        timestamp: '2025-04-13T22:32:18',
      },
    ],
  },
  {
    id: 348,
    name: 'Pretty Bujía',
    stock: 95,
    price: 359.39,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 85741,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith, Turner and Dawson',
        timestamp: '2025-01-13T04:39:30',
      },
    ],
  },
  {
    id: 349,
    name: 'Best Alternador',
    stock: 71,
    price: 101.87,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 87326,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Respond many up test he idea.',
        timestamp: '2024-04-09T19:03:19',
      },
      {
        id: 56007,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Horn-Martin',
        timestamp: '2025-01-20T08:28:39',
      },
      {
        id: 92594,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Order management stop father perhaps.',
        timestamp: '2024-06-29T13:05:52',
      },
      {
        id: 3559,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Kim-Bush',
        timestamp: '2024-06-05T23:16:54',
      },
      {
        id: 31004,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Suggest meeting air rest unit.',
        timestamp: '2023-12-11T17:02:35',
      },
    ],
  },
  {
    id: 350,
    name: 'Dog Pastilla',
    stock: 69,
    price: 999.17,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 78714,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Webb, Palmer and Coffey',
        timestamp: '2023-05-23T06:05:52',
      },
    ],
  },
  {
    id: 351,
    name: 'Tree Filtro',
    stock: 12,
    price: 71.76,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 50595,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Reed-Dougherty',
        timestamp: '2024-09-16T06:58:30',
      },
      {
        id: 82864,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: There major experience evening sense.',
        timestamp: '2024-02-26T14:38:30',
      },
      {
        id: 30422,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Leave wall age decision how skill.',
        timestamp: '2024-12-24T07:06:48',
      },
      {
        id: 69605,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Thus marriage those detail country pretty top.',
        timestamp: '2024-04-25T11:26:28',
      },
      {
        id: 45089,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown and Sons',
        timestamp: '2023-07-20T03:42:15',
      },
    ],
  },
  {
    id: 352,
    name: 'Fact Amortiguador',
    stock: 70,
    price: 61.69,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 81603,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Rebecca Golden',
        timestamp: '2024-11-23T20:30:12',
      },
      {
        id: 48871,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Frank Gates',
        timestamp: '2023-10-08T00:51:34',
      },
      {
        id: 26360,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Darren Ferrell',
        timestamp: '2024-07-06T22:58:47',
      },
    ],
  },
  {
    id: 353,
    name: 'Trade Amortiguador',
    stock: 89,
    price: 972.77,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 72788,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Heather Wood',
        timestamp: '2023-08-29T21:52:29',
      },
    ],
  },
  {
    id: 354,
    name: 'Wall Filtro',
    stock: 45,
    price: 819.64,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 61075,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: She service speak share occur network deal certainly.',
        timestamp: '2024-01-08T05:36:28',
      },
      {
        id: 7378,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Recognize more too off institution.',
        timestamp: '2023-09-04T09:07:39',
      },
    ],
  },
  {
    id: 355,
    name: 'Forget Amortiguador',
    stock: 70,
    price: 365.32,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 19602,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kathryn Brown',
        timestamp: '2025-02-14T03:34:22',
      },
      {
        id: 28022,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown Ltd',
        timestamp: '2023-09-04T07:48:07',
      },
      {
        id: 88668,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Herman-Jones',
        timestamp: '2023-05-19T07:58:11',
      },
      {
        id: 83837,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Spears and Sons',
        timestamp: '2023-09-25T15:11:27',
      },
    ],
  },
  {
    id: 356,
    name: 'This Alternador',
    stock: 55,
    price: 454.9,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 75233,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lisa Ho',
        timestamp: '2023-12-27T12:06:26',
      },
      {
        id: 55267,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Patrick Harmon',
        timestamp: '2024-07-28T20:36:32',
      },
      {
        id: 70380,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Test cold look subject.',
        timestamp: '2025-01-24T18:49:05',
      },
      {
        id: 92751,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Against court series late how hair.',
        timestamp: '2024-03-15T02:16:27',
      },
      {
        id: 1615,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Carter PLC',
        timestamp: '2023-08-18T12:30:10',
      },
    ],
  },
  {
    id: 357,
    name: 'Budget Alternador',
    stock: 12,
    price: 251.82,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 76141,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Madeline Cox',
        timestamp: '2024-06-12T17:19:39',
      },
      {
        id: 46435,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ball-Dougherty',
        timestamp: '2024-01-05T01:53:41',
      },
      {
        id: 82236,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ian Parker',
        timestamp: '2024-02-13T10:20:04',
      },
      {
        id: 63022,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Red each occur without position friend.',
        timestamp: '2024-03-22T04:58:23',
      },
    ],
  },
  {
    id: 358,
    name: 'Only Alternador',
    stock: 32,
    price: 122.48,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 50649,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sandra Chen',
        timestamp: '2024-09-13T15:39:09',
      },
      {
        id: 70243,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Edwards-Peters',
        timestamp: '2023-07-13T01:57:15',
      },
      {
        id: 46751,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miller Group',
        timestamp: '2024-05-27T01:30:39',
      },
      {
        id: 1537,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rice, Edwards and Cortez',
        timestamp: '2024-02-05T12:36:08',
      },
      {
        id: 2363,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Juan Johns',
        timestamp: '2024-10-08T21:20:11',
      },
    ],
  },
  {
    id: 359,
    name: 'Should Filtro',
    stock: 46,
    price: 600.96,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 13604,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Greene and Sons',
        timestamp: '2024-04-20T14:59:46',
      },
      {
        id: 47568,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perez, Carroll and Cantu',
        timestamp: '2025-01-02T11:54:13',
      },
      {
        id: 23188,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Allen Group',
        timestamp: '2023-12-28T09:45:19',
      },
      {
        id: 59758,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Fly bed seem and whether.',
        timestamp: '2025-01-29T10:01:57',
      },
    ],
  },
  {
    id: 360,
    name: 'Speech Alternador',
    stock: 36,
    price: 363.54,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 86564,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Because career which beyond financial usually fire eye.',
        timestamp: '2024-06-23T13:32:47',
      },
      {
        id: 35576,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Curry, Porter and Johnson',
        timestamp: '2023-04-28T05:21:05',
      },
      {
        id: 414,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Moore Inc',
        timestamp: '2024-04-25T16:48:15',
      },
      {
        id: 18745,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Write responsibility course know.',
        timestamp: '2023-09-27T14:17:21',
      },
    ],
  },
  {
    id: 361,
    name: 'Reason Alternador',
    stock: 64,
    price: 626.52,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 28246,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Harris-Mitchell',
        timestamp: '2023-12-09T17:47:02',
      },
      {
        id: 96521,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Energy summer individual.',
        timestamp: '2023-11-11T02:37:25',
      },
      {
        id: 90537,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Erin Ortiz',
        timestamp: '2024-08-18T15:35:50',
      },
      {
        id: 22935,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Still us already to international director.',
        timestamp: '2024-02-05T04:46:22',
      },
    ],
  },
  {
    id: 362,
    name: 'Yourself Amortiguador',
    stock: 21,
    price: 433.67,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 61173,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Stewart, Mora and Carroll',
        timestamp: '2025-01-12T17:35:23',
      },
    ],
  },
  {
    id: 363,
    name: 'Draw Pastilla',
    stock: 1,
    price: 973.69,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 91676,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Howard-Hanson',
        timestamp: '2023-08-16T01:14:24',
      },
      {
        id: 36927,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Money accept include support.',
        timestamp: '2023-09-08T15:32:43',
      },
      {
        id: 20803,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Create across suggest memory bag.',
        timestamp: '2023-05-25T01:02:53',
      },
    ],
  },
  {
    id: 364,
    name: 'Back Bujía',
    stock: 66,
    price: 423.16,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 83536,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Foster and Sons',
        timestamp: '2023-08-14T13:01:26',
      },
    ],
  },
  {
    id: 365,
    name: 'Enjoy Filtro',
    stock: 36,
    price: 806.63,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 19928,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bender-Lopez',
        timestamp: '2024-11-26T19:27:16',
      },
      {
        id: 58479,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Who film its put population save lead.',
        timestamp: '2024-10-29T05:53:56',
      },
      {
        id: 83256,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Expect try it trade use official future challenge.',
        timestamp: '2023-10-19T22:34:33',
      },
    ],
  },
  {
    id: 366,
    name: 'Discussion Bujía',
    stock: 89,
    price: 312.11,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 62280,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones LLC',
        timestamp: '2023-05-17T14:36:45',
      },
    ],
  },
  {
    id: 367,
    name: 'Into Filtro',
    stock: 41,
    price: 559.71,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 26306,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jasmine Gonzalez',
        timestamp: '2023-08-15T12:12:46',
      },
      {
        id: 70007,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lauren Smith',
        timestamp: '2025-02-13T20:22:38',
      },
      {
        id: 62145,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kayla Howell',
        timestamp: '2024-10-24T19:59:47',
      },
    ],
  },
  {
    id: 368,
    name: 'Especially Bujía',
    stock: 36,
    price: 587.55,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 23911,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Burke, Howard and Freeman',
        timestamp: '2023-12-20T03:34:45',
      },
      {
        id: 74628,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Participant bad table person federal sport.',
        timestamp: '2023-11-12T22:48:41',
      },
    ],
  },
  {
    id: 369,
    name: 'Among Amortiguador',
    stock: 20,
    price: 130.38,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 15938,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Whitehead, Foster and Wood',
        timestamp: '2024-01-29T05:33:22',
      },
      {
        id: 77021,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Skin still director ready economy might education.',
        timestamp: '2024-12-19T21:18:23',
      },
      {
        id: 25402,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gregory, Moore and Hooper',
        timestamp: '2024-04-17T02:23:34',
      },
      {
        id: 87946,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Susan Harris',
        timestamp: '2024-04-24T23:37:37',
      },
    ],
  },
  {
    id: 370,
    name: 'Or Alternador',
    stock: 73,
    price: 182.26,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 76302,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tonya Dickerson',
        timestamp: '2025-03-31T16:59:09',
      },
    ],
  },
  {
    id: 371,
    name: 'Financial Bujía',
    stock: 14,
    price: 654.1,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 94014,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hernandez-Middleton',
        timestamp: '2024-08-05T23:35:11',
      },
    ],
  },
  {
    id: 372,
    name: 'Church Bujía',
    stock: 15,
    price: 63.77,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 90456,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Justin Pena',
        timestamp: '2023-09-27T06:24:28',
      },
      {
        id: 33322,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Check business truth.',
        timestamp: '2025-03-23T12:40:40',
      },
      {
        id: 39874,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Rodriguez, Anderson and Crawford',
        timestamp: '2024-03-27T14:48:11',
      },
      {
        id: 86820,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Entire their table west party.',
        timestamp: '2023-08-19T10:48:41',
      },
    ],
  },
  {
    id: 373,
    name: 'Describe Bujía',
    stock: 15,
    price: 497.59,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 50138,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Thomas Mcdonald',
        timestamp: '2025-03-16T02:47:50',
      },
      {
        id: 69705,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Crawford, Warner and Martin',
        timestamp: '2024-05-23T08:22:14',
      },
      {
        id: 3315,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dunlap-Jordan',
        timestamp: '2023-08-01T11:16:17',
      },
      {
        id: 92132,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Schultz-Bailey',
        timestamp: '2024-03-05T06:05:14',
      },
      {
        id: 41998,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amanda Reid',
        timestamp: '2024-11-10T13:20:31',
      },
    ],
  },
  {
    id: 374,
    name: 'Job Pastilla',
    stock: 27,
    price: 649.47,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 59008,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ballard PLC',
        timestamp: '2024-02-28T04:51:24',
      },
      {
        id: 41100,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Become win continue billion.',
        timestamp: '2024-04-07T21:29:19',
      },
    ],
  },
  {
    id: 375,
    name: 'Industry Pastilla',
    stock: 90,
    price: 81.77,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 15177,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones-Robinson',
        timestamp: '2024-11-27T18:17:04',
      },
      {
        id: 74917,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Parrish Ltd',
        timestamp: '2024-04-04T10:06:21',
      },
      {
        id: 92651,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Seth Miller',
        timestamp: '2023-11-15T14:19:34',
      },
    ],
  },
  {
    id: 376,
    name: 'Agreement Pastilla',
    stock: 73,
    price: 334.49,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 22612,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Johnson, Miller and Williams',
        timestamp: '2025-01-16T16:23:02',
      },
      {
        id: 53299,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Robert Clark',
        timestamp: '2024-10-03T04:50:21',
      },
      {
        id: 60509,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Grant Smith',
        timestamp: '2023-08-06T22:54:04',
      },
      {
        id: 40595,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Rich many camera there forward year.',
        timestamp: '2023-09-17T17:13:17',
      },
      {
        id: 88856,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kelli Sullivan',
        timestamp: '2024-02-28T16:31:49',
      },
    ],
  },
  {
    id: 377,
    name: 'Movie Amortiguador',
    stock: 8,
    price: 181.17,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 22521,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Noble-Silva',
        timestamp: '2024-10-29T05:31:57',
      },
      {
        id: 39786,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lisa Roman',
        timestamp: '2024-03-19T07:39:48',
      },
      {
        id: 42931,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Smith',
        timestamp: '2024-02-15T15:34:20',
      },
      {
        id: 8693,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Inside white leave.',
        timestamp: '2023-06-03T13:29:19',
      },
      {
        id: 24107,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Treatment bring high.',
        timestamp: '2024-02-05T20:31:08',
      },
    ],
  },
  {
    id: 378,
    name: 'Behavior Alternador',
    stock: 49,
    price: 800.49,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 75843,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mario Hanson',
        timestamp: '2023-05-06T19:14:05',
      },
      {
        id: 87720,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Green PLC',
        timestamp: '2023-11-15T04:43:27',
      },
      {
        id: 58285,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nicholas Vasquez',
        timestamp: '2025-02-09T22:43:59',
      },
      {
        id: 33393,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Simmons, Cannon and Montoya',
        timestamp: '2024-12-15T23:44:36',
      },
      {
        id: 27228,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ryan White',
        timestamp: '2024-07-13T07:17:49',
      },
    ],
  },
  {
    id: 379,
    name: 'Wife Bujía',
    stock: 48,
    price: 627.48,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 10387,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones-Mejia',
        timestamp: '2023-12-07T15:04:59',
      },
      {
        id: 32558,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wilson-Gonzalez',
        timestamp: '2024-07-22T12:46:58',
      },
      {
        id: 79023,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Harris-Wilson',
        timestamp: '2023-06-09T18:57:04',
      },
    ],
  },
  {
    id: 380,
    name: 'Wind Alternador',
    stock: 38,
    price: 748.13,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 30235,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hoffman, Perez and Nichols',
        timestamp: '2024-06-30T10:19:06',
      },
      {
        id: 40844,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: And expert husband remember everybody.',
        timestamp: '2024-06-16T09:42:58',
      },
      {
        id: 78022,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Porter, Durham and Stewart',
        timestamp: '2024-04-17T22:53:11',
      },
      {
        id: 76995,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Sister turn eat.',
        timestamp: '2023-10-10T20:58:47',
      },
      {
        id: 24390,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davis Group',
        timestamp: '2025-01-02T13:42:08',
      },
    ],
  },
  {
    id: 381,
    name: 'Notice Pastilla',
    stock: 23,
    price: 599.77,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 84173,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Perez, Wilson and Mclaughlin',
        timestamp: '2023-09-23T14:38:20',
      },
    ],
  },
  {
    id: 382,
    name: 'Voice Alternador',
    stock: 96,
    price: 931.79,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 85402,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Atkins-Ross',
        timestamp: '2024-08-24T03:05:29',
      },
    ],
  },
  {
    id: 383,
    name: 'Challenge Alternador',
    stock: 79,
    price: 834.54,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 39702,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Regina Sherman',
        timestamp: '2024-09-15T12:37:40',
      },
      {
        id: 83258,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Melanie Jones',
        timestamp: '2024-08-03T19:33:13',
      },
      {
        id: 83262,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: With lose nothing before.',
        timestamp: '2023-07-20T03:27:39',
      },
      {
        id: 57660,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Heather Evans',
        timestamp: '2024-09-22T19:59:38',
      },
      {
        id: 39830,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Hour its better blood get.',
        timestamp: '2023-12-15T10:50:05',
      },
    ],
  },
  {
    id: 384,
    name: 'Claim Filtro',
    stock: 99,
    price: 275.73,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 66199,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Keith, Paul and Jenkins',
        timestamp: '2023-05-22T23:11:28',
      },
      {
        id: 70984,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Zachary Woods',
        timestamp: '2024-04-29T14:22:05',
      },
    ],
  },
  {
    id: 385,
    name: 'Across Bujía',
    stock: 11,
    price: 197.68,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 41093,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones, Obrien and Brooks',
        timestamp: '2023-12-28T11:53:21',
      },
      {
        id: 22950,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Director you citizen show and spend whom maybe.',
        timestamp: '2024-05-01T14:01:58',
      },
      {
        id: 49568,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Molina and Sons',
        timestamp: '2024-11-30T08:37:10',
      },
      {
        id: 12406,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Savannah Lopez',
        timestamp: '2024-03-19T08:59:08',
      },
    ],
  },
  {
    id: 386,
    name: 'Within Filtro',
    stock: 46,
    price: 894.34,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 16480,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Crystal Bowen',
        timestamp: '2023-07-10T02:01:38',
      },
      {
        id: 35415,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Sandoval',
        timestamp: '2023-07-07T13:13:05',
      },
      {
        id: 52253,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Evans, Diaz and Brown',
        timestamp: '2024-12-23T20:14:36',
      },
      {
        id: 93550,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Whether red election they.',
        timestamp: '2024-07-08T09:43:07',
      },
    ],
  },
  {
    id: 387,
    name: 'High Pastilla',
    stock: 78,
    price: 406.76,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 81210,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Gary Price',
        timestamp: '2024-04-19T23:42:00',
      },
      {
        id: 24661,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Taylor, Jordan and Rosario',
        timestamp: '2024-05-26T00:09:12',
      },
      {
        id: 50487,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Star factor eye conference explain process.',
        timestamp: '2023-10-23T12:32:41',
      },
    ],
  },
  {
    id: 388,
    name: 'Me Bujía',
    stock: 99,
    price: 383.38,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 28759,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Good around positive school speak before.',
        timestamp: '2024-02-28T05:14:52',
      },
    ],
  },
  {
    id: 389,
    name: 'Follow Filtro',
    stock: 71,
    price: 994.45,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 45737,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Devin Perez',
        timestamp: '2023-07-09T13:56:43',
      },
      {
        id: 86711,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Education table choose prove opportunity science.',
        timestamp: '2025-01-28T19:04:23',
      },
      {
        id: 83034,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Garcia, White and Li',
        timestamp: '2024-04-18T21:56:15',
      },
      {
        id: 91979,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Walter Wright',
        timestamp: '2024-06-05T17:22:46',
      },
      {
        id: 26246,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ortiz LLC',
        timestamp: '2024-09-21T18:20:02',
      },
    ],
  },
  {
    id: 390,
    name: 'Enter Pastilla',
    stock: 29,
    price: 959.15,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 59637,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Trujillo-Jones',
        timestamp: '2024-06-22T13:30:26',
      },
      {
        id: 75413,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente James Washington',
        timestamp: '2024-03-23T20:32:07',
      },
    ],
  },
  {
    id: 391,
    name: 'Offer Filtro',
    stock: 4,
    price: 349.15,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 75052,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christina Estes',
        timestamp: '2024-09-23T11:34:13',
      },
      {
        id: 37014,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Skin feeling language trip.',
        timestamp: '2024-05-12T04:54:59',
      },
    ],
  },
  {
    id: 392,
    name: 'Hour Pastilla',
    stock: 42,
    price: 951.28,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 77439,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Base out none return born close federal three.',
        timestamp: '2025-01-02T13:02:17',
      },
      {
        id: 45473,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Tonight ground despite consumer become thank three.',
        timestamp: '2025-01-09T17:35:54',
      },
    ],
  },
  {
    id: 393,
    name: 'Person Bujía',
    stock: 7,
    price: 524.13,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 90235,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martinez-Silva',
        timestamp: '2023-12-05T16:47:24',
      },
      {
        id: 19122,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Everybody difficult half everyone easy director.',
        timestamp: '2024-06-06T11:29:43',
      },
      {
        id: 26151,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Clark, Irwin and Johnson',
        timestamp: '2025-04-25T18:33:46',
      },
    ],
  },
  {
    id: 394,
    name: 'Girl Pastilla',
    stock: 77,
    price: 344.47,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 54745,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Dinner wrong successful answer.',
        timestamp: '2024-03-03T09:32:30',
      },
      {
        id: 53943,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Caleb Velasquez',
        timestamp: '2025-01-24T00:00:43',
      },
      {
        id: 35716,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Carrie Reynolds',
        timestamp: '2024-02-17T16:17:23',
      },
    ],
  },
  {
    id: 395,
    name: 'Herself Filtro',
    stock: 53,
    price: 949.41,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 51929,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Just community firm usually.',
        timestamp: '2023-12-20T14:12:29',
      },
      {
        id: 77740,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Yeah authority fill relate stand.',
        timestamp: '2025-03-29T22:32:30',
      },
    ],
  },
  {
    id: 396,
    name: 'Future Amortiguador',
    stock: 79,
    price: 319.61,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 19119,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rodriguez-Ortega',
        timestamp: '2024-09-22T01:28:06',
      },
    ],
  },
  {
    id: 397,
    name: 'Grow Filtro',
    stock: 19,
    price: 885.53,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 41929,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Past fill debate song build although.',
        timestamp: '2023-07-06T22:06:29',
      },
    ],
  },
  {
    id: 398,
    name: 'Go Filtro',
    stock: 83,
    price: 842.62,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 21119,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Assume lead study season.',
        timestamp: '2024-03-04T17:03:01',
      },
      {
        id: 36611,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Member hard human rule.',
        timestamp: '2023-07-21T08:45:24',
      },
      {
        id: 518,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Shane Davis',
        timestamp: '2024-12-08T01:51:07',
      },
      {
        id: 46863,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Follow Congress everybody sense audience.',
        timestamp: '2024-07-08T07:27:07',
      },
      {
        id: 87892,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Carr Ltd',
        timestamp: '2023-11-13T10:03:10',
      },
    ],
  },
  {
    id: 399,
    name: 'Far Amortiguador',
    stock: 9,
    price: 288.39,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 24169,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Curtis, Rodriguez and Hunter',
        timestamp: '2025-03-21T08:04:08',
      },
      {
        id: 71470,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Already still less worry need election anything.',
        timestamp: '2023-10-17T19:02:22',
      },
      {
        id: 76946,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Relate such seat check.',
        timestamp: '2024-09-22T21:07:33',
      },
      {
        id: 28567,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Craig-Lee',
        timestamp: '2023-08-30T11:44:30',
      },
      {
        id: 11378,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Baker-Marsh',
        timestamp: '2024-03-15T07:23:30',
      },
    ],
  },
  {
    id: 400,
    name: 'Party Filtro',
    stock: 6,
    price: 607.55,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 23981,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Parsons and Sons',
        timestamp: '2024-02-14T23:24:24',
      },
    ],
  },
  {
    id: 401,
    name: 'Friend Pastilla',
    stock: 81,
    price: 903.49,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 98700,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lane-Schneider',
        timestamp: '2024-11-14T19:50:25',
      },
      {
        id: 63547,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Thought example available source year yeah drive him.',
        timestamp: '2024-04-15T14:07:23',
      },
      {
        id: 66670,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alec Walton',
        timestamp: '2023-11-20T04:11:23',
      },
    ],
  },
  {
    id: 402,
    name: 'Purpose Filtro',
    stock: 10,
    price: 145.23,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 61298,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Angela Velez',
        timestamp: '2024-09-03T21:58:09',
      },
    ],
  },
  {
    id: 403,
    name: 'Imagine Amortiguador',
    stock: 56,
    price: 611.05,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 42817,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miller Group',
        timestamp: '2023-11-12T17:03:17',
      },
    ],
  },
  {
    id: 404,
    name: 'Method Pastilla',
    stock: 93,
    price: 262.19,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 83105,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Standard cost exist get.',
        timestamp: '2023-06-24T13:40:28',
      },
      {
        id: 35202,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Source but help special establish hand.',
        timestamp: '2024-08-21T21:37:11',
      },
      {
        id: 98602,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Contain home factor hear art kind peace.',
        timestamp: '2023-12-17T05:45:53',
      },
    ],
  },
  {
    id: 405,
    name: 'You Amortiguador',
    stock: 31,
    price: 221.52,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 79026,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gonzalez-Davis',
        timestamp: '2023-08-02T18:50:45',
      },
      {
        id: 77208,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Total similar bit international.',
        timestamp: '2023-12-07T21:55:52',
      },
      {
        id: 21597,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Anthony Burns',
        timestamp: '2024-01-25T09:01:06',
      },
    ],
  },
  {
    id: 406,
    name: 'Investment Pastilla',
    stock: 33,
    price: 427.66,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 36184,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mcgee, Ramirez and Harrison',
        timestamp: '2024-07-08T01:09:08',
      },
      {
        id: 22565,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Danielle Bailey',
        timestamp: '2023-06-09T04:42:56',
      },
      {
        id: 85454,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: However account range professional effect.',
        timestamp: '2023-09-08T23:48:12',
      },
      {
        id: 35651,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hill PLC',
        timestamp: '2024-07-10T07:26:32',
      },
    ],
  },
  {
    id: 407,
    name: 'Talk Alternador',
    stock: 81,
    price: 125.89,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 46124,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Page draw add majority.',
        timestamp: '2024-07-14T04:30:08',
      },
      {
        id: 66363,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Caldwell Group',
        timestamp: '2024-07-10T17:49:23',
      },
      {
        id: 59879,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Tate-Holloway',
        timestamp: '2023-12-02T01:45:49',
      },
    ],
  },
  {
    id: 408,
    name: 'Truth Alternador',
    stock: 54,
    price: 326.98,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 70138,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Among expert story stock project.',
        timestamp: '2024-01-05T19:56:31',
      },
      {
        id: 74814,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Statement dinner appear course just effect.',
        timestamp: '2024-07-08T21:21:14',
      },
      {
        id: 4699,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brian Lee',
        timestamp: '2024-08-31T19:19:24',
      },
      {
        id: 14890,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Guy local green their.',
        timestamp: '2023-05-24T21:08:55',
      },
      {
        id: 12360,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cook, Pacheco and Davis',
        timestamp: '2025-02-09T10:58:07',
      },
    ],
  },
  {
    id: 409,
    name: 'Situation Pastilla',
    stock: 92,
    price: 200.24,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 52409,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jackson, Tran and Fernandez',
        timestamp: '2024-04-13T14:21:25',
      },
      {
        id: 63867,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith-Hoffman',
        timestamp: '2023-04-29T10:09:34',
      },
      {
        id: 9658,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Floyd Inc',
        timestamp: '2024-11-10T13:01:43',
      },
      {
        id: 31224,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Brown',
        timestamp: '2024-02-02T01:21:00',
      },
    ],
  },
  {
    id: 410,
    name: 'Lot Amortiguador',
    stock: 75,
    price: 723.74,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 70866,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wilson, Howard and Salazar',
        timestamp: '2023-07-30T21:55:05',
      },
      {
        id: 19164,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Drug kitchen either right world now.',
        timestamp: '2023-06-30T12:12:08',
      },
      {
        id: 84590,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amanda Morgan',
        timestamp: '2023-08-22T22:57:19',
      },
      {
        id: 18861,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica House',
        timestamp: '2025-03-13T01:44:57',
      },
    ],
  },
  {
    id: 411,
    name: 'Answer Alternador',
    stock: 70,
    price: 553.99,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 28502,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brittany Kirby',
        timestamp: '2025-03-27T20:25:09',
      },
      {
        id: 77307,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brandy Cooke',
        timestamp: '2024-04-13T00:40:51',
      },
    ],
  },
  {
    id: 412,
    name: 'Level Filtro',
    stock: 82,
    price: 85.73,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 51964,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Catherine White',
        timestamp: '2023-07-31T14:38:37',
      },
      {
        id: 83748,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Data a challenge father none trade.',
        timestamp: '2023-06-18T03:30:14',
      },
      {
        id: 31549,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Nash',
        timestamp: '2024-06-02T02:36:21',
      },
      {
        id: 87628,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cabrera, Dean and Carroll',
        timestamp: '2024-08-13T14:43:22',
      },
    ],
  },
  {
    id: 413,
    name: 'Relationship Filtro',
    stock: 75,
    price: 104.11,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 7929,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Robertson',
        timestamp: '2024-03-16T00:47:52',
      },
    ],
  },
  {
    id: 414,
    name: 'Better Pastilla',
    stock: 97,
    price: 401.76,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 81160,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Compton',
        timestamp: '2025-03-26T23:01:05',
      },
      {
        id: 39737,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Savage-Novak',
        timestamp: '2025-01-03T11:25:47',
      },
      {
        id: 53600,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown, Collins and Mendez',
        timestamp: '2025-04-12T22:29:56',
      },
    ],
  },
  {
    id: 415,
    name: 'Rest Pastilla',
    stock: 2,
    price: 947.38,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 42578,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Up answer window long material require example.',
        timestamp: '2024-04-16T18:11:24',
      },
      {
        id: 90147,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bullock-Simmons',
        timestamp: '2024-02-02T01:15:14',
      },
    ],
  },
  {
    id: 416,
    name: 'Degree Alternador',
    stock: 59,
    price: 447.81,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 90633,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Contain seem heart inside real without consumer.',
        timestamp: '2024-12-13T22:45:18',
      },
      {
        id: 46300,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Medina Inc',
        timestamp: '2024-07-24T18:18:23',
      },
      {
        id: 69744,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Quickly political strategy too.',
        timestamp: '2025-02-05T22:42:05',
      },
      {
        id: 94155,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Seven actually yeah time phone.',
        timestamp: '2023-08-31T04:29:00',
      },
    ],
  },
  {
    id: 417,
    name: 'Pretty Alternador',
    stock: 87,
    price: 486.99,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 4171,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Watch that politics area training.',
        timestamp: '2025-01-24T08:34:43',
      },
    ],
  },
  {
    id: 418,
    name: 'Start Amortiguador',
    stock: 61,
    price: 773.09,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 67804,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Garcia-Cunningham',
        timestamp: '2025-03-28T10:41:07',
      },
    ],
  },
  {
    id: 419,
    name: 'Knowledge Bujía',
    stock: 65,
    price: 810.07,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 27718,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Gonzalez',
        timestamp: '2024-01-16T12:30:50',
      },
    ],
  },
  {
    id: 420,
    name: 'Arm Alternador',
    stock: 94,
    price: 855.41,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 49049,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: She economic country either field.',
        timestamp: '2024-10-04T23:22:38',
      },
      {
        id: 94885,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Wife after agreement attention.',
        timestamp: '2024-10-11T02:49:58',
      },
      {
        id: 61064,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Population model bag detail be western.',
        timestamp: '2024-01-26T17:29:50',
      },
      {
        id: 36390,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nichole White',
        timestamp: '2024-08-11T22:53:44',
      },
      {
        id: 38979,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Jackson',
        timestamp: '2023-06-28T16:25:26',
      },
    ],
  },
  {
    id: 421,
    name: 'Always Amortiguador',
    stock: 20,
    price: 721.3,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 76671,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Eric Baker',
        timestamp: '2024-12-18T00:38:59',
      },
      {
        id: 13681,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Support interview fly leg recent her by.',
        timestamp: '2023-07-21T22:10:43',
      },
      {
        id: 77629,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ashley, Smith and Klein',
        timestamp: '2023-11-29T10:33:15',
      },
      {
        id: 19741,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Coleman Ltd',
        timestamp: '2024-03-16T05:34:38',
      },
    ],
  },
  {
    id: 422,
    name: 'Law Pastilla',
    stock: 65,
    price: 613.95,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 11397,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lawson LLC',
        timestamp: '2024-02-12T19:37:31',
      },
      {
        id: 97766,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perez-Francis',
        timestamp: '2025-03-27T17:55:34',
      },
      {
        id: 82924,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miles LLC',
        timestamp: '2024-07-14T04:41:45',
      },
    ],
  },
  {
    id: 423,
    name: 'Thank Amortiguador',
    stock: 23,
    price: 165.42,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 817,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Evening executive hot ball three laugh age together.',
        timestamp: '2024-10-04T13:25:27',
      },
    ],
  },
  {
    id: 424,
    name: 'Few Filtro',
    stock: 52,
    price: 548.18,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 24627,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Elizabeth Miller',
        timestamp: '2023-05-14T02:34:38',
      },
      {
        id: 52938,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rich PLC',
        timestamp: '2023-12-20T11:15:54',
      },
      {
        id: 59420,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wolfe-Dixon',
        timestamp: '2024-11-04T03:13:10',
      },
      {
        id: 98667,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Shelby Wright',
        timestamp: '2024-07-11T07:49:07',
      },
      {
        id: 64958,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Stop science than language.',
        timestamp: '2024-05-02T15:38:44',
      },
    ],
  },
  {
    id: 425,
    name: 'Less Pastilla',
    stock: 84,
    price: 862.29,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 11239,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Douglas',
        timestamp: '2024-08-12T02:54:11',
      },
      {
        id: 30759,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Yeah career budget along.',
        timestamp: '2023-06-07T18:16:10',
      },
    ],
  },
  {
    id: 426,
    name: 'Enter Amortiguador',
    stock: 60,
    price: 562.41,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 97118,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Amount follow since lawyer author story detail.',
        timestamp: '2024-12-05T00:36:04',
      },
      {
        id: 47032,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jason Rodriguez',
        timestamp: '2023-10-31T16:45:23',
      },
    ],
  },
  {
    id: 427,
    name: 'Scientist Alternador',
    stock: 80,
    price: 930.69,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 58191,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente James Steele',
        timestamp: '2023-06-08T09:05:55',
      },
      {
        id: 12080,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Scientist point pick.',
        timestamp: '2024-10-28T08:16:24',
      },
      {
        id: 51742,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Will bad issue subject along conference production.',
        timestamp: '2023-05-11T13:03:44',
      },
    ],
  },
  {
    id: 428,
    name: 'Mission Bujía',
    stock: 20,
    price: 877.57,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 91333,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bryan Hayes',
        timestamp: '2024-07-13T22:44:33',
      },
      {
        id: 27253,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Line during seven say.',
        timestamp: '2023-11-28T11:44:31',
      },
      {
        id: 97037,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Julia Graham',
        timestamp: '2024-09-16T14:31:55',
      },
      {
        id: 84014,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Nature record international by field.',
        timestamp: '2025-01-27T00:46:14',
      },
    ],
  },
  {
    id: 429,
    name: 'Sea Alternador',
    stock: 28,
    price: 646.04,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 78202,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Armstrong, Harrison and Molina',
        timestamp: '2025-03-24T05:40:40',
      },
    ],
  },
  {
    id: 430,
    name: 'Major Pastilla',
    stock: 71,
    price: 952.41,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 30528,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Heather Hoover',
        timestamp: '2023-12-12T01:43:21',
      },
      {
        id: 31644,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Hernandez',
        timestamp: '2024-01-13T18:14:18',
      },
      {
        id: 86876,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Murphy-Paul',
        timestamp: '2024-06-21T07:57:13',
      },
      {
        id: 39082,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Region enter front human him.',
        timestamp: '2024-12-25T10:20:24',
      },
    ],
  },
  {
    id: 431,
    name: 'Still Alternador',
    stock: 35,
    price: 766.54,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 42454,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Control process ask executive consumer soldier.',
        timestamp: '2024-10-07T03:48:13',
      },
    ],
  },
  {
    id: 432,
    name: 'Mr Pastilla',
    stock: 88,
    price: 702.17,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 67579,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Know happen question own open very win.',
        timestamp: '2024-09-08T23:45:14',
      },
      {
        id: 65408,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jasmine Scott',
        timestamp: '2023-11-28T15:37:53',
      },
      {
        id: 23710,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Beard Ltd',
        timestamp: '2023-05-23T11:16:26',
      },
      {
        id: 73008,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Crosby Inc',
        timestamp: '2024-01-05T08:45:04',
      },
      {
        id: 57607,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jeffrey Gibson',
        timestamp: '2023-10-31T11:43:14',
      },
    ],
  },
  {
    id: 433,
    name: 'Remember Pastilla',
    stock: 83,
    price: 967.64,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 40787,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sarah Nielsen',
        timestamp: '2024-04-15T05:30:29',
      },
      {
        id: 41182,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Luis Horn',
        timestamp: '2023-08-10T19:21:35',
      },
      {
        id: 76805,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joshua Blankenship',
        timestamp: '2024-09-09T09:58:29',
      },
      {
        id: 86717,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Nelson Group',
        timestamp: '2023-12-08T13:14:34',
      },
    ],
  },
  {
    id: 434,
    name: 'Enough Alternador',
    stock: 85,
    price: 136.88,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 9745,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wallace-Washington',
        timestamp: '2024-08-29T08:13:17',
      },
      {
        id: 32972,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Fields',
        timestamp: '2023-12-21T11:54:54',
      },
      {
        id: 94576,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Amount off watch benefit move parent debate.',
        timestamp: '2024-05-16T15:38:25',
      },
    ],
  },
  {
    id: 435,
    name: 'Participant Bujía',
    stock: 24,
    price: 50.13,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 60133,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Well well general look dark senior let.',
        timestamp: '2023-05-18T12:23:47',
      },
      {
        id: 53375,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Article size report feel her determine.',
        timestamp: '2024-01-23T13:45:22',
      },
      {
        id: 67157,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Soon operation someone term.',
        timestamp: '2024-08-26T18:30:14',
      },
      {
        id: 18178,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Haynes, Bell and Porter',
        timestamp: '2024-05-15T03:03:32',
      },
      {
        id: 53460,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Oliver, Reyes and Johnson',
        timestamp: '2024-04-29T12:56:34',
      },
    ],
  },
  {
    id: 436,
    name: 'Prepare Filtro',
    stock: 87,
    price: 174.64,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 52485,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ramirez, Barry and Palmer',
        timestamp: '2024-11-23T02:51:31',
      },
      {
        id: 56744,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lynch, Chase and Anderson',
        timestamp: '2024-01-17T18:47:49',
      },
    ],
  },
  {
    id: 437,
    name: 'Where Alternador',
    stock: 18,
    price: 342.18,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 91948,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Rest forward respond.',
        timestamp: '2023-06-17T00:32:36',
      },
      {
        id: 2030,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gilmore and Sons',
        timestamp: '2024-09-26T00:49:46',
      },
      {
        id: 62171,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Reach human road operation nor maybe.',
        timestamp: '2023-12-05T20:31:43',
      },
      {
        id: 51877,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Barbara Myers',
        timestamp: '2024-09-24T17:07:36',
      },
    ],
  },
  {
    id: 438,
    name: 'Lose Pastilla',
    stock: 66,
    price: 213.91,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 24879,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ward, Ward and Phillips',
        timestamp: '2024-03-18T22:34:24',
      },
    ],
  },
  {
    id: 439,
    name: 'Small Alternador',
    stock: 84,
    price: 339.13,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 799,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente James Durham',
        timestamp: '2024-09-18T21:43:08',
      },
      {
        id: 43691,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Inside system inside.',
        timestamp: '2024-11-11T08:43:46',
      },
      {
        id: 96483,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Williams',
        timestamp: '2023-10-30T17:46:52',
      },
      {
        id: 26161,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Performance expect listen many short we rule.',
        timestamp: '2025-01-23T19:39:47',
      },
    ],
  },
  {
    id: 440,
    name: 'Others Bujía',
    stock: 75,
    price: 61.99,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 95709,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tabitha Clayton',
        timestamp: '2024-03-08T16:45:25',
      },
    ],
  },
  {
    id: 441,
    name: 'Everybody Bujía',
    stock: 63,
    price: 293.71,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 53411,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Shannon Rice',
        timestamp: '2023-11-08T22:27:28',
      },
      {
        id: 84958,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Baker Ltd',
        timestamp: '2024-12-30T13:43:04',
      },
      {
        id: 22437,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Wade',
        timestamp: '2023-07-04T10:35:05',
      },
    ],
  },
  {
    id: 442,
    name: 'Argue Amortiguador',
    stock: 23,
    price: 390.74,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 10165,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Baldwin-Frye',
        timestamp: '2025-04-22T06:42:09',
      },
    ],
  },
  {
    id: 443,
    name: 'Little Amortiguador',
    stock: 51,
    price: 745.55,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 32187,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Choice become street.',
        timestamp: '2023-12-03T20:24:08',
      },
    ],
  },
  {
    id: 444,
    name: 'High Bujía',
    stock: 87,
    price: 635.38,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 70605,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fitzgerald LLC',
        timestamp: '2024-05-10T06:20:35',
      },
      {
        id: 48918,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christopher Randall',
        timestamp: '2025-04-08T10:11:56',
      },
      {
        id: 13963,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Individual raise south happy song.',
        timestamp: '2023-08-12T02:41:01',
      },
      {
        id: 84344,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Victor Hernandez',
        timestamp: '2025-01-04T07:38:43',
      },
      {
        id: 38266,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Bar mention meeting area option dark lot.',
        timestamp: '2023-05-08T00:38:28',
      },
    ],
  },
  {
    id: 445,
    name: 'Especially Pastilla',
    stock: 87,
    price: 992.14,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 739,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Couple maybe his case political food better.',
        timestamp: '2023-11-14T04:37:28',
      },
      {
        id: 74544,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christina Delgado',
        timestamp: '2024-01-03T07:11:19',
      },
    ],
  },
  {
    id: 446,
    name: 'Myself Alternador',
    stock: 74,
    price: 244.06,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 25931,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mr. Tyler Bradford',
        timestamp: '2024-06-01T01:15:37',
      },
      {
        id: 23131,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Enough very herself actually chance something.',
        timestamp: '2024-04-09T07:08:37',
      },
      {
        id: 11825,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cowan Inc',
        timestamp: '2025-03-16T02:07:16',
      },
    ],
  },
  {
    id: 447,
    name: 'Your Bujía',
    stock: 23,
    price: 787.28,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 19051,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Valerie Hunter',
        timestamp: '2024-07-17T09:34:39',
      },
      {
        id: 7891,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dawn Decker',
        timestamp: '2023-06-25T01:09:47',
      },
    ],
  },
  {
    id: 448,
    name: 'Whatever Filtro',
    stock: 87,
    price: 57.74,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 62057,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Wanda Anderson',
        timestamp: '2024-02-05T19:24:32',
      },
      {
        id: 24148,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Study effort today plan sister.',
        timestamp: '2024-10-16T13:45:33',
      },
      {
        id: 70636,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Morris-Rice',
        timestamp: '2023-08-29T09:09:00',
      },
      {
        id: 10937,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Break prepare also kid good shake around.',
        timestamp: '2025-03-17T11:41:38',
      },
    ],
  },
  {
    id: 449,
    name: 'Decide Bujía',
    stock: 98,
    price: 609.99,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 44505,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Peace buy music.',
        timestamp: '2024-06-25T02:31:19',
      },
      {
        id: 69813,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bentley, Smith and Holmes',
        timestamp: '2023-11-03T23:25:10',
      },
    ],
  },
  {
    id: 450,
    name: 'Discussion Bujía',
    stock: 82,
    price: 165.0,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 3461,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: No over meet.',
        timestamp: '2024-07-20T14:55:55',
      },
      {
        id: 13864,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tracy Reynolds',
        timestamp: '2024-11-23T09:20:56',
      },
    ],
  },
  {
    id: 451,
    name: 'Design Bujía',
    stock: 14,
    price: 470.11,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 5915,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Berry PLC',
        timestamp: '2024-01-15T07:16:20',
      },
    ],
  },
  {
    id: 452,
    name: 'Teach Filtro',
    stock: 34,
    price: 207.3,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 62025,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Schneider Inc',
        timestamp: '2023-10-08T18:15:04',
      },
      {
        id: 80186,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Look industry than yourself.',
        timestamp: '2024-05-06T11:01:01',
      },
      {
        id: 71222,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Tough million while issue reflect western attorney fund.',
        timestamp: '2025-03-19T19:10:33',
      },
      {
        id: 7162,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Palmer-Williams',
        timestamp: '2023-10-07T10:05:20',
      },
    ],
  },
  {
    id: 453,
    name: 'Government Alternador',
    stock: 29,
    price: 988.91,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 84104,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith, Murray and Aguirre',
        timestamp: '2024-02-07T16:30:28',
      },
      {
        id: 64898,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Poor when to research choose strong serve.',
        timestamp: '2024-05-08T16:23:11',
      },
      {
        id: 60459,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tyrone Ramsey',
        timestamp: '2023-07-16T08:50:44',
      },
      {
        id: 17412,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Life although investment would throughout city.',
        timestamp: '2024-04-21T13:35:52',
      },
      {
        id: 37170,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Carson, Wright and Robinson',
        timestamp: '2023-07-25T03:49:35',
      },
    ],
  },
  {
    id: 454,
    name: 'Economic Bujía',
    stock: 10,
    price: 429.75,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 20392,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jonathan Giles',
        timestamp: '2023-11-02T21:54:10',
      },
    ],
  },
  {
    id: 455,
    name: 'I Bujía',
    stock: 60,
    price: 999.09,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 74982,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Speak finish decide same.',
        timestamp: '2023-08-16T13:48:39',
      },
    ],
  },
  {
    id: 456,
    name: 'Anyone Alternador',
    stock: 85,
    price: 913.34,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 82487,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Natalie Hall',
        timestamp: '2024-01-20T09:20:27',
      },
      {
        id: 69560,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Responsibility green science pay program.',
        timestamp: '2023-09-01T08:50:37',
      },
      {
        id: 63734,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Owner read have purpose Mrs middle able which.',
        timestamp: '2024-05-04T02:08:32',
      },
      {
        id: 99084,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Meeting body trouble join hear.',
        timestamp: '2023-06-05T00:57:38',
      },
    ],
  },
  {
    id: 457,
    name: 'Name Amortiguador',
    stock: 9,
    price: 337.19,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 78959,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Santiago, Reyes and Weber',
        timestamp: '2024-07-29T15:02:14',
      },
    ],
  },
  {
    id: 458,
    name: 'Sister Amortiguador',
    stock: 97,
    price: 238.27,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 55391,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Agent east teacher perhaps green star collection.',
        timestamp: '2024-01-27T04:55:56',
      },
      {
        id: 8284,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Frye-Ramirez',
        timestamp: '2023-08-30T00:28:24',
      },
      {
        id: 770,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Yoder LLC',
        timestamp: '2024-12-08T12:04:11',
      },
      {
        id: 73312,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lester LLC',
        timestamp: '2024-02-05T17:51:07',
      },
    ],
  },
  {
    id: 459,
    name: 'Consumer Filtro',
    stock: 97,
    price: 794.72,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 83669,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Seat director put modern there yourself interview.',
        timestamp: '2023-11-16T13:11:49',
      },
      {
        id: 59305,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dustin Martinez',
        timestamp: '2023-11-27T16:07:14',
      },
    ],
  },
  {
    id: 460,
    name: 'Music Bujía',
    stock: 21,
    price: 874.75,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 67859,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Two individual city structure.',
        timestamp: '2024-10-01T16:55:16',
      },
      {
        id: 38283,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Candice Martinez',
        timestamp: '2023-10-30T06:55:56',
      },
      {
        id: 50283,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams Ltd',
        timestamp: '2025-02-24T23:29:52',
      },
    ],
  },
  {
    id: 461,
    name: 'Force Bujía',
    stock: 22,
    price: 163.39,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 42970,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Wood',
        timestamp: '2025-04-19T11:32:54',
      },
      {
        id: 59850,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michelle Robinson',
        timestamp: '2023-09-28T23:04:30',
      },
    ],
  },
  {
    id: 462,
    name: 'Story Filtro',
    stock: 73,
    price: 699.37,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 58313,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Barnes-Taylor',
        timestamp: '2024-04-16T14:44:38',
      },
      {
        id: 80232,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jacobs PLC',
        timestamp: '2023-09-24T07:33:20',
      },
      {
        id: 12069,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Account during just issue Mrs maybe.',
        timestamp: '2023-05-30T16:28:00',
      },
      {
        id: 12844,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Taylor',
        timestamp: '2024-09-16T11:48:48',
      },
      {
        id: 56088,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Stephens, Johnson and Jordan',
        timestamp: '2023-10-07T00:26:33',
      },
    ],
  },
  {
    id: 463,
    name: 'Indicate Alternador',
    stock: 11,
    price: 161.65,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 33611,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Pamela Anderson',
        timestamp: '2024-10-20T19:51:54',
      },
      {
        id: 50562,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Franklin, Moody and Cain',
        timestamp: '2025-03-01T04:00:35',
      },
    ],
  },
  {
    id: 464,
    name: 'Eye Filtro',
    stock: 1,
    price: 822.55,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 96504,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jerry Bell',
        timestamp: '2024-04-30T13:16:33',
      },
      {
        id: 84852,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joshua Richard',
        timestamp: '2024-03-30T03:04:49',
      },
      {
        id: 67307,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jordan-Jackson',
        timestamp: '2024-01-06T07:34:40',
      },
      {
        id: 30760,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Positive eat mother can firm or morning.',
        timestamp: '2023-07-28T08:04:05',
      },
    ],
  },
  {
    id: 465,
    name: 'Star Bujía',
    stock: 82,
    price: 516.77,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 42703,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Role form require oil black power add practice.',
        timestamp: '2025-02-10T08:27:08',
      },
      {
        id: 53503,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Media large four defense but offer.',
        timestamp: '2023-11-21T11:27:16',
      },
      {
        id: 35880,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Stewart-Morales',
        timestamp: '2024-10-07T17:34:03',
      },
    ],
  },
  {
    id: 466,
    name: 'Friend Pastilla',
    stock: 43,
    price: 702.36,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 8371,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Weber Ltd',
        timestamp: '2023-10-21T05:30:15',
      },
      {
        id: 32858,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Weiss-Brown',
        timestamp: '2023-12-20T19:46:30',
      },
      {
        id: 21289,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amber Ortega',
        timestamp: '2023-12-15T21:56:44',
      },
      {
        id: 72257,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christy Harrington',
        timestamp: '2025-01-29T01:10:04',
      },
    ],
  },
  {
    id: 467,
    name: 'Husband Bujía',
    stock: 60,
    price: 321.13,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 78541,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Romero-Kelley',
        timestamp: '2024-10-07T20:34:28',
      },
      {
        id: 97031,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Very play attack.',
        timestamp: '2024-10-31T22:36:08',
      },
      {
        id: 22768,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Music continue state view.',
        timestamp: '2024-01-26T01:10:59',
      },
    ],
  },
  {
    id: 468,
    name: 'Business Alternador',
    stock: 100,
    price: 932.45,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 40323,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amber Singh',
        timestamp: '2023-12-01T11:11:21',
      },
      {
        id: 36141,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Light fire media trade those think poor significant.',
        timestamp: '2023-12-25T19:36:59',
      },
    ],
  },
  {
    id: 469,
    name: 'Author Bujía',
    stock: 52,
    price: 455.04,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 40359,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Value its center not throw.',
        timestamp: '2023-12-15T04:16:04',
      },
    ],
  },
  {
    id: 470,
    name: 'Also Pastilla',
    stock: 64,
    price: 145.4,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 66621,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Tree figure need upon money eat need.',
        timestamp: '2023-10-30T23:36:11',
      },
      {
        id: 95948,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Someone run fund five either cover reduce live.',
        timestamp: '2023-12-04T14:45:30',
      },
      {
        id: 95882,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Term partner while music.',
        timestamp: '2024-05-05T10:29:48',
      },
      {
        id: 29719,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Danielle Nguyen',
        timestamp: '2024-01-08T00:26:12',
      },
      {
        id: 70309,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Graham, Smith and Taylor',
        timestamp: '2024-12-25T23:44:48',
      },
    ],
  },
  {
    id: 471,
    name: 'Particularly Alternador',
    stock: 36,
    price: 166.44,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 42913,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Reese, Cobb and Smith',
        timestamp: '2024-04-13T18:22:50',
      },
      {
        id: 9352,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Heather Stevens',
        timestamp: '2024-09-04T16:08:29',
      },
      {
        id: 58555,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Source character collection light economy cover up.',
        timestamp: '2025-01-28T08:44:41',
      },
    ],
  },
  {
    id: 472,
    name: 'Window Filtro',
    stock: 79,
    price: 171.51,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 63543,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Karen Perez',
        timestamp: '2023-11-25T12:38:17',
      },
      {
        id: 59498,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Keith Jones',
        timestamp: '2023-12-29T16:55:51',
      },
      {
        id: 62580,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Marsh, George and Richardson',
        timestamp: '2023-08-21T11:30:17',
      },
    ],
  },
  {
    id: 473,
    name: 'Interest Amortiguador',
    stock: 70,
    price: 385.87,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 58521,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Allow include you action party.',
        timestamp: '2024-01-09T17:48:28',
      },
      {
        id: 43154,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Strategy population feeling word.',
        timestamp: '2023-05-02T16:57:08',
      },
      {
        id: 10545,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Many mother better.',
        timestamp: '2024-09-20T22:37:40',
      },
      {
        id: 36537,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jose Huff',
        timestamp: '2024-06-16T20:53:12',
      },
      {
        id: 3571,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Price-Harris',
        timestamp: '2024-03-31T02:24:35',
      },
    ],
  },
  {
    id: 474,
    name: 'Author Alternador',
    stock: 46,
    price: 547.32,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 85886,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Jones',
        timestamp: '2025-01-14T16:56:11',
      },
    ],
  },
  {
    id: 475,
    name: 'Star Bujía',
    stock: 74,
    price: 324.82,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 84994,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Barrett, Webb and Hunt',
        timestamp: '2023-10-07T00:26:07',
      },
      {
        id: 78953,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Security food situation everyone month successful.',
        timestamp: '2023-05-31T20:00:48',
      },
      {
        id: 32016,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Andrade-Robinson',
        timestamp: '2024-09-12T22:23:55',
      },
      {
        id: 35672,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gutierrez, Collins and Tran',
        timestamp: '2024-07-07T17:43:37',
      },
      {
        id: 95377,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perez, Dalton and Molina',
        timestamp: '2024-04-01T12:50:10',
      },
    ],
  },
  {
    id: 476,
    name: 'Pattern Filtro',
    stock: 79,
    price: 706.69,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 45047,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Girl might budget listen.',
        timestamp: '2024-07-23T06:43:11',
      },
      {
        id: 66764,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nathaniel Robinson',
        timestamp: '2024-11-12T12:17:25',
      },
      {
        id: 43617,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Simon-Martin',
        timestamp: '2023-12-29T01:28:21',
      },
    ],
  },
  {
    id: 477,
    name: 'Institution Alternador',
    stock: 62,
    price: 421.93,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 6386,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mary Oliver',
        timestamp: '2024-11-18T00:54:23',
      },
      {
        id: 34564,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Holden, Davis and Flores',
        timestamp: '2024-06-08T20:19:54',
      },
    ],
  },
  {
    id: 478,
    name: 'Which Amortiguador',
    stock: 58,
    price: 665.58,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 95388,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ramirez-Vang',
        timestamp: '2024-05-02T03:26:15',
      },
      {
        id: 47698,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Leah White',
        timestamp: '2024-02-29T06:39:28',
      },
      {
        id: 73334,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Hahn',
        timestamp: '2024-03-05T03:17:36',
      },
    ],
  },
  {
    id: 479,
    name: 'Wear Pastilla',
    stock: 61,
    price: 131.39,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 79882,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Explain ground glass thought of when suddenly.',
        timestamp: '2024-03-16T22:49:31',
      },
      {
        id: 75792,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Holly Reed',
        timestamp: '2023-07-18T19:27:16',
      },
      {
        id: 21393,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Allow person part actually young suggest.',
        timestamp: '2025-01-04T20:07:34',
      },
      {
        id: 65418,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Parsons, Molina and Page',
        timestamp: '2025-01-15T13:28:43',
      },
      {
        id: 53176,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Contreras',
        timestamp: '2024-12-06T15:45:22',
      },
    ],
  },
  {
    id: 480,
    name: 'Help Amortiguador',
    stock: 2,
    price: 722.84,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 16613,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrew Bowen',
        timestamp: '2024-10-21T00:22:18',
      },
    ],
  },
  {
    id: 481,
    name: 'Let Bujía',
    stock: 58,
    price: 140.28,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 19860,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Rich rest consider believe.',
        timestamp: '2024-12-11T10:19:06',
      },
    ],
  },
  {
    id: 482,
    name: 'Method Filtro',
    stock: 63,
    price: 243.15,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 19971,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Blue official practice within story.',
        timestamp: '2023-08-25T00:10:19',
      },
    ],
  },
  {
    id: 483,
    name: 'Property Pastilla',
    stock: 3,
    price: 766.82,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 46761,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mike Mendoza',
        timestamp: '2024-03-07T07:56:13',
      },
      {
        id: 26990,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Reason positive personal score group owner.',
        timestamp: '2024-11-09T05:35:34',
      },
      {
        id: 54571,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jonathan Long',
        timestamp: '2024-08-14T13:49:38',
      },
      {
        id: 84247,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Certain social use so every success.',
        timestamp: '2023-05-28T01:19:02',
      },
      {
        id: 1243,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michele Mahoney',
        timestamp: '2024-08-23T20:02:23',
      },
    ],
  },
  {
    id: 484,
    name: 'Try Filtro',
    stock: 23,
    price: 473.06,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 84570,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christina Scott',
        timestamp: '2023-08-08T23:36:20',
      },
    ],
  },
  {
    id: 485,
    name: 'Risk Bujía',
    stock: 11,
    price: 132.29,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 66132,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sharon Sherman',
        timestamp: '2023-05-29T12:49:31',
      },
      {
        id: 53505,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Chris Smith',
        timestamp: '2023-09-19T13:14:46',
      },
    ],
  },
  {
    id: 486,
    name: 'Information Filtro',
    stock: 78,
    price: 634.96,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 87499,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Box ten impact person newspaper anyone reality old.',
        timestamp: '2023-12-10T09:05:36',
      },
      {
        id: 60132,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Whatever look issue which would town rest.',
        timestamp: '2023-09-27T10:34:27',
      },
      {
        id: 82934,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sarah Carter',
        timestamp: '2025-04-08T02:31:13',
      },
      {
        id: 42467,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hanson-House',
        timestamp: '2025-03-31T18:40:45',
      },
    ],
  },
  {
    id: 487,
    name: 'Role Bujía',
    stock: 15,
    price: 159.88,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 97993,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Chen',
        timestamp: '2024-12-09T22:05:08',
      },
      {
        id: 26196,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Teresa Matthews',
        timestamp: '2024-10-28T00:04:08',
      },
      {
        id: 67154,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Hot air must community.',
        timestamp: '2024-07-24T01:27:23',
      },
    ],
  },
  {
    id: 488,
    name: 'Dog Pastilla',
    stock: 74,
    price: 734.05,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 55494,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Phone member capital drive.',
        timestamp: '2024-07-31T19:15:21',
      },
      {
        id: 78150,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Reeves Inc',
        timestamp: '2024-12-31T07:54:48',
      },
      {
        id: 74085,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Provide responsibility hundred television what.',
        timestamp: '2024-11-20T11:48:19',
      },
      {
        id: 94685,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Ability occur customer various sea mind able relate.',
        timestamp: '2023-08-25T11:27:58',
      },
    ],
  },
  {
    id: 489,
    name: 'Arrive Filtro',
    stock: 43,
    price: 980.13,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 9269,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Maddox-Velasquez',
        timestamp: '2023-09-19T14:45:04',
      },
    ],
  },
  {
    id: 490,
    name: 'Head Alternador',
    stock: 98,
    price: 70.97,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 11302,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Vanessa Jones',
        timestamp: '2025-04-01T18:59:03',
      },
      {
        id: 97885,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Tell affect against allow attack most sell.',
        timestamp: '2024-07-17T18:40:47',
      },
      {
        id: 1513,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hall-Galvan',
        timestamp: '2025-01-22T10:29:16',
      },
      {
        id: 29349,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Parker Ltd',
        timestamp: '2024-05-19T21:27:30',
      },
      {
        id: 49204,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Month argue risk door myself on.',
        timestamp: '2024-04-04T21:49:39',
      },
    ],
  },
  {
    id: 491,
    name: 'Apply Alternador',
    stock: 68,
    price: 480.67,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 93183,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Rebecca Combs',
        timestamp: '2025-04-19T18:12:46',
      },
      {
        id: 35080,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Matthew Tyler',
        timestamp: '2023-05-21T02:20:56',
      },
      {
        id: 25276,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alan Blair',
        timestamp: '2024-03-02T11:10:56',
      },
      {
        id: 49469,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wyatt Group',
        timestamp: '2023-06-03T01:48:04',
      },
      {
        id: 13639,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sue Carroll',
        timestamp: '2025-04-10T12:48:47',
      },
    ],
  },
  {
    id: 492,
    name: 'Thus Bujía',
    stock: 39,
    price: 172.63,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 55639,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Chair need then floor.',
        timestamp: '2024-07-13T03:22:10',
      },
      {
        id: 13759,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Establish significant second same follow present.',
        timestamp: '2023-06-23T14:59:52',
      },
      {
        id: 28574,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Perform night police identify statement half theory.',
        timestamp: '2025-02-11T07:52:35',
      },
    ],
  },
  {
    id: 493,
    name: 'Front Bujía',
    stock: 89,
    price: 443.35,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 19316,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Economy class head.',
        timestamp: '2024-01-18T10:02:05',
      },
      {
        id: 60384,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Resource example of international.',
        timestamp: '2024-04-04T19:32:08',
      },
      {
        id: 66814,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Field consider apply decade single age visit.',
        timestamp: '2024-10-03T15:14:16',
      },
      {
        id: 28441,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ball-Wheeler',
        timestamp: '2024-05-05T07:43:24',
      },
      {
        id: 36688,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mallory Ramsey',
        timestamp: '2024-12-17T09:25:58',
      },
    ],
  },
  {
    id: 494,
    name: 'Economy Amortiguador',
    stock: 28,
    price: 457.23,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 53325,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Karen Schmidt',
        timestamp: '2024-10-21T17:25:49',
      },
      {
        id: 31058,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Above front the fight again daughter.',
        timestamp: '2023-05-06T22:23:55',
      },
      {
        id: 81949,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Johnson PLC',
        timestamp: '2023-09-23T02:17:43',
      },
      {
        id: 73435,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Courtney Reeves',
        timestamp: '2024-12-23T17:35:26',
      },
      {
        id: 34898,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Kelly',
        timestamp: '2023-08-02T14:21:03',
      },
    ],
  },
  {
    id: 495,
    name: 'Yeah Bujía',
    stock: 4,
    price: 63.28,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 87877,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Real during red whole probably sort.',
        timestamp: '2024-09-03T12:13:56',
      },
    ],
  },
  {
    id: 496,
    name: 'Eye Amortiguador',
    stock: 17,
    price: 677.91,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 36434,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kyle Zamora',
        timestamp: '2025-02-23T15:06:35',
      },
      {
        id: 39715,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Roth, Morales and Neal',
        timestamp: '2025-03-30T18:06:43',
      },
      {
        id: 52587,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Spencer, Dixon and Thomas',
        timestamp: '2025-03-19T10:54:56',
      },
    ],
  },
  {
    id: 497,
    name: 'Use Filtro',
    stock: 66,
    price: 887.91,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 99131,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Ask others nation surface.',
        timestamp: '2025-02-12T12:57:34',
      },
      {
        id: 3691,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Edward Scott',
        timestamp: '2024-05-24T14:49:57',
      },
    ],
  },
  {
    id: 498,
    name: 'Foot Bujía',
    stock: 74,
    price: 460.12,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 56688,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor King LLC',
        timestamp: '2023-12-28T19:48:44',
      },
      {
        id: 46928,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente George George',
        timestamp: '2023-12-07T04:58:06',
      },
      {
        id: 13025,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Douglas Simmons',
        timestamp: '2024-07-17T05:00:33',
      },
    ],
  },
  {
    id: 499,
    name: 'Stand Pastilla',
    stock: 57,
    price: 786.13,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 41107,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Program man continue would model movie possible.',
        timestamp: '2024-05-04T01:52:07',
      },
    ],
  },
  {
    id: 500,
    name: 'Day Amortiguador',
    stock: 82,
    price: 110.11,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 71063,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Past child race rather only behavior.',
        timestamp: '2024-08-08T04:02:50',
      },
      {
        id: 60644,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Ability believe open increase fly gun box.',
        timestamp: '2024-02-02T07:35:54',
      },
      {
        id: 72848,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Let spend these subject.',
        timestamp: '2024-06-07T06:39:06',
      },
      {
        id: 26006,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Duncan',
        timestamp: '2024-02-23T03:36:29',
      },
    ],
  },
  {
    id: 501,
    name: 'Doctor Bujía',
    stock: 82,
    price: 990.34,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 21397,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Arrive behind few number study point win.',
        timestamp: '2025-02-11T07:19:22',
      },
      {
        id: 84388,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Julian Martinez',
        timestamp: '2024-04-14T04:35:20',
      },
      {
        id: 14445,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Baker',
        timestamp: '2023-07-23T17:43:07',
      },
      {
        id: 99058,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rodriguez and Sons',
        timestamp: '2023-06-30T09:42:37',
      },
      {
        id: 86978,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Class public common sense.',
        timestamp: '2024-07-18T12:55:02',
      },
    ],
  },
  {
    id: 502,
    name: 'Or Pastilla',
    stock: 64,
    price: 163.87,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 36302,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Black-Reyes',
        timestamp: '2024-04-19T07:28:48',
      },
    ],
  },
  {
    id: 503,
    name: 'Budget Pastilla',
    stock: 72,
    price: 690.09,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 3900,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sara Vaughn',
        timestamp: '2023-08-03T08:12:34',
      },
      {
        id: 58965,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Concern form peace start home human modern end.',
        timestamp: '2023-05-30T17:30:52',
      },
      {
        id: 30336,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Work unit lay necessary cell financial night.',
        timestamp: '2023-10-25T13:45:08',
      },
    ],
  },
  {
    id: 504,
    name: 'People Pastilla',
    stock: 75,
    price: 109.54,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 29799,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hampton-Wilson',
        timestamp: '2023-08-05T03:55:42',
      },
    ],
  },
  {
    id: 505,
    name: 'Century Bujía',
    stock: 28,
    price: 781.71,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 40697,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Dinner cost fire must accept tax full.',
        timestamp: '2024-01-21T05:12:41',
      },
      {
        id: 28225,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Danielle Randolph',
        timestamp: '2024-04-29T08:21:31',
      },
      {
        id: 19326,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Justin Schaefer',
        timestamp: '2024-10-06T11:46:26',
      },
    ],
  },
  {
    id: 506,
    name: 'Well Alternador',
    stock: 97,
    price: 889.23,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 49185,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Adams',
        timestamp: '2023-10-15T22:26:12',
      },
      {
        id: 68145,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Director both push meet poor either pretty number.',
        timestamp: '2024-12-20T10:41:05',
      },
      {
        id: 70481,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hernandez LLC',
        timestamp: '2024-02-08T07:18:32',
      },
      {
        id: 54445,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dunlap Ltd',
        timestamp: '2024-01-04T16:35:59',
      },
      {
        id: 51664,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Between responsibility attention understand.',
        timestamp: '2023-08-21T04:16:24',
      },
    ],
  },
  {
    id: 507,
    name: 'Particular Filtro',
    stock: 2,
    price: 581.08,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 54731,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ellison-Chavez',
        timestamp: '2025-04-12T02:53:19',
      },
      {
        id: 71655,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Murphy, Thomas and Barnes',
        timestamp: '2024-08-16T07:18:09',
      },
      {
        id: 26099,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Explain research fact officer official particular edge.',
        timestamp: '2023-06-09T00:03:25',
      },
      {
        id: 21469,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Matthew Garcia',
        timestamp: '2024-02-20T00:08:25',
      },
    ],
  },
  {
    id: 508,
    name: 'Seven Pastilla',
    stock: 45,
    price: 849.86,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 65300,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Donovan, Arnold and Brock',
        timestamp: '2024-11-02T04:50:07',
      },
      {
        id: 87909,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Elizabeth Beasley',
        timestamp: '2024-05-16T06:48:29',
      },
    ],
  },
  {
    id: 509,
    name: 'Under Alternador',
    stock: 55,
    price: 418.76,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 9036,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Four source attention century.',
        timestamp: '2023-12-15T10:45:00',
      },
      {
        id: 94562,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Fernandez, Jacobs and Daniels',
        timestamp: '2024-11-18T05:20:02',
      },
      {
        id: 92406,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Together bad response side report somebody.',
        timestamp: '2024-01-21T14:06:36',
      },
      {
        id: 10730,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Coleman Group',
        timestamp: '2024-10-21T04:35:27',
      },
      {
        id: 89465,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fisher-Hughes',
        timestamp: '2024-05-15T16:26:05',
      },
    ],
  },
  {
    id: 510,
    name: 'Best Amortiguador',
    stock: 26,
    price: 141.46,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 57440,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Heath',
        timestamp: '2024-08-26T22:55:34',
      },
      {
        id: 77685,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Of though option right region.',
        timestamp: '2023-09-07T04:21:12',
      },
    ],
  },
  {
    id: 511,
    name: 'Wife Bujía',
    stock: 47,
    price: 736.57,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 62824,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith Ltd',
        timestamp: '2024-07-15T16:52:11',
      },
      {
        id: 32102,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: List truth party help.',
        timestamp: '2024-05-30T22:36:18',
      },
    ],
  },
  {
    id: 512,
    name: 'Night Pastilla',
    stock: 2,
    price: 320.06,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 83416,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jon Williams',
        timestamp: '2025-04-07T14:27:31',
      },
      {
        id: 69388,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Information should leader remember operation.',
        timestamp: '2025-03-02T09:51:34',
      },
    ],
  },
  {
    id: 513,
    name: 'Best Filtro',
    stock: 5,
    price: 177.28,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 90507,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Patton Ltd',
        timestamp: '2023-09-13T17:19:13',
      },
    ],
  },
  {
    id: 514,
    name: 'Difference Amortiguador',
    stock: 40,
    price: 885.13,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 1869,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Stuff eight main herself name cost officer.',
        timestamp: '2023-07-12T06:29:34',
      },
      {
        id: 2293,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Step usually prepare wind catch real.',
        timestamp: '2024-01-27T11:57:58',
      },
      {
        id: 70240,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miller-Garcia',
        timestamp: '2025-02-17T03:26:09',
      },
    ],
  },
  {
    id: 515,
    name: 'Resource Amortiguador',
    stock: 14,
    price: 743.07,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 42229,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Charles White',
        timestamp: '2024-09-26T16:39:53',
      },
      {
        id: 90881,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wolf, Flores and Fernandez',
        timestamp: '2024-03-29T18:48:34',
      },
      {
        id: 3711,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Movie reach news east past smile article.',
        timestamp: '2023-08-30T03:44:32',
      },
    ],
  },
  {
    id: 516,
    name: 'Stop Pastilla',
    stock: 92,
    price: 930.94,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 93101,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lisa Robinson',
        timestamp: '2023-07-22T10:17:31',
      },
      {
        id: 43089,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sexton-Hodges',
        timestamp: '2023-09-28T04:46:58',
      },
    ],
  },
  {
    id: 517,
    name: 'That Amortiguador',
    stock: 88,
    price: 295.41,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 49206,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Stewart, Morrow and Ashley',
        timestamp: '2024-11-13T07:07:57',
      },
      {
        id: 44694,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jared Porter',
        timestamp: '2023-11-28T15:07:33',
      },
      {
        id: 87529,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Anderson, Chen and Nichols',
        timestamp: '2024-06-14T01:32:09',
      },
    ],
  },
  {
    id: 518,
    name: 'Fine Amortiguador',
    stock: 97,
    price: 944.49,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 6266,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Crime nothing identify effect eat.',
        timestamp: '2025-03-25T14:49:12',
      },
      {
        id: 91243,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Indicate face central similar.',
        timestamp: '2024-02-10T20:29:13',
      },
      {
        id: 11968,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown, Miller and Myers',
        timestamp: '2023-10-24T09:50:53',
      },
      {
        id: 50276,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Vance Inc',
        timestamp: '2024-08-03T01:27:17',
      },
      {
        id: 8579,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jennifer Hill',
        timestamp: '2024-04-25T23:58:28',
      },
    ],
  },
  {
    id: 519,
    name: 'Raise Filtro',
    stock: 75,
    price: 283.94,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 94364,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Order moment go consider add design moment.',
        timestamp: '2023-11-17T03:53:11',
      },
      {
        id: 35602,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mcdowell-Garcia',
        timestamp: '2025-04-21T05:20:59',
      },
      {
        id: 50469,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Briana Bridges',
        timestamp: '2024-07-26T16:55:48',
      },
    ],
  },
  {
    id: 520,
    name: 'Box Filtro',
    stock: 30,
    price: 571.41,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 24915,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Johnson PLC',
        timestamp: '2024-04-10T06:33:30',
      },
      {
        id: 11195,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Mcgrath',
        timestamp: '2023-10-22T04:14:38',
      },
    ],
  },
  {
    id: 521,
    name: 'Life Alternador',
    stock: 26,
    price: 890.94,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 30481,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Thomas Hayes',
        timestamp: '2024-01-04T01:10:00',
      },
    ],
  },
  {
    id: 522,
    name: 'Production Amortiguador',
    stock: 16,
    price: 176.74,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 43444,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Floor perhaps century stay doctor.',
        timestamp: '2023-08-07T11:02:34',
      },
      {
        id: 78432,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Edwards',
        timestamp: '2025-03-08T09:19:29',
      },
      {
        id: 83787,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bowman-Wilson',
        timestamp: '2024-06-02T01:28:23',
      },
      {
        id: 26356,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Aaron Cooper',
        timestamp: '2023-09-21T20:21:20',
      },
      {
        id: 86286,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Again white none since.',
        timestamp: '2024-03-26T22:05:14',
      },
    ],
  },
  {
    id: 523,
    name: 'Assume Pastilla',
    stock: 14,
    price: 399.71,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 32978,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Park-Lane',
        timestamp: '2023-08-18T05:17:55',
      },
      {
        id: 63784,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Significant next account.',
        timestamp: '2023-07-07T11:50:40',
      },
      {
        id: 64084,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Similar all someone away edge some TV.',
        timestamp: '2023-08-12T22:04:08',
      },
      {
        id: 17799,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rodriguez-Smith',
        timestamp: '2023-06-06T11:11:31',
      },
      {
        id: 37127,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Half watch more agency us room long.',
        timestamp: '2023-09-14T16:23:12',
      },
    ],
  },
  {
    id: 524,
    name: 'Major Amortiguador',
    stock: 40,
    price: 482.81,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 81881,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Shannon Bennett',
        timestamp: '2024-01-26T12:15:04',
      },
    ],
  },
  {
    id: 525,
    name: 'White Alternador',
    stock: 89,
    price: 609.55,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 43786,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Clark, Maddox and Griffin',
        timestamp: '2023-06-28T06:52:21',
      },
      {
        id: 40382,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Heather Velez',
        timestamp: '2024-06-14T23:21:56',
      },
      {
        id: 13924,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Caroline Peterson',
        timestamp: '2024-01-17T16:43:30',
      },
      {
        id: 39169,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Large campaign including support speak must tax.',
        timestamp: '2024-02-27T01:37:22',
      },
      {
        id: 12773,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Score your me laugh.',
        timestamp: '2024-06-05T03:59:16',
      },
    ],
  },
  {
    id: 526,
    name: 'Might Pastilla',
    stock: 86,
    price: 275.64,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 70831,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Party type exist firm new.',
        timestamp: '2023-08-24T17:03:48',
      },
    ],
  },
  {
    id: 527,
    name: 'Chance Bujía',
    stock: 45,
    price: 253.81,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 20723,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Shelton, Holloway and Huff',
        timestamp: '2023-08-12T23:20:28',
      },
      {
        id: 20403,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Rebecca Farmer',
        timestamp: '2025-01-27T13:19:40',
      },
      {
        id: 41646,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Positive seek onto police time trade.',
        timestamp: '2024-09-07T19:29:07',
      },
    ],
  },
  {
    id: 528,
    name: 'Stay Alternador',
    stock: 47,
    price: 125.48,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 6187,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Field beautiful officer go.',
        timestamp: '2023-05-03T07:13:45',
      },
      {
        id: 37438,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Montes, Jackson and Gutierrez',
        timestamp: '2023-07-31T16:35:32',
      },
    ],
  },
  {
    id: 529,
    name: 'Address Alternador',
    stock: 11,
    price: 122.02,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 41899,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perry and Sons',
        timestamp: '2023-10-16T12:34:53',
      },
      {
        id: 98040,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Richardson and Sons',
        timestamp: '2024-05-06T18:29:29',
      },
      {
        id: 92279,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Johnson',
        timestamp: '2024-04-10T04:08:03',
      },
      {
        id: 6602,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Howell-Simmons',
        timestamp: '2024-10-13T22:56:57',
      },
    ],
  },
  {
    id: 530,
    name: 'Democrat Filtro',
    stock: 3,
    price: 182.35,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 93861,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Time walk important have owner couple of.',
        timestamp: '2025-02-28T04:33:02',
      },
      {
        id: 20421,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: South must prevent society kitchen manage past.',
        timestamp: '2023-07-26T16:46:02',
      },
      {
        id: 66716,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lee-Woods',
        timestamp: '2023-12-15T01:50:34',
      },
    ],
  },
  {
    id: 531,
    name: 'Value Pastilla',
    stock: 85,
    price: 748.56,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 21512,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mrs. Tiffany Thomas',
        timestamp: '2024-07-25T01:50:53',
      },
    ],
  },
  {
    id: 532,
    name: 'Only Filtro',
    stock: 12,
    price: 194.46,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 58172,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Anna Cross',
        timestamp: '2023-11-30T15:13:38',
      },
    ],
  },
  {
    id: 533,
    name: 'Local Bujía',
    stock: 99,
    price: 110.55,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 63936,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Burch, Reyes and Miller',
        timestamp: '2023-09-09T21:21:59',
      },
      {
        id: 40969,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ivan Lin',
        timestamp: '2023-08-14T19:34:19',
      },
      {
        id: 84248,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Upon true common serve physical affect sing however.',
        timestamp: '2024-10-06T01:53:43',
      },
    ],
  },
  {
    id: 534,
    name: 'Protect Filtro',
    stock: 64,
    price: 99.74,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 71195,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Notice ago let have step arrive.',
        timestamp: '2024-01-31T10:09:04',
      },
      {
        id: 42463,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rodriguez-Kidd',
        timestamp: '2023-12-25T23:15:02',
      },
      {
        id: 95632,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kathy Rodriguez',
        timestamp: '2025-01-16T02:48:59',
      },
    ],
  },
  {
    id: 535,
    name: 'Wonder Filtro',
    stock: 73,
    price: 926.57,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 90924,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ortiz LLC',
        timestamp: '2023-08-06T23:34:25',
      },
      {
        id: 20860,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lindsey Dickson DVM',
        timestamp: '2023-07-31T06:32:35',
      },
      {
        id: 41951,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Yolanda Nelson',
        timestamp: '2024-12-25T03:24:47',
      },
      {
        id: 95330,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Moore Inc',
        timestamp: '2023-06-16T00:53:32',
      },
    ],
  },
  {
    id: 536,
    name: 'Low Bujía',
    stock: 54,
    price: 826.96,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 16771,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sheila Christensen',
        timestamp: '2025-03-06T10:15:56',
      },
      {
        id: 75969,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Matthew Dunn',
        timestamp: '2024-04-09T21:03:13',
      },
      {
        id: 53764,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Rate sign draw would decide manager.',
        timestamp: '2024-05-27T14:25:04',
      },
      {
        id: 61304,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Continue word best compare.',
        timestamp: '2023-12-11T00:46:24',
      },
      {
        id: 66933,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Rachel Rose',
        timestamp: '2023-08-15T21:46:15',
      },
    ],
  },
  {
    id: 537,
    name: 'Term Amortiguador',
    stock: 40,
    price: 169.03,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 46517,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Eat amount film clearly minute husband food.',
        timestamp: '2024-12-27T14:31:27',
      },
      {
        id: 84841,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Maddox, Nixon and Johnson',
        timestamp: '2024-12-11T12:51:01',
      },
    ],
  },
  {
    id: 538,
    name: 'Cost Pastilla',
    stock: 29,
    price: 295.73,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 21808,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Harris',
        timestamp: '2024-02-03T05:38:34',
      },
      {
        id: 42190,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nicholas Allen',
        timestamp: '2024-09-08T15:26:47',
      },
      {
        id: 3556,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Show reach since young hit.',
        timestamp: '2025-02-06T13:51:03',
      },
    ],
  },
  {
    id: 539,
    name: 'Interest Pastilla',
    stock: 10,
    price: 950.64,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 24721,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kenneth Walker',
        timestamp: '2024-11-06T21:53:02',
      },
      {
        id: 76641,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kim Turner',
        timestamp: '2023-08-21T07:04:56',
      },
      {
        id: 81296,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Price Ltd',
        timestamp: '2023-08-05T07:18:53',
      },
    ],
  },
  {
    id: 540,
    name: 'Back Alternador',
    stock: 74,
    price: 466.04,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 30808,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Huffman-Wallace',
        timestamp: '2024-01-09T16:57:19',
      },
      {
        id: 56936,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Albert Alexander',
        timestamp: '2025-03-10T15:34:37',
      },
      {
        id: 92427,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Republican continue relationship human.',
        timestamp: '2025-01-31T23:08:58',
      },
      {
        id: 32724,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Roach-Green',
        timestamp: '2024-08-25T03:06:39',
      },
    ],
  },
  {
    id: 541,
    name: 'Teach Filtro',
    stock: 4,
    price: 136.03,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 65315,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kevin Sutton',
        timestamp: '2025-01-06T21:07:14',
      },
      {
        id: 17728,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Donna Chambers',
        timestamp: '2024-12-13T04:54:56',
      },
      {
        id: 83314,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ernest Solis MD',
        timestamp: '2024-01-23T17:03:48',
      },
      {
        id: 17574,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dawson, Wilson and Meyer',
        timestamp: '2023-09-25T14:12:37',
      },
    ],
  },
  {
    id: 542,
    name: 'Any Alternador',
    stock: 98,
    price: 806.58,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 32562,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Diaz Group',
        timestamp: '2024-11-30T21:21:57',
      },
      {
        id: 59881,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Behavior treat ball feeling head case continue.',
        timestamp: '2025-01-03T12:30:27',
      },
      {
        id: 48406,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: No audience dream leg state score policy.',
        timestamp: '2024-01-18T22:22:37',
      },
      {
        id: 55568,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Norris-Gonzalez',
        timestamp: '2025-01-15T22:02:00',
      },
    ],
  },
  {
    id: 543,
    name: 'Five Bujía',
    stock: 49,
    price: 581.31,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 35797,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor James, Green and Perry',
        timestamp: '2024-07-07T03:54:52',
      },
    ],
  },
  {
    id: 544,
    name: 'Guy Filtro',
    stock: 6,
    price: 422.26,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 29725,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Seth Howell',
        timestamp: '2024-05-14T13:58:19',
      },
    ],
  },
  {
    id: 545,
    name: 'Total Pastilla',
    stock: 33,
    price: 734.99,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 64766,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jason Chambers',
        timestamp: '2023-06-05T01:20:36',
      },
      {
        id: 2184,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Eric Leonard',
        timestamp: '2024-03-02T01:05:12',
      },
      {
        id: 59922,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dr. Ryan Sellers',
        timestamp: '2023-12-02T02:32:32',
      },
    ],
  },
  {
    id: 546,
    name: 'Human Amortiguador',
    stock: 77,
    price: 696.48,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 82524,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Point remember hand body present whether real.',
        timestamp: '2023-12-20T18:47:03',
      },
      {
        id: 39649,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Watson',
        timestamp: '2024-01-21T20:42:55',
      },
      {
        id: 86339,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael York',
        timestamp: '2024-12-07T22:29:35',
      },
    ],
  },
  {
    id: 547,
    name: 'Light Alternador',
    stock: 55,
    price: 69.81,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 53513,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Manager she level table response.',
        timestamp: '2025-04-25T03:47:46',
      },
      {
        id: 19202,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nicholas Morgan',
        timestamp: '2024-08-24T19:02:36',
      },
      {
        id: 9166,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Aaron Scott',
        timestamp: '2023-07-22T16:31:46',
      },
      {
        id: 45944,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jay Bailey',
        timestamp: '2024-08-25T21:58:33',
      },
      {
        id: 70195,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Moore, Cochran and Watkins',
        timestamp: '2024-12-14T18:25:30',
      },
    ],
  },
  {
    id: 548,
    name: 'Buy Alternador',
    stock: 12,
    price: 206.92,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 3073,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amanda Ramirez',
        timestamp: '2023-12-22T17:35:01',
      },
      {
        id: 36151,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Piece decision avoid represent act.',
        timestamp: '2024-04-27T11:55:02',
      },
      {
        id: 50531,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rogers Group',
        timestamp: '2023-05-29T23:16:23',
      },
      {
        id: 98616,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Nash Inc',
        timestamp: '2023-11-02T21:07:18',
      },
      {
        id: 71738,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lopez Group',
        timestamp: '2025-03-31T01:57:27',
      },
    ],
  },
  {
    id: 549,
    name: 'Million Bujía',
    stock: 49,
    price: 421.38,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 59973,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jennifer Adams',
        timestamp: '2025-03-05T15:38:37',
      },
      {
        id: 17661,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Note I assume course argue table.',
        timestamp: '2024-06-16T06:40:01',
      },
    ],
  },
  {
    id: 550,
    name: 'Every Bujía',
    stock: 0,
    price: 731.65,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 18539,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Manage future look past.',
        timestamp: '2024-04-24T13:41:13',
      },
      {
        id: 30136,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Newton-Mcclain',
        timestamp: '2024-03-26T21:45:01',
      },
      {
        id: 69085,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davis and Sons',
        timestamp: '2024-11-02T14:02:30',
      },
      {
        id: 13303,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Blake Hill',
        timestamp: '2023-09-08T11:40:06',
      },
    ],
  },
  {
    id: 551,
    name: 'Source Amortiguador',
    stock: 24,
    price: 675.29,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 75354,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Emily Lane DDS',
        timestamp: '2024-01-25T05:19:25',
      },
      {
        id: 56459,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rodriguez Inc',
        timestamp: '2025-01-18T23:57:32',
      },
      {
        id: 82572,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Carter, Fox and Kim',
        timestamp: '2024-02-02T02:20:12',
      },
    ],
  },
  {
    id: 552,
    name: 'Official Pastilla',
    stock: 89,
    price: 886.29,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 29004,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wilson, West and Austin',
        timestamp: '2023-10-21T13:49:55',
      },
      {
        id: 97483,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrew Thornton',
        timestamp: '2024-09-19T03:49:29',
      },
    ],
  },
  {
    id: 553,
    name: 'Experience Amortiguador',
    stock: 33,
    price: 243.37,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 93517,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Glass space us watch.',
        timestamp: '2023-05-12T13:35:57',
      },
      {
        id: 20080,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cynthia Ray',
        timestamp: '2023-06-25T03:50:21',
      },
      {
        id: 7637,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Armstrong-Williams',
        timestamp: '2024-03-01T05:33:32',
      },
      {
        id: 38813,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones-Rodriguez',
        timestamp: '2024-11-25T00:36:21',
      },
    ],
  },
  {
    id: 554,
    name: 'Reflect Amortiguador',
    stock: 21,
    price: 337.94,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 2839,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Madeline Nicholson',
        timestamp: '2025-04-21T13:08:46',
      },
      {
        id: 65301,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Matthews-Nelson',
        timestamp: '2024-08-16T02:33:49',
      },
      {
        id: 69296,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Idea cold statement always dream true must.',
        timestamp: '2025-02-25T18:18:26',
      },
      {
        id: 40642,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Austin Turner',
        timestamp: '2023-05-01T20:44:23',
      },
      {
        id: 12307,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Travis-Lewis',
        timestamp: '2023-06-11T19:01:50',
      },
    ],
  },
  {
    id: 555,
    name: 'Lay Amortiguador',
    stock: 50,
    price: 927.97,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 97198,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Billion night focus quickly only word.',
        timestamp: '2024-09-02T13:32:21',
      },
      {
        id: 2757,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Interesting mean test task follow.',
        timestamp: '2024-07-06T03:29:11',
      },
      {
        id: 75217,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Shawn Cherry',
        timestamp: '2024-02-01T21:07:14',
      },
      {
        id: 59877,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Calvin Clayton',
        timestamp: '2023-11-26T19:37:05',
      },
    ],
  },
  {
    id: 556,
    name: 'Particularly Pastilla',
    stock: 34,
    price: 690.61,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 59627,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Force physical building road nature hope.',
        timestamp: '2024-11-19T04:12:44',
      },
      {
        id: 58930,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: List drop fish mean.',
        timestamp: '2024-12-09T03:48:52',
      },
      {
        id: 53327,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Hall',
        timestamp: '2024-10-18T09:41:06',
      },
      {
        id: 25716,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lauren Mcclure',
        timestamp: '2024-11-17T12:13:33',
      },
      {
        id: 34639,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sanchez-Grimes',
        timestamp: '2025-03-31T20:43:23',
      },
    ],
  },
  {
    id: 557,
    name: 'They Pastilla',
    stock: 17,
    price: 801.77,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 85000,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mercer-Jones',
        timestamp: '2023-07-26T20:20:42',
      },
      {
        id: 47938,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Upon coach present buy nature later manage.',
        timestamp: '2024-08-13T11:52:00',
      },
      {
        id: 33987,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Derek Grimes',
        timestamp: '2024-03-05T07:28:20',
      },
    ],
  },
  {
    id: 558,
    name: 'None Pastilla',
    stock: 76,
    price: 366.64,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 67346,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kyle Nguyen',
        timestamp: '2024-11-03T09:22:39',
      },
      {
        id: 68047,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrew Jackson',
        timestamp: '2024-06-29T15:30:15',
      },
      {
        id: 15563,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Catch section perhaps.',
        timestamp: '2024-05-13T07:18:15',
      },
    ],
  },
  {
    id: 559,
    name: 'Word Bujía',
    stock: 73,
    price: 341.69,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 88953,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mullins Group',
        timestamp: '2024-09-21T02:09:59',
      },
      {
        id: 70900,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Pope, Mclean and Moore',
        timestamp: '2023-11-17T02:53:04',
      },
    ],
  },
  {
    id: 560,
    name: 'Billion Amortiguador',
    stock: 83,
    price: 157.82,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 93037,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Copeland-Brown',
        timestamp: '2024-07-25T23:09:42',
      },
      {
        id: 73320,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Simmons',
        timestamp: '2023-08-12T09:20:35',
      },
      {
        id: 80795,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hicks, Ochoa and Campbell',
        timestamp: '2024-12-01T18:21:38',
      },
      {
        id: 9069,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Diaz Inc',
        timestamp: '2024-02-22T20:20:57',
      },
      {
        id: 2268,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Whitney Watts',
        timestamp: '2023-10-05T04:11:23',
      },
    ],
  },
  {
    id: 561,
    name: 'Real Bujía',
    stock: 71,
    price: 524.68,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 66421,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Angela Gilbert MD',
        timestamp: '2023-06-18T00:45:47',
      },
      {
        id: 30693,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Stop other tonight force.',
        timestamp: '2024-02-11T11:15:36',
      },
      {
        id: 52928,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Reed, Green and Chen',
        timestamp: '2024-09-07T17:58:42',
      },
    ],
  },
  {
    id: 562,
    name: 'Own Alternador',
    stock: 40,
    price: 404.17,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 16935,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Boyd-English',
        timestamp: '2024-09-14T19:53:06',
      },
      {
        id: 45206,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Griffin LLC',
        timestamp: '2023-08-27T13:46:06',
      },
      {
        id: 9522,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bobby Myers',
        timestamp: '2024-09-26T14:10:10',
      },
      {
        id: 31982,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Garrett Wiggins',
        timestamp: '2023-08-04T18:38:01',
      },
      {
        id: 89464,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor White, Anderson and Stone',
        timestamp: '2024-04-26T12:51:02',
      },
    ],
  },
  {
    id: 563,
    name: 'Money Amortiguador',
    stock: 56,
    price: 592.5,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 86378,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Newspaper quality mind last determine.',
        timestamp: '2024-09-12T20:40:57',
      },
      {
        id: 86553,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Johnson',
        timestamp: '2024-01-17T12:06:27',
      },
    ],
  },
  {
    id: 564,
    name: 'Yard Amortiguador',
    stock: 64,
    price: 504.94,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 59092,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hale Inc',
        timestamp: '2024-07-06T06:11:13',
      },
      {
        id: 10576,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Barnes-Jones',
        timestamp: '2024-03-03T00:24:49',
      },
      {
        id: 58665,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Loss pretty send.',
        timestamp: '2024-05-24T12:55:41',
      },
    ],
  },
  {
    id: 565,
    name: 'Loss Amortiguador',
    stock: 84,
    price: 635.67,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 22919,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Scott LLC',
        timestamp: '2024-07-06T12:43:38',
      },
      {
        id: 86098,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Patel, Pena and Campbell',
        timestamp: '2025-04-02T03:30:02',
      },
      {
        id: 74630,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Saunders Group',
        timestamp: '2023-06-21T08:40:37',
      },
      {
        id: 16167,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Robert Rice',
        timestamp: '2024-10-24T19:14:35',
      },
      {
        id: 66926,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Brown',
        timestamp: '2023-09-03T09:34:59',
      },
    ],
  },
  {
    id: 566,
    name: 'Rather Pastilla',
    stock: 72,
    price: 284.46,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 21595,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Decision plant thousand will office soon.',
        timestamp: '2025-04-21T03:22:49',
      },
      {
        id: 53638,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Corey Reed',
        timestamp: '2023-07-05T18:38:19',
      },
    ],
  },
  {
    id: 567,
    name: 'Senior Bujía',
    stock: 0,
    price: 137.98,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 17512,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Answer information find exist raise baby make.',
        timestamp: '2024-09-25T11:46:30',
      },
      {
        id: 932,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Allen Arnold',
        timestamp: '2023-11-13T22:32:59',
      },
      {
        id: 5732,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams-Sherman',
        timestamp: '2024-04-10T11:03:28',
      },
      {
        id: 99803,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Attack writer whether purpose stop.',
        timestamp: '2024-08-16T16:22:33',
      },
    ],
  },
  {
    id: 568,
    name: 'Line Filtro',
    stock: 5,
    price: 480.71,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 22661,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Senior party least happy.',
        timestamp: '2024-03-09T17:42:37',
      },
      {
        id: 37005,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Evans, Hartman and Green',
        timestamp: '2023-12-05T06:53:37',
      },
      {
        id: 26200,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Wife newspaper staff act pretty.',
        timestamp: '2024-01-23T21:30:23',
      },
      {
        id: 76380,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kara Farrell',
        timestamp: '2025-04-12T22:31:35',
      },
    ],
  },
  {
    id: 569,
    name: 'People Alternador',
    stock: 71,
    price: 382.23,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 34353,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Scott Miller',
        timestamp: '2023-07-13T13:39:52',
      },
      {
        id: 33991,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Also without window toward career whole I.',
        timestamp: '2023-12-03T23:52:15',
      },
      {
        id: 90277,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Matthew Higgins',
        timestamp: '2024-07-17T13:49:57',
      },
    ],
  },
  {
    id: 570,
    name: 'Serious Pastilla',
    stock: 80,
    price: 105.56,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 36679,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Reduce four store Republican.',
        timestamp: '2024-04-15T01:22:00',
      },
      {
        id: 39158,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Politics window read risk at.',
        timestamp: '2025-02-07T05:29:50',
      },
      {
        id: 26811,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cordova PLC',
        timestamp: '2023-12-24T15:41:26',
      },
    ],
  },
  {
    id: 571,
    name: 'Owner Bujía',
    stock: 34,
    price: 937.72,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 68230,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cody Williams',
        timestamp: '2024-06-07T17:49:55',
      },
      {
        id: 13383,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Mind chair event town manage per.',
        timestamp: '2023-07-31T12:35:12',
      },
      {
        id: 38522,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor White-Roberts',
        timestamp: '2024-12-06T08:03:54',
      },
      {
        id: 97630,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente James White',
        timestamp: '2025-03-04T11:16:03',
      },
    ],
  },
  {
    id: 572,
    name: 'Choose Pastilla',
    stock: 75,
    price: 586.37,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 95356,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Salinas and Sons',
        timestamp: '2024-12-23T11:07:41',
      },
      {
        id: 84558,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Steven Johnson',
        timestamp: '2024-02-25T10:19:37',
      },
    ],
  },
  {
    id: 573,
    name: 'Name Alternador',
    stock: 74,
    price: 296.15,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 51179,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Serve hundred southern.',
        timestamp: '2024-03-13T07:37:25',
      },
      {
        id: 91249,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Begin still recent get beautiful society beyond.',
        timestamp: '2023-06-13T03:02:55',
      },
      {
        id: 50135,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dwayne Jones',
        timestamp: '2023-09-03T08:45:53',
      },
      {
        id: 1279,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ibarra-Alvarado',
        timestamp: '2023-10-30T06:10:15',
      },
    ],
  },
  {
    id: 574,
    name: 'Must Amortiguador',
    stock: 63,
    price: 746.79,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 72933,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jordan Robinson',
        timestamp: '2023-05-23T23:08:45',
      },
      {
        id: 39571,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Fine hair again help.',
        timestamp: '2024-12-05T15:01:02',
      },
    ],
  },
  {
    id: 575,
    name: 'Between Amortiguador',
    stock: 26,
    price: 775.53,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 12222,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jesse Snyder',
        timestamp: '2024-04-22T18:53:39',
      },
      {
        id: 8898,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christopher Carter',
        timestamp: '2024-07-08T10:38:57',
      },
    ],
  },
  {
    id: 576,
    name: 'Suffer Filtro',
    stock: 94,
    price: 868.82,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 23523,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Third theory effort it sort significant structure.',
        timestamp: '2023-05-21T13:17:03',
      },
    ],
  },
  {
    id: 577,
    name: 'Fill Pastilla',
    stock: 7,
    price: 566.9,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 32966,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cain LLC',
        timestamp: '2023-12-07T07:58:54',
      },
      {
        id: 65362,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Levine, Beck and Price',
        timestamp: '2024-07-07T17:12:49',
      },
      {
        id: 58887,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mark Williams',
        timestamp: '2024-05-25T10:28:11',
      },
      {
        id: 8979,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith Group',
        timestamp: '2024-04-15T19:06:21',
      },
      {
        id: 30956,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Writer pay if anyone base economy because.',
        timestamp: '2025-03-24T19:56:47',
      },
    ],
  },
  {
    id: 578,
    name: 'Represent Pastilla',
    stock: 67,
    price: 426.6,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 91558,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Foster LLC',
        timestamp: '2024-10-12T16:22:07',
      },
      {
        id: 32783,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Hospital appear how could mission read structure.',
        timestamp: '2023-10-19T17:08:02',
      },
      {
        id: 69990,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michelle Hobbs',
        timestamp: '2024-04-20T16:46:06',
      },
      {
        id: 16472,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jack Sanchez',
        timestamp: '2023-07-04T12:20:18',
      },
      {
        id: 83656,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Love, Johnson and Lloyd',
        timestamp: '2023-08-01T14:57:39',
      },
    ],
  },
  {
    id: 579,
    name: 'Area Amortiguador',
    stock: 31,
    price: 829.63,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 77470,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lopez, Walter and Wilson',
        timestamp: '2024-05-28T18:45:07',
      },
      {
        id: 1127,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Stock represent energy first eye let return.',
        timestamp: '2024-10-20T10:39:56',
      },
      {
        id: 58436,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Upon thing particularly now center agency rate near.',
        timestamp: '2023-11-13T12:30:07',
      },
      {
        id: 62511,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Value keep election listen drug.',
        timestamp: '2024-09-10T22:31:25',
      },
    ],
  },
  {
    id: 580,
    name: 'Resource Bujía',
    stock: 88,
    price: 223.31,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 33721,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Griffith-Sanchez',
        timestamp: '2024-04-03T11:08:26',
      },
      {
        id: 76463,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Stacy Garcia',
        timestamp: '2024-01-01T13:07:05',
      },
      {
        id: 69330,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Line wall task world.',
        timestamp: '2023-06-22T22:45:55',
      },
      {
        id: 28586,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Jones',
        timestamp: '2024-03-25T01:03:10',
      },
      {
        id: 45201,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Kline-Wright',
        timestamp: '2023-05-03T06:18:55',
      },
    ],
  },
  {
    id: 581,
    name: 'Animal Filtro',
    stock: 99,
    price: 272.86,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 28938,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Station say for provide economic both thus.',
        timestamp: '2024-02-16T21:50:41',
      },
    ],
  },
  {
    id: 582,
    name: 'Discussion Alternador',
    stock: 78,
    price: 646.36,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 36674,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ruben Houston',
        timestamp: '2023-11-17T19:56:12',
      },
      {
        id: 43692,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Patricia Cox',
        timestamp: '2025-02-10T15:16:32',
      },
      {
        id: 89261,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Win ok worry town recently sometimes time.',
        timestamp: '2024-06-21T15:05:05',
      },
      {
        id: 96500,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Team beautiful situation drop reach.',
        timestamp: '2024-12-10T07:07:38',
      },
      {
        id: 29266,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Troy Owens',
        timestamp: '2023-10-02T14:42:11',
      },
    ],
  },
  {
    id: 583,
    name: 'Use Pastilla',
    stock: 3,
    price: 614.83,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 36220,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Meredith Gonzalez',
        timestamp: '2023-08-29T13:42:43',
      },
      {
        id: 60209,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rogers-Lucero',
        timestamp: '2024-04-12T18:00:57',
      },
      {
        id: 66345,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fox PLC',
        timestamp: '2023-06-25T22:31:55',
      },
      {
        id: 87486,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Holmes-Robbins',
        timestamp: '2023-10-29T13:40:37',
      },
    ],
  },
  {
    id: 584,
    name: 'Environment Pastilla',
    stock: 11,
    price: 711.47,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 91341,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perez-Freeman',
        timestamp: '2023-05-12T02:55:52',
      },
      {
        id: 38545,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hayes-George',
        timestamp: '2024-01-15T19:35:13',
      },
      {
        id: 48025,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wright, Clark and Mills',
        timestamp: '2023-04-30T21:45:54',
      },
      {
        id: 98274,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brittany Hudson',
        timestamp: '2025-03-12T12:51:49',
      },
    ],
  },
  {
    id: 585,
    name: 'By Alternador',
    stock: 94,
    price: 281.52,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 22138,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amanda Thomas',
        timestamp: '2025-03-03T23:43:48',
      },
    ],
  },
  {
    id: 586,
    name: 'Teach Bujía',
    stock: 51,
    price: 879.85,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 91440,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Roger Sanchez',
        timestamp: '2024-05-15T22:56:40',
      },
      {
        id: 91742,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ross Group',
        timestamp: '2025-04-02T18:37:56',
      },
      {
        id: 15334,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrea Macias',
        timestamp: '2025-02-12T08:15:36',
      },
      {
        id: 78826,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Approach us ten either authority word state.',
        timestamp: '2024-01-26T23:21:08',
      },
    ],
  },
  {
    id: 587,
    name: 'Whole Filtro',
    stock: 74,
    price: 608.88,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 66931,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mcfarland-Kelley',
        timestamp: '2024-11-15T20:48:33',
      },
      {
        id: 38174,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Julie Bennett',
        timestamp: '2023-11-03T05:55:56',
      },
      {
        id: 76563,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Executive magazine spend play growth.',
        timestamp: '2023-08-05T06:41:49',
      },
      {
        id: 80440,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Your television mouth structure.',
        timestamp: '2024-11-26T21:06:37',
      },
    ],
  },
  {
    id: 588,
    name: 'Really Filtro',
    stock: 67,
    price: 651.91,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 92296,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davis-Rivera',
        timestamp: '2024-03-01T13:18:44',
      },
    ],
  },
  {
    id: 589,
    name: 'Choice Amortiguador',
    stock: 14,
    price: 401.99,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 42510,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Yourself seem yeah week ability break concern factor.',
        timestamp: '2024-05-08T04:40:17',
      },
      {
        id: 49366,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Address understand very today born.',
        timestamp: '2025-04-11T02:50:44',
      },
      {
        id: 64848,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cox-Berry',
        timestamp: '2023-08-27T04:23:17',
      },
    ],
  },
  {
    id: 590,
    name: 'Check Filtro',
    stock: 93,
    price: 743.15,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 83361,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mrs. Nancy Clark',
        timestamp: '2023-06-07T19:42:28',
      },
      {
        id: 48949,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Page move buy determine gun.',
        timestamp: '2024-06-05T22:50:04',
      },
      {
        id: 40402,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Watkins, Brown and Morton',
        timestamp: '2024-03-11T07:51:13',
      },
      {
        id: 94424,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith Ltd',
        timestamp: '2023-05-30T23:06:14',
      },
    ],
  },
  {
    id: 591,
    name: 'Really Alternador',
    stock: 77,
    price: 276.3,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 25681,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jason Ellison',
        timestamp: '2025-04-22T17:22:17',
      },
    ],
  },
  {
    id: 592,
    name: 'Decide Amortiguador',
    stock: 95,
    price: 573.86,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 30046,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Leonard Inc',
        timestamp: '2025-04-25T04:36:11',
      },
      {
        id: 3933,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Holloway, Williams and Patterson',
        timestamp: '2023-09-30T03:53:43',
      },
      {
        id: 7995,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lawrence and Sons',
        timestamp: '2025-03-25T20:12:00',
      },
      {
        id: 92588,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tiffany Cooper',
        timestamp: '2024-06-11T09:35:49',
      },
      {
        id: 92276,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Harris-Owen',
        timestamp: '2024-09-15T11:12:27',
      },
    ],
  },
  {
    id: 593,
    name: 'Put Pastilla',
    stock: 98,
    price: 717.65,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 63560,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Forward attention dream behind year research I.',
        timestamp: '2024-11-21T12:50:34',
      },
    ],
  },
  {
    id: 594,
    name: 'Foreign Pastilla',
    stock: 31,
    price: 776.7,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 21929,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Experience these four spend growth full represent.',
        timestamp: '2024-01-14T13:52:44',
      },
      {
        id: 6965,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith and Sons',
        timestamp: '2024-11-14T08:01:57',
      },
      {
        id: 15631,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Show much reason.',
        timestamp: '2024-05-29T20:12:45',
      },
      {
        id: 74073,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Back away north pass option.',
        timestamp: '2024-04-27T05:29:49',
      },
    ],
  },
  {
    id: 595,
    name: 'Now Filtro',
    stock: 36,
    price: 162.87,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 85874,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Alvarez LLC',
        timestamp: '2025-03-13T18:21:48',
      },
      {
        id: 59546,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Themselves task method morning.',
        timestamp: '2024-01-09T19:37:15',
      },
      {
        id: 79687,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Margaret Hall',
        timestamp: '2024-05-06T05:05:09',
      },
      {
        id: 46677,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Structure board policy center.',
        timestamp: '2025-01-05T07:19:46',
      },
    ],
  },
  {
    id: 596,
    name: 'Hair Bujía',
    stock: 3,
    price: 839.08,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 18943,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sandra Torres',
        timestamp: '2023-08-28T09:54:01',
      },
      {
        id: 22152,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cox-Mccarty',
        timestamp: '2024-11-05T16:42:34',
      },
      {
        id: 89515,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jason Willis',
        timestamp: '2024-11-12T19:59:18',
      },
      {
        id: 95513,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Green, Mendoza and Ali',
        timestamp: '2025-01-05T17:15:47',
      },
      {
        id: 74809,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Meyer Ltd',
        timestamp: '2023-12-02T17:06:43',
      },
    ],
  },
  {
    id: 597,
    name: 'Watch Pastilla',
    stock: 10,
    price: 903.86,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 47148,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Provide sign his with.',
        timestamp: '2023-05-28T06:38:16',
      },
      {
        id: 10469,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Stephen Hayes',
        timestamp: '2024-10-11T23:35:07',
      },
      {
        id: 48443,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Population also center.',
        timestamp: '2025-03-16T09:02:13',
      },
    ],
  },
  {
    id: 598,
    name: 'Push Pastilla',
    stock: 77,
    price: 76.65,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 79043,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Hunter Hart',
        timestamp: '2025-01-23T16:13:30',
      },
      {
        id: 65882,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Schmidt PLC',
        timestamp: '2023-07-29T05:08:34',
      },
    ],
  },
  {
    id: 599,
    name: 'None Filtro',
    stock: 4,
    price: 112.47,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 10936,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Garcia LLC',
        timestamp: '2023-06-20T09:44:13',
      },
    ],
  },
  {
    id: 600,
    name: 'Arm Alternador',
    stock: 3,
    price: 378.93,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 80651,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Patrick Jones',
        timestamp: '2024-02-06T18:52:24',
      },
      {
        id: 73064,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Medical yet world raise process western project.',
        timestamp: '2023-04-30T22:13:32',
      },
    ],
  },
  {
    id: 601,
    name: 'Eat Filtro',
    stock: 54,
    price: 315.84,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 12277,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Wood',
        timestamp: '2024-08-14T08:29:56',
      },
      {
        id: 8599,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Nguyen-Hale',
        timestamp: '2025-03-24T08:54:40',
      },
      {
        id: 78935,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Center add even employee voice get under light.',
        timestamp: '2024-05-28T11:00:24',
      },
      {
        id: 73761,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fernandez, Cook and Taylor',
        timestamp: '2023-08-24T01:19:28',
      },
      {
        id: 79644,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Painting oil production stop news amount.',
        timestamp: '2023-09-25T19:10:33',
      },
    ],
  },
  {
    id: 602,
    name: 'And Filtro',
    stock: 6,
    price: 978.51,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 88899,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Young-Burke',
        timestamp: '2023-07-19T04:12:11',
      },
      {
        id: 94121,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jasmine Kaufman',
        timestamp: '2024-09-14T09:51:04',
      },
    ],
  },
  {
    id: 603,
    name: 'Inside Filtro',
    stock: 36,
    price: 812.67,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 29760,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bill Parker',
        timestamp: '2025-03-31T14:23:59',
      },
    ],
  },
  {
    id: 604,
    name: 'Way Pastilla',
    stock: 61,
    price: 908.96,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 42748,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Other know everything far between decade career.',
        timestamp: '2023-07-30T06:17:15',
      },
      {
        id: 44015,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Guess center cup lay.',
        timestamp: '2023-12-05T18:58:06',
      },
      {
        id: 38070,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Diaz PLC',
        timestamp: '2024-04-05T03:37:37',
      },
      {
        id: 66902,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Guzman, Butler and Lee',
        timestamp: '2024-12-21T05:57:54',
      },
    ],
  },
  {
    id: 605,
    name: 'Head Filtro',
    stock: 12,
    price: 344.04,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 33157,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Schneider PLC',
        timestamp: '2023-05-10T16:20:26',
      },
      {
        id: 80414,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Onto no prepare score almost world full.',
        timestamp: '2024-06-21T03:06:49',
      },
    ],
  },
  {
    id: 606,
    name: 'Finally Amortiguador',
    stock: 13,
    price: 916.61,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 71290,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Federal fact keep why south often.',
        timestamp: '2024-08-26T06:50:14',
      },
      {
        id: 6241,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thomas Inc',
        timestamp: '2024-08-03T08:25:18',
      },
    ],
  },
  {
    id: 607,
    name: 'Money Amortiguador',
    stock: 61,
    price: 473.06,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 4781,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Santos-Leonard',
        timestamp: '2024-01-22T23:29:10',
      },
      {
        id: 96782,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Melissa Rose',
        timestamp: '2024-12-21T13:40:10',
      },
      {
        id: 35443,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Bring then traditional onto.',
        timestamp: '2023-09-12T11:33:43',
      },
      {
        id: 35725,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Williamson, Hooper and Harris',
        timestamp: '2024-08-09T12:06:41',
      },
      {
        id: 25574,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jacob Kelly',
        timestamp: '2023-06-27T07:52:28',
      },
    ],
  },
  {
    id: 608,
    name: 'Ok Filtro',
    stock: 66,
    price: 107.04,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 16107,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rogers PLC',
        timestamp: '2024-04-11T18:36:14',
      },
    ],
  },
  {
    id: 609,
    name: 'Decade Bujía',
    stock: 97,
    price: 468.11,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 49187,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Begin growth account production director know likely.',
        timestamp: '2023-07-25T23:57:26',
      },
    ],
  },
  {
    id: 610,
    name: 'Human Filtro',
    stock: 87,
    price: 808.6,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 44876,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Burns-Jones',
        timestamp: '2024-02-03T01:20:03',
      },
      {
        id: 16385,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Memory concern side field house significant.',
        timestamp: '2023-07-10T09:44:08',
      },
    ],
  },
  {
    id: 611,
    name: 'Science Amortiguador',
    stock: 44,
    price: 155.16,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 35465,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Douglas Wu',
        timestamp: '2024-05-12T03:35:23',
      },
      {
        id: 77790,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Megan Doyle',
        timestamp: '2023-04-30T06:15:45',
      },
    ],
  },
  {
    id: 612,
    name: 'Young Filtro',
    stock: 13,
    price: 70.61,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 13099,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nicholas Thomas',
        timestamp: '2024-10-06T00:05:00',
      },
      {
        id: 18794,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Debate TV science unit people voice.',
        timestamp: '2025-01-23T01:06:28',
      },
      {
        id: 86923,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Debbie Soto',
        timestamp: '2025-04-23T06:18:12',
      },
    ],
  },
  {
    id: 613,
    name: 'Local Bujía',
    stock: 68,
    price: 642.58,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 19564,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Student during project return whose.',
        timestamp: '2023-10-04T03:04:18',
      },
      {
        id: 84235,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Community school fast open address.',
        timestamp: '2025-01-20T12:56:58',
      },
      {
        id: 32108,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bruce Mcconnell',
        timestamp: '2024-11-16T00:53:23',
      },
      {
        id: 42648,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Area claim direction.',
        timestamp: '2024-12-28T01:09:01',
      },
      {
        id: 33664,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Owen Ltd',
        timestamp: '2024-04-07T08:43:56',
      },
    ],
  },
  {
    id: 614,
    name: 'Life Pastilla',
    stock: 17,
    price: 286.83,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 32631,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Gary Novak',
        timestamp: '2023-06-05T01:45:47',
      },
    ],
  },
  {
    id: 615,
    name: 'Discover Alternador',
    stock: 17,
    price: 555.9,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 74205,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Benefit paper story simply suggest job.',
        timestamp: '2023-05-15T17:20:54',
      },
      {
        id: 90766,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Water quickly community local meeting yes require.',
        timestamp: '2023-10-30T17:10:46',
      },
      {
        id: 69483,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Carr-Fowler',
        timestamp: '2024-04-11T09:02:26',
      },
      {
        id: 73876,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tracy Jackson',
        timestamp: '2023-07-26T08:16:44',
      },
      {
        id: 6148,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Teach site pretty trade yourself job center both.',
        timestamp: '2024-06-15T16:00:46',
      },
    ],
  },
  {
    id: 616,
    name: 'Never Bujía',
    stock: 70,
    price: 205.26,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 68051,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Carla Wood',
        timestamp: '2025-01-30T16:42:36',
      },
      {
        id: 6621,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Olsen Inc',
        timestamp: '2024-12-27T11:49:07',
      },
    ],
  },
  {
    id: 617,
    name: 'Administration Amortiguador',
    stock: 99,
    price: 840.2,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 97759,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Town science close four real less.',
        timestamp: '2023-12-08T05:55:16',
      },
      {
        id: 35136,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Power lay usually half account some town.',
        timestamp: '2024-02-10T08:06:44',
      },
      {
        id: 75465,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Gregory Navarro',
        timestamp: '2024-06-24T05:11:42',
      },
      {
        id: 78045,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jonathan Bryan',
        timestamp: '2024-10-30T01:18:14',
      },
      {
        id: 59070,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jaclyn Harris',
        timestamp: '2023-08-30T17:06:42',
      },
    ],
  },
  {
    id: 618,
    name: 'Make Filtro',
    stock: 37,
    price: 383.44,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 7361,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Specific program your court city be.',
        timestamp: '2023-07-15T08:24:50',
      },
      {
        id: 42846,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sarah Robles',
        timestamp: '2023-10-27T21:55:01',
      },
      {
        id: 69155,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davidson-Weeks',
        timestamp: '2024-10-06T08:50:24',
      },
      {
        id: 23621,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Gonzalez, Vaughn and Harrington',
        timestamp: '2025-03-17T18:57:56',
      },
      {
        id: 63594,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Simpson Group',
        timestamp: '2024-06-24T10:08:13',
      },
    ],
  },
  {
    id: 619,
    name: 'Mouth Filtro',
    stock: 1,
    price: 72.18,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 5595,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Thomas Schroeder',
        timestamp: '2023-06-17T18:14:23',
      },
      {
        id: 97200,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fields and Sons',
        timestamp: '2024-03-09T19:20:07',
      },
      {
        id: 61476,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sims, Crawford and Young',
        timestamp: '2023-11-02T13:15:25',
      },
      {
        id: 34747,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cross, Rivera and Martinez',
        timestamp: '2023-10-02T16:25:32',
      },
      {
        id: 2552,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joyce Dyer',
        timestamp: '2023-07-02T10:28:22',
      },
    ],
  },
  {
    id: 620,
    name: 'Serious Amortiguador',
    stock: 53,
    price: 320.24,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 92949,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Johnson',
        timestamp: '2024-02-14T07:09:48',
      },
      {
        id: 32365,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Father view such attack participant knowledge.',
        timestamp: '2024-02-01T08:10:03',
      },
    ],
  },
  {
    id: 621,
    name: 'Attack Pastilla',
    stock: 10,
    price: 566.85,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 30007,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: See media debate hope.',
        timestamp: '2025-01-26T10:38:36',
      },
    ],
  },
  {
    id: 622,
    name: 'Professor Amortiguador',
    stock: 70,
    price: 736.91,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 11256,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christine Alvarez',
        timestamp: '2024-04-27T20:12:30',
      },
      {
        id: 1753,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Challenge bag year method four moment office.',
        timestamp: '2024-11-17T17:44:06',
      },
      {
        id: 28168,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Church Inc',
        timestamp: '2023-06-19T09:05:25',
      },
    ],
  },
  {
    id: 623,
    name: 'Firm Filtro',
    stock: 21,
    price: 228.21,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 12916,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hill, Carr and Sullivan',
        timestamp: '2023-08-23T23:10:54',
      },
      {
        id: 22491,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Every just bit itself should reflect to.',
        timestamp: '2024-12-06T05:15:21',
      },
    ],
  },
  {
    id: 624,
    name: 'Expect Amortiguador',
    stock: 14,
    price: 301.76,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 71022,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kathryn Fisher',
        timestamp: '2024-07-04T06:35:50',
      },
      {
        id: 52646,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kristi Barnes',
        timestamp: '2024-01-02T15:30:14',
      },
      {
        id: 86763,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lamb, Chavez and Baker',
        timestamp: '2023-07-22T03:00:57',
      },
    ],
  },
  {
    id: 625,
    name: 'Significant Filtro',
    stock: 12,
    price: 141.71,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 99666,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Relationship physical art wish employee.',
        timestamp: '2023-11-16T20:59:17',
      },
      {
        id: 91592,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Conley, Wilson and Reese',
        timestamp: '2024-06-22T20:29:18',
      },
    ],
  },
  {
    id: 626,
    name: 'Performance Amortiguador',
    stock: 19,
    price: 974.91,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 84926,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Shane Gomez',
        timestamp: '2024-05-19T11:53:13',
      },
      {
        id: 9721,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Jackson',
        timestamp: '2024-09-16T13:05:55',
      },
      {
        id: 55106,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rubio-Perez',
        timestamp: '2023-08-09T11:26:46',
      },
      {
        id: 96645,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Front medical place wonder catch.',
        timestamp: '2023-07-30T01:47:57',
      },
      {
        id: 39601,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Keith Diaz',
        timestamp: '2024-07-23T06:49:29',
      },
    ],
  },
  {
    id: 627,
    name: 'Onto Bujía',
    stock: 72,
    price: 438.61,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 60407,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Justin Barnes',
        timestamp: '2023-09-05T01:00:08',
      },
      {
        id: 27014,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Webster',
        timestamp: '2024-06-30T23:16:28',
      },
      {
        id: 57473,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Reason serve leave instead.',
        timestamp: '2024-07-15T07:43:16',
      },
    ],
  },
  {
    id: 628,
    name: 'Night Alternador',
    stock: 69,
    price: 582.42,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 82553,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Great approach into performance wait great.',
        timestamp: '2023-06-16T10:48:47',
      },
      {
        id: 36222,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Situation statement sit cause hit contain choose.',
        timestamp: '2025-04-22T23:34:21',
      },
      {
        id: 8820,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Care lay own increase his behavior.',
        timestamp: '2023-06-16T03:23:45',
      },
      {
        id: 27801,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Nicholson-Williams',
        timestamp: '2023-12-04T22:46:25',
      },
      {
        id: 21211,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Purpose nature fact road show financial design.',
        timestamp: '2024-08-25T19:59:07',
      },
    ],
  },
  {
    id: 629,
    name: 'Evidence Alternador',
    stock: 12,
    price: 56.16,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 77334,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Robinson, Wright and Martin',
        timestamp: '2023-10-03T17:52:35',
      },
      {
        id: 31738,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rhodes-Thomas',
        timestamp: '2024-02-08T03:34:38',
      },
    ],
  },
  {
    id: 630,
    name: 'Open Amortiguador',
    stock: 95,
    price: 444.76,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 4033,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Vaughan Group',
        timestamp: '2023-06-20T02:43:58',
      },
      {
        id: 55878,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Henderson, Cunningham and Nunez',
        timestamp: '2024-09-18T04:45:02',
      },
    ],
  },
  {
    id: 631,
    name: 'Energy Amortiguador',
    stock: 45,
    price: 390.29,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 91180,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michelle Townsend',
        timestamp: '2024-10-17T19:17:02',
      },
      {
        id: 88854,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Leader why within with agent.',
        timestamp: '2024-04-18T08:37:40',
      },
      {
        id: 35569,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams PLC',
        timestamp: '2024-12-05T13:20:16',
      },
    ],
  },
  {
    id: 632,
    name: 'Reduce Amortiguador',
    stock: 10,
    price: 519.2,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 7671,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bates, Avery and Taylor',
        timestamp: '2024-11-08T10:11:09',
      },
      {
        id: 80690,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miller Ltd',
        timestamp: '2023-10-31T20:11:36',
      },
      {
        id: 26860,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Hopkins, Sweeney and Martinez',
        timestamp: '2024-07-24T05:44:22',
      },
    ],
  },
  {
    id: 633,
    name: 'You Filtro',
    stock: 57,
    price: 809.69,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 57982,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Smith',
        timestamp: '2024-04-29T09:15:45',
      },
      {
        id: 81166,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Robinson LLC',
        timestamp: '2024-05-28T10:04:45',
      },
    ],
  },
  {
    id: 634,
    name: 'Power Filtro',
    stock: 74,
    price: 168.49,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 63613,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Direction official better modern.',
        timestamp: '2023-09-30T03:12:51',
      },
    ],
  },
  {
    id: 635,
    name: 'Hit Filtro',
    stock: 33,
    price: 290.91,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 56197,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Beck',
        timestamp: '2024-06-15T05:27:08',
      },
      {
        id: 76252,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Teresa Alexander',
        timestamp: '2024-09-21T13:28:36',
      },
      {
        id: 40156,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Him past hotel what share notice throughout recognize.',
        timestamp: '2023-06-18T18:06:50',
      },
      {
        id: 21192,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Watson, Keller and Patel',
        timestamp: '2024-10-10T10:23:09',
      },
    ],
  },
  {
    id: 636,
    name: 'Stop Filtro',
    stock: 5,
    price: 787.32,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 6362,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Braun-Ayers',
        timestamp: '2025-04-21T09:34:45',
      },
    ],
  },
  {
    id: 637,
    name: 'Safe Amortiguador',
    stock: 6,
    price: 485.56,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 10440,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Child middle nearly turn along young.',
        timestamp: '2023-12-27T15:41:49',
      },
      {
        id: 23013,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Bed few degree year oil police.',
        timestamp: '2024-05-28T14:02:41',
      },
      {
        id: 31578,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Should particular blood from seek research.',
        timestamp: '2024-10-22T13:11:08',
      },
      {
        id: 855,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Allen Morris',
        timestamp: '2024-01-12T19:54:57',
      },
      {
        id: 9835,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Few beat necessary follow investment home performance.',
        timestamp: '2023-08-08T00:45:47',
      },
    ],
  },
  {
    id: 638,
    name: 'American Filtro',
    stock: 19,
    price: 512.05,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 31652,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Assume phone read green other.',
        timestamp: '2024-08-05T09:02:56',
      },
      {
        id: 9897,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Discussion choose southern game effort remain.',
        timestamp: '2023-08-10T12:55:49',
      },
    ],
  },
  {
    id: 639,
    name: 'Land Pastilla',
    stock: 19,
    price: 172.13,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 37039,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Baker',
        timestamp: '2025-03-29T05:54:36',
      },
      {
        id: 2523,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Also lot admit writer news talk.',
        timestamp: '2023-12-14T20:34:41',
      },
      {
        id: 76422,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Air medical group all agent themselves near health.',
        timestamp: '2023-11-01T06:29:35',
      },
    ],
  },
  {
    id: 640,
    name: 'Base Pastilla',
    stock: 86,
    price: 86.5,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 47208,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michelle Robinson PhD',
        timestamp: '2023-12-14T16:28:47',
      },
      {
        id: 60082,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Donald Carter',
        timestamp: '2024-09-10T18:44:57',
      },
      {
        id: 91990,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Terrell-Wright',
        timestamp: '2023-07-17T12:52:55',
      },
      {
        id: 48401,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Boone PLC',
        timestamp: '2025-01-22T14:26:05',
      },
      {
        id: 66605,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wilson PLC',
        timestamp: '2025-01-08T14:35:57',
      },
    ],
  },
  {
    id: 641,
    name: 'Themselves Alternador',
    stock: 47,
    price: 743.89,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 16848,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Torres Inc',
        timestamp: '2025-02-24T21:44:45',
      },
      {
        id: 79806,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cody Martinez',
        timestamp: '2024-07-01T03:25:46',
      },
    ],
  },
  {
    id: 642,
    name: 'Project Bujía',
    stock: 87,
    price: 957.29,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 43099,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kimberly Harmon',
        timestamp: '2023-08-27T14:17:27',
      },
    ],
  },
  {
    id: 643,
    name: 'Environmental Amortiguador',
    stock: 95,
    price: 386.72,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 22545,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sherri Anderson',
        timestamp: '2025-02-06T09:06:40',
      },
      {
        id: 8645,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Pm change best his.',
        timestamp: '2023-05-18T07:13:18',
      },
      {
        id: 61483,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Small player hundred them plant interest.',
        timestamp: '2024-05-06T15:26:22',
      },
    ],
  },
  {
    id: 644,
    name: 'Whom Pastilla',
    stock: 26,
    price: 397.3,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 66194,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Shannon Roman',
        timestamp: '2023-10-14T11:12:46',
      },
      {
        id: 28898,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kayla Turner',
        timestamp: '2023-07-27T10:41:25',
      },
      {
        id: 83231,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Palmer Ltd',
        timestamp: '2025-03-20T00:58:58',
      },
      {
        id: 41256,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Mind half administration hotel traditional require.',
        timestamp: '2025-04-09T03:21:29',
      },
    ],
  },
  {
    id: 645,
    name: 'Will Bujía',
    stock: 15,
    price: 751.63,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 29226,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fox-Mcintyre',
        timestamp: '2024-11-03T03:41:53',
      },
    ],
  },
  {
    id: 646,
    name: 'Exist Pastilla',
    stock: 28,
    price: 481.37,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 44283,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Question become daughter central speak.',
        timestamp: '2025-04-09T19:35:55',
      },
    ],
  },
  {
    id: 647,
    name: 'Wrong Filtro',
    stock: 17,
    price: 145.56,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 66436,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Margaret Reese',
        timestamp: '2023-09-28T19:32:26',
      },
    ],
  },
  {
    id: 648,
    name: 'Skill Bujía',
    stock: 79,
    price: 139.83,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 96286,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Data others play picture should alone.',
        timestamp: '2024-10-06T19:12:07',
      },
      {
        id: 89238,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nicole Harris',
        timestamp: '2024-11-28T02:48:29',
      },
      {
        id: 22800,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Hour newspaper step main game maintain result.',
        timestamp: '2024-03-18T23:51:17',
      },
      {
        id: 64729,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Allen Ltd',
        timestamp: '2024-12-21T02:35:26',
      },
      {
        id: 1775,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Chad Jacobs',
        timestamp: '2024-05-01T06:12:48',
      },
    ],
  },
  {
    id: 649,
    name: 'Piece Amortiguador',
    stock: 2,
    price: 859.2,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 4181,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Student choose American include detail catch.',
        timestamp: '2024-09-23T04:26:25',
      },
    ],
  },
  {
    id: 650,
    name: 'Attention Bujía',
    stock: 98,
    price: 377.38,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 38676,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Holmes PLC',
        timestamp: '2024-10-06T00:18:20',
      },
    ],
  },
  {
    id: 651,
    name: 'Wide Alternador',
    stock: 7,
    price: 878.12,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 42825,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brenda Goodman',
        timestamp: '2024-11-10T07:38:55',
      },
      {
        id: 34150,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Stewart Inc',
        timestamp: '2024-04-16T03:24:35',
      },
      {
        id: 15094,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jennifer Wiley',
        timestamp: '2025-02-20T11:03:09',
      },
    ],
  },
  {
    id: 652,
    name: 'Not Pastilla',
    stock: 42,
    price: 609.71,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 47863,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kristi Marsh',
        timestamp: '2023-11-06T01:25:00',
      },
      {
        id: 83665,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lawrence-Gordon',
        timestamp: '2024-09-25T06:27:59',
      },
      {
        id: 88234,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Argue put make try.',
        timestamp: '2024-08-01T09:19:25',
      },
      {
        id: 65198,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rivera Ltd',
        timestamp: '2023-12-21T13:23:00',
      },
      {
        id: 38088,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Pamela Sanchez',
        timestamp: '2023-05-10T11:11:50',
      },
    ],
  },
  {
    id: 653,
    name: 'Pm Amortiguador',
    stock: 69,
    price: 474.31,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 52302,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Herrera, James and Mcintyre',
        timestamp: '2023-05-18T20:10:57',
      },
      {
        id: 72308,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Report fact record edge bar.',
        timestamp: '2023-11-14T23:19:36',
      },
      {
        id: 12396,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Garcia, Morris and Watson',
        timestamp: '2025-03-18T19:07:08',
      },
    ],
  },
  {
    id: 654,
    name: 'Us Pastilla',
    stock: 59,
    price: 198.22,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 41759,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Vaughn Ltd',
        timestamp: '2025-01-13T10:14:00',
      },
      {
        id: 69104,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Anderson, Harris and Salazar',
        timestamp: '2023-12-11T02:30:45',
      },
      {
        id: 91671,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kimberly Doyle',
        timestamp: '2023-09-23T01:30:35',
      },
    ],
  },
  {
    id: 655,
    name: 'Space Amortiguador',
    stock: 70,
    price: 685.97,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 54565,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Return say all deal not.',
        timestamp: '2024-01-21T10:13:29',
      },
      {
        id: 71959,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Potts-Rivas',
        timestamp: '2024-07-30T05:04:55',
      },
      {
        id: 8429,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Project back science service.',
        timestamp: '2024-07-08T20:43:59',
      },
      {
        id: 98505,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Krueger-David',
        timestamp: '2024-11-28T19:34:01',
      },
    ],
  },
  {
    id: 656,
    name: 'A Pastilla',
    stock: 43,
    price: 552.71,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 64629,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Pham',
        timestamp: '2024-12-20T02:32:56',
      },
      {
        id: 76056,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Carolyn Butler',
        timestamp: '2023-11-11T00:02:43',
      },
    ],
  },
  {
    id: 657,
    name: 'Fall Bujía',
    stock: 98,
    price: 860.43,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 51803,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Someone live million cup conference commercial season.',
        timestamp: '2024-10-08T00:10:47',
      },
      {
        id: 36737,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Individual yet image question.',
        timestamp: '2024-01-10T00:31:05',
      },
      {
        id: 45590,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Diaz Inc',
        timestamp: '2025-02-01T20:14:31',
      },
    ],
  },
  {
    id: 658,
    name: 'Rock Alternador',
    stock: 22,
    price: 574.6,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 74343,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Matthew Roman',
        timestamp: '2024-02-22T14:59:40',
      },
      {
        id: 85838,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Megan Aguirre',
        timestamp: '2023-08-05T22:10:40',
      },
      {
        id: 39743,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Effort there type debate set democratic so.',
        timestamp: '2023-12-01T23:42:03',
      },
    ],
  },
  {
    id: 659,
    name: 'Whose Alternador',
    stock: 21,
    price: 582.63,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 22436,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Pierce-Thornton',
        timestamp: '2024-10-25T19:45:23',
      },
      {
        id: 98741,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martin, Clark and Adkins',
        timestamp: '2025-01-28T04:17:03',
      },
    ],
  },
  {
    id: 660,
    name: 'Pressure Filtro',
    stock: 62,
    price: 867.81,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 84959,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Luke Knapp',
        timestamp: '2024-10-16T09:02:53',
      },
    ],
  },
  {
    id: 661,
    name: 'Best Amortiguador',
    stock: 91,
    price: 177.47,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 55922,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Single friend drop senior partner lose pressure.',
        timestamp: '2024-11-13T09:06:08',
      },
      {
        id: 75563,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Hernandez',
        timestamp: '2025-02-22T01:03:34',
      },
      {
        id: 3605,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Eddie Cole',
        timestamp: '2023-07-04T23:59:32',
      },
      {
        id: 81000,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Garcia, Patterson and Simpson',
        timestamp: '2023-08-18T20:31:22',
      },
    ],
  },
  {
    id: 662,
    name: 'Development Amortiguador',
    stock: 99,
    price: 277.98,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 13317,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrew Holt',
        timestamp: '2024-12-28T02:36:35',
      },
      {
        id: 17034,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Thank inside current like beautiful half star.',
        timestamp: '2024-09-04T17:15:39',
      },
      {
        id: 1766,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Brown',
        timestamp: '2024-07-31T04:44:36',
      },
      {
        id: 15799,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Murray Ltd',
        timestamp: '2023-12-16T07:12:55',
      },
    ],
  },
  {
    id: 663,
    name: 'Standard Alternador',
    stock: 99,
    price: 733.28,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 20908,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mclean Group',
        timestamp: '2024-09-13T08:35:09',
      },
    ],
  },
  {
    id: 664,
    name: 'Bank Amortiguador',
    stock: 52,
    price: 574.15,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 72410,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Tell into west gas report arm too.',
        timestamp: '2023-10-21T09:43:31',
      },
    ],
  },
  {
    id: 665,
    name: 'Dog Bujía',
    stock: 50,
    price: 778.01,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 42419,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Give during lose cultural side thus.',
        timestamp: '2024-04-13T16:27:18',
      },
      {
        id: 49253,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Donna Harper DDS',
        timestamp: '2024-03-04T01:39:03',
      },
      {
        id: 66470,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Already maintain adult buy.',
        timestamp: '2023-12-10T20:16:58',
      },
    ],
  },
  {
    id: 666,
    name: 'Here Alternador',
    stock: 46,
    price: 415.07,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 32533,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: School model radio address thank drug.',
        timestamp: '2024-02-16T04:08:02',
      },
      {
        id: 21396,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dickson-Thomas',
        timestamp: '2023-10-01T07:51:26',
      },
      {
        id: 60779,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Tran, Shelton and Nunez',
        timestamp: '2023-12-13T08:17:32',
      },
      {
        id: 90134,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Karen Smith',
        timestamp: '2023-05-25T07:27:18',
      },
    ],
  },
  {
    id: 667,
    name: 'Contain Alternador',
    stock: 13,
    price: 241.83,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 34385,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Russell, Williams and Lamb',
        timestamp: '2024-08-08T19:57:41',
      },
      {
        id: 32326,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Duran-Butler',
        timestamp: '2024-11-12T22:54:40',
      },
      {
        id: 71142,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amber Davis',
        timestamp: '2024-09-11T09:28:12',
      },
      {
        id: 31115,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Fact official local like over physical when.',
        timestamp: '2023-07-14T22:46:18',
      },
      {
        id: 16511,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Yates, Delacruz and Decker',
        timestamp: '2024-04-22T06:52:30',
      },
    ],
  },
  {
    id: 668,
    name: 'Face Pastilla',
    stock: 54,
    price: 317.76,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 66642,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Debbie Brown',
        timestamp: '2024-06-21T21:32:59',
      },
    ],
  },
  {
    id: 669,
    name: 'Choice Amortiguador',
    stock: 84,
    price: 328.41,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 98588,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Walton-Oconnell',
        timestamp: '2025-04-06T16:16:46',
      },
      {
        id: 13636,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michelle Williams',
        timestamp: '2024-06-17T17:33:59',
      },
    ],
  },
  {
    id: 670,
    name: 'Door Pastilla',
    stock: 100,
    price: 679.89,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 2566,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Worry how myself arm.',
        timestamp: '2023-10-11T00:06:38',
      },
      {
        id: 72052,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alexa Morales',
        timestamp: '2024-09-14T11:15:27',
      },
    ],
  },
  {
    id: 671,
    name: 'Congress Amortiguador',
    stock: 10,
    price: 423.57,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 58097,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Mcdowell, Morales and Johnson',
        timestamp: '2024-06-08T13:32:35',
      },
      {
        id: 22807,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Cowan',
        timestamp: '2024-05-17T15:02:33',
      },
      {
        id: 25002,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Everybody force student reveal friend seek.',
        timestamp: '2023-06-03T22:27:35',
      },
    ],
  },
  {
    id: 672,
    name: 'Attorney Amortiguador',
    stock: 11,
    price: 639.44,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 50264,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wolf-Murphy',
        timestamp: '2024-08-23T18:02:49',
      },
      {
        id: 31336,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jonathan Johnson',
        timestamp: '2023-10-14T08:15:35',
      },
      {
        id: 30818,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Tough star trial people law possible act.',
        timestamp: '2024-11-13T15:37:30',
      },
      {
        id: 33117,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Harmon-Torres',
        timestamp: '2024-11-15T21:22:37',
      },
      {
        id: 21827,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rodriguez-Lopez',
        timestamp: '2023-10-30T06:00:45',
      },
    ],
  },
  {
    id: 673,
    name: 'Past Filtro',
    stock: 9,
    price: 848.0,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 6686,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Color view according within share.',
        timestamp: '2023-08-27T04:38:01',
      },
    ],
  },
  {
    id: 674,
    name: 'You Pastilla',
    stock: 65,
    price: 570.3,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 65058,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown-Wilcox',
        timestamp: '2023-05-23T14:43:35',
      },
      {
        id: 66501,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jared Haley',
        timestamp: '2025-02-17T05:06:29',
      },
      {
        id: 87497,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Figure west court century.',
        timestamp: '2024-03-04T03:04:00',
      },
    ],
  },
  {
    id: 675,
    name: 'Ready Alternador',
    stock: 14,
    price: 621.75,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 45413,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Madison Flores',
        timestamp: '2024-01-28T23:58:59',
      },
      {
        id: 2202,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dean and Sons',
        timestamp: '2024-06-19T04:38:00',
      },
      {
        id: 86258,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Space grow half loss mission similar.',
        timestamp: '2023-06-24T16:52:48',
      },
      {
        id: 45693,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tracy Decker',
        timestamp: '2024-07-07T13:28:26',
      },
      {
        id: 3538,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Russell',
        timestamp: '2024-05-02T19:27:46',
      },
    ],
  },
  {
    id: 676,
    name: 'Service Alternador',
    stock: 6,
    price: 466.47,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 31825,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mr. Charles Green',
        timestamp: '2024-07-29T21:18:43',
      },
    ],
  },
  {
    id: 677,
    name: 'Test Amortiguador',
    stock: 75,
    price: 528.14,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 11366,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nathan Cole',
        timestamp: '2023-11-16T09:32:36',
      },
      {
        id: 51522,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Gina Hunt',
        timestamp: '2023-06-14T04:38:03',
      },
      {
        id: 77231,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Floor world him.',
        timestamp: '2024-01-17T05:36:10',
      },
      {
        id: 83846,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alexandra Smith',
        timestamp: '2024-07-30T18:17:09',
      },
    ],
  },
  {
    id: 678,
    name: 'Experience Filtro',
    stock: 11,
    price: 961.89,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 58958,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Morris-Macdonald',
        timestamp: '2025-02-22T08:13:24',
      },
      {
        id: 44868,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Alvarez, Brooks and Moore',
        timestamp: '2025-04-03T04:26:56',
      },
      {
        id: 32295,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Live onto like.',
        timestamp: '2024-04-18T02:11:25',
      },
    ],
  },
  {
    id: 679,
    name: 'Mrs Filtro',
    stock: 13,
    price: 230.22,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 59801,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brandi Richard',
        timestamp: '2025-01-19T21:00:12',
      },
      {
        id: 14630,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Emily Watts',
        timestamp: '2024-05-20T13:02:07',
      },
      {
        id: 280,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jorge Ware',
        timestamp: '2024-01-13T23:53:25',
      },
      {
        id: 1288,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Young LLC',
        timestamp: '2023-11-04T00:54:34',
      },
      {
        id: 74989,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Court part close course.',
        timestamp: '2024-06-02T05:25:26',
      },
    ],
  },
  {
    id: 680,
    name: 'Card Pastilla',
    stock: 42,
    price: 136.56,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 99102,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: What each next occur hundred.',
        timestamp: '2024-11-09T12:09:35',
      },
    ],
  },
  {
    id: 681,
    name: 'Police Pastilla',
    stock: 84,
    price: 230.37,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 91995,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Shepherd, Jimenez and Ramirez',
        timestamp: '2023-11-22T03:47:42',
      },
    ],
  },
  {
    id: 682,
    name: 'Could Pastilla',
    stock: 19,
    price: 799.81,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 89111,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Isaac Wheeler MD',
        timestamp: '2024-12-22T21:07:48',
      },
      {
        id: 28293,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jasmine Burton',
        timestamp: '2024-07-08T16:06:10',
      },
    ],
  },
  {
    id: 683,
    name: 'Pull Filtro',
    stock: 28,
    price: 612.83,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 58941,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Include voice usually hear plan along soon.',
        timestamp: '2024-03-06T07:09:14',
      },
      {
        id: 70902,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Valerie Wright',
        timestamp: '2025-03-31T19:35:05',
      },
    ],
  },
  {
    id: 684,
    name: 'Machine Pastilla',
    stock: 47,
    price: 859.2,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 38539,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Significant while region for building authority.',
        timestamp: '2024-02-15T20:39:31',
      },
      {
        id: 28947,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Party page detail item.',
        timestamp: '2024-04-19T17:26:05',
      },
      {
        id: 55448,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Without family close character appear.',
        timestamp: '2025-01-12T22:55:28',
      },
      {
        id: 25749,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Debbie Preston',
        timestamp: '2024-05-08T05:47:04',
      },
      {
        id: 5780,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Johnson Ltd',
        timestamp: '2023-08-06T16:51:27',
      },
    ],
  },
  {
    id: 685,
    name: 'Away Filtro',
    stock: 42,
    price: 671.78,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 57560,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hall-Miller',
        timestamp: '2025-04-09T11:41:03',
      },
      {
        id: 5858,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lara Group',
        timestamp: '2023-08-04T09:24:11',
      },
      {
        id: 90335,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michelle Jones',
        timestamp: '2024-06-29T19:00:44',
      },
      {
        id: 27417,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Us according pay newspaper cultural cold.',
        timestamp: '2023-10-27T02:39:39',
      },
    ],
  },
  {
    id: 686,
    name: 'Society Bujía',
    stock: 52,
    price: 196.69,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 42680,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Moore, Campbell and Marshall',
        timestamp: '2023-08-04T15:02:13',
      },
      {
        id: 11697,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Crystal Diaz',
        timestamp: '2025-03-28T07:48:29',
      },
      {
        id: 17939,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Marshall-Stewart',
        timestamp: '2025-03-10T06:00:56',
      },
    ],
  },
  {
    id: 687,
    name: 'Should Amortiguador',
    stock: 39,
    price: 890.8,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 54682,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrew Mcclain',
        timestamp: '2025-04-09T00:34:26',
      },
      {
        id: 21952,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Key or my many.',
        timestamp: '2024-07-30T02:21:23',
      },
      {
        id: 84740,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Laura Mccullough',
        timestamp: '2023-05-29T19:27:24',
      },
    ],
  },
  {
    id: 688,
    name: 'Clearly Filtro',
    stock: 0,
    price: 54.95,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 25635,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jeffrey Thomas',
        timestamp: '2025-03-22T23:04:01',
      },
    ],
  },
  {
    id: 689,
    name: 'Who Amortiguador',
    stock: 15,
    price: 914.64,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 18615,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Dark occur young ten range.',
        timestamp: '2024-01-09T21:35:03',
      },
      {
        id: 63387,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lee, Coleman and Powell',
        timestamp: '2024-05-07T08:25:34',
      },
    ],
  },
  {
    id: 690,
    name: 'Television Filtro',
    stock: 32,
    price: 153.9,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 22411,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Quickly buy clear low.',
        timestamp: '2024-11-11T21:06:31',
      },
    ],
  },
  {
    id: 691,
    name: 'Affect Amortiguador',
    stock: 75,
    price: 148.44,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 62715,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Source indicate officer family behavior with community produce.',
        timestamp: '2025-03-03T16:29:10',
      },
    ],
  },
  {
    id: 692,
    name: 'Foot Bujía',
    stock: 1,
    price: 838.12,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 40254,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Share about beautiful whole prevent create also these.',
        timestamp: '2024-10-22T13:29:17',
      },
      {
        id: 31832,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Patterson-Carlson',
        timestamp: '2024-01-27T09:43:37',
      },
      {
        id: 13661,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nicholas Smith',
        timestamp: '2024-10-22T09:44:21',
      },
    ],
  },
  {
    id: 693,
    name: 'Long Amortiguador',
    stock: 33,
    price: 928.47,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 75427,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Elliott, Salazar and Turner',
        timestamp: '2024-03-17T14:59:09',
      },
      {
        id: 57820,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Pace-Ruiz',
        timestamp: '2024-02-04T17:47:04',
      },
      {
        id: 12532,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Instead page foreign there.',
        timestamp: '2024-09-27T05:04:54',
      },
      {
        id: 81898,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Justin Perez',
        timestamp: '2023-08-31T08:32:18',
      },
      {
        id: 86096,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cole Group',
        timestamp: '2025-03-06T10:05:21',
      },
    ],
  },
  {
    id: 694,
    name: 'Material Pastilla',
    stock: 21,
    price: 777.54,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 22948,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Example finally this.',
        timestamp: '2023-08-29T01:17:48',
      },
      {
        id: 69130,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Carter, Martin and Keller',
        timestamp: '2024-12-14T17:36:23',
      },
      {
        id: 61725,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Sit phone view raise mouth seek.',
        timestamp: '2023-07-10T09:51:41',
      },
      {
        id: 12649,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Scene commercial world pass floor collection officer.',
        timestamp: '2024-10-20T23:54:51',
      },
      {
        id: 95161,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Hoffman',
        timestamp: '2024-09-09T11:49:08',
      },
    ],
  },
  {
    id: 695,
    name: 'Support Amortiguador',
    stock: 32,
    price: 438.51,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 19233,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams Ltd',
        timestamp: '2023-12-24T05:29:46',
      },
      {
        id: 24409,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Discover cup look large deal.',
        timestamp: '2024-12-03T12:04:09',
      },
      {
        id: 95392,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Certainly medical here officer serious affect explain force.',
        timestamp: '2025-03-28T06:31:42',
      },
      {
        id: 96089,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Us sure say until ahead security.',
        timestamp: '2024-09-21T23:03:41',
      },
      {
        id: 81319,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Speech game stand song nor any several.',
        timestamp: '2024-11-17T06:33:00',
      },
    ],
  },
  {
    id: 696,
    name: 'Smile Amortiguador',
    stock: 71,
    price: 995.9,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 26324,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Butler Group',
        timestamp: '2024-12-21T06:14:31',
      },
      {
        id: 27116,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Town room technology stuff several family down.',
        timestamp: '2025-03-05T12:06:38',
      },
      {
        id: 25795,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mendez-Swanson',
        timestamp: '2023-11-25T04:53:31',
      },
      {
        id: 19673,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Kelly Group',
        timestamp: '2024-09-26T19:34:23',
      },
      {
        id: 52317,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Personal history lead seem identify bring.',
        timestamp: '2024-09-24T09:25:26',
      },
    ],
  },
  {
    id: 697,
    name: 'Book Pastilla',
    stock: 48,
    price: 52.93,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 51389,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Fire side speak be.',
        timestamp: '2023-10-29T20:29:36',
      },
      {
        id: 74949,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor King, Johnson and Cooper',
        timestamp: '2023-09-17T23:04:26',
      },
      {
        id: 60804,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Similar company attorney office good popular stuff off.',
        timestamp: '2024-12-18T13:01:57',
      },
    ],
  },
  {
    id: 698,
    name: 'Exist Filtro',
    stock: 26,
    price: 258.92,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 62201,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Whole attack artist player form.',
        timestamp: '2024-06-22T19:56:04',
      },
    ],
  },
  {
    id: 699,
    name: 'Safe Pastilla',
    stock: 84,
    price: 855.99,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 85709,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Something operation physical by Mrs power.',
        timestamp: '2023-11-16T06:36:01',
      },
      {
        id: 88773,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jeremy Hester',
        timestamp: '2024-07-11T18:59:58',
      },
    ],
  },
  {
    id: 700,
    name: 'Yeah Filtro',
    stock: 15,
    price: 594.49,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 28090,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Whole former rich.',
        timestamp: '2024-01-31T17:30:50',
      },
      {
        id: 60916,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miller, Holder and Jones',
        timestamp: '2024-03-15T03:47:21',
      },
      {
        id: 21262,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Chair career action technology wall future sit.',
        timestamp: '2023-05-21T06:24:40',
      },
      {
        id: 81374,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Harris Ltd',
        timestamp: '2024-01-29T14:15:26',
      },
      {
        id: 93388,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Frazier-Hogan',
        timestamp: '2024-11-16T04:34:11',
      },
    ],
  },
  {
    id: 701,
    name: 'On Filtro',
    stock: 60,
    price: 363.16,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 79044,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Far arm out technology only.',
        timestamp: '2024-03-15T21:27:51',
      },
      {
        id: 15144,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Yu, Green and Friedman',
        timestamp: '2023-12-23T18:58:14',
      },
      {
        id: 66575,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wallace LLC',
        timestamp: '2025-01-01T12:44:53',
      },
    ],
  },
  {
    id: 702,
    name: 'Might Amortiguador',
    stock: 67,
    price: 682.43,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 40598,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jacob Martin',
        timestamp: '2023-05-09T11:26:06',
      },
      {
        id: 560,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Walter Day',
        timestamp: '2023-05-11T12:06:39',
      },
      {
        id: 13087,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Shawn Crosby',
        timestamp: '2024-01-03T19:54:26',
      },
    ],
  },
  {
    id: 703,
    name: 'Material Filtro',
    stock: 24,
    price: 646.88,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 82549,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kenneth Jones',
        timestamp: '2023-05-18T00:21:55',
      },
      {
        id: 80433,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Second outside whose particularly still describe car speak.',
        timestamp: '2024-02-20T23:52:19',
      },
      {
        id: 15066,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Late hour and success walk likely.',
        timestamp: '2024-07-26T20:12:32',
      },
      {
        id: 10426,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Williams, Craig and Crawford',
        timestamp: '2023-10-05T17:06:17',
      },
    ],
  },
  {
    id: 704,
    name: 'Road Bujía',
    stock: 61,
    price: 931.66,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 12535,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Sing beat indicate decide themselves.',
        timestamp: '2023-12-08T12:28:02',
      },
      {
        id: 65983,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Own maintain especially.',
        timestamp: '2023-05-21T10:17:00',
      },
      {
        id: 57615,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Cultural student Republican Republican degree product.',
        timestamp: '2024-01-11T00:37:33',
      },
      {
        id: 89808,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Trial approach computer lead.',
        timestamp: '2023-08-27T19:51:10',
      },
      {
        id: 26515,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Contain professor pick write board now go center.',
        timestamp: '2024-05-24T22:56:50',
      },
    ],
  },
  {
    id: 705,
    name: 'Before Alternador',
    stock: 70,
    price: 411.94,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 80545,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Megan Reid',
        timestamp: '2024-08-02T03:20:28',
      },
    ],
  },
  {
    id: 706,
    name: 'Name Filtro',
    stock: 51,
    price: 334.23,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 83461,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Card whether go capital.',
        timestamp: '2024-02-07T22:21:23',
      },
    ],
  },
  {
    id: 707,
    name: 'Own Alternador',
    stock: 53,
    price: 350.3,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 66041,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: A always similar age matter ok several.',
        timestamp: '2024-08-04T19:37:38',
      },
    ],
  },
  {
    id: 708,
    name: 'Receive Alternador',
    stock: 37,
    price: 862.26,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 40351,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cooper, Barnes and Kim',
        timestamp: '2023-11-21T15:07:50',
      },
      {
        id: 72434,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Thomas Nelson',
        timestamp: '2024-06-24T03:07:24',
      },
    ],
  },
  {
    id: 709,
    name: 'Building Filtro',
    stock: 36,
    price: 177.59,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 49375,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Veronica Green',
        timestamp: '2023-05-19T22:56:06',
      },
    ],
  },
  {
    id: 710,
    name: 'Job Pastilla',
    stock: 7,
    price: 154.92,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 40755,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Martha Rowe',
        timestamp: '2024-02-13T05:31:53',
      },
      {
        id: 64783,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Johnson LLC',
        timestamp: '2023-12-08T07:55:02',
      },
      {
        id: 30229,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Donna Clark',
        timestamp: '2025-01-28T18:21:32',
      },
    ],
  },
  {
    id: 711,
    name: 'Much Bujía',
    stock: 70,
    price: 623.15,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 77538,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Action book skin bed door present similar ever.',
        timestamp: '2023-12-02T17:02:18',
      },
      {
        id: 74336,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hopkins, Francis and Davis',
        timestamp: '2024-10-08T15:09:06',
      },
      {
        id: 22880,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Set not out argue edge happy.',
        timestamp: '2025-03-16T07:28:03',
      },
      {
        id: 81948,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Acosta, Conner and Pena',
        timestamp: '2023-07-11T10:44:23',
      },
      {
        id: 35627,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Emily Hutchinson',
        timestamp: '2023-12-22T19:22:28',
      },
    ],
  },
  {
    id: 712,
    name: 'Suggest Filtro',
    stock: 6,
    price: 526.44,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 35082,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jill Whitney PhD',
        timestamp: '2023-09-24T19:57:58',
      },
    ],
  },
  {
    id: 713,
    name: 'Type Pastilla',
    stock: 65,
    price: 754.44,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 16510,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bradley Rivera',
        timestamp: '2023-05-11T01:54:21',
      },
      {
        id: 47458,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rowland-Young',
        timestamp: '2024-06-20T15:04:29',
      },
      {
        id: 12229,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Action lose woman hand number throughout.',
        timestamp: '2023-06-03T08:28:26',
      },
      {
        id: 11484,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Robinson, Hale and Clark',
        timestamp: '2024-08-03T00:23:33',
      },
    ],
  },
  {
    id: 714,
    name: 'Country Bujía',
    stock: 100,
    price: 167.82,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 27957,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Arnold, Lamb and Woodward',
        timestamp: '2024-11-27T01:12:28',
      },
      {
        id: 94548,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brandon Faulkner',
        timestamp: '2023-11-26T07:46:09',
      },
    ],
  },
  {
    id: 715,
    name: 'Foot Pastilla',
    stock: 96,
    price: 366.44,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 66335,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Region hot performance per protect.',
        timestamp: '2024-04-07T15:02:33',
      },
      {
        id: 50873,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Le Ltd',
        timestamp: '2025-04-02T22:08:15',
      },
      {
        id: 35156,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mary Mcconnell',
        timestamp: '2024-10-27T16:57:00',
      },
      {
        id: 61604,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amanda Diaz',
        timestamp: '2023-12-12T02:28:50',
      },
    ],
  },
  {
    id: 716,
    name: 'Reason Alternador',
    stock: 12,
    price: 71.17,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 24203,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Pratt-Gutierrez',
        timestamp: '2023-12-08T23:17:41',
      },
    ],
  },
  {
    id: 717,
    name: 'Range Bujía',
    stock: 75,
    price: 77.74,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 66437,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Piece speak bring trade open.',
        timestamp: '2023-07-31T22:32:09',
      },
      {
        id: 13585,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Linda White',
        timestamp: '2025-01-19T15:31:51',
      },
      {
        id: 1432,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hall Group',
        timestamp: '2024-01-04T10:05:42',
      },
      {
        id: 494,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Health science loss culture service.',
        timestamp: '2023-07-24T02:06:58',
      },
      {
        id: 27791,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Create attorney including bar kind technology lay west.',
        timestamp: '2024-03-01T19:41:18',
      },
    ],
  },
  {
    id: 718,
    name: 'Upon Alternador',
    stock: 4,
    price: 476.44,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 3277,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: One very indicate east week by.',
        timestamp: '2024-05-12T15:30:23',
      },
      {
        id: 16647,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wilkerson-Cortez',
        timestamp: '2024-06-17T22:53:22',
      },
      {
        id: 763,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nancy Mcdonald',
        timestamp: '2024-04-10T06:28:45',
      },
    ],
  },
  {
    id: 719,
    name: 'Church Bujía',
    stock: 11,
    price: 268.9,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 43556,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Summer Macdonald',
        timestamp: '2024-06-01T03:05:42',
      },
      {
        id: 24260,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mccormick LLC',
        timestamp: '2023-08-03T09:41:25',
      },
      {
        id: 27451,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Need mean one statement hospital president house.',
        timestamp: '2025-01-13T11:10:32',
      },
      {
        id: 26770,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrew Rodriguez',
        timestamp: '2025-01-27T22:35:57',
      },
    ],
  },
  {
    id: 720,
    name: 'Heavy Filtro',
    stock: 19,
    price: 927.06,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 86643,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brock PLC',
        timestamp: '2025-01-17T03:03:33',
      },
      {
        id: 92638,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brandon Fry',
        timestamp: '2025-03-11T12:46:24',
      },
      {
        id: 98074,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Majority four soldier many front else.',
        timestamp: '2023-10-19T11:20:38',
      },
      {
        id: 77079,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sparks LLC',
        timestamp: '2024-11-24T22:46:21',
      },
    ],
  },
  {
    id: 721,
    name: 'Important Pastilla',
    stock: 65,
    price: 197.21,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 42896,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Doyle-Hall',
        timestamp: '2024-12-24T02:12:01',
      },
    ],
  },
  {
    id: 722,
    name: 'Involve Amortiguador',
    stock: 34,
    price: 558.39,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 13819,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Daniel, Nguyen and Hoffman',
        timestamp: '2024-02-20T23:33:40',
      },
      {
        id: 1176,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Recognize large surface television again front order.',
        timestamp: '2024-06-22T01:56:29',
      },
      {
        id: 20159,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Simmons Inc',
        timestamp: '2023-10-27T08:22:21',
      },
      {
        id: 34661,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Position natural mention line.',
        timestamp: '2025-02-07T08:37:03',
      },
    ],
  },
  {
    id: 723,
    name: 'Must Amortiguador',
    stock: 41,
    price: 779.04,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 52916,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mosley-Watson',
        timestamp: '2025-02-13T13:24:01',
      },
      {
        id: 80901,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Reality ball article student home art sing.',
        timestamp: '2024-03-25T09:50:25',
      },
    ],
  },
  {
    id: 724,
    name: 'Simple Filtro',
    stock: 24,
    price: 613.18,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 24184,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Stephen Solomon',
        timestamp: '2024-01-22T01:19:51',
      },
      {
        id: 52556,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Yeah character remain.',
        timestamp: '2024-12-22T16:02:40',
      },
    ],
  },
  {
    id: 725,
    name: 'Stock Alternador',
    stock: 48,
    price: 61.46,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 9600,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Elizabeth Montgomery',
        timestamp: '2023-09-22T10:27:25',
      },
      {
        id: 43831,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Burton-Castro',
        timestamp: '2024-06-10T00:31:20',
      },
      {
        id: 34208,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Natalie Acosta',
        timestamp: '2024-11-11T13:34:54',
      },
      {
        id: 29530,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Robinson, Parks and Villegas',
        timestamp: '2023-08-29T19:41:06',
      },
      {
        id: 51120,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Scott Lyons',
        timestamp: '2023-07-02T22:13:46',
      },
    ],
  },
  {
    id: 726,
    name: 'Edge Pastilla',
    stock: 1,
    price: 620.3,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 45388,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Bernard, Gibson and Contreras',
        timestamp: '2023-06-05T22:05:07',
      },
      {
        id: 75558,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: May figure politics allow picture wish.',
        timestamp: '2023-07-22T20:07:07',
      },
      {
        id: 56591,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Young-Dean',
        timestamp: '2024-09-27T03:22:07',
      },
      {
        id: 23358,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gomez-Diaz',
        timestamp: '2025-02-13T13:25:26',
      },
    ],
  },
  {
    id: 727,
    name: 'Religious Pastilla',
    stock: 3,
    price: 394.45,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 79554,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Galvan-Rodriguez',
        timestamp: '2024-08-31T08:31:39',
      },
      {
        id: 30785,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Blue list left forget recent field.',
        timestamp: '2025-03-25T21:59:20',
      },
      {
        id: 78164,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Estrada-Flores',
        timestamp: '2023-05-07T11:13:39',
      },
      {
        id: 43923,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Monica Scott',
        timestamp: '2023-10-21T13:38:25',
      },
    ],
  },
  {
    id: 728,
    name: 'More Amortiguador',
    stock: 89,
    price: 774.56,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 89772,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Now well dark let sell fear.',
        timestamp: '2023-06-13T07:50:02',
      },
      {
        id: 11097,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Exactly recent course once media.',
        timestamp: '2024-06-16T07:21:37',
      },
      {
        id: 76053,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gross-Higgins',
        timestamp: '2023-12-19T03:30:39',
      },
      {
        id: 711,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Who green attorney this red.',
        timestamp: '2023-08-16T21:12:53',
      },
    ],
  },
  {
    id: 729,
    name: 'Back Pastilla',
    stock: 39,
    price: 231.81,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 77457,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Set article same include.',
        timestamp: '2025-03-09T10:40:34',
      },
    ],
  },
  {
    id: 730,
    name: 'Minute Alternador',
    stock: 0,
    price: 679.17,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 21285,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Luis Sanders',
        timestamp: '2023-11-23T12:59:13',
      },
      {
        id: 59370,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Harris-Avila',
        timestamp: '2024-12-10T02:43:27',
      },
      {
        id: 54035,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gordon LLC',
        timestamp: '2023-06-05T09:52:58',
      },
      {
        id: 47727,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith, Griffin and Ward',
        timestamp: '2024-02-28T07:28:21',
      },
      {
        id: 20110,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Barber, Evans and Murray',
        timestamp: '2023-08-26T18:31:56',
      },
    ],
  },
  {
    id: 731,
    name: 'Foot Filtro',
    stock: 39,
    price: 903.32,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 22576,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown Group',
        timestamp: '2025-02-22T22:31:49',
      },
      {
        id: 45910,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Center property federal project.',
        timestamp: '2024-03-21T04:53:38',
      },
      {
        id: 22052,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thornton and Sons',
        timestamp: '2023-09-17T05:39:47',
      },
      {
        id: 25699,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Catherine Reed',
        timestamp: '2024-04-12T13:06:05',
      },
    ],
  },
  {
    id: 732,
    name: 'Hit Pastilla',
    stock: 71,
    price: 590.89,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 16842,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bryce Randall',
        timestamp: '2024-09-12T16:13:59',
      },
      {
        id: 761,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thomas Inc',
        timestamp: '2023-10-25T08:02:36',
      },
      {
        id: 68059,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Hannah Hartman',
        timestamp: '2024-10-03T04:04:05',
      },
      {
        id: 38998,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Owens-King',
        timestamp: '2025-03-21T22:03:43',
      },
      {
        id: 10935,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kathy Martin',
        timestamp: '2024-04-19T15:53:47',
      },
    ],
  },
  {
    id: 733,
    name: 'Trade Bujía',
    stock: 99,
    price: 140.14,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 32792,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Blanchard-Lane',
        timestamp: '2024-12-19T06:38:02',
      },
    ],
  },
  {
    id: 734,
    name: 'Half Amortiguador',
    stock: 5,
    price: 190.27,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 53616,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Munoz',
        timestamp: '2025-02-22T21:29:53',
      },
      {
        id: 63458,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Morris-Gardner',
        timestamp: '2024-09-16T02:51:45',
      },
      {
        id: 68435,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Murphy-Odom',
        timestamp: '2025-04-07T16:02:37',
      },
      {
        id: 61669,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Television take fight person yet wall almost.',
        timestamp: '2024-06-20T12:55:29',
      },
      {
        id: 23439,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hicks-Madden',
        timestamp: '2024-05-09T15:48:44',
      },
    ],
  },
  {
    id: 735,
    name: 'Drive Amortiguador',
    stock: 43,
    price: 758.34,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 63218,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Hand serious small street pressure discussion matter.',
        timestamp: '2023-06-20T11:17:56',
      },
      {
        id: 15981,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jimmy Waters',
        timestamp: '2024-02-12T09:29:54',
      },
      {
        id: 97843,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Source anyone magazine billion data.',
        timestamp: '2023-11-15T23:57:43',
      },
      {
        id: 54243,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Situation what support church.',
        timestamp: '2023-12-12T18:38:45',
      },
    ],
  },
  {
    id: 736,
    name: 'Every Amortiguador',
    stock: 63,
    price: 883.72,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 2360,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Erin Stanley',
        timestamp: '2023-10-14T16:01:49',
      },
      {
        id: 95192,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mrs. Connie Wilson',
        timestamp: '2024-04-08T11:03:22',
      },
    ],
  },
  {
    id: 737,
    name: 'Serious Pastilla',
    stock: 78,
    price: 790.13,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 51607,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Hailey Robinson',
        timestamp: '2025-02-17T03:00:13',
      },
      {
        id: 82875,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Roberts-Thomas',
        timestamp: '2024-01-01T17:16:45',
      },
      {
        id: 48118,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Deanna Wilson',
        timestamp: '2025-02-26T07:31:29',
      },
      {
        id: 62320,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Only force kind population visit discussion.',
        timestamp: '2023-07-09T20:10:56',
      },
    ],
  },
  {
    id: 738,
    name: 'Bring Bujía',
    stock: 29,
    price: 841.03,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 72978,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Material administration candidate wall product third.',
        timestamp: '2024-07-11T08:11:14',
      },
      {
        id: 88600,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Religious international list big.',
        timestamp: '2024-06-14T08:19:13',
      },
      {
        id: 10825,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Type give because production soldier enough.',
        timestamp: '2023-10-12T20:57:58',
      },
      {
        id: 90786,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Newspaper this night prevent.',
        timestamp: '2024-04-20T08:26:59',
      },
      {
        id: 16048,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Murray',
        timestamp: '2023-07-08T08:43:34',
      },
    ],
  },
  {
    id: 739,
    name: 'Less Pastilla',
    stock: 22,
    price: 952.47,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 95021,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Morris, Chapman and Carroll',
        timestamp: '2023-10-01T01:02:29',
      },
    ],
  },
  {
    id: 740,
    name: 'Minute Alternador',
    stock: 70,
    price: 916.49,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 26049,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Vickie Barron',
        timestamp: '2025-02-24T12:23:32',
      },
      {
        id: 64820,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sarah Baxter',
        timestamp: '2025-03-26T19:12:03',
      },
      {
        id: 30000,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jacqueline Hernandez',
        timestamp: '2024-03-06T10:10:06',
      },
      {
        id: 73422,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mccarty, Freeman and Cook',
        timestamp: '2024-01-11T20:20:03',
      },
    ],
  },
  {
    id: 741,
    name: 'Late Bujía',
    stock: 3,
    price: 238.46,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 99179,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Virginia David',
        timestamp: '2024-05-16T08:59:43',
      },
      {
        id: 75684,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: They scientist season month short.',
        timestamp: '2025-03-16T12:49:36',
      },
      {
        id: 14439,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Suggest life admit expert film act.',
        timestamp: '2025-02-22T20:10:46',
      },
      {
        id: 51480,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christine Burns',
        timestamp: '2025-02-23T04:38:34',
      },
    ],
  },
  {
    id: 742,
    name: 'Hour Alternador',
    stock: 83,
    price: 647.37,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 10084,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Garcia-Cherry',
        timestamp: '2023-06-23T07:34:22',
      },
      {
        id: 29013,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Machine off tax her she decide.',
        timestamp: '2023-05-24T03:58:45',
      },
      {
        id: 93022,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Patel, Padilla and Pham',
        timestamp: '2024-05-31T07:07:50',
      },
      {
        id: 47059,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Else board east although cause color.',
        timestamp: '2024-03-03T23:31:21',
      },
    ],
  },
  {
    id: 743,
    name: 'Moment Bujía',
    stock: 57,
    price: 563.11,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 59579,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Mitchell, Hancock and Walker',
        timestamp: '2024-11-03T22:19:44',
      },
      {
        id: 17541,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Point practice tree continue difference.',
        timestamp: '2023-05-10T16:48:09',
      },
    ],
  },
  {
    id: 744,
    name: 'Want Bujía',
    stock: 92,
    price: 101.78,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 82123,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sullivan Group',
        timestamp: '2023-08-27T20:54:50',
      },
      {
        id: 84808,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lyons, Friedman and Todd',
        timestamp: '2024-02-15T00:38:43',
      },
      {
        id: 97352,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hernandez-Harris',
        timestamp: '2023-07-10T14:08:42',
      },
      {
        id: 55734,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Evans-Bishop',
        timestamp: '2023-08-15T04:45:10',
      },
    ],
  },
  {
    id: 745,
    name: 'Pattern Filtro',
    stock: 97,
    price: 458.6,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 72085,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Gabriel Nguyen',
        timestamp: '2023-06-16T11:39:09',
      },
      {
        id: 81467,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Schultz, Roberts and Diaz',
        timestamp: '2024-03-08T21:01:48',
      },
    ],
  },
  {
    id: 746,
    name: 'Play Bujía',
    stock: 22,
    price: 926.46,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 23953,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Idea but capital soldier some identify out.',
        timestamp: '2024-03-19T03:01:05',
      },
      {
        id: 45887,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Taylor',
        timestamp: '2024-06-10T22:56:41',
      },
      {
        id: 78240,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Rodriguez',
        timestamp: '2024-01-01T13:04:04',
      },
      {
        id: 15315,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Oliver Ltd',
        timestamp: '2025-01-14T13:40:46',
      },
      {
        id: 50757,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Thomas Callahan',
        timestamp: '2023-05-03T05:09:31',
      },
    ],
  },
  {
    id: 747,
    name: 'Show Amortiguador',
    stock: 22,
    price: 378.6,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 50976,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Klein',
        timestamp: '2024-08-23T06:16:42',
      },
      {
        id: 59516,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martinez Ltd',
        timestamp: '2023-06-24T19:02:33',
      },
    ],
  },
  {
    id: 748,
    name: 'Peace Bujía',
    stock: 34,
    price: 955.78,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 61741,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Answer wrong population difference agency.',
        timestamp: '2023-05-29T15:44:03',
      },
    ],
  },
  {
    id: 749,
    name: 'Establish Pastilla',
    stock: 97,
    price: 168.57,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 79512,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Security skill agreement.',
        timestamp: '2025-04-01T12:14:48',
      },
      {
        id: 86900,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tristan Herring',
        timestamp: '2024-08-13T01:24:00',
      },
      {
        id: 53778,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Robinson-Herrera',
        timestamp: '2023-10-23T02:23:08',
      },
      {
        id: 29371,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Griffin, Lewis and Lewis',
        timestamp: '2024-04-23T07:15:49',
      },
      {
        id: 90827,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Peters, Sweeney and Reed',
        timestamp: '2023-12-05T18:36:13',
      },
    ],
  },
  {
    id: 750,
    name: 'Value Filtro',
    stock: 20,
    price: 200.94,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 486,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Clark Group',
        timestamp: '2024-07-30T20:19:52',
      },
    ],
  },
  {
    id: 751,
    name: 'Goal Pastilla',
    stock: 54,
    price: 585.11,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 29869,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: American structure them agency team then table.',
        timestamp: '2024-06-16T17:16:15',
      },
      {
        id: 32663,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Phillips-Kelley',
        timestamp: '2025-01-31T15:02:05',
      },
      {
        id: 20920,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Lawyer outside commercial senior find land piece.',
        timestamp: '2024-11-18T08:58:12',
      },
      {
        id: 9941,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Such direction quite drive five.',
        timestamp: '2024-11-24T19:01:58',
      },
    ],
  },
  {
    id: 752,
    name: 'Design Alternador',
    stock: 88,
    price: 665.71,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 12564,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Catherine Case',
        timestamp: '2024-05-02T19:46:24',
      },
      {
        id: 91298,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Melinda Williams',
        timestamp: '2023-06-18T10:08:32',
      },
    ],
  },
  {
    id: 753,
    name: 'Admit Pastilla',
    stock: 10,
    price: 951.57,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 80868,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Johnson-Garrison',
        timestamp: '2023-06-08T14:11:45',
      },
      {
        id: 37688,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Julie Clark',
        timestamp: '2023-09-29T03:38:28',
      },
      {
        id: 30384,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Room everyone I.',
        timestamp: '2023-07-01T03:32:53',
      },
      {
        id: 61899,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Logan, Nelson and Ruiz',
        timestamp: '2024-06-29T06:58:22',
      },
    ],
  },
  {
    id: 754,
    name: 'Because Filtro',
    stock: 70,
    price: 724.32,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 43117,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thompson, Nolan and Hahn',
        timestamp: '2024-11-13T09:36:19',
      },
      {
        id: 27222,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Charles Paul',
        timestamp: '2023-11-01T09:16:21',
      },
      {
        id: 28455,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Berry-Nelson',
        timestamp: '2025-04-09T06:57:31',
      },
    ],
  },
  {
    id: 755,
    name: 'Record Pastilla',
    stock: 81,
    price: 900.57,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 94734,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Laura Martinez',
        timestamp: '2024-09-27T23:05:26',
      },
    ],
  },
  {
    id: 756,
    name: 'White Filtro',
    stock: 84,
    price: 462.8,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 26630,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Organization end fish majority wife.',
        timestamp: '2023-11-29T18:16:48',
      },
      {
        id: 47470,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joshua Hamilton',
        timestamp: '2024-07-29T15:58:08',
      },
    ],
  },
  {
    id: 757,
    name: 'Soldier Bujía',
    stock: 86,
    price: 680.74,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 47510,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Blue other discuss suddenly decision miss reality.',
        timestamp: '2024-11-29T10:30:37',
      },
      {
        id: 86311,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Pm far vote exist.',
        timestamp: '2023-05-27T21:03:00',
      },
      {
        id: 12587,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Erickson LLC',
        timestamp: '2023-05-06T01:41:03',
      },
      {
        id: 63017,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Product sea drive break.',
        timestamp: '2024-11-15T01:16:05',
      },
    ],
  },
  {
    id: 758,
    name: 'Food Filtro',
    stock: 1,
    price: 381.47,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 62920,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Moore Group',
        timestamp: '2025-03-24T12:16:36',
      },
      {
        id: 66939,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hale-Coffey',
        timestamp: '2024-03-22T00:20:48',
      },
    ],
  },
  {
    id: 759,
    name: 'Type Amortiguador',
    stock: 29,
    price: 402.08,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 6169,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Harris, Hansen and James',
        timestamp: '2025-02-28T21:15:33',
      },
      {
        id: 30572,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lynch-Collins',
        timestamp: '2025-01-05T14:34:44',
      },
    ],
  },
  {
    id: 760,
    name: 'Go Pastilla',
    stock: 96,
    price: 580.39,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 73656,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Murray, Villa and Martin',
        timestamp: '2024-01-16T07:22:56',
      },
      {
        id: 44119,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Miss decade feeling ball risk.',
        timestamp: '2023-06-01T09:52:01',
      },
    ],
  },
  {
    id: 761,
    name: 'Open Filtro',
    stock: 28,
    price: 794.4,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 47491,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente George Jones',
        timestamp: '2023-12-28T20:23:15',
      },
      {
        id: 79828,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mcguire-Johnson',
        timestamp: '2023-12-31T21:12:45',
      },
      {
        id: 95816,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Nolan Group',
        timestamp: '2024-02-21T05:04:55',
      },
    ],
  },
  {
    id: 762,
    name: 'So Filtro',
    stock: 98,
    price: 57.67,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 67115,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Katelyn Johnston',
        timestamp: '2024-01-14T00:32:21',
      },
    ],
  },
  {
    id: 763,
    name: 'Network Alternador',
    stock: 87,
    price: 296.2,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 40921,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Way any look range industry short break.',
        timestamp: '2023-07-16T14:23:02',
      },
      {
        id: 76712,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Church case animal future lot democratic.',
        timestamp: '2024-03-27T18:04:36',
      },
      {
        id: 48238,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cole Group',
        timestamp: '2024-07-01T16:24:06',
      },
      {
        id: 10329,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bruce Jackson',
        timestamp: '2025-03-22T15:02:09',
      },
    ],
  },
  {
    id: 764,
    name: 'Culture Amortiguador',
    stock: 23,
    price: 83.88,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 34185,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miller-Miller',
        timestamp: '2025-03-08T07:26:46',
      },
      {
        id: 88468,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Zachary Short',
        timestamp: '2024-02-05T20:39:41',
      },
    ],
  },
  {
    id: 765,
    name: 'Moment Amortiguador',
    stock: 68,
    price: 687.17,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 71516,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mr. Jacob Waller',
        timestamp: '2024-01-17T17:20:41',
      },
      {
        id: 96224,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Palmer, Patel and Hartman',
        timestamp: '2023-05-01T23:39:40',
      },
    ],
  },
  {
    id: 766,
    name: 'Nation Amortiguador',
    stock: 41,
    price: 260.04,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 88951,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rush and Sons',
        timestamp: '2023-06-05T11:37:25',
      },
      {
        id: 1245,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Laurie Morgan',
        timestamp: '2025-04-05T12:16:31',
      },
      {
        id: 73934,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Anderson',
        timestamp: '2024-07-06T23:14:59',
      },
      {
        id: 31013,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sullivan Group',
        timestamp: '2024-08-07T20:58:43',
      },
      {
        id: 72465,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Human maintain turn size possible.',
        timestamp: '2023-08-29T15:39:44',
      },
    ],
  },
  {
    id: 767,
    name: 'Show Amortiguador',
    stock: 91,
    price: 810.62,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 92981,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perez Group',
        timestamp: '2024-05-07T20:55:59',
      },
      {
        id: 91227,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: To age particular well.',
        timestamp: '2025-04-20T02:35:12',
      },
      {
        id: 33373,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Matthew Williams',
        timestamp: '2025-01-19T08:02:03',
      },
      {
        id: 37518,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Bed sometimes group lot grow.',
        timestamp: '2024-03-15T05:30:35',
      },
    ],
  },
  {
    id: 768,
    name: 'Interview Bujía',
    stock: 6,
    price: 587.57,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 28650,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Glass decide decision once north ask gas.',
        timestamp: '2024-01-02T15:36:46',
      },
    ],
  },
  {
    id: 769,
    name: 'Something Pastilla',
    stock: 81,
    price: 715.2,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 68818,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Rule would stage instead approach offer pattern.',
        timestamp: '2023-05-05T06:23:19',
      },
      {
        id: 388,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Save wish direction red which none.',
        timestamp: '2023-08-07T15:49:55',
      },
      {
        id: 10335,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Megan Sullivan',
        timestamp: '2025-04-24T22:01:31',
      },
      {
        id: 10313,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Few stuff design.',
        timestamp: '2024-02-19T20:26:51',
      },
    ],
  },
  {
    id: 770,
    name: 'Owner Alternador',
    stock: 63,
    price: 564.86,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 89041,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Evans Ltd',
        timestamp: '2023-05-25T23:38:37',
      },
      {
        id: 53112,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Moreno, Gordon and Salazar',
        timestamp: '2024-07-18T18:43:38',
      },
      {
        id: 39672,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kayla Ramirez',
        timestamp: '2024-03-29T09:42:42',
      },
      {
        id: 22780,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Under standard professional issue too history.',
        timestamp: '2024-10-01T21:42:54',
      },
      {
        id: 62686,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Gabrielle George',
        timestamp: '2024-10-31T12:08:50',
      },
    ],
  },
  {
    id: 771,
    name: 'Receive Amortiguador',
    stock: 81,
    price: 604.38,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 52298,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Green, Hubbard and Underwood',
        timestamp: '2025-01-03T17:01:19',
      },
      {
        id: 85924,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jensen-Brown',
        timestamp: '2024-06-07T12:54:47',
      },
    ],
  },
  {
    id: 772,
    name: 'Citizen Amortiguador',
    stock: 27,
    price: 490.61,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 26474,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Fall reach accept per office.',
        timestamp: '2023-11-14T09:16:39',
      },
      {
        id: 700,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Peace not raise different authority.',
        timestamp: '2023-12-27T22:45:13',
      },
    ],
  },
  {
    id: 773,
    name: 'End Amortiguador',
    stock: 65,
    price: 669.77,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 64908,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Blankenship',
        timestamp: '2023-07-30T21:15:23',
      },
    ],
  },
  {
    id: 774,
    name: 'Culture Pastilla',
    stock: 71,
    price: 618.37,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 95109,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Since American environmental friend last go.',
        timestamp: '2025-03-26T00:29:38',
      },
      {
        id: 94242,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Wesley Jones Jr.',
        timestamp: '2024-11-29T14:13:49',
      },
      {
        id: 64669,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Schmidt and Sons',
        timestamp: '2024-09-13T23:33:57',
      },
      {
        id: 16573,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Parker, Young and Walker',
        timestamp: '2025-04-17T01:14:14',
      },
      {
        id: 47274,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lawrence PLC',
        timestamp: '2025-01-21T13:21:07',
      },
    ],
  },
  {
    id: 775,
    name: 'Mind Pastilla',
    stock: 90,
    price: 763.27,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 60479,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Time detail store agreement maintain under.',
        timestamp: '2025-04-23T23:23:49',
      },
      {
        id: 7740,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Matthew Burke',
        timestamp: '2025-01-27T15:52:29',
      },
      {
        id: 80824,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Veronica Howard',
        timestamp: '2023-10-26T01:32:00',
      },
      {
        id: 18100,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wilson-Thomas',
        timestamp: '2023-11-24T16:05:27',
      },
      {
        id: 14405,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: You relationship when however.',
        timestamp: '2023-12-30T14:00:43',
      },
    ],
  },
  {
    id: 776,
    name: 'Friend Amortiguador',
    stock: 45,
    price: 346.22,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 80969,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Fly different management road factor.',
        timestamp: '2024-03-02T02:24:40',
      },
      {
        id: 36043,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davis, Petersen and Sellers',
        timestamp: '2023-05-30T07:25:40',
      },
      {
        id: 55723,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Project cultural art commercial.',
        timestamp: '2024-06-20T10:41:42',
      },
      {
        id: 12373,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martin, Walker and Vega',
        timestamp: '2025-01-21T14:24:52',
      },
    ],
  },
  {
    id: 777,
    name: 'Task Bujía',
    stock: 90,
    price: 247.99,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 47029,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Hannah Jackson',
        timestamp: '2024-12-11T11:57:02',
      },
      {
        id: 42477,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Beck, Webb and Lloyd',
        timestamp: '2023-05-25T12:28:21',
      },
      {
        id: 5502,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bartlett-Anderson',
        timestamp: '2023-04-28T15:33:41',
      },
    ],
  },
  {
    id: 778,
    name: 'Sort Pastilla',
    stock: 34,
    price: 748.68,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 33120,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Goodman-Randolph',
        timestamp: '2024-04-21T12:05:13',
      },
      {
        id: 25335,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Tran, Bernard and Mayer',
        timestamp: '2025-04-05T10:20:58',
      },
      {
        id: 23447,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Guy industry minute present drug.',
        timestamp: '2023-11-26T09:54:54',
      },
      {
        id: 60996,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Find bit ask law trial control reality.',
        timestamp: '2024-05-14T16:30:38',
      },
      {
        id: 96647,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Church present direction gas cell.',
        timestamp: '2023-11-23T03:44:22',
      },
    ],
  },
  {
    id: 779,
    name: 'End Pastilla',
    stock: 21,
    price: 484.44,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 20594,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Clark-Sullivan',
        timestamp: '2024-03-30T02:12:21',
      },
      {
        id: 59297,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Head action experience.',
        timestamp: '2024-09-26T14:35:41',
      },
    ],
  },
  {
    id: 780,
    name: 'Three Alternador',
    stock: 36,
    price: 79.56,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 39026,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davis, Wright and Davenport',
        timestamp: '2025-04-10T05:38:06',
      },
    ],
  },
  {
    id: 781,
    name: 'Business Filtro',
    stock: 7,
    price: 908.72,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 41334,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Stephen Mason',
        timestamp: '2024-08-07T17:00:23',
      },
      {
        id: 41272,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Condition actually world bill able.',
        timestamp: '2024-05-16T13:11:46',
      },
    ],
  },
  {
    id: 782,
    name: 'Lay Bujía',
    stock: 50,
    price: 275.66,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 14599,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Likely indicate popular look across it.',
        timestamp: '2024-10-07T18:05:10',
      },
      {
        id: 49170,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Easy inside goal do avoid.',
        timestamp: '2023-07-26T17:44:58',
      },
      {
        id: 33241,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Johnny Morales',
        timestamp: '2023-12-16T14:24:39',
      },
    ],
  },
  {
    id: 783,
    name: 'A Bujía',
    stock: 58,
    price: 644.82,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 29443,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Oliver, Moore and Hays',
        timestamp: '2024-12-25T16:26:21',
      },
      {
        id: 62643,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thomas-Maldonado',
        timestamp: '2025-01-08T12:16:01',
      },
      {
        id: 31655,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Up activity international sometimes.',
        timestamp: '2023-10-24T12:05:55',
      },
      {
        id: 35647,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martinez-Harrell',
        timestamp: '2023-05-30T21:18:39',
      },
    ],
  },
  {
    id: 784,
    name: 'Necessary Pastilla',
    stock: 60,
    price: 269.11,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 8888,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fox PLC',
        timestamp: '2024-07-21T00:11:25',
      },
      {
        id: 38664,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mullins and Sons',
        timestamp: '2023-10-24T05:24:11',
      },
      {
        id: 23708,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cassandra Arnold',
        timestamp: '2025-01-20T04:55:27',
      },
      {
        id: 64711,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Anderson-Black',
        timestamp: '2023-12-10T22:56:05',
      },
      {
        id: 40609,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Wonder cover guess whole.',
        timestamp: '2024-10-22T04:11:32',
      },
    ],
  },
  {
    id: 785,
    name: 'Service Pastilla',
    stock: 5,
    price: 430.84,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 15035,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Maria Johnson',
        timestamp: '2023-09-26T15:50:05',
      },
    ],
  },
  {
    id: 786,
    name: 'School Amortiguador',
    stock: 44,
    price: 215.12,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 46997,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Renee Allen',
        timestamp: '2023-06-12T06:51:03',
      },
      {
        id: 91030,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: My director father beautiful.',
        timestamp: '2024-05-23T19:22:35',
      },
    ],
  },
  {
    id: 787,
    name: 'Receive Filtro',
    stock: 80,
    price: 227.54,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 70857,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Riggs LLC',
        timestamp: '2024-06-02T08:52:45',
      },
      {
        id: 89303,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente James Anderson',
        timestamp: '2025-01-20T12:26:41',
      },
      {
        id: 63974,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Simmons, Orozco and Mitchell',
        timestamp: '2024-07-07T18:17:33',
      },
      {
        id: 65597,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Howard PLC',
        timestamp: '2025-02-05T02:02:29',
      },
    ],
  },
  {
    id: 788,
    name: 'Enter Alternador',
    stock: 4,
    price: 646.77,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 60316,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tabitha Khan',
        timestamp: '2024-02-08T05:47:47',
      },
    ],
  },
  {
    id: 789,
    name: 'While Alternador',
    stock: 74,
    price: 827.32,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 18822,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Riley-Taylor',
        timestamp: '2023-06-05T13:24:36',
      },
      {
        id: 76509,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Henderson-Charles',
        timestamp: '2025-04-18T22:49:39',
      },
      {
        id: 21508,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Vasquez, Charles and Landry',
        timestamp: '2023-08-11T07:00:03',
      },
      {
        id: 864,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: My east success democratic know her seat.',
        timestamp: '2024-03-13T13:58:12',
      },
      {
        id: 48531,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sharon Garcia',
        timestamp: '2024-05-28T20:07:26',
      },
    ],
  },
  {
    id: 790,
    name: 'Voice Bujía',
    stock: 95,
    price: 268.52,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 52495,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ramirez-Campos',
        timestamp: '2023-12-09T21:04:44',
      },
    ],
  },
  {
    id: 791,
    name: 'Half Pastilla',
    stock: 71,
    price: 570.31,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 32381,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mccarthy Ltd',
        timestamp: '2023-06-14T10:38:19',
      },
    ],
  },
  {
    id: 792,
    name: 'Rock Bujía',
    stock: 92,
    price: 685.6,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 43214,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jennifer Martin',
        timestamp: '2025-03-27T16:48:18',
      },
      {
        id: 5753,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bass PLC',
        timestamp: '2025-01-30T19:17:07',
      },
      {
        id: 96780,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith-Maynard',
        timestamp: '2024-07-03T05:18:28',
      },
      {
        id: 89187,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michelle Ashley',
        timestamp: '2025-03-09T04:07:05',
      },
      {
        id: 2034,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tina Hansen',
        timestamp: '2024-11-20T16:06:54',
      },
    ],
  },
  {
    id: 793,
    name: 'Better Pastilla',
    stock: 86,
    price: 579.28,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 84058,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sherri Carroll',
        timestamp: '2023-07-18T19:12:17',
      },
      {
        id: 28671,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Report site physical explain.',
        timestamp: '2023-10-24T01:57:29',
      },
      {
        id: 81580,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alejandro Martinez',
        timestamp: '2025-04-11T02:28:40',
      },
      {
        id: 89774,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lee Inc',
        timestamp: '2024-05-05T12:42:38',
      },
    ],
  },
  {
    id: 794,
    name: 'Safe Amortiguador',
    stock: 85,
    price: 915.22,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 99727,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Benjamin Jenkins',
        timestamp: '2024-02-12T10:22:28',
      },
      {
        id: 64991,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Of analysis public no citizen south window radio.',
        timestamp: '2025-01-21T00:30:08',
      },
    ],
  },
  {
    id: 795,
    name: 'Claim Pastilla',
    stock: 68,
    price: 657.41,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 19708,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: American expert theory couple exist.',
        timestamp: '2024-08-23T09:02:17',
      },
      {
        id: 13783,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Johnson PLC',
        timestamp: '2024-03-28T13:38:04',
      },
      {
        id: 95492,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thomas, James and Hull',
        timestamp: '2023-08-22T16:49:47',
      },
      {
        id: 80162,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Margaret Myers',
        timestamp: '2023-09-07T03:37:56',
      },
      {
        id: 23592,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Valerie Garcia',
        timestamp: '2024-10-26T23:17:47',
      },
    ],
  },
  {
    id: 796,
    name: 'Window Bujía',
    stock: 60,
    price: 474.9,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 32916,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Upon include sister decide other.',
        timestamp: '2023-07-11T02:24:03',
      },
    ],
  },
  {
    id: 797,
    name: 'Fear Pastilla',
    stock: 54,
    price: 596.55,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 48792,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Hundred hold picture green stock state.',
        timestamp: '2023-10-05T03:02:46',
      },
    ],
  },
  {
    id: 798,
    name: 'Wish Alternador',
    stock: 52,
    price: 99.09,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 58587,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Baird LLC',
        timestamp: '2023-05-11T23:36:20',
      },
      {
        id: 35588,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kristina Hernandez DDS',
        timestamp: '2024-11-11T16:51:22',
      },
      {
        id: 4735,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Mother study that and attention game top.',
        timestamp: '2023-11-13T18:52:30',
      },
      {
        id: 54217,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Glass character dream interview interview operation up figure.',
        timestamp: '2024-01-18T07:11:50',
      },
    ],
  },
  {
    id: 799,
    name: 'Former Filtro',
    stock: 33,
    price: 679.71,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 25079,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Goodman-Terrell',
        timestamp: '2024-07-29T06:48:20',
      },
      {
        id: 61762,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Page-Williams',
        timestamp: '2023-11-28T22:48:11',
      },
      {
        id: 39208,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Research pull cultural thousand.',
        timestamp: '2025-01-02T10:10:02',
      },
    ],
  },
  {
    id: 800,
    name: 'Plan Alternador',
    stock: 87,
    price: 298.4,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 98395,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor King Group',
        timestamp: '2023-12-05T08:06:20',
      },
      {
        id: 92093,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wright, White and Conway',
        timestamp: '2024-03-27T00:28:36',
      },
      {
        id: 74080,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Irwin Inc',
        timestamp: '2023-11-11T23:08:21',
      },
    ],
  },
  {
    id: 801,
    name: 'Behind Amortiguador',
    stock: 36,
    price: 271.29,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 23179,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Karen Jones',
        timestamp: '2024-01-30T01:55:39',
      },
    ],
  },
  {
    id: 802,
    name: 'Other Alternador',
    stock: 76,
    price: 628.85,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 7784,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Robinson Inc',
        timestamp: '2024-10-01T20:02:35',
      },
      {
        id: 40132,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Artist cover rather form.',
        timestamp: '2023-10-24T19:26:26',
      },
    ],
  },
  {
    id: 803,
    name: 'Set Bujía',
    stock: 11,
    price: 745.15,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 44506,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Stone, Williams and Guerrero',
        timestamp: '2025-04-05T05:00:28',
      },
      {
        id: 31869,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kevin Stevens',
        timestamp: '2023-06-26T21:00:27',
      },
    ],
  },
  {
    id: 804,
    name: 'Its Amortiguador',
    stock: 18,
    price: 478.96,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 18174,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Democrat maintain fly individual sport couple century.',
        timestamp: '2025-04-06T22:47:26',
      },
      {
        id: 23838,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Prepare practice bring maintain yet organization become.',
        timestamp: '2025-03-12T22:56:26',
      },
      {
        id: 76101,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tammy Holmes',
        timestamp: '2024-10-14T12:44:46',
      },
      {
        id: 32163,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hodge-Hernandez',
        timestamp: '2024-04-12T05:15:59',
      },
    ],
  },
  {
    id: 805,
    name: 'In Amortiguador',
    stock: 22,
    price: 414.55,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 72292,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christopher Jones',
        timestamp: '2024-06-15T22:42:19',
      },
    ],
  },
  {
    id: 806,
    name: 'Walk Pastilla',
    stock: 73,
    price: 718.61,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 21665,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cox-Copeland',
        timestamp: '2025-04-12T08:45:12',
      },
      {
        id: 3876,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Walker, Campbell and Callahan',
        timestamp: '2024-08-10T16:37:49',
      },
      {
        id: 23436,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: These sea report change society writer everything.',
        timestamp: '2024-12-22T13:49:19',
      },
      {
        id: 18074,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Anderson, Mercer and Sharp',
        timestamp: '2025-01-07T11:50:55',
      },
      {
        id: 87304,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Denise Taylor',
        timestamp: '2023-09-13T09:04:39',
      },
    ],
  },
  {
    id: 807,
    name: 'Five Filtro',
    stock: 45,
    price: 630.9,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 47481,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hunt, Smith and Gonzalez',
        timestamp: '2024-11-16T21:47:56',
      },
    ],
  },
  {
    id: 808,
    name: 'Skin Pastilla',
    stock: 67,
    price: 131.94,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 92172,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Score guess him group close.',
        timestamp: '2023-07-25T01:44:48',
      },
      {
        id: 19481,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wilkins-Martin',
        timestamp: '2024-08-14T09:51:08',
      },
      {
        id: 70237,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Individual note radio blood computer item.',
        timestamp: '2023-07-01T11:10:46',
      },
      {
        id: 79788,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Approach system goal government hear.',
        timestamp: '2024-02-10T20:32:18',
      },
      {
        id: 46925,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bryant PLC',
        timestamp: '2023-12-03T07:57:27',
      },
    ],
  },
  {
    id: 809,
    name: 'Surface Filtro',
    stock: 6,
    price: 524.03,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 51534,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Carter',
        timestamp: '2025-04-12T10:42:30',
      },
    ],
  },
  {
    id: 810,
    name: 'Much Bujía',
    stock: 84,
    price: 507.5,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 79675,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith, Kirby and Beck',
        timestamp: '2025-02-05T11:59:12',
      },
      {
        id: 41959,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Surface expert something open situation defense.',
        timestamp: '2024-08-07T08:39:54',
      },
      {
        id: 70842,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Norris, Jones and Stephens',
        timestamp: '2025-04-05T04:33:22',
      },
      {
        id: 83283,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Training friend wall moment coach.',
        timestamp: '2023-10-18T02:48:34',
      },
      {
        id: 39898,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kiara Rivera',
        timestamp: '2024-03-11T11:43:39',
      },
    ],
  },
  {
    id: 811,
    name: 'Wear Alternador',
    stock: 80,
    price: 514.15,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 31435,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Leslie Avery',
        timestamp: '2024-02-08T18:48:37',
      },
      {
        id: 3266,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Daugherty DDS',
        timestamp: '2025-04-18T21:03:35',
      },
      {
        id: 75131,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Feeling serve effort sit trip.',
        timestamp: '2023-09-13T01:19:14',
      },
      {
        id: 84016,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Song let quickly hour bring list.',
        timestamp: '2024-02-06T23:21:36',
      },
    ],
  },
  {
    id: 812,
    name: 'Blue Alternador',
    stock: 13,
    price: 663.01,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 53467,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Diane Alexander',
        timestamp: '2025-02-02T00:09:31',
      },
      {
        id: 59081,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Natalie Mccoy',
        timestamp: '2025-01-19T15:44:42',
      },
      {
        id: 29990,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Timothy Villarreal',
        timestamp: '2023-07-18T05:19:18',
      },
    ],
  },
  {
    id: 813,
    name: 'Dog Alternador',
    stock: 53,
    price: 853.99,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 89843,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Exist no option.',
        timestamp: '2025-03-26T08:46:32',
      },
      {
        id: 40698,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Land actually contain reason rise white.',
        timestamp: '2023-07-20T07:01:16',
      },
      {
        id: 31751,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jasmine Cole',
        timestamp: '2023-05-20T03:08:08',
      },
      {
        id: 26521,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Goal indicate note reveal than.',
        timestamp: '2024-03-22T07:18:18',
      },
    ],
  },
  {
    id: 814,
    name: 'Carry Filtro',
    stock: 1,
    price: 248.57,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 13350,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Matthews',
        timestamp: '2023-12-05T23:25:08',
      },
      {
        id: 69717,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Public reveal hair couple wrong growth.',
        timestamp: '2025-01-22T05:31:23',
      },
      {
        id: 88394,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kenneth Rice',
        timestamp: '2024-08-14T16:11:00',
      },
      {
        id: 99561,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor White, Patterson and Martinez',
        timestamp: '2024-04-20T05:34:16',
      },
      {
        id: 31093,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Kelley',
        timestamp: '2024-07-02T23:37:35',
      },
    ],
  },
  {
    id: 815,
    name: 'First Bujía',
    stock: 56,
    price: 841.74,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 72360,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Yvonne Cochran',
        timestamp: '2024-08-23T20:09:53',
      },
      {
        id: 9368,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sharp, Kim and Rivas',
        timestamp: '2025-01-10T10:42:29',
      },
      {
        id: 78122,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Marilyn Rhodes',
        timestamp: '2024-03-26T11:09:50',
      },
      {
        id: 81128,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brian Gill',
        timestamp: '2023-09-25T07:06:17',
      },
      {
        id: 53493,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Age and poor good indicate provide space development.',
        timestamp: '2024-10-10T05:01:36',
      },
    ],
  },
  {
    id: 816,
    name: 'Mission Bujía',
    stock: 58,
    price: 981.85,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 63068,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Thing occur short against important guy nice.',
        timestamp: '2024-11-27T15:10:03',
      },
      {
        id: 29323,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: House adult someone sure occur.',
        timestamp: '2023-10-08T19:42:44',
      },
    ],
  },
  {
    id: 817,
    name: 'Rule Pastilla',
    stock: 99,
    price: 515.26,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 9827,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Individual so suggest condition.',
        timestamp: '2023-11-07T02:22:30',
      },
      {
        id: 99847,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mckenzie Arias',
        timestamp: '2023-05-03T19:20:12',
      },
    ],
  },
  {
    id: 818,
    name: 'Teacher Alternador',
    stock: 95,
    price: 647.94,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 42010,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mccarthy, Cox and Carlson',
        timestamp: '2025-02-15T14:43:56',
      },
      {
        id: 18482,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dixon Inc',
        timestamp: '2024-08-12T06:52:11',
      },
      {
        id: 39130,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jonathan Pierce',
        timestamp: '2023-11-01T14:40:58',
      },
      {
        id: 7852,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jesse Larson',
        timestamp: '2023-10-21T05:10:58',
      },
    ],
  },
  {
    id: 819,
    name: 'Take Amortiguador',
    stock: 24,
    price: 972.09,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 27144,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Moore-Lang',
        timestamp: '2024-08-07T04:58:14',
      },
      {
        id: 6577,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bianca Green',
        timestamp: '2023-12-06T06:59:59',
      },
      {
        id: 40318,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: In power matter painting teach increase night.',
        timestamp: '2024-08-18T02:35:11',
      },
      {
        id: 18207,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Shields LLC',
        timestamp: '2023-08-25T18:08:56',
      },
      {
        id: 81531,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jared Johnson',
        timestamp: '2023-09-07T08:33:48',
      },
    ],
  },
  {
    id: 820,
    name: 'Institution Bujía',
    stock: 36,
    price: 520.06,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 11344,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Truth doctor business year right store miss.',
        timestamp: '2024-02-28T21:27:52',
      },
      {
        id: 64128,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Perry-Robbins',
        timestamp: '2023-12-23T01:40:56',
      },
      {
        id: 45409,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Participant fact that executive through best sister.',
        timestamp: '2023-05-31T16:06:36',
      },
      {
        id: 34788,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams and Sons',
        timestamp: '2024-07-09T10:20:12',
      },
      {
        id: 46763,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Write somebody lay professor.',
        timestamp: '2024-01-18T00:16:05',
      },
    ],
  },
  {
    id: 821,
    name: 'Language Filtro',
    stock: 38,
    price: 179.26,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 45958,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Financial deep finally forget two.',
        timestamp: '2025-01-14T03:47:55',
      },
      {
        id: 81512,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Miranda PLC',
        timestamp: '2025-01-03T20:31:10',
      },
      {
        id: 975,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Medina, Miller and Patton',
        timestamp: '2024-12-31T17:04:02',
      },
      {
        id: 76402,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Theresa Fisher',
        timestamp: '2023-09-19T09:52:39',
      },
      {
        id: 23576,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hopkins, May and Moss',
        timestamp: '2024-05-01T04:45:26',
      },
    ],
  },
  {
    id: 822,
    name: 'Peace Alternador',
    stock: 81,
    price: 919.98,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 66978,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith, Reynolds and Barrett',
        timestamp: '2024-09-27T11:25:03',
      },
    ],
  },
  {
    id: 823,
    name: 'Have Amortiguador',
    stock: 90,
    price: 463.53,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 73496,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Law check body example administration officer join.',
        timestamp: '2025-02-06T15:30:50',
      },
      {
        id: 10852,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Attention program early from fear safe.',
        timestamp: '2023-11-24T23:04:01',
      },
      {
        id: 4338,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Church cup six camera enter amount.',
        timestamp: '2023-06-18T06:41:12',
      },
    ],
  },
  {
    id: 824,
    name: 'Guess Amortiguador',
    stock: 33,
    price: 757.18,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 35518,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones, Smith and Phillips',
        timestamp: '2024-11-13T14:34:40',
      },
      {
        id: 71819,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Generation paper current issue positive.',
        timestamp: '2025-02-28T23:06:30',
      },
    ],
  },
  {
    id: 825,
    name: 'Site Filtro',
    stock: 33,
    price: 811.22,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 51274,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Sure likely exist make.',
        timestamp: '2024-04-15T18:00:53',
      },
      {
        id: 35114,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wilson-Wallace',
        timestamp: '2023-10-30T14:19:11',
      },
      {
        id: 24267,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Eye without box only then.',
        timestamp: '2024-06-30T01:32:35',
      },
    ],
  },
  {
    id: 826,
    name: 'Training Bujía',
    stock: 8,
    price: 803.04,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 44328,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Anyone a best.',
        timestamp: '2023-09-09T19:46:25',
      },
      {
        id: 77402,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Feel get chair explain personal though drug.',
        timestamp: '2023-09-29T15:30:31',
      },
      {
        id: 19436,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Stephanie Mendez',
        timestamp: '2024-03-01T10:57:56',
      },
    ],
  },
  {
    id: 827,
    name: 'Real Bujía',
    stock: 29,
    price: 201.41,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 32861,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Casey',
        timestamp: '2023-06-17T07:48:44',
      },
      {
        id: 43027,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown-Garcia',
        timestamp: '2024-09-01T06:25:07',
      },
      {
        id: 68002,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bryan, Cantrell and Smith',
        timestamp: '2024-03-27T18:24:23',
      },
      {
        id: 58064,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Taylor, Walker and Nelson',
        timestamp: '2024-11-15T23:26:57',
      },
    ],
  },
  {
    id: 828,
    name: 'Board Alternador',
    stock: 82,
    price: 788.86,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 32435,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Leah Adams',
        timestamp: '2024-09-15T02:38:24',
      },
      {
        id: 68640,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Matthew Martinez',
        timestamp: '2024-03-12T10:30:53',
      },
      {
        id: 49780,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Chen PLC',
        timestamp: '2023-10-24T03:35:26',
      },
    ],
  },
  {
    id: 829,
    name: 'Realize Alternador',
    stock: 13,
    price: 865.76,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 3649,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Important artist part drop.',
        timestamp: '2023-09-09T21:03:11',
      },
      {
        id: 64071,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Within teach station face according write front.',
        timestamp: '2023-10-19T18:45:19',
      },
      {
        id: 21146,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dustin Brandt',
        timestamp: '2023-10-29T16:19:32',
      },
    ],
  },
  {
    id: 830,
    name: 'Left Bujía',
    stock: 26,
    price: 656.78,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 46616,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Television follow nation these great simple little.',
        timestamp: '2023-06-12T23:03:13',
      },
      {
        id: 38635,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Connie Fitzgerald',
        timestamp: '2025-01-10T17:40:52',
      },
    ],
  },
  {
    id: 831,
    name: 'Hour Pastilla',
    stock: 86,
    price: 192.45,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 78180,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ramirez and Sons',
        timestamp: '2025-04-20T19:10:01',
      },
      {
        id: 31533,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Boyd, Lopez and Martin',
        timestamp: '2023-09-05T23:01:15',
      },
    ],
  },
  {
    id: 832,
    name: 'Director Filtro',
    stock: 86,
    price: 502.42,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 89148,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Learn yard form meeting nearly but item short.',
        timestamp: '2023-10-02T23:07:30',
      },
      {
        id: 85145,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Maybe official people rate drive them.',
        timestamp: '2024-12-14T16:58:45',
      },
      {
        id: 66067,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Obrien',
        timestamp: '2025-04-07T13:15:35',
      },
    ],
  },
  {
    id: 833,
    name: 'Final Alternador',
    stock: 36,
    price: 548.23,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 11399,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christine Orr',
        timestamp: '2024-09-12T06:59:34',
      },
    ],
  },
  {
    id: 834,
    name: 'Become Pastilla',
    stock: 3,
    price: 62.04,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 73474,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Stacy Schwartz',
        timestamp: '2023-05-10T18:15:38',
      },
    ],
  },
  {
    id: 835,
    name: 'Become Amortiguador',
    stock: 82,
    price: 252.79,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 48197,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: State assume already need hand head.',
        timestamp: '2023-06-08T21:16:07',
      },
      {
        id: 8431,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Control approach kid.',
        timestamp: '2023-12-17T03:03:51',
      },
      {
        id: 91955,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jason Davis',
        timestamp: '2023-07-02T23:05:12',
      },
    ],
  },
  {
    id: 836,
    name: 'Understand Amortiguador',
    stock: 18,
    price: 502.73,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 28945,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Color will support actually development finish.',
        timestamp: '2024-10-27T06:22:12',
      },
      {
        id: 18477,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Leg woman film among scientist figure training.',
        timestamp: '2024-06-04T12:14:18',
      },
      {
        id: 89569,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Whatever discover since direction.',
        timestamp: '2024-08-17T09:48:27',
      },
    ],
  },
  {
    id: 837,
    name: 'Citizen Amortiguador',
    stock: 35,
    price: 754.24,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 44409,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dean Ltd',
        timestamp: '2024-02-16T01:57:43',
      },
    ],
  },
  {
    id: 838,
    name: 'Ahead Filtro',
    stock: 86,
    price: 735.01,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 38351,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Romero-Steele',
        timestamp: '2024-04-22T09:50:16',
      },
      {
        id: 8226,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente James Green',
        timestamp: '2023-07-27T03:56:19',
      },
    ],
  },
  {
    id: 839,
    name: 'Side Bujía',
    stock: 41,
    price: 356.81,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 72664,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Ferrell, Sanchez and Flowers',
        timestamp: '2024-10-09T22:52:13',
      },
      {
        id: 70557,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Steven Gregory',
        timestamp: '2023-07-03T21:03:16',
      },
      {
        id: 21350,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tina Henry',
        timestamp: '2024-08-07T15:59:01',
      },
    ],
  },
  {
    id: 840,
    name: 'Car Bujía',
    stock: 18,
    price: 626.52,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 95980,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente James Moreno',
        timestamp: '2024-08-12T05:11:21',
      },
      {
        id: 1170,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrew Benson',
        timestamp: '2025-02-16T09:27:55',
      },
      {
        id: 32263,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Gary Shaw',
        timestamp: '2023-10-01T05:51:59',
      },
      {
        id: 55966,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Snow-King',
        timestamp: '2024-08-01T14:11:36',
      },
    ],
  },
  {
    id: 841,
    name: 'Allow Pastilla',
    stock: 3,
    price: 977.53,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 32095,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Decision will best performance difficult century.',
        timestamp: '2023-06-05T16:23:59',
      },
      {
        id: 59025,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ponce Ltd',
        timestamp: '2024-12-16T14:18:02',
      },
    ],
  },
  {
    id: 842,
    name: 'Agreement Filtro',
    stock: 48,
    price: 495.66,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 69477,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Watson Inc',
        timestamp: '2023-10-18T21:43:22',
      },
      {
        id: 55440,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Front community fear book.',
        timestamp: '2024-11-16T06:10:50',
      },
      {
        id: 58409,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Everything key guess test class would.',
        timestamp: '2023-10-26T13:57:41',
      },
      {
        id: 51492,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Parent smile capital worker none serious.',
        timestamp: '2023-06-05T02:30:29',
      },
      {
        id: 96951,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Melissa Davis',
        timestamp: '2023-12-12T00:12:16',
      },
    ],
  },
  {
    id: 843,
    name: 'College Amortiguador',
    stock: 82,
    price: 289.8,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 71363,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Richardson-Watkins',
        timestamp: '2023-05-27T19:26:37',
      },
      {
        id: 73964,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lindsey Williams',
        timestamp: '2024-07-14T01:50:26',
      },
    ],
  },
  {
    id: 844,
    name: 'Story Filtro',
    stock: 78,
    price: 813.41,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 9354,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Baxter Ltd',
        timestamp: '2024-12-08T03:58:51',
      },
      {
        id: 78822,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Book important fine age position quality citizen.',
        timestamp: '2024-08-20T10:36:33',
      },
      {
        id: 70656,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Behind citizen with.',
        timestamp: '2025-04-21T18:15:37',
      },
    ],
  },
  {
    id: 845,
    name: 'Fear Bujía',
    stock: 17,
    price: 457.11,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 9703,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Johnson, Ashley and Smith',
        timestamp: '2025-02-14T06:33:35',
      },
    ],
  },
  {
    id: 846,
    name: 'Quite Alternador',
    stock: 96,
    price: 772.83,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 14442,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Suffer work produce power kind wonder worry west.',
        timestamp: '2024-08-28T23:12:54',
      },
      {
        id: 73261,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: To many cup activity.',
        timestamp: '2024-06-25T08:52:03',
      },
      {
        id: 89482,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christopher Fisher',
        timestamp: '2024-01-09T20:39:07',
      },
      {
        id: 33929,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amanda King',
        timestamp: '2024-10-21T22:40:00',
      },
    ],
  },
  {
    id: 847,
    name: 'Interesting Pastilla',
    stock: 7,
    price: 456.3,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 8699,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Stewart-Newton',
        timestamp: '2024-12-27T14:17:04',
      },
      {
        id: 51811,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Clear wall support everything development dream sea.',
        timestamp: '2024-07-23T01:43:49',
      },
    ],
  },
  {
    id: 848,
    name: 'What Alternador',
    stock: 66,
    price: 454.18,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 48963,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith, Cruz and Powell',
        timestamp: '2024-08-06T17:29:57',
      },
      {
        id: 38497,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: More bank some stuff.',
        timestamp: '2023-10-27T11:10:38',
      },
    ],
  },
  {
    id: 849,
    name: 'Technology Filtro',
    stock: 37,
    price: 977.4,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 60190,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Goal perform body forget way leg.',
        timestamp: '2024-10-28T09:38:08',
      },
      {
        id: 83378,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Olson, Rogers and Bartlett',
        timestamp: '2023-07-19T10:50:35',
      },
      {
        id: 88070,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Clayton Brown Jr.',
        timestamp: '2025-04-23T04:14:55',
      },
      {
        id: 98958,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Road reveal trade level market then price.',
        timestamp: '2023-11-13T08:34:09',
      },
      {
        id: 22547,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kimberly Baldwin',
        timestamp: '2024-10-12T04:36:05',
      },
    ],
  },
  {
    id: 850,
    name: 'Special Pastilla',
    stock: 54,
    price: 114.46,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 16664,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Get head system general mouth.',
        timestamp: '2024-08-16T00:32:44',
      },
    ],
  },
  {
    id: 851,
    name: 'Analysis Amortiguador',
    stock: 39,
    price: 814.33,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 6524,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Land have amount evidence feel this cultural measure.',
        timestamp: '2024-05-10T23:12:52',
      },
      {
        id: 89821,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Adams PLC',
        timestamp: '2024-07-18T00:37:25',
      },
    ],
  },
  {
    id: 852,
    name: 'Role Pastilla',
    stock: 92,
    price: 742.73,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 69596,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Johnston, Montoya and Thomas',
        timestamp: '2024-05-30T10:25:51',
      },
      {
        id: 63972,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Salazar, Hines and Green',
        timestamp: '2024-12-06T13:38:38',
      },
      {
        id: 37133,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hughes Ltd',
        timestamp: '2023-07-05T19:51:42',
      },
    ],
  },
  {
    id: 853,
    name: 'Challenge Alternador',
    stock: 85,
    price: 913.67,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 58879,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Petersen Group',
        timestamp: '2024-07-02T10:37:17',
      },
      {
        id: 73864,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Understand south Mr property require.',
        timestamp: '2024-12-20T08:08:02',
      },
      {
        id: 83441,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Andrews, Pruitt and Ray',
        timestamp: '2024-07-22T22:24:41',
      },
      {
        id: 77131,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Williams, Hopkins and Romero',
        timestamp: '2024-07-24T03:20:09',
      },
      {
        id: 77399,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Want threat choice attorney culture night right factor.',
        timestamp: '2023-10-13T06:39:09',
      },
    ],
  },
  {
    id: 854,
    name: 'Research Pastilla',
    stock: 58,
    price: 777.1,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 12756,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Anthony Giles',
        timestamp: '2024-08-08T00:52:03',
      },
    ],
  },
  {
    id: 855,
    name: 'Reach Pastilla',
    stock: 63,
    price: 219.8,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 42354,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: National heavy type term mean scientist.',
        timestamp: '2024-05-27T15:27:38',
      },
      {
        id: 56306,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wilson-Reynolds',
        timestamp: '2025-01-18T21:19:02',
      },
    ],
  },
  {
    id: 856,
    name: 'Appear Amortiguador',
    stock: 94,
    price: 757.73,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 45233,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Taylor, Jones and Boyle',
        timestamp: '2024-12-27T08:36:50',
      },
      {
        id: 14578,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Level right hard have suggest each.',
        timestamp: '2024-08-16T22:16:05',
      },
      {
        id: 25785,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Should trade movie only.',
        timestamp: '2025-04-15T13:41:11',
      },
      {
        id: 23669,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Decker-King',
        timestamp: '2024-03-23T22:28:26',
      },
    ],
  },
  {
    id: 857,
    name: 'Reflect Alternador',
    stock: 58,
    price: 395.29,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 27426,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Remember position all company behavior plan firm.',
        timestamp: '2023-09-03T02:34:13',
      },
      {
        id: 15486,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Conway-Cruz',
        timestamp: '2023-05-27T19:13:14',
      },
      {
        id: 96176,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Property six probably onto on rest certainly small.',
        timestamp: '2023-09-16T23:48:56',
      },
      {
        id: 19626,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Avoid describe threat almost level chance into mission.',
        timestamp: '2024-08-14T00:20:08',
      },
      {
        id: 98734,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thomas, Cruz and Blevins',
        timestamp: '2023-09-05T15:52:14',
      },
    ],
  },
  {
    id: 858,
    name: 'Manage Amortiguador',
    stock: 62,
    price: 865.39,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 53951,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Relationship usually color world eye political join.',
        timestamp: '2024-01-12T11:18:02',
      },
      {
        id: 5877,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lopez LLC',
        timestamp: '2025-02-03T00:13:36',
      },
      {
        id: 92753,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Scott Group',
        timestamp: '2024-02-06T01:11:51',
      },
      {
        id: 81053,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Karen Miller',
        timestamp: '2023-05-19T09:51:35',
      },
      {
        id: 27582,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Positive time pass agency learn tax respond.',
        timestamp: '2023-08-08T04:27:39',
      },
    ],
  },
  {
    id: 859,
    name: 'Particular Pastilla',
    stock: 55,
    price: 928.72,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 84974,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Anderson-Lewis',
        timestamp: '2024-02-17T01:10:55',
      },
      {
        id: 99145,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Pattern everyone her close learn why crime.',
        timestamp: '2025-02-13T17:54:05',
      },
      {
        id: 60304,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Deal although bring us box follow international.',
        timestamp: '2024-01-12T15:26:45',
      },
      {
        id: 10269,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Elizabeth Macdonald',
        timestamp: '2023-06-13T11:31:04',
      },
    ],
  },
  {
    id: 860,
    name: 'Similar Alternador',
    stock: 62,
    price: 852.63,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 22398,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kirk Reeves',
        timestamp: '2023-07-16T08:02:46',
      },
      {
        id: 52945,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor David-Stevens',
        timestamp: '2025-03-17T18:14:14',
      },
      {
        id: 36580,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Base sometimes pass second include anyone fill.',
        timestamp: '2024-11-24T14:18:35',
      },
      {
        id: 83651,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Emma Wright',
        timestamp: '2025-01-01T10:15:35',
      },
      {
        id: 68780,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Teacher conference friend above.',
        timestamp: '2024-07-10T16:50:43',
      },
    ],
  },
  {
    id: 861,
    name: 'Nice Bujía',
    stock: 24,
    price: 521.22,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 15925,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith, Clark and Perez',
        timestamp: '2023-08-03T05:31:15',
      },
      {
        id: 46184,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Robinson',
        timestamp: '2024-09-25T10:24:47',
      },
      {
        id: 29218,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lisa Santiago',
        timestamp: '2024-07-03T05:27:29',
      },
      {
        id: 26095,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dawn Lynn',
        timestamp: '2025-03-02T06:20:40',
      },
    ],
  },
  {
    id: 862,
    name: 'Term Bujía',
    stock: 63,
    price: 789.84,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 50110,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Lose head do seem time important change.',
        timestamp: '2023-07-15T08:15:48',
      },
    ],
  },
  {
    id: 863,
    name: 'Modern Pastilla',
    stock: 55,
    price: 638.5,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 87032,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Bar simply mean commercial.',
        timestamp: '2025-03-08T15:13:26',
      },
    ],
  },
  {
    id: 864,
    name: 'Thought Filtro',
    stock: 0,
    price: 854.9,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 35550,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Velasquez, Hardy and Burton',
        timestamp: '2024-02-17T22:05:28',
      },
      {
        id: 55791,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Impact reveal born baby hour with.',
        timestamp: '2024-01-28T18:18:19',
      },
      {
        id: 48860,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Boyd-Davis',
        timestamp: '2024-06-23T23:41:21',
      },
      {
        id: 19162,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alicia Wu',
        timestamp: '2024-11-13T07:42:17',
      },
    ],
  },
  {
    id: 865,
    name: 'At Pastilla',
    stock: 30,
    price: 799.54,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 46013,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Powell, Brooks and Johnson',
        timestamp: '2024-06-21T08:22:04',
      },
      {
        id: 28079,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Grant Hanson',
        timestamp: '2023-07-10T20:05:56',
      },
    ],
  },
  {
    id: 866,
    name: 'Behavior Alternador',
    stock: 40,
    price: 87.37,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 18632,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Long Inc',
        timestamp: '2023-10-22T01:37:58',
      },
      {
        id: 91220,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Glenn Stevenson',
        timestamp: '2023-09-11T19:40:50',
      },
      {
        id: 46316,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ashley Pollard',
        timestamp: '2023-11-05T10:25:51',
      },
      {
        id: 30097,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Angelica Pierce',
        timestamp: '2024-02-16T23:05:36',
      },
    ],
  },
  {
    id: 867,
    name: 'This Alternador',
    stock: 35,
    price: 97.14,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 92885,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Hoffman',
        timestamp: '2024-10-18T16:36:10',
      },
      {
        id: 22575,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Robinson PLC',
        timestamp: '2024-04-14T13:42:34',
      },
      {
        id: 45005,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brady, Ray and Mcmahon',
        timestamp: '2023-09-19T14:05:28',
      },
      {
        id: 6905,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Crime without election around network.',
        timestamp: '2024-09-04T22:11:19',
      },
    ],
  },
  {
    id: 868,
    name: 'Hand Amortiguador',
    stock: 69,
    price: 972.41,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 53765,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Darryl Singh',
        timestamp: '2024-01-13T08:05:36',
      },
      {
        id: 55510,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Carmen Brown',
        timestamp: '2025-01-15T02:40:35',
      },
    ],
  },
  {
    id: 869,
    name: 'Kind Amortiguador',
    stock: 73,
    price: 863.61,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 91465,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Somebody claim stock treat range at travel.',
        timestamp: '2024-10-04T07:51:58',
      },
      {
        id: 50077,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Skin set final drop.',
        timestamp: '2023-06-06T13:31:46',
      },
    ],
  },
  {
    id: 870,
    name: 'Region Alternador',
    stock: 40,
    price: 452.96,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 86447,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Denise Stevens',
        timestamp: '2023-08-30T17:42:09',
      },
      {
        id: 68396,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Election prove agent action.',
        timestamp: '2023-06-11T19:00:28',
      },
      {
        id: 56530,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nicholas Allen',
        timestamp: '2025-03-11T05:18:22',
      },
      {
        id: 45419,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Susan Reed',
        timestamp: '2023-07-05T20:47:07',
      },
      {
        id: 59540,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Up pay crime wonder his perform administration.',
        timestamp: '2024-11-30T13:40:07',
      },
    ],
  },
  {
    id: 871,
    name: 'Police Filtro',
    stock: 48,
    price: 447.36,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 74112,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lance Boyd',
        timestamp: '2025-03-05T08:56:54',
      },
      {
        id: 29265,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Why look might worker break.',
        timestamp: '2023-09-18T22:45:38',
      },
      {
        id: 9850,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Benefit dinner natural current response.',
        timestamp: '2023-09-01T19:12:28',
      },
      {
        id: 23599,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cook, Johnson and Delgado',
        timestamp: '2023-12-07T10:18:47',
      },
      {
        id: 83682,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brian Roberts',
        timestamp: '2024-10-09T03:16:46',
      },
    ],
  },
  {
    id: 872,
    name: 'Visit Amortiguador',
    stock: 84,
    price: 434.51,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 7977,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Suffer nature fear fish off war.',
        timestamp: '2024-12-24T09:58:01',
      },
      {
        id: 23489,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith, Tucker and Johnson',
        timestamp: '2024-09-29T06:08:31',
      },
      {
        id: 1133,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christina Smith',
        timestamp: '2025-01-15T10:24:51',
      },
    ],
  },
  {
    id: 873,
    name: 'Her Alternador',
    stock: 65,
    price: 834.6,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 53576,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mrs. Dawn Floyd',
        timestamp: '2023-06-26T20:55:59',
      },
      {
        id: 33463,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: That dog goal service by operation true player.',
        timestamp: '2023-08-02T01:15:44',
      },
      {
        id: 98535,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Wonder author maintain article high.',
        timestamp: '2024-10-21T22:43:19',
      },
      {
        id: 92499,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cameron Kelly',
        timestamp: '2025-04-19T21:38:14',
      },
    ],
  },
  {
    id: 874,
    name: 'Career Alternador',
    stock: 40,
    price: 692.0,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 88613,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Agreement local indicate whatever.',
        timestamp: '2024-12-05T14:22:13',
      },
      {
        id: 42777,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Paper live admit country.',
        timestamp: '2024-01-31T07:02:19',
      },
      {
        id: 70852,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Door right war mission forward.',
        timestamp: '2023-11-19T23:49:08',
      },
    ],
  },
  {
    id: 875,
    name: 'Maintain Filtro',
    stock: 98,
    price: 723.91,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 70665,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Light four position item.',
        timestamp: '2024-10-12T06:21:52',
      },
    ],
  },
  {
    id: 876,
    name: 'Purpose Amortiguador',
    stock: 96,
    price: 634.4,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 89006,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Conference article still result.',
        timestamp: '2024-03-12T19:20:44',
      },
      {
        id: 85659,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Lacey Ayers',
        timestamp: '2025-02-09T04:40:42',
      },
      {
        id: 84741,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams PLC',
        timestamp: '2023-06-14T14:29:14',
      },
      {
        id: 34400,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Occur without control voice.',
        timestamp: '2024-09-20T09:12:35',
      },
      {
        id: 25389,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: There often parent learn field across.',
        timestamp: '2025-02-02T20:17:42',
      },
    ],
  },
  {
    id: 877,
    name: 'Money Bujía',
    stock: 56,
    price: 327.13,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 97789,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Benton, Mills and Howell',
        timestamp: '2024-07-20T13:00:01',
      },
      {
        id: 17114,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Gray',
        timestamp: '2024-08-22T17:09:32',
      },
      {
        id: 23343,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Holland-Wade',
        timestamp: '2023-04-27T00:44:05',
      },
      {
        id: 76626,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Allen',
        timestamp: '2025-04-11T04:22:01',
      },
    ],
  },
  {
    id: 878,
    name: 'Attention Amortiguador',
    stock: 80,
    price: 683.63,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 74408,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Christine Gray',
        timestamp: '2024-02-13T21:24:45',
      },
      {
        id: 66891,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Rhonda Herrera',
        timestamp: '2024-12-13T10:14:04',
      },
      {
        id: 65981,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Buckley and Sons',
        timestamp: '2023-06-19T16:38:08',
      },
    ],
  },
  {
    id: 879,
    name: 'Water Amortiguador',
    stock: 1,
    price: 590.04,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 57175,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Natalie Beck',
        timestamp: '2025-01-30T21:15:31',
      },
      {
        id: 36201,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Butler, Jackson and Mcdonald',
        timestamp: '2025-03-06T14:51:12',
      },
    ],
  },
  {
    id: 880,
    name: 'Dog Filtro',
    stock: 82,
    price: 282.03,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 15088,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Explain yet rate final president throw than.',
        timestamp: '2025-02-12T20:14:19',
      },
      {
        id: 28855,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sarah Kim',
        timestamp: '2023-10-25T16:57:24',
      },
    ],
  },
  {
    id: 881,
    name: 'New Pastilla',
    stock: 50,
    price: 962.09,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 70657,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Eric Jones',
        timestamp: '2025-03-07T21:16:38',
      },
      {
        id: 66164,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Join sign carry future mention only here son.',
        timestamp: '2024-01-29T17:52:04',
      },
      {
        id: 31580,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jimmy Owens',
        timestamp: '2023-05-31T01:06:39',
      },
    ],
  },
  {
    id: 882,
    name: 'Art Amortiguador',
    stock: 95,
    price: 136.78,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 58014,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Suggest crime card government security local purpose by.',
        timestamp: '2024-10-23T06:00:48',
      },
    ],
  },
  {
    id: 883,
    name: 'Long Filtro',
    stock: 34,
    price: 219.46,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 2575,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente James Miller',
        timestamp: '2024-12-19T16:54:54',
      },
      {
        id: 15598,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Smith, Cunningham and Anderson',
        timestamp: '2023-05-02T15:05:51',
      },
    ],
  },
  {
    id: 884,
    name: 'With Alternador',
    stock: 85,
    price: 987.0,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 37067,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Susan Cook',
        timestamp: '2024-04-25T01:59:10',
      },
      {
        id: 36605,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jennifer Torres',
        timestamp: '2023-12-23T21:58:49',
      },
    ],
  },
  {
    id: 885,
    name: 'Do Filtro',
    stock: 77,
    price: 69.72,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 6388,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Green, Brown and Anderson',
        timestamp: '2025-04-22T12:09:27',
      },
      {
        id: 77627,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Nothing section mind control.',
        timestamp: '2023-11-21T06:15:24',
      },
      {
        id: 63039,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Boyle and Sons',
        timestamp: '2023-08-21T05:11:36',
      },
      {
        id: 29861,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Barton, Ali and Peterson',
        timestamp: '2024-03-03T08:02:57',
      },
      {
        id: 3036,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Quinn-Spears',
        timestamp: '2023-12-18T10:18:37',
      },
    ],
  },
  {
    id: 886,
    name: 'Food Alternador',
    stock: 44,
    price: 432.18,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 93591,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thompson-Richardson',
        timestamp: '2024-08-24T12:38:04',
      },
      {
        id: 29033,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Close parent treat some.',
        timestamp: '2024-10-10T19:05:14',
      },
      {
        id: 46592,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Sherman PLC',
        timestamp: '2024-01-07T04:25:57',
      },
    ],
  },
  {
    id: 887,
    name: 'Blue Alternador',
    stock: 66,
    price: 116.12,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 14723,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Police several perform hope.',
        timestamp: '2024-01-12T13:07:18',
      },
    ],
  },
  {
    id: 888,
    name: 'Despite Filtro',
    stock: 47,
    price: 126.27,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 22632,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Travis Jones',
        timestamp: '2023-07-03T20:36:14',
      },
      {
        id: 72630,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Johnson and Sons',
        timestamp: '2025-01-05T10:30:51',
      },
      {
        id: 4004,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hensley-Brown',
        timestamp: '2024-11-12T14:16:17',
      },
      {
        id: 13046,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Thomas Yu',
        timestamp: '2023-09-06T06:46:37',
      },
      {
        id: 26671,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: According customer again site weight bill experience.',
        timestamp: '2025-03-06T23:20:37',
      },
    ],
  },
  {
    id: 889,
    name: 'Ball Amortiguador',
    stock: 95,
    price: 771.96,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 58645,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Be six during site dark.',
        timestamp: '2023-12-25T17:29:15',
      },
      {
        id: 52856,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Fowler',
        timestamp: '2023-06-20T11:28:31',
      },
      {
        id: 97462,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dana Smith',
        timestamp: '2024-03-26T15:06:13',
      },
    ],
  },
  {
    id: 890,
    name: 'Chair Alternador',
    stock: 5,
    price: 181.68,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 80093,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tyler Elliott',
        timestamp: '2024-06-03T12:11:23',
      },
    ],
  },
  {
    id: 891,
    name: 'Two Alternador',
    stock: 29,
    price: 737.45,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 56933,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Determine level social father.',
        timestamp: '2023-12-10T03:33:20',
      },
      {
        id: 26514,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Richard Lara',
        timestamp: '2023-06-14T01:49:21',
      },
      {
        id: 75385,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Various discussion may seven.',
        timestamp: '2023-12-18T23:22:16',
      },
      {
        id: 58849,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Barajas, Williams and Mcpherson',
        timestamp: '2025-04-05T05:31:51',
      },
    ],
  },
  {
    id: 892,
    name: 'Might Bujía',
    stock: 99,
    price: 268.32,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 48072,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Larsen-Reynolds',
        timestamp: '2024-09-13T06:32:52',
      },
      {
        id: 55865,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Horne, Rogers and Forbes',
        timestamp: '2024-02-16T20:51:50',
      },
      {
        id: 25701,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rogers, Allen and Mckinney',
        timestamp: '2024-12-12T02:17:33',
      },
    ],
  },
  {
    id: 893,
    name: 'Former Alternador',
    stock: 26,
    price: 177.87,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 6790,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Crawford Group',
        timestamp: '2024-09-17T07:58:48',
      },
    ],
  },
  {
    id: 894,
    name: 'Population Filtro',
    stock: 62,
    price: 562.2,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 93135,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Ever again similar white phone.',
        timestamp: '2023-11-14T17:28:02',
      },
    ],
  },
  {
    id: 895,
    name: 'Drop Amortiguador',
    stock: 58,
    price: 626.94,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 95351,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martin-Hunter',
        timestamp: '2024-01-06T02:18:25',
      },
      {
        id: 96682,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Garcia, Wilson and Frank',
        timestamp: '2024-09-16T23:15:53',
      },
      {
        id: 3785,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Julia Garcia DDS',
        timestamp: '2024-11-30T03:29:08',
      },
    ],
  },
  {
    id: 896,
    name: 'Take Amortiguador',
    stock: 94,
    price: 141.2,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 57041,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Patterson, Griffin and Smith',
        timestamp: '2024-07-19T07:48:42',
      },
      {
        id: 92147,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dr. Alyssa Rhodes',
        timestamp: '2024-12-12T19:36:49',
      },
      {
        id: 73061,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Traci Allen',
        timestamp: '2023-07-27T05:55:26',
      },
      {
        id: 90584,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Taylor Group',
        timestamp: '2023-10-15T18:32:33',
      },
      {
        id: 49509,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Cruz',
        timestamp: '2023-09-17T09:22:10',
      },
    ],
  },
  {
    id: 897,
    name: 'Like Amortiguador',
    stock: 30,
    price: 386.58,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 7615,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Beard Group',
        timestamp: '2024-02-09T04:52:58',
      },
    ],
  },
  {
    id: 898,
    name: 'Me Alternador',
    stock: 22,
    price: 135.96,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 5013,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Angela Jones',
        timestamp: '2024-01-01T09:37:55',
      },
      {
        id: 12192,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Baker, Jimenez and Hoffman',
        timestamp: '2024-08-21T22:11:47',
      },
      {
        id: 67922,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Race knowledge gas to group pressure.',
        timestamp: '2023-06-26T11:33:45',
      },
      {
        id: 87434,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Mr adult show inside.',
        timestamp: '2024-08-01T09:00:33',
      },
    ],
  },
  {
    id: 899,
    name: 'Thought Alternador',
    stock: 46,
    price: 173.37,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 11307,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Production share send.',
        timestamp: '2024-08-19T09:58:37',
      },
      {
        id: 89216,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Sport only about possible data.',
        timestamp: '2025-02-10T13:34:37',
      },
    ],
  },
  {
    id: 900,
    name: 'More Bujía',
    stock: 20,
    price: 978.44,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 93708,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Arm everyone bar reflect show water.',
        timestamp: '2025-04-09T19:11:43',
      },
    ],
  },
  {
    id: 901,
    name: 'Material Amortiguador',
    stock: 42,
    price: 348.31,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 63797,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Teach type then however mind natural.',
        timestamp: '2024-03-01T04:57:52',
      },
      {
        id: 69457,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jason Willis',
        timestamp: '2024-09-05T23:41:03',
      },
    ],
  },
  {
    id: 902,
    name: 'Allow Bujía',
    stock: 28,
    price: 939.37,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 66728,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Hunter Arias',
        timestamp: '2023-09-06T08:02:47',
      },
      {
        id: 14435,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Natural free window best national service growth sell.',
        timestamp: '2025-02-22T23:15:19',
      },
      {
        id: 90034,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thomas Ltd',
        timestamp: '2024-01-26T08:29:28',
      },
    ],
  },
  {
    id: 903,
    name: 'Cost Pastilla',
    stock: 6,
    price: 484.81,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 49863,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Positive buy message line today few choose.',
        timestamp: '2023-10-08T09:09:00',
      },
      {
        id: 91405,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sheri Humphrey',
        timestamp: '2024-10-20T11:13:29',
      },
    ],
  },
  {
    id: 904,
    name: 'As Pastilla',
    stock: 75,
    price: 686.95,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 70598,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cox LLC',
        timestamp: '2023-08-20T00:21:37',
      },
      {
        id: 64659,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Together anyone bag cold mouth effect suddenly specific.',
        timestamp: '2024-07-28T07:09:11',
      },
      {
        id: 18634,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Young then case they film world dark wait.',
        timestamp: '2024-12-15T00:12:43',
      },
      {
        id: 399,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ramirez Ltd',
        timestamp: '2024-11-07T18:06:30',
      },
      {
        id: 28708,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tracy Stewart',
        timestamp: '2023-12-23T17:04:46',
      },
    ],
  },
  {
    id: 905,
    name: 'Leave Amortiguador',
    stock: 36,
    price: 504.55,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 61673,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Skinner Inc',
        timestamp: '2024-11-01T10:11:54',
      },
      {
        id: 50860,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Autumn Marsh',
        timestamp: '2024-04-10T17:07:00',
      },
      {
        id: 80368,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gilbert, Coffey and Smith',
        timestamp: '2024-09-25T01:30:40',
      },
      {
        id: 29740,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Kind late continue sound.',
        timestamp: '2025-02-11T03:11:43',
      },
    ],
  },
  {
    id: 906,
    name: 'Write Bujía',
    stock: 95,
    price: 164.35,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 3218,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Smith',
        timestamp: '2024-04-03T12:03:09',
      },
    ],
  },
  {
    id: 907,
    name: 'State Amortiguador',
    stock: 60,
    price: 514.46,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 99341,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Her why gas blood meet often through.',
        timestamp: '2024-06-29T12:04:48',
      },
      {
        id: 82617,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: All no material democratic.',
        timestamp: '2023-10-17T09:41:11',
      },
      {
        id: 10773,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bruce Morrison',
        timestamp: '2025-03-18T17:06:48',
      },
      {
        id: 6730,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Responsibility month research various safe when expect.',
        timestamp: '2024-11-03T03:49:02',
      },
    ],
  },
  {
    id: 908,
    name: 'Customer Alternador',
    stock: 60,
    price: 601.35,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 88541,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Myers, Moore and Sweeney',
        timestamp: '2024-07-30T13:43:42',
      },
      {
        id: 82534,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Institution about debate picture place significant.',
        timestamp: '2025-01-18T14:54:13',
      },
    ],
  },
  {
    id: 909,
    name: 'Grow Alternador',
    stock: 37,
    price: 595.52,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 36117,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Candidate certainly more accept you write.',
        timestamp: '2024-01-22T13:16:35',
      },
      {
        id: 61215,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Civil true though.',
        timestamp: '2024-09-30T04:53:46',
      },
    ],
  },
  {
    id: 910,
    name: 'Away Amortiguador',
    stock: 99,
    price: 423.69,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 1305,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Cynthia Gutierrez',
        timestamp: '2024-04-01T01:10:53',
      },
      {
        id: 75051,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tonya Glover',
        timestamp: '2023-07-27T01:00:04',
      },
      {
        id: 36817,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cannon LLC',
        timestamp: '2025-02-17T06:44:23',
      },
      {
        id: 14829,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Serrano, Wells and Aguirre',
        timestamp: '2024-07-28T03:51:40',
      },
    ],
  },
  {
    id: 911,
    name: 'Thousand Bujía',
    stock: 58,
    price: 283.22,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 23163,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jesus Moss',
        timestamp: '2024-02-26T14:02:19',
      },
    ],
  },
  {
    id: 912,
    name: 'Follow Alternador',
    stock: 44,
    price: 123.03,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 38534,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Dana Hill',
        timestamp: '2025-01-30T02:49:14',
      },
      {
        id: 3589,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Three or pay stand.',
        timestamp: '2023-05-03T09:25:15',
      },
      {
        id: 36843,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Wesley Vasquez',
        timestamp: '2024-08-25T13:09:29',
      },
      {
        id: 54754,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Kid the economy.',
        timestamp: '2024-05-03T04:35:52',
      },
      {
        id: 89916,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lucero-Chavez',
        timestamp: '2025-04-22T11:09:49',
      },
    ],
  },
  {
    id: 913,
    name: 'Inside Filtro',
    stock: 84,
    price: 549.38,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 10939,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ryan Moore',
        timestamp: '2023-05-13T02:14:07',
      },
      {
        id: 79263,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Scott Jackson',
        timestamp: '2024-12-14T11:20:45',
      },
      {
        id: 31973,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor King PLC',
        timestamp: '2024-05-09T03:45:33',
      },
      {
        id: 42212,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Understand serve catch believe response former form.',
        timestamp: '2023-09-19T19:34:50',
      },
    ],
  },
  {
    id: 914,
    name: 'Minute Pastilla',
    stock: 5,
    price: 845.47,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 37503,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jacobs-Smith',
        timestamp: '2024-01-24T21:02:51',
      },
    ],
  },
  {
    id: 915,
    name: 'Matter Amortiguador',
    stock: 91,
    price: 611.98,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 50618,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Understand you modern us including media more any.',
        timestamp: '2023-09-13T20:45:11',
      },
      {
        id: 61823,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Media manage offer soon market.',
        timestamp: '2025-01-25T00:22:19',
      },
      {
        id: 26038,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hopkins and Sons',
        timestamp: '2023-06-01T11:36:38',
      },
    ],
  },
  {
    id: 916,
    name: 'Pressure Amortiguador',
    stock: 38,
    price: 351.38,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 163,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Palmer-Klein',
        timestamp: '2023-09-17T14:40:42',
      },
    ],
  },
  {
    id: 917,
    name: 'Lead Alternador',
    stock: 13,
    price: 495.73,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 18376,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Randy Orr',
        timestamp: '2024-05-23T16:28:10',
      },
    ],
  },
  {
    id: 918,
    name: 'Enough Amortiguador',
    stock: 57,
    price: 868.21,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 34644,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Charge attention most produce carry nearly.',
        timestamp: '2023-07-14T01:24:22',
      },
    ],
  },
  {
    id: 919,
    name: 'Leg Pastilla',
    stock: 23,
    price: 756.5,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 34172,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joshua Smith',
        timestamp: '2023-10-31T07:04:55',
      },
      {
        id: 24058,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Acosta Inc',
        timestamp: '2023-10-20T16:02:16',
      },
    ],
  },
  {
    id: 920,
    name: 'Left Filtro',
    stock: 91,
    price: 320.97,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 49946,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Would long last program.',
        timestamp: '2023-10-22T12:45:20',
      },
      {
        id: 3188,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Issue I others we nor different nation season.',
        timestamp: '2024-05-09T07:28:36',
      },
      {
        id: 62011,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ellison LLC',
        timestamp: '2024-04-23T07:28:13',
      },
      {
        id: 37584,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jones, Owens and Wheeler',
        timestamp: '2023-12-19T23:34:07',
      },
      {
        id: 16709,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: City front only figure when manage sense which.',
        timestamp: '2023-12-25T00:47:51',
      },
    ],
  },
  {
    id: 921,
    name: 'At Pastilla',
    stock: 31,
    price: 928.07,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 41460,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wolf, Gray and Thomas',
        timestamp: '2024-08-24T22:23:50',
      },
      {
        id: 34617,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Standard south box someone.',
        timestamp: '2023-07-09T13:08:47',
      },
    ],
  },
  {
    id: 922,
    name: 'Service Amortiguador',
    stock: 89,
    price: 803.1,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 31419,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Control very people summer prepare decision.',
        timestamp: '2025-02-11T13:58:09',
      },
      {
        id: 16040,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Figueroa, Johnson and Rodgers',
        timestamp: '2024-08-28T19:37:44',
      },
      {
        id: 43863,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michael Fuller',
        timestamp: '2023-06-09T18:40:19',
      },
      {
        id: 20005,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Holmes and Sons',
        timestamp: '2024-04-06T01:39:40',
      },
      {
        id: 12807,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Just should add different respond.',
        timestamp: '2023-08-20T16:39:46',
      },
    ],
  },
  {
    id: 923,
    name: 'Least Amortiguador',
    stock: 86,
    price: 720.67,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 45622,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Thomas-Lyons',
        timestamp: '2023-08-11T02:31:29',
      },
      {
        id: 29667,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Evans, Smith and Smith',
        timestamp: '2024-01-06T09:19:38',
      },
      {
        id: 93434,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Reed Inc',
        timestamp: '2023-06-21T11:45:32',
      },
    ],
  },
  {
    id: 924,
    name: 'Foot Pastilla',
    stock: 33,
    price: 97.32,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 46795,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Hotel building knowledge development character day.',
        timestamp: '2024-06-11T00:12:23',
      },
      {
        id: 50459,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Cabrera, Smith and Gallagher',
        timestamp: '2025-02-01T06:26:22',
      },
      {
        id: 18714,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brandon Wall',
        timestamp: '2024-02-28T05:16:51',
      },
      {
        id: 34004,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Fernandez, Brooks and Gonzalez',
        timestamp: '2024-08-26T05:47:05',
      },
      {
        id: 56053,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Little happen next require end nature.',
        timestamp: '2024-03-14T10:19:23',
      },
    ],
  },
  {
    id: 925,
    name: 'Traditional Pastilla',
    stock: 100,
    price: 642.16,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 73403,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown, Zhang and Thomas',
        timestamp: '2024-06-15T04:27:06',
      },
    ],
  },
  {
    id: 926,
    name: 'Trade Pastilla',
    stock: 38,
    price: 240.55,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 69423,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Serious career lead.',
        timestamp: '2023-09-02T08:45:29',
      },
      {
        id: 30037,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Discussion cold dark recognize walk.',
        timestamp: '2025-04-19T05:54:31',
      },
    ],
  },
  {
    id: 927,
    name: 'School Amortiguador',
    stock: 13,
    price: 982.98,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 85939,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Tv land news buy break increase reduce often.',
        timestamp: '2024-08-07T17:31:16',
      },
      {
        id: 11257,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: A else to blue team.',
        timestamp: '2023-05-08T19:02:17',
      },
    ],
  },
  {
    id: 928,
    name: 'Ahead Bujía',
    stock: 30,
    price: 324.18,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 47484,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Perhaps class cultural management open carry.',
        timestamp: '2024-06-30T15:02:18',
      },
    ],
  },
  {
    id: 929,
    name: 'Community Alternador',
    stock: 82,
    price: 484.4,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 76975,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Buy young front husband travel good citizen.',
        timestamp: '2023-12-13T17:39:56',
      },
      {
        id: 99697,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: As drop ask ball local.',
        timestamp: '2023-06-19T15:31:33',
      },
      {
        id: 31627,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Kitchen politics cut piece.',
        timestamp: '2024-05-31T04:08:47',
      },
      {
        id: 24434,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Julia Adams',
        timestamp: '2024-07-10T02:26:23',
      },
      {
        id: 60910,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Webster, Adams and Nelson',
        timestamp: '2024-07-09T10:49:30',
      },
    ],
  },
  {
    id: 930,
    name: 'Apply Bujía',
    stock: 73,
    price: 688.47,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 21753,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Whitehead Ltd',
        timestamp: '2024-03-16T21:50:50',
      },
      {
        id: 77339,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kevin Rogers',
        timestamp: '2023-09-05T21:24:58',
      },
      {
        id: 74466,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Yourself improve choose somebody reason radio.',
        timestamp: '2023-08-17T03:58:45',
      },
    ],
  },
  {
    id: 931,
    name: 'Answer Pastilla',
    stock: 39,
    price: 960.85,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 5131,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Walls Ltd',
        timestamp: '2024-03-22T05:56:11',
      },
      {
        id: 89585,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Luis Harris',
        timestamp: '2024-04-12T03:59:18',
      },
      {
        id: 37587,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Simmons-Collins',
        timestamp: '2023-11-18T12:49:28',
      },
      {
        id: 23643,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Green LLC',
        timestamp: '2025-02-26T18:59:53',
      },
      {
        id: 13385,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Munoz, Duncan and Collins',
        timestamp: '2023-06-03T22:07:41',
      },
    ],
  },
  {
    id: 932,
    name: 'Season Pastilla',
    stock: 97,
    price: 870.81,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 69747,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Luke Collins',
        timestamp: '2023-05-21T16:42:14',
      },
      {
        id: 77062,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jeffrey Jordan',
        timestamp: '2023-11-12T21:18:42',
      },
      {
        id: 13336,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Perez',
        timestamp: '2024-10-09T11:16:53',
      },
      {
        id: 16367,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Receive recognize goal produce church relationship.',
        timestamp: '2023-07-09T03:42:49',
      },
      {
        id: 49513,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Yet site group expert wife member again across.',
        timestamp: '2025-04-13T05:36:12',
      },
    ],
  },
  {
    id: 933,
    name: 'Rate Amortiguador',
    stock: 70,
    price: 70.75,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 1381,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Michelle Wilson',
        timestamp: '2023-09-19T04:37:47',
      },
    ],
  },
  {
    id: 934,
    name: 'Fact Pastilla',
    stock: 77,
    price: 580.62,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 73490,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Crawford-Cole',
        timestamp: '2023-10-09T16:11:14',
      },
      {
        id: 10959,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fowler Inc',
        timestamp: '2023-09-09T15:43:09',
      },
    ],
  },
  {
    id: 935,
    name: 'It Pastilla',
    stock: 25,
    price: 593.87,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 6943,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Around face like soldier get town.',
        timestamp: '2024-12-09T22:07:06',
      },
      {
        id: 390,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Paul-Smith',
        timestamp: '2024-01-24T03:29:11',
      },
      {
        id: 27390,
        operationType: { id: 1, name: 'Compra' },
        description:
          'Compra realizada a proveedor Copeland, Phillips and Alvarez',
        timestamp: '2025-03-10T01:08:47',
      },
      {
        id: 38663,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Message up year once green.',
        timestamp: '2023-09-18T19:53:40',
      },
      {
        id: 2186,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Robinson, Abbott and Baker',
        timestamp: '2024-04-09T13:52:40',
      },
    ],
  },
  {
    id: 936,
    name: 'Professor Bujía',
    stock: 40,
    price: 100.45,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 59435,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ashley Howell',
        timestamp: '2023-10-07T17:53:06',
      },
      {
        id: 43827,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Adkins-Smith',
        timestamp: '2024-01-12T17:50:08',
      },
      {
        id: 7945,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Great fly by city.',
        timestamp: '2024-12-02T19:22:50',
      },
    ],
  },
  {
    id: 937,
    name: 'Chance Bujía',
    stock: 38,
    price: 329.52,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 66560,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Marriage teach various late consumer.',
        timestamp: '2023-10-10T12:41:31',
      },
      {
        id: 50247,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente George Thompson',
        timestamp: '2023-06-28T14:16:17',
      },
      {
        id: 55728,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Catch officer the admit it grow.',
        timestamp: '2023-08-21T05:38:07',
      },
    ],
  },
  {
    id: 938,
    name: 'First Amortiguador',
    stock: 83,
    price: 555.8,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 90710,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Nunez and Sons',
        timestamp: '2024-09-01T20:48:20',
      },
      {
        id: 58467,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wolf-Banks',
        timestamp: '2024-08-21T13:58:57',
      },
    ],
  },
  {
    id: 939,
    name: 'His Filtro',
    stock: 83,
    price: 136.83,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 61555,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Society item particular firm right able.',
        timestamp: '2023-10-13T03:15:29',
      },
    ],
  },
  {
    id: 940,
    name: 'Rock Amortiguador',
    stock: 37,
    price: 834.01,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 63192,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ronald Mcintyre',
        timestamp: '2024-08-12T03:32:46',
      },
    ],
  },
  {
    id: 941,
    name: 'One Alternador',
    stock: 26,
    price: 691.66,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 83840,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Knowledge themselves here early local seat.',
        timestamp: '2024-11-24T09:09:53',
      },
      {
        id: 21989,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Alison Adams',
        timestamp: '2023-08-26T08:18:05',
      },
      {
        id: 95156,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joshua Garcia',
        timestamp: '2024-02-12T14:56:00',
      },
    ],
  },
  {
    id: 942,
    name: 'Instead Bujía',
    stock: 71,
    price: 264.81,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 48283,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Ok we subject example her have wife.',
        timestamp: '2025-04-07T02:42:10',
      },
      {
        id: 97512,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Support but suffer sit onto.',
        timestamp: '2023-08-21T21:12:41',
      },
    ],
  },
  {
    id: 943,
    name: 'Score Bujía',
    stock: 76,
    price: 185.9,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 98973,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hooper-Parker',
        timestamp: '2023-12-15T00:55:50',
      },
      {
        id: 41370,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Melissa Campbell',
        timestamp: '2024-03-31T20:24:20',
      },
      {
        id: 50638,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Skin might environmental adult pay increase.',
        timestamp: '2023-09-25T14:13:31',
      },
      {
        id: 94559,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Individual memory spring realize.',
        timestamp: '2023-09-02T04:55:27',
      },
    ],
  },
  {
    id: 944,
    name: 'Our Alternador',
    stock: 50,
    price: 264.59,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 20798,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: According miss feel Congress pressure wish.',
        timestamp: '2024-02-04T10:27:40',
      },
      {
        id: 89949,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Martin-Baker',
        timestamp: '2023-12-12T10:57:36',
      },
    ],
  },
  {
    id: 945,
    name: 'Capital Filtro',
    stock: 44,
    price: 185.63,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 82561,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Collection opportunity keep report health development conference.',
        timestamp: '2024-08-06T00:57:58',
      },
      {
        id: 264,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Father ago participant mention clearly.',
        timestamp: '2024-06-16T23:16:45',
      },
    ],
  },
  {
    id: 946,
    name: 'Good Filtro',
    stock: 77,
    price: 990.93,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 21288,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Cup and teacher very indeed.',
        timestamp: '2023-12-07T03:16:05',
      },
      {
        id: 2843,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente William Juarez',
        timestamp: '2024-12-23T15:54:33',
      },
      {
        id: 41631,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Maxwell-Copeland',
        timestamp: '2025-03-12T07:24:26',
      },
      {
        id: 52173,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Taylor, Ruiz and Anderson',
        timestamp: '2024-11-06T13:55:10',
      },
      {
        id: 57522,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Support company loss miss.',
        timestamp: '2023-10-24T02:51:30',
      },
    ],
  },
  {
    id: 947,
    name: 'Language Pastilla',
    stock: 18,
    price: 428.73,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 59076,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Seven gun difficult mention.',
        timestamp: '2024-11-18T16:23:36',
      },
    ],
  },
  {
    id: 948,
    name: 'Sister Amortiguador',
    stock: 17,
    price: 489.57,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 81835,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Brown',
        timestamp: '2023-10-05T20:49:38',
      },
      {
        id: 53909,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Big camera strategy on worry.',
        timestamp: '2025-01-21T08:05:41',
      },
      {
        id: 96348,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Abigail Nguyen',
        timestamp: '2024-01-21T19:55:53',
      },
      {
        id: 7308,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Henderson, Webb and Jones',
        timestamp: '2025-03-14T23:13:55',
      },
      {
        id: 71660,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Jarvis-Sanders',
        timestamp: '2024-01-23T11:08:10',
      },
    ],
  },
  {
    id: 949,
    name: 'Third Pastilla',
    stock: 51,
    price: 187.74,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 57209,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Our main man wonder movement laugh some.',
        timestamp: '2024-06-05T19:41:16',
      },
    ],
  },
  {
    id: 950,
    name: 'Piece Alternador',
    stock: 15,
    price: 354.99,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 8983,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Brown PLC',
        timestamp: '2024-11-29T19:21:47',
      },
    ],
  },
  {
    id: 951,
    name: 'Phone Filtro',
    stock: 17,
    price: 276.36,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 86854,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Wrong must writer.',
        timestamp: '2024-03-17T06:30:45',
      },
      {
        id: 22755,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Roberts-Watson',
        timestamp: '2024-03-03T19:21:45',
      },
    ],
  },
  {
    id: 952,
    name: 'Study Pastilla',
    stock: 37,
    price: 259.41,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 64097,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith and Sons',
        timestamp: '2024-12-24T16:54:07',
      },
      {
        id: 46967,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tonya Goodwin',
        timestamp: '2024-02-25T07:49:02',
      },
      {
        id: 80788,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Meeting everybody specific how.',
        timestamp: '2024-12-10T18:15:52',
      },
      {
        id: 13731,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Return site house.',
        timestamp: '2023-05-03T00:44:49',
      },
      {
        id: 19230,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Test break west share.',
        timestamp: '2023-09-03T00:45:34',
      },
    ],
  },
  {
    id: 953,
    name: 'Race Bujía',
    stock: 3,
    price: 587.82,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 49598,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Per job win.',
        timestamp: '2024-03-04T13:24:22',
      },
      {
        id: 97879,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Property art east property money would close.',
        timestamp: '2025-01-25T09:01:20',
      },
      {
        id: 78134,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Bonnie Jenkins',
        timestamp: '2023-08-13T10:35:26',
      },
      {
        id: 98760,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Some still treat us.',
        timestamp: '2023-05-01T06:20:10',
      },
    ],
  },
  {
    id: 954,
    name: 'Service Pastilla',
    stock: 70,
    price: 983.23,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 59847,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mcdowell, Smith and Acosta',
        timestamp: '2025-02-09T02:31:33',
      },
      {
        id: 29011,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bentley, Watson and Clarke',
        timestamp: '2025-02-21T04:01:01',
      },
    ],
  },
  {
    id: 955,
    name: 'Himself Bujía',
    stock: 33,
    price: 274.11,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 75651,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Its certainly create material sure wide.',
        timestamp: '2024-03-01T19:04:33',
      },
      {
        id: 34781,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hughes Ltd',
        timestamp: '2024-09-15T08:12:48',
      },
      {
        id: 17797,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Alvarez-Ellis',
        timestamp: '2023-09-23T02:28:36',
      },
    ],
  },
  {
    id: 956,
    name: 'Notice Bujía',
    stock: 96,
    price: 382.31,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 14259,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Indeed popular figure.',
        timestamp: '2025-01-02T21:30:37',
      },
      {
        id: 45888,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Yourself stop room course effect.',
        timestamp: '2024-10-18T23:18:49',
      },
      {
        id: 56960,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Miss Nancy Castro',
        timestamp: '2023-08-17T04:32:59',
      },
      {
        id: 13796,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Fear campaign ten in beyond dark list.',
        timestamp: '2024-09-05T12:36:13',
      },
      {
        id: 48904,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Robert Rocha',
        timestamp: '2023-10-14T17:39:39',
      },
    ],
  },
  {
    id: 957,
    name: 'Represent Alternador',
    stock: 19,
    price: 550.84,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 46032,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sharon Singh',
        timestamp: '2024-07-28T14:00:31',
      },
    ],
  },
  {
    id: 958,
    name: 'Factor Pastilla',
    stock: 21,
    price: 311.19,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 66119,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bowen Group',
        timestamp: '2024-11-03T05:36:35',
      },
      {
        id: 62098,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Friedman Inc',
        timestamp: '2025-02-21T10:05:02',
      },
    ],
  },
  {
    id: 959,
    name: 'Do Filtro',
    stock: 26,
    price: 924.31,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 65558,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith-Johnson',
        timestamp: '2024-07-24T22:08:04',
      },
      {
        id: 40630,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rivers, Miller and Leon',
        timestamp: '2024-01-05T13:32:31',
      },
    ],
  },
  {
    id: 960,
    name: 'Ground Amortiguador',
    stock: 19,
    price: 326.87,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 49750,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Patel, Jones and Reed',
        timestamp: '2023-07-24T14:03:54',
      },
    ],
  },
  {
    id: 961,
    name: 'Congress Pastilla',
    stock: 32,
    price: 431.75,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 40026,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Smith-Hart',
        timestamp: '2023-11-05T17:22:47',
      },
      {
        id: 89679,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hicks-Campbell',
        timestamp: '2024-06-28T00:33:30',
      },
      {
        id: 16352,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Davenport-Estes',
        timestamp: '2023-11-15T15:23:30',
      },
    ],
  },
  {
    id: 962,
    name: 'Recognize Alternador',
    stock: 5,
    price: 599.61,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 52776,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mitchell Browning',
        timestamp: '2023-05-15T19:55:36',
      },
      {
        id: 84528,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Scott, Neal and Jimenez',
        timestamp: '2024-01-17T18:54:53',
      },
      {
        id: 42598,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jennifer Schultz',
        timestamp: '2025-01-14T06:14:06',
      },
      {
        id: 76353,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joseph Morrison',
        timestamp: '2023-12-22T16:35:02',
      },
    ],
  },
  {
    id: 963,
    name: 'Rise Amortiguador',
    stock: 21,
    price: 957.3,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 63911,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ian Thornton',
        timestamp: '2024-11-04T13:34:56',
      },
      {
        id: 869,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Western quality fine establish until nation arrive.',
        timestamp: '2024-06-20T03:49:46',
      },
    ],
  },
  {
    id: 964,
    name: 'American Pastilla',
    stock: 9,
    price: 444.19,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 52974,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Carry who finally defense share room.',
        timestamp: '2023-07-11T06:45:42',
      },
      {
        id: 23985,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Finish purpose guess minute.',
        timestamp: '2024-04-19T13:02:13',
      },
      {
        id: 71957,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Tax short actually term loss show.',
        timestamp: '2023-09-07T04:49:19',
      },
    ],
  },
  {
    id: 965,
    name: 'Road Bujía',
    stock: 97,
    price: 111.72,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 18789,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Pineda, Meadows and Smith',
        timestamp: '2024-05-04T10:56:49',
      },
    ],
  },
  {
    id: 966,
    name: 'Back Bujía',
    stock: 86,
    price: 327.78,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 57336,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mary Cook',
        timestamp: '2023-10-30T18:02:56',
      },
    ],
  },
  {
    id: 967,
    name: 'Seat Filtro',
    stock: 12,
    price: 656.29,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 91447,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Zachary Davis',
        timestamp: '2023-09-15T17:33:36',
      },
      {
        id: 3810,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jordan Liu',
        timestamp: '2023-08-02T00:29:34',
      },
      {
        id: 28301,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Turner and Sons',
        timestamp: '2023-08-14T02:58:03',
      },
      {
        id: 72471,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Brandon Collins',
        timestamp: '2024-06-20T02:37:22',
      },
    ],
  },
  {
    id: 968,
    name: 'Close Pastilla',
    stock: 82,
    price: 842.37,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 80058,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joshua Fernandez',
        timestamp: '2023-12-28T13:33:23',
      },
      {
        id: 3893,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Williams, Roberts and Smith',
        timestamp: '2024-09-27T17:41:48',
      },
    ],
  },
  {
    id: 969,
    name: 'Improve Amortiguador',
    stock: 4,
    price: 807.27,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 21224,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tiffany Peterson',
        timestamp: '2023-06-08T03:26:39',
      },
      {
        id: 22582,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Albert Miller',
        timestamp: '2024-07-07T04:40:24',
      },
      {
        id: 13668,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Anderson-Cortez',
        timestamp: '2024-10-18T08:21:07',
      },
      {
        id: 51434,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Campos-Caldwell',
        timestamp: '2025-04-04T12:58:38',
      },
      {
        id: 8342,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Patricia Parker',
        timestamp: '2023-12-19T22:31:25',
      },
    ],
  },
  {
    id: 970,
    name: 'Bit Bujía',
    stock: 19,
    price: 350.14,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 51928,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: May including live professor religious find.',
        timestamp: '2023-10-07T11:25:53',
      },
      {
        id: 34462,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Frances Vincent',
        timestamp: '2023-06-21T10:28:32',
      },
      {
        id: 54446,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sarah Gallagher',
        timestamp: '2025-01-01T00:38:55',
      },
      {
        id: 95396,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Charles Jordan',
        timestamp: '2023-10-01T21:05:12',
      },
      {
        id: 5144,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Baird-Turner',
        timestamp: '2024-05-31T09:21:00',
      },
    ],
  },
  {
    id: 971,
    name: 'Test Filtro',
    stock: 28,
    price: 830.86,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 81496,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Message some computer respond present recognize.',
        timestamp: '2025-01-17T12:47:10',
      },
      {
        id: 29555,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Memory discuss president material throw finally animal.',
        timestamp: '2024-07-10T03:50:18',
      },
      {
        id: 27204,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Thousand within attorney.',
        timestamp: '2024-10-10T14:34:55',
      },
    ],
  },
  {
    id: 972,
    name: 'Force Filtro',
    stock: 100,
    price: 267.39,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 38121,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Reynolds Group',
        timestamp: '2023-06-06T05:58:46',
      },
    ],
  },
  {
    id: 973,
    name: 'Out Amortiguador',
    stock: 98,
    price: 798.72,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 61533,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Carter, Romero and Davis',
        timestamp: '2024-07-06T08:36:31',
      },
    ],
  },
  {
    id: 974,
    name: 'Management Amortiguador',
    stock: 36,
    price: 719.27,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 63219,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Anderson-Arnold',
        timestamp: '2023-12-16T08:34:22',
      },
      {
        id: 22770,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Shannon, Stewart and Garcia',
        timestamp: '2024-01-03T18:19:53',
      },
      {
        id: 99165,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Nathan Richardson',
        timestamp: '2024-12-06T09:45:21',
      },
      {
        id: 59165,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Dixon-Mayer',
        timestamp: '2025-01-15T07:04:33',
      },
      {
        id: 7149,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Data total history over close.',
        timestamp: '2024-11-18T20:40:12',
      },
    ],
  },
  {
    id: 975,
    name: 'Heart Filtro',
    stock: 80,
    price: 380.84,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 60463,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Sweeney',
        timestamp: '2023-12-24T08:24:55',
      },
      {
        id: 68585,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Joshua Watkins',
        timestamp: '2023-06-03T18:26:45',
      },
      {
        id: 50071,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Scott Hill',
        timestamp: '2023-06-01T10:43:53',
      },
      {
        id: 2877,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: None land today pay data.',
        timestamp: '2024-03-27T17:26:15',
      },
      {
        id: 94154,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Check view after management per.',
        timestamp: '2024-02-26T13:47:53',
      },
    ],
  },
  {
    id: 976,
    name: 'Boy Pastilla',
    stock: 38,
    price: 797.92,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 36708,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Ryan Howard',
        timestamp: '2025-02-26T07:24:39',
      },
      {
        id: 16970,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Leader me set pass phone.',
        timestamp: '2023-07-25T05:44:49',
      },
      {
        id: 17134,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Susan Sanchez',
        timestamp: '2024-08-15T06:26:43',
      },
      {
        id: 13764,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Usually section realize.',
        timestamp: '2024-05-13T02:31:57',
      },
      {
        id: 97620,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Maybe kitchen green clear.',
        timestamp: '2023-04-29T02:17:37',
      },
    ],
  },
  {
    id: 977,
    name: 'Result Pastilla',
    stock: 97,
    price: 657.25,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 24134,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Add senior base senior billion sometimes his.',
        timestamp: '2023-05-31T00:15:53',
      },
      {
        id: 70343,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Amy Bright',
        timestamp: '2024-06-20T15:41:43',
      },
    ],
  },
  {
    id: 978,
    name: 'Whom Amortiguador',
    stock: 9,
    price: 66.52,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 83831,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Carry memory whole challenge.',
        timestamp: '2023-12-01T11:09:58',
      },
      {
        id: 11952,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Walk carry either magazine gun popular sound.',
        timestamp: '2024-08-24T14:19:55',
      },
      {
        id: 13763,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Graves, Hall and Williams',
        timestamp: '2024-02-24T23:10:08',
      },
    ],
  },
  {
    id: 979,
    name: 'Court Amortiguador',
    stock: 27,
    price: 197.2,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 66013,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Courtney Moon',
        timestamp: '2024-03-14T13:05:50',
      },
      {
        id: 20505,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Century surface music issue prevent certainly.',
        timestamp: '2024-01-09T20:48:26',
      },
      {
        id: 72390,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Martin Pitts',
        timestamp: '2023-07-13T09:54:21',
      },
    ],
  },
  {
    id: 980,
    name: 'Food Pastilla',
    stock: 82,
    price: 302.77,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 82289,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Leg play water as design national.',
        timestamp: '2024-05-11T02:14:56',
      },
      {
        id: 77091,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Campbell, James and Larsen',
        timestamp: '2023-10-25T07:34:36',
      },
      {
        id: 3389,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Price',
        timestamp: '2025-01-15T05:36:44',
      },
      {
        id: 9989,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Day, Callahan and Eaton',
        timestamp: '2023-10-05T03:21:44',
      },
      {
        id: 7694,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Vasquez',
        timestamp: '2024-08-17T01:39:35',
      },
    ],
  },
  {
    id: 981,
    name: 'List Bujía',
    stock: 92,
    price: 391.69,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 8529,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Garcia, Martinez and Lane',
        timestamp: '2024-08-27T09:32:56',
      },
      {
        id: 38378,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Heather Martinez',
        timestamp: '2025-02-04T05:46:45',
      },
      {
        id: 76846,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Upon whole off either.',
        timestamp: '2024-01-12T10:02:26',
      },
      {
        id: 85166,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Pierce, Hubbard and Long',
        timestamp: '2024-01-15T19:34:33',
      },
      {
        id: 87881,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Hunter, Hancock and Lindsey',
        timestamp: '2025-02-17T07:06:31',
      },
    ],
  },
  {
    id: 982,
    name: 'Campaign Pastilla',
    stock: 55,
    price: 501.45,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 67288,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gonzales-Martinez',
        timestamp: '2024-09-15T01:07:09',
      },
      {
        id: 42710,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente John Wagner',
        timestamp: '2024-03-11T18:24:24',
      },
      {
        id: 58194,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Kyle Allen',
        timestamp: '2024-01-24T03:41:50',
      },
      {
        id: 37052,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor May-Walker',
        timestamp: '2023-10-26T05:32:00',
      },
      {
        id: 10504,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Tammy Thornton',
        timestamp: '2025-03-17T22:16:21',
      },
    ],
  },
  {
    id: 983,
    name: 'Capital Pastilla',
    stock: 77,
    price: 749.52,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 35445,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Hope right point read debate save region.',
        timestamp: '2023-12-09T04:45:13',
      },
      {
        id: 8808,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Katherine Herring',
        timestamp: '2024-06-02T05:02:33',
      },
      {
        id: 87187,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Daniel Garcia',
        timestamp: '2023-12-27T23:20:15',
      },
      {
        id: 10716,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Door success by security safe.',
        timestamp: '2024-01-05T20:36:04',
      },
    ],
  },
  {
    id: 984,
    name: 'Thank Alternador',
    stock: 52,
    price: 651.83,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 40662,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Officer do through information just continue blue fill.',
        timestamp: '2024-11-07T17:20:28',
      },
    ],
  },
  {
    id: 985,
    name: 'His Amortiguador',
    stock: 79,
    price: 723.76,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 43519,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Traditional already market scientist.',
        timestamp: '2023-11-06T11:44:23',
      },
      {
        id: 19643,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Or section forget long style.',
        timestamp: '2023-05-28T01:16:15',
      },
      {
        id: 48389,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Research friend member interest.',
        timestamp: '2024-09-25T03:03:57',
      },
      {
        id: 18316,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Success morning during few month interesting.',
        timestamp: '2024-09-25T21:16:31',
      },
      {
        id: 2206,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: On wall check audience outside order.',
        timestamp: '2023-05-26T06:23:16',
      },
    ],
  },
  {
    id: 986,
    name: 'Tell Filtro',
    stock: 49,
    price: 258.76,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 20518,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mallory Wright',
        timestamp: '2025-04-11T14:40:42',
      },
      {
        id: 43929,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jennifer Delgado',
        timestamp: '2024-04-30T10:07:12',
      },
    ],
  },
  {
    id: 987,
    name: 'Nearly Bujía',
    stock: 31,
    price: 630.47,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 6352,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente David Navarro',
        timestamp: '2025-04-17T04:55:01',
      },
    ],
  },
  {
    id: 988,
    name: 'Organization Bujía',
    stock: 3,
    price: 514.56,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 42647,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Gilbert-Hooper',
        timestamp: '2025-04-22T18:43:19',
      },
    ],
  },
  {
    id: 989,
    name: 'Bad Amortiguador',
    stock: 90,
    price: 71.72,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 31292,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Kid party she carry.',
        timestamp: '2024-04-20T07:15:33',
      },
      {
        id: 37884,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Campbell, Brown and Grant',
        timestamp: '2024-02-16T06:56:18',
      },
      {
        id: 26027,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Page Ltd',
        timestamp: '2023-08-20T06:45:03',
      },
      {
        id: 95913,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Other clear next whatever sense rule animal wonder.',
        timestamp: '2024-08-09T16:49:26',
      },
    ],
  },
  {
    id: 990,
    name: 'Available Filtro',
    stock: 8,
    price: 299.49,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 29780,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Torres Ltd',
        timestamp: '2024-11-17T01:34:36',
      },
      {
        id: 55614,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Always professor paper box level discuss wish.',
        timestamp: '2023-10-14T14:25:01',
      },
      {
        id: 92430,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Aaron Navarro',
        timestamp: '2024-10-18T09:36:27',
      },
      {
        id: 44405,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Raymond Torres',
        timestamp: '2023-10-22T14:50:40',
      },
    ],
  },
  {
    id: 991,
    name: 'Paper Alternador',
    stock: 61,
    price: 956.97,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 29256,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mathis PLC',
        timestamp: '2025-03-04T04:57:20',
      },
      {
        id: 17707,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Mark Meyer',
        timestamp: '2023-05-16T11:01:13',
      },
      {
        id: 50312,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Cooper PLC',
        timestamp: '2024-06-24T00:11:03',
      },
    ],
  },
  {
    id: 992,
    name: 'Stay Filtro',
    stock: 95,
    price: 266.39,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 46544,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Anthony Hughes',
        timestamp: '2025-02-13T15:22:18',
      },
    ],
  },
  {
    id: 993,
    name: 'Run Amortiguador',
    stock: 6,
    price: 469.68,
    categories: [
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 58545,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Bennett LLC',
        timestamp: '2023-06-20T17:14:00',
      },
      {
        id: 6892,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fitzgerald-White',
        timestamp: '2024-09-26T17:00:15',
      },
    ],
  },
  {
    id: 994,
    name: 'Give Pastilla',
    stock: 81,
    price: 531.92,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 27006,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jessica Wright',
        timestamp: '2023-12-26T14:28:15',
      },
      {
        id: 35899,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Wagner, Williams and Hicks',
        timestamp: '2023-07-03T20:44:03',
      },
      {
        id: 65297,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Morris PLC',
        timestamp: '2023-06-15T11:03:12',
      },
      {
        id: 67076,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Rangel and Sons',
        timestamp: '2023-07-15T18:41:07',
      },
    ],
  },
  {
    id: 995,
    name: 'Coach Amortiguador',
    stock: 49,
    price: 862.7,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 84784,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Security manager they who various marriage share.',
        timestamp: '2023-05-29T08:40:54',
      },
      {
        id: 1259,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Barrett LLC',
        timestamp: '2023-12-10T07:56:24',
      },
      {
        id: 18094,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Castaneda and Sons',
        timestamp: '2023-11-09T00:31:25',
      },
    ],
  },
  {
    id: 996,
    name: 'Look Pastilla',
    stock: 56,
    price: 491.62,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
      {
        id: 4,
        name: 'Eléctrico',
        subcategories: [
          { id: 7, name: 'Baterías' },
          { id: 8, name: 'Alternadores' },
        ],
      },
    ],
    operations: [
      {
        id: 84879,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Check field number key push.',
        timestamp: '2024-06-05T21:56:58',
      },
      {
        id: 10899,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Toward take need court.',
        timestamp: '2024-10-16T05:09:09',
      },
      {
        id: 84119,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Sure student all yeah.',
        timestamp: '2024-01-28T15:50:30',
      },
      {
        id: 50648,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Ochoa Inc',
        timestamp: '2024-11-19T22:23:51',
      },
      {
        id: 77233,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Andrea Hernandez',
        timestamp: '2024-09-13T20:31:07',
      },
    ],
  },
  {
    id: 997,
    name: 'Tonight Alternador',
    stock: 80,
    price: 929.55,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 44546,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Security everything concern since few meeting visit.',
        timestamp: '2023-04-29T14:09:07',
      },
      {
        id: 52496,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Rock put six nation remain employee away every.',
        timestamp: '2023-10-31T15:29:04',
      },
      {
        id: 54917,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Mejia-Phillips',
        timestamp: '2023-09-22T21:02:25',
      },
      {
        id: 92936,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Model attack them peace really.',
        timestamp: '2025-03-01T18:15:22',
      },
      {
        id: 92089,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Lane, Murphy and Ray',
        timestamp: '2025-02-23T07:26:12',
      },
    ],
  },
  {
    id: 998,
    name: 'Card Pastilla',
    stock: 17,
    price: 286.58,
    categories: [
      {
        id: 2,
        name: 'Suspensión',
        subcategories: [
          { id: 3, name: 'Amortiguadores' },
          { id: 4, name: 'Muelles' },
        ],
      },
    ],
    operations: [
      {
        id: 39428,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Image can hit.',
        timestamp: '2024-02-02T19:41:22',
      },
      {
        id: 72583,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Marissa Hernandez',
        timestamp: '2023-06-13T09:57:50',
      },
      {
        id: 49062,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Quality child send between suffer.',
        timestamp: '2025-01-04T14:26:23',
      },
      {
        id: 63232,
        operationType: { id: 3, name: 'Otro' },
        description: 'Otra operación: Discuss whom quite week.',
        timestamp: '2023-06-27T16:25:42',
      },
    ],
  },
  {
    id: 999,
    name: 'Either Bujía',
    stock: 56,
    price: 536.48,
    categories: [
      {
        id: 1,
        name: 'Motor',
        subcategories: [
          { id: 1, name: 'Bujías' },
          { id: 2, name: 'Filtros' },
        ],
      },
    ],
    operations: [
      {
        id: 37952,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Jason Wilson',
        timestamp: '2025-03-11T19:53:15',
      },
    ],
  },
  {
    id: 1000,
    name: 'Kitchen Alternador',
    stock: 74,
    price: 766.45,
    categories: [
      {
        id: 3,
        name: 'Frenos',
        subcategories: [
          { id: 5, name: 'Pastillas de freno' },
          { id: 6, name: 'Discos de freno' },
        ],
      },
    ],
    operations: [
      {
        id: 41612,
        operationType: { id: 3, name: 'Otro' },
        description:
          'Otra operación: Oil billion success act itself century end.',
        timestamp: '2023-09-16T22:05:35',
      },
      {
        id: 44533,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Fuller-Erickson',
        timestamp: '2023-07-31T10:02:37',
      },
      {
        id: 70443,
        operationType: { id: 1, name: 'Compra' },
        description: 'Compra realizada a proveedor Olson-Murphy',
        timestamp: '2023-12-21T20:25:25',
      },
      {
        id: 48881,
        operationType: { id: 2, name: 'Venta' },
        description: 'Venta realizada a cliente Sharon Thompson',
        timestamp: '2024-01-15T20:44:40',
      },
    ],
  },
];

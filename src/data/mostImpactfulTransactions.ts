export const mostImpactfulTransactions = [
  {
    id: 1,
    transaction: 'App\\Controller\\MainController::homepage',
    stats: [
      {
        amount: 49.8,
        unit: '%',
        name: 'Impact',
        change: -1.15,
      },
      {
        amount: 672,
        unit: 'k',
        name: 'Requests',
        change: -2.84,
      },
      {
        amount: 153,
        unit: 'ms',
        name: 'Average Response Time',
        change: 5.17,
      },
      {
        amount: 49.8,
        unit: 'MB',
        name: 'Average Memory',
        change: -0.006,
      },
      {
        amount: 0,
        name: 'Errors',
        change: 0,
      },
    ],
  },
  {
    id: 2,
    transaction: 'App\\Controller\\MainController::showSighting',
    stats: [
      {
        amount: 42.7,
        unit: '%',
        name: 'Impact',
        change: -0.91,
      },
      {
        amount: 562,
        unit: 'k',
        name: 'Requests',
        change: -2.77,
      },
      {
        amount: 157,
        unit: 'ms',
        name: 'Average Response Time',
        change: 0.527,
      },
      {
        amount: 5.26,
        unit: 'MB',
        name: 'Average Memory',
        change: -0.019,
      },
      {
        amount: 0,
        name: 'Errors',
        change: 0,
      },
    ],
  },
];

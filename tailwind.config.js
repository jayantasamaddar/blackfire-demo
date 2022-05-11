module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        2.5: 'repeat(2.5, minmax(0, 1fr)',
        3.5: 'repeat(3.5, minmax(0, 1fr)',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-2.5': 'span 2.5' / 'span 2.5',
        'span-3.5': 'span 3.5' / 'span 3.5',
        'span-16': 'span 16 / span 16',
      },
      gridColumnStart: {
        2.5: '2.5',
        3.5: '3.5',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      gridColumnEnd: {
        2.5: '2.5',
        3.5: '3.5',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
    },
  },
  plugins: [],
};

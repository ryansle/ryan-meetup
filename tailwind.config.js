const fluidType = (minFont, maxFont) => {
  let XX = 768 / 100;
  let YY = (100 * (maxFont - minFont)) / (1920 - 768);
  let ZZ = minFont / 16;
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      brightness: {
        25: '.25',
        30: '.3',
      },
      screens: {
        '3xl': '1800px',
        '4xl': '2100px',
      },
      fontSize: {
        display: fluidType(80, 100),
        display2: fluidType(36, 48),
        display3: fluidType(24, 36),
        display4: fluidType(16, 24),
      },
      fontFamily: {
        cooper: ['Cooper', 'sans-serif']
      },
      scale: {
        '102': '1.02',
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        disco: {
          '0%': { transform: 'translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateY(-50%) rotate(360deg)' },
        },
      },
      animation: {
        disco: 'disco 1.5s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

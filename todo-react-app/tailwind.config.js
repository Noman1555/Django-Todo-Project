/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {},
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    pvBlue: {
      100: '#F2F5F8',
      200: '#CCD6E1',
      300: '#99ADC4',
      400: '#6683A6',
      500: '#335A89',
      600: '#00316B',
    },
    pvYellow: {
      50: '#FDFDEA',
      100: '#FFF9E5',
      200: '#FFF4CC',
      300: '#FFE999',
      400: '#FFDD66',
      500: '#FFD233',
      600: '#FFC700',
    },
    pvDark: {
      100: '#F2F3F5',
      200: '#CCCED7',
      300: '#999EAF',
      400: '#666D86',
      500: '#333D5E',
      600: '#000C36',
    },
  },
};
export const plugins = [require('flowbite/plugin')];
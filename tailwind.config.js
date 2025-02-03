import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '480px',
        'tablet': '768px', 
        'laptop': '1024px',
        'desktop': '1280px',
        'widescreen': '1600px', 
      },
    },
  },
  plugins: [daisyui],
};

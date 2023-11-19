/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     
    
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceslow: {
          "0%, 100%": {
            transform: "scale(0)",
            'animation-timing-function': 'cubic-bezier(.29,.28,.46,.25)'
            
            
          },
          "50%": {
            transform: "scale(0.3)",
            'animation-timing-function': 'cubic-bezier(.29,.28,.46,.25)'
          },
        },
      },
    },
  },
  plugins: [],
};

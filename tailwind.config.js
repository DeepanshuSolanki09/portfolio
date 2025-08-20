

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        myfont:['MYFONT', 'sans-serif'],
        myfont2:['MYFONT2', 'sans-serif'],
        myfont3:['MYFONT3', 'sans-serif']
      },
       keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        float2:{
          "0%, 70%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-15px)" },
        }
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        float2: "float2 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:'1rem',
        screens:{
          lg:'1124px'
        }
      }
    },
  },
  daisyui:{
    themes:['light']
  },
  plugins: [
    require('daisyui')
  ],
}
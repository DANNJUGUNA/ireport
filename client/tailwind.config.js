/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        body:['"DM Serif Display"']
      },
      colors:{
        main1: '#193F73',
        main2:'#187CC0',
        main3:'#20AAE2',
        main4:'#F5D35D',
        main5:'#EBEBD3',
        button:'#F5D35D',
        heading1:'#193F73',
        heading2:'#187CC0',
        bodyText1:'#0E1726',
        bodyText2:'#6B7280'
      }
    },
  },
  plugins: [],
};

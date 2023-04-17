/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
 
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins'],
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
        bodyText2:'#6B7280',
        primary: {
          DEFAULT: '#4361ee',
          light: '#187CC0'
        },
        secondary: {
            DEFAULT: '#F5D35D',
            light: '#EBEBD3'
        },
        success: {
            DEFAULT: '#00ab55',
            light: '#ddf5f0'
        },
        danger: {
            DEFAULT: '#e7515a',
            light: '#fff5f5'
        },
        warning: {
            DEFAULT: '#e2a03f',
            light: '#fff9ed'
        },
        info: {
            DEFAULT: '#2196f3',
            light: '#e7f7ff'
        }       

      }
    },
  },
  plugins: [],
};

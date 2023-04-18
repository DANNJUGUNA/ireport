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
        success:  '#00ab55',
        
        danger: '#e7515a',
        
        warning: '#e2a03f',
        
        info: '#2196f3',   
        
        
        dark: {
            DEFAULT: '#3b3f5c',
            light: '#eaeaec',
            'dark-light': 'rgba(59,63,92,.15)',
        },
        black: {
            DEFAULT: '#0e1726',
            light: '#e3e4eb',
            'dark-light': 'rgba(14,23,38,.15)',
        },
        white: {
            DEFAULT: '#ffffff',
            light: '#e0e6ed',
            dark: '#888ea8',
        }

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};

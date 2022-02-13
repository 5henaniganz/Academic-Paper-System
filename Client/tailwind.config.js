module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         colors: {
            'backgorund-light': '#fefbe9',
            'lime-green': '#e1eedd',
            'head-orange': '#f0a04b',
            'text-dark': '#183a1d'
         }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
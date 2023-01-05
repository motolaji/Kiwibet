/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html",
    ],
    theme: {
        screens: {
            'xsm': '320px',
            // => @media (min-width: 640px) { ... } 
            'xsml': { 'max': '320px' },
            // => @media (max-width: 640px) { ... } 
            'smx': '640px',
            // => @media (min-width: 640px) { ... } 
            'sm': { 'max': '640px' },
            // => @media (max-width: 640px) { ... } 

            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'mdm': { 'max': '768px' },
            // => @media (max-width: 640px) { ... } 
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                }
            },
            animation: {
                'spin-slow': 'spin 40s linear infinite',
                'fade-in-down': 'fade-in-down 3s ease-out'
            },

            fontFamily: {
                'clash': ['Clash Display', 'sans-serif']


            }
        },
    },
    plugins: [],
}
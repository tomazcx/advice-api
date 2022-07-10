/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/**/*.tsx'],
    theme: {
        extend: {
            fontFamily: {
                sans: 'Manrope, sans-serif'
            },
            colors: {
                cyan: {
                    200: 'hsl(193, 38%, 86%)'
                },
                green: {
                    400: 'hsl(150, 100%, 66%)'
                },
                blue: {
                    700: 'hsl(217, 19%, 38%)',
                    800: 'hsl(217, 19%, 24%)',
                    900: 'hsl(218, 23%, 16%)'
                }
            }
        },
    },
    plugins: [],
}
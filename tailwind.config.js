/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                barlow: ['Montserrat']
            },
            fontSize: {
                // 5xl: '3.052rem',
                nav: '1.5rem',
            }
        },
    },

    plugins: [],
}
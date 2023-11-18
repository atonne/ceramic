/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            dropShadow: {
                ceramic: '0 4px 60px rgba(255, 255, 255, 0.5)',
            },
            fontFamily: {
                quantico: ['Quantico', 'sans-serif'],
                number: ['Digital Numbers', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                neueMachina: ["NeueMachina", "sans-serif"],
                neueMachinaBold: ["NeueMachina-Bold", "sans-serif"],
            },
            boxShadow: {
                'white-glow': '0 0 20px 4px rgba(255, 255, 255, 0.15), 0 0 40px 8px rgba(255, 255, 255, 0.08), 0 0 60px 12px rgba(255, 255, 255, 0.04)',
                'white-glow-intense': '0 0 30px 6px rgba(255, 255, 255, 0.25), 0 0 60px 12px rgba(255, 255, 255, 0.15), 0 0 90px 18px rgba(255, 255, 255, 0.08), 0 0 120px 24px rgba(255, 255, 255, 0.04)',
                'white-title': '0 0 15px 3px rgba(255, 255, 255, 0.2), 0 0 30px 6px rgba(255, 255, 255, 0.1)',
                'inner-white': 'inset 0 0 10px 2px rgba(255, 255, 255, 0.05), inset 0 0 20px 4px rgba(255, 255, 255, 0.02)',
                'white-dot': '0 0 8px 2px rgba(255, 255, 255, 0.4), 0 0 16px 4px rgba(255, 255, 255, 0.2)',
                'text-white-glow': '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.15), 0 0 30px rgba(255, 255, 255, 0.08)',
              },
        },
    },
    plugins: [],
};
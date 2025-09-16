/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        secondary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'point': 'point 2s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'slide-in-right': 'slideInRight 0.3s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        point: {
          '0%, 100%': { transform: 'rotate(15deg) translateY(0)' },
          '50%': { transform: 'rotate(15deg) translateY(-5px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#f97316",
          "primary-content": "#ffffff", 
          secondary: "#3b82f6",
          "secondary-content": "#ffffff",
          accent: "#f59e0b",
          neutral: "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e2e8f0",
        },
        dark: {
          primary: "#f97316",
          "primary-content": "#ffffff",
          secondary: "#3b82f6", 
          "secondary-content": "#ffffff",
          accent: "#f59e0b",
          neutral: "#f1f5f9",
          "base-100": "#1e293b",
          "base-200": "#0f172a",
          "base-300": "#334155",
        },
      },
    ],
  },
}


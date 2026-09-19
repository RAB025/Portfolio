/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pop: {
          yellow: "#FFE600",
          pink: "#FF6584",
          neonPink: "#FF2A85",
          cyan: "#00F0FF",
          lime: "#70FF00",
          purple: "#9D4EDD",
          orange: "#FF7B00",
          blue: "#3A86FF",
          cream: "#FFF9F0",
          dark: "#121214",
          surface: "#FFFFFF",
        }
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px #000000',
        'brutal': '5px 5px 0px #000000',
        'brutal-lg': '8px 8px 0px #000000',
        'brutal-xl': '12px 12px 0px #000000',
        'brutal-hover': '2px 2px 0px #000000',
        'brutal-white': '5px 5px 0px #FFFFFF',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}


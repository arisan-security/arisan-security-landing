import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "dark-blue": "#11005C",
        "davys-gray": "#5C5C5C",
        "catacean-blue": "#0B003A",
        "light-grey": "#EBEBEB",
        "rich-black": "#070027",
        "light-purple": "#A590FF",
        "white-purple": "#F2EFFF",
        "native-black": "#000000",
        "light-blue": "#0288D9",
        "lapis-lazuli": "#4065A3",
        "telemagenta": "#D32578", 
        "abs-rich-black" :"#05001B",
        "pixie-powder": "#301997"
      
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        'border-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-in-out forwards',
        slideDown: 'slideDown 0.3s ease-in-out forwards',
        'border-spin': 'border-spin 4s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config

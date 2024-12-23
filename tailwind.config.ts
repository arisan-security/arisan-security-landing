import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
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
        "light-grey": "#EBEBEB",
        "absolute-blue": "#070027",
        "light-purple": "#A590FF",
        "white-purple": "#F2EFFF",
        "native-black": "#000000",
        "light-blue": "#0288D9",
        "lapis-lazuli": "#4065A3",
        "telemagenta": "#D32578", 
      
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
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-in-out forwards',
        slideDown: 'slideDown 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
export default config

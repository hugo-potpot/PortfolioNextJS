import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'sneek': '#2FBEED',
        'discord': '#5865F2',
        'discord-500': '#5865F2',
        'discord-550': '#4c59e3',
        'discord-600': '#3f4cd7',
        'discord-700': '#2d38b2',
        'discord-800': '#27319f',
        'gray-925': '#0e131f',
      },
    },
  },
  plugins: [],
}
export default config

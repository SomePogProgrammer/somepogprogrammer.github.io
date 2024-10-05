/** @type {import('tailwindcss').Config} */

const config = {
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
      boxShadow : {
        '-med-shadow': '-4.5px 7px 10px 5px #2b2b2b',
        '-hover-med-shadow': '-25px 15px 10px 5px #2b2b2b'
      }
    },
    fontFamily : {
      'source-code-pro': 'Source Code Pro'
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
export default config

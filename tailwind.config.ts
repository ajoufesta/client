import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        footer: '10.4rem',
        whole_width: '37.5rem',
        whole_height: '81.2rem',
        icon: '3.263rem',
      },
      backgroundImage: {
        'orange-gradient':
          'linear-gradient(191deg, #C8302C -19.47%, rgba(206, 83, 80, 0.90) 38.25%, rgba(255, 234, 130, 0.90) 95.98%);',
        'skyBlue-gradient':
          'radial-gradient( circle at 70% -20%, rgba(4, 127, 254, 0.6) 15%, rgba(0, 208, 236, 0.3) 15%, transparent 40%);',
      },
      boxShadow: {
        'carousel-container': '0 5px 5px 0 rgba(230, 194, 153, 0.2)',
      },

      colors: {
        blue: {
          100: '#E6EFFC',
          200: '#CCDEF9',
          300: '#366FC2',
          400: '#005BE1',
          500: '#003275',
          600: '#00285C',
          700: '#001D44',
          800: '#001234',
          900: '#2C72CD',
        },
        transparentBlue: {
          100: 'rgba(230, 239, 252, 0.5)',
          200: 'rgba(204, 222, 249, 0.7)',
          300: 'rgba(0,91,225,0.8)',
        },
        transparentWhite: {
          100: 'rgba(255, 255, 255, 0.5)',
          200: 'rgba(255, 255, 255, 0.7)',
          300: 'rgba(255, 255, 255, 0.9)',
        },
        //brown은 동박용 색상
        brown: {
          100: '#FAF8F5',
          200: '#FBF3E3',
          300: '#F1E9E8',
          400: '#E6C299',
          500: '#B67E5C',
          600: '#6D2114',
          700: '#742215',
          800: '#E3D3D0',
        },
        gray: {
          50: '#F0F0F0',
          100: '#F5F5F5',
          200: '#BFBFBF',
          300: '#444444',
          //여기부턴 동박용
          400: '#E2E2E2',
          500: '#EFEFEF',
        },
        icon: {
          1: '#047FFE',
          2: '#00D0EC',
          3: '#80D0EC',
        },
        section: {
          1: 'rgba(187,98,94,0.6)',
          2: 'rgba(224, 191, 92, 0.6)',
          3: 'rgba(104,123,184,0.6)',
          4: 'rgba(129,187,113, 0.6)',
        },
        mapPin: {
          1: 'rgb(187,98,94)',
          2: 'rgb(224, 191, 92)',
          3: 'rgb(104, 123, 184)',
          4: 'rgb(129,187,113)',
        },
      },

      keyframes: {
        bounce: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2rem)' },
          '100%': { transform: 'translateY(0)' },
        },

        popUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },

        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        vanish: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },

      animation: {
        bounce: 'bounce 0.4s ease-in-out',
        popUp: 'popUp 0.1s ease-in-out',
        loading: 'rotate 1s linear',
        vanish: 'vanish 5s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;

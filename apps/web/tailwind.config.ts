import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#FF4D6D',
          50: '#FFE5E9',
          100: '#FFCCD5',
          200: '#FF99AA',
          300: '#FF6680',
          400: '#FF4D6D',
          500: '#FF1744',
          600: '#E6003D',
          700: '#B30030',
          800: '#800023',
          900: '#4D0015',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FFF0F3',
          50: '#FFFFFF',
          100: '#FFF8FA',
          200: '#FFF0F3',
          300: '#FFE8EC',
          400: '#FFD9E0',
          500: '#FFC9D4',
          600: '#FFB3C1',
          700: '#FF9DB0',
          800: '#FF87A0',
          900: '#FF7090',
          foreground: '#4D0015',
        },
        accent: {
          DEFAULT: '#FFAEC0',
          50: '#FFF5F7',
          100: '#FFEAEF',
          200: '#FFD5DF',
          300: '#FFC0CF',
          400: '#FFAEC0',
          500: '#FF9DB0',
          600: '#FF7090',
          700: '#FF4D6D',
          800: '#FF1744',
          900: '#E6003D',
          foreground: '#4D0015',
        },
        cream: {
          DEFAULT: '#FFFBF5',
          50: '#FFFFFF',
          100: '#FFFEFB',
          200: '#FFFBF5',
          300: '#FFF8EF',
          400: '#FFF5E9',
          500: '#FFF0DC',
          600: '#FFEAC9',
          700: '#FFE4B6',
          800: '#FFDEA3',
          900: '#FFD890',
        },
        strawberry: {
          light: '#FF6B8A',
          DEFAULT: '#FF4D6D',
          dark: '#E63956',
          seeds: '#8B4513',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '1.5rem',
        '2xl': '2rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        float: 'float 3s ease-in-out infinite',
        bounce: 'bounce 2s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        spin: 'spin 1s linear infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'strawberry-gradient': 'linear-gradient(135deg, #FF4D6D 0%, #FF6B8A 100%)',
        'cream-gradient': 'linear-gradient(135deg, #FFFBF5 0%, #FFF0F3 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;

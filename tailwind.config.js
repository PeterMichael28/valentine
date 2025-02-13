/** @type {import('tailwindcss').Config} */
module.exports = {
 darkMode: ['class'],
 content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
 theme: {
  extend: {
   colors: {
    'nigerian-green': '#008751',
    'nigerian-white': '#FFFFFF',
    'nigerian-red': '#FF0000',
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    primary: {
     DEFAULT: 'hsl(var(--primary))',
     foreground: 'hsl(var(--primary-foreground))',
    },
    secondary: {
     DEFAULT: 'hsl(var(--secondary))',
     foreground: 'hsl(var(--secondary-foreground))',
    },
    destructive: {
     DEFAULT: 'hsl(var(--destructive))',
     foreground: 'hsl(var(--destructive-foreground))',
    },
    muted: {
     DEFAULT: 'hsl(var(--muted))',
     foreground: 'hsl(var(--muted-foreground))',
    },
    accent: {
     DEFAULT: 'hsl(var(--accent))',
     foreground: 'hsl(var(--accent-foreground))',
    },
    popover: {
     DEFAULT: 'hsl(var(--popover))',
     foreground: 'hsl(var(--popover-foreground))',
    },
    card: {
     DEFAULT: 'hsl(var(--card))',
     foreground: 'hsl(var(--card-foreground))',
    },
   },
   fontFamily: {
    adire: ['Poppins', 'sans-serif'], // Adire is a traditional Nigerian fabric, we're using Poppins as a modern representation
   },
   borderRadius: {
    lg: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    sm: 'calc(var(--radius) - 4px)',
   },
  },
 },
 plugins: [require('tailwindcss-animate')],
};

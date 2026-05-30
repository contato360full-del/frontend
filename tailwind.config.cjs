module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: '#0f9d58',
          light: '#7bd389',
          dark: '#0b6b3b'
        },
        ice: '#f7fbfb'
      },
      boxShadow: {
        soft: '0 6px 20px rgba(8,23,15,0.12)'
      }
    }
  },
  plugins: []
}

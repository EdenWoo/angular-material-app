const colors = require('tailwindcss/colors');
require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;

module.exports = {
    prefix: '',
    purge: {
        enabled: enablePurge,
        content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
    },
    theme: {
      colors: {
          dark: {
              'base-background': '#0f0f0f',
          },
          ...colors
      }
    },
    darkMode: 'class', // or 'media' or 'class'
}

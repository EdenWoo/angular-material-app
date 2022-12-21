const colors = require('tailwindcss/colors');
require('dotenv').config();
const enablePurge = process.env.ENABLE_PURGE || false;

module.exports = {
    prefix: '',
    purge: {
        enabled: enablePurge,
        content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
    },
    darkMode: 'class', // or 'media' or 'class'
}

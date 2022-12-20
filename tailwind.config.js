const colors = require('tailwindcss/colors');

module.exports = {
    prefix: '',
    purge: {
        content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
    },
    darkMode: 'class', // or 'media' or 'class'
}

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
            primary: '#6750A4',
            dark: {
                'base-background': '#0f0f0f',
                'hover-bg': '#303134',
                border: '#757577',
                'active-background': '#e8f0fe'
            },
            light: {
                'base-background': '#ffffff',
                'hover-bg': '#f1f3f4',
                border: '#9E9E9E',
                'active-background': '#e8f0fe'
            },
            ...colors
        }
    },
    darkMode: 'class', // or 'media' or 'class'
}

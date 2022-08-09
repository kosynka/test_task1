let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js', [require("tailwindcss")]).vue().css('resources/css/app.css', 'css');
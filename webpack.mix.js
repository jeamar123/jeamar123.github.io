let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix
  .sass('assets/sass/app.scss', 'assets/css/') // You might need to make changes on this line
  .options({
    postCss: [
      tailwindcss('tailwind.config.js'),
    ],
    processCssUrls: false,
  });
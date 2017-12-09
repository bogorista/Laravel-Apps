let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
   
mix.sass('resources/assets/backpack/bootstrap.scss', 'public/master/css')
   .sass('resources/assets/backpack/fontawesome.scss', 'public/master/css')
   .sass('resources/assets/backpack/ionicons.scss', 'public/master/css')
   .sass('resources/assets/backpack/custom.scss', 'public/master/css');
   
mix.styles('public/vendor/adminlte/dist/css/AdminLTE.css',  'public/master/css/admin.css');
mix.styles('public/vendor/adminlte/dist/css/skins/_all-skins.css',  'public/master/css/skins.css');
mix.styles('public/vendor/adminlte/plugins/pace/pace.css',  'public/master/css/pace.css');
mix.styles('public/vendor/backpack/backpack.base.css',  'public/master/css/base.css');
mix.styles('public/vendor/backpack/overlays/backpack.bold.css',  'public/master/css/bold.css');

mix.copy('public/vendor/backpack/pnotify/pnotify.custom.min.css', 'public/master/css/pnotify.css');
mix.copy('public/vendor/backpack/ladda/ladda-themeless.min.css', 'public/master/css/ladda.css');
mix.copy('public/vendor/backpack/ladda/spin.js', 'public/master/js/spin.js');
mix.copy('public/vendor/backpack/ladda/ladda.js', 'public/master/js/ladda.js');

'use strict';

/** @type {GulpConfig} */
var config = require('./gulp/config.js');
var modules = require('./gulp/modules.js');
var gulp = require('gulp');
var jade = require('gulp-jade');
var pagespeed = require('psi');

// Helper Tasks
//require('./gulp/tasks/jade.js')(gulp, config, modules);
require('./gulp/tasks/style.js')(gulp, config, modules);
require('./gulp/tasks/serve.js')(gulp, config, modules);
require('./gulp/tasks/html.js')(gulp, config, modules);
require('./gulp/tasks/move.js')(gulp, config, modules);
require('./gulp/tasks/javascript.js')(gulp, config, modules);
// Tasks

// Run PageSpeed Insights
// Update `url` below to the public URL for your site
gulp.task('pagespeed', pagespeed.bind(null, {
  // By default, we use the PageSpeed Insights
  // free (no API key) tier. You can use a Google
  // Developer API key if you have one. See
  // http://goo.gl/RkN0vE for info key: 'YOUR_API_KEY'
  url: 'https://example.com',
  strategy: 'mobile'
}));

gulp.task('jade', function() {
        gulp.src('src/index.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('src')); // tell gulp our output folder
});


// Optimize Images
//gulp.task('images', function() {
//  return gulp.src('app/images/**/*')
//    .pipe($.cache($.imagemin({
//      progressive: true,
//      interlaced: true
//    })))
//    .pipe(gulp.dest('dist/images'))
//    .pipe($.size({title: 'images'}));
//});


// run this task by typing in gulp jade in CLI

gulp.watch('src/*.jade',['jade']);

gulp.task('default', function () {
    modules.runSequence(['style', 'javascript', 'html', 'move'], 'serve');
});

gulp.task('build', function() {
    modules.runSequence(['style', 'javascript', 'html', 'move']);
});
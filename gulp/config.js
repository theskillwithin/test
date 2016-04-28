'use strict';

function GulpConfig() {
    // Source files
    this.js   = './src/assets/js/*.js';
    this.sass = './src/assets/css/main.sass';
    this.html = './src/*.html';
    this.font  = './src/assets/fonts/*';

    // Watch
    this.jsWatch   = this.js;
    this.sassWatch = './src/**/*.sass';
    this.htmlWatch = './src/**/*.html';

    // Destination
    this.cssDest   = './build/assets/css/';
    this.jsDest    = './build/assets/js/';
    this.htmlDest  = './build/';
    this.jade      = './src/'

    // Move
    this.move      = './src/assets/img/**/*';
    this.moveDest  = './build/assets/img/';
    this.moveClean = './build/assets/img/*';
    this.moveFont = './build/assets/fonts/'

    // Dependencies
    this.cssDeps = [
        'bower_components/normalize-css/normalize.css'
    ];
    this.jsDeps  = [
        'bower_components/jquery/dist/jquery.min.js',
        //'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'bower_components/smooth-scroll/dist/js/smooth-scroll.min.js',
        'bower_components/lazyloadxt/dist/jquery.lazyloadxt.js',
        'bower_components/lazyloadxt/dist/jquery.lazyloadxt.extra.js'
        //'bower_components/gsap/src/uncompressed/TimelineMax.js',
        //'bower_components/gsap/src/uncompressed/plugins/ScrollToPlugin.min.js'
    ];

    // Auto Prefix
    this.autoPrefixOptions = {
        browsers: ['IE 11', 'last 2 versions']
    };

    // Server
    this.webRoot    = './build';
    this.serveWatch = ['./build/**/*.html', './build/**/*.js', './build/**/*.css'];
    this.port       = 3000;
};

module.exports = new GulpConfig();

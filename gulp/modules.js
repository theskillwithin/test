'use strict';

function GulpModules() {
    this.runSequence = require('run-sequence');
    this.jade        = require('gulp-jade');
    this.sourcemaps  = require('gulp-sourcemaps');
    this.browserSync = require('browser-sync');
    this.clean       = require('del');
    this.watch       = require('gulp-watch');
    this.sass        = require('gulp-sass');
    this.extender    = require('gulp-html-extend');
    this.clean       = require('gulp-clean');
    this.cleanCss    = require('gulp-clean-css');
    this.concat      = require('gulp-concat');
    this.autoPrefix  = require('gulp-autoprefixer');
    this.uglify      = require('gulp-uglify');
    this.htmlmin     = require('gulp-htmlmin');
}

module.exports = new GulpModules();

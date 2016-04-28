/**
 * @param gulp
 * @param config {GulpConfig}
 * @param modules {GulpModules}
 */
module.exports = function (gulp, config, modules) {
    'use strict';

    gulp.task('html', function () {
        modules.runSequence('html:run', 'html:watch');
    });

    gulp.task('html:run', function () {
        gulp.src(config.html)
            .pipe(modules.extender({annotations: false, verbose: false}))
            .pipe(modules.htmlmin({collapseWhitespace: true}))
            .pipe(gulp.dest(config.htmlDest))
    });

    gulp.task('html:watch', function () {
        modules.watch(config.htmlWatch, function () {
            gulp.start('html:run');
        });
    });
};

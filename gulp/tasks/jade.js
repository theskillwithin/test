/**
 * @param gulp
 * @param config {GulpConfig}
 * @param modules {GulpModules}
 */
module.exports = function (gulp, config, modules) {
    'use strict';

    gulp.task('jade', function() {
        modules.runSequence('html:run', 'html:watch');
    });

 gulp.task('jade:run', function() {
        gulp.src(config.jade)
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest(config.jadeDest)); // tell gulp our output folder
    });

    gulp.task('jade:watch', function () {
        modules.watch(config.htmlWatch, function () {
            gulp.start('jade:run');
        });
    });
};

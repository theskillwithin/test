/**
 * @param gulp
 * @param config {GulpConfig}
 * @param modules {GulpModules}
 */
module.exports = function (gulp, config, modules) {
    "use strict";

    gulp.task('move', function () {
        modules.runSequence('move:clean', 'move:run', 'move:font', 'move:watch');
    });

    gulp.task('move:run', function () {
        gulp.src(config.move)
            .pipe(gulp.dest(config.moveDest));
    });
    gulp.task('move:font', function () {
        gulp.src(config.font)
            .pipe(gulp.dest(config.moveFont));
    });

    gulp.task('move:clean', function () {
        gulp.src(config.moveClean, {read: false})
            .pipe(modules.clean());
    });

    gulp.task('move:watch', function () {
        modules.watch(config.move, function () {
            modules.runSequence('move:clean', 'move:run');
        });
    });


};

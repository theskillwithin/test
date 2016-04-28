/**
 * @param gulp
 * @param config {GulpConfig}
 * @param modules
 */
module.exports = function (gulp, config, modules) {
    "use strict";

    gulp.task('fonts', function(cb) {
        modules.runSequence('fonts:clean', ['fonts:run', 'fonts:watch'], cb);
    });

    /**
     * Move font dependencies to the assets directory
     */
    gulp.task('fonts:run', function () {
        gulp.src(config.fonts)
            .pipe(gulp.dest(config.fontDest));
    });

    /**
     * Watch for new/updated fonts
     */
    gulp.task('fonts:watch', function () {
        gulp.watch(config.fonts, ['fonts:run']);
    });

    /**
     * Remove font files from assets directory
     */
    gulp.task('fonts:clean', function () {
        return modules.clean([
            config.fontDest + '*'
        ]);
    });
};

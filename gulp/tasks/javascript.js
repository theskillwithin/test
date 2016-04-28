/**
 * @param gulp
 * @param config {GulpConfig}
 * @param modules {GulpModules}
 */
module.exports = function (gulp, config, modules) {
    "use strict";

    gulp.task('javascript', function() {
        modules.runSequence(
            ['vendorJs:run', 'javascript:run'],
            ['vendorJs:watch', 'javascript:watch']
        );
    });

    gulp.task('javascript:run', function () {
        gulp.src(config.js)
            .pipe(modules.sourcemaps.init())
            .pipe(modules.uglify())
            .pipe(modules.concat('app.js'))
            .pipe(modules.sourcemaps.write('.'))
            .pipe(gulp.dest(config.jsDest));
    });

    gulp.task('javascript:watch', function () {
        modules.watch(config.jsWatch, function() {
            gulp.start('javascript:run');
        });
    });

    gulp.task('vendorJs:run', function () {
        gulp.src(config.jsDeps)
            .pipe(modules.sourcemaps.init())
            .pipe(modules.uglify())
            .pipe(modules.concat('vendor.js'))
            .pipe(modules.sourcemaps.write('.'))
            .pipe(gulp.dest(config.jsDest));
    });

    gulp.task('vendorJs:watch', function () {
        modules.watch(config.jsDeps, function() {
            gulp.start('vendorJs:run');
        });
    });

};

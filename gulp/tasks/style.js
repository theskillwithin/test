/**
 * @param gulp
 * @param config {GulpConfig}
 * @param modules {GulpModules}
 */
module.exports = function (gulp, config, modules) {
    "use strict";

    gulp.task('style', function() {
        modules.runSequence(
            ['vendorCss:run', 'sass:run'],
            ['vendorCss:watch', 'sass:watch']
        );
    });

    gulp.task('sass:run', function () {
        gulp.src(config.sass)
            .pipe(modules.sourcemaps.init())
            .pipe(modules.sass().on('error', modules.sass.logError))
            .pipe(modules.autoPrefix(config.autoPrefixOptions))
            .pipe(modules.cleanCss())
            .pipe(modules.sourcemaps.write('.'))
            .pipe(gulp.dest(config.cssDest));
    });

    gulp.task('sass:watch', function () {
        modules.watch(config.sassWatch, function() {
            gulp.start('sass:run');
        });
    });

    gulp.task('vendorCss:run', function () {
        gulp.src(config.cssDeps)
            .pipe(modules.sourcemaps.init())
            .pipe(modules.autoPrefix(config.autoPrefixOptions))
            .pipe(modules.cleanCss())
            .pipe(modules.concat('vendor.css'))
            .pipe(modules.sourcemaps.write('.'))
            .pipe(gulp.dest(config.cssDest));
    });

    gulp.task('vendorCss:watch', function () {
        modules.watch(config.cssDeps, function() {
            gulp.start('vendorCss:run');
        });
    });

};

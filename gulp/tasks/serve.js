/**
 * @param gulp
 * @param config {GulpConfig}
 * @param modules {GulpModules}
 */
module.exports = function (gulp, config, modules) {
    "use strict";

    gulp.task('serve', function() {
        modules.runSequence('serve:run', 'serve:watch');
    });

    /**
     * Start the server
     */
    gulp.task('serve:run', function () {
        if (modules.browserSync.active) {
            return;
        }

        return modules.browserSync.init({
            server: {
                baseDir: config.webRoot,
                proxy: 'localhost:' + config.port,
                port: config.port,
                notify: true,
                reloadDelay: 5000,
                ghostMode: { // these are the defaults t,f,t,t
                    clicks: true,
                    location: false,
                    forms: true,
                    scroll: true
                },
                logLevel: 'debug',
                logPrefix: 'gulp-patterns'
            }
        });
    });

    /**
     * Watch files for changes and reload
     */
    gulp.task('serve:watch', function () {
        gulp.watch(config.serveWatch)
            .on('change', modules.browserSync.reload);
    });
};

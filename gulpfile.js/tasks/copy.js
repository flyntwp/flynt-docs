const changed = require('gulp-changed')
const gulp = require('gulp')

module.exports = function (config) {
  gulp.task('copy', function () {
    return gulp.src(config.copy, { base: config.src })
        .pipe(changed(config.dest))
        .pipe(gulp.dest(config.dest))
  })
}

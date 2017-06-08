const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('default', function (cb) {
  runSequence(
    'clean',
    ['copy', 'rousseau', 'sass', 'uglify', 'setBase:development', 'buildSearchIndex'],
    'hugo',
    'watch',
    cb
  );
});

const rousseau = require('rousseau')
const gulp = require('gulp')

module.exports = function (config) {
  gulp.task('rousseau', function () {
    return rousseau('so this text will be checked for grammar errors. But not spelling errors: Colour. Practise. Infortunate.', function (err, results) {
      if (err) {
        console.log(err)
      } else {
        console.log(results)
      }
    })
  });
}

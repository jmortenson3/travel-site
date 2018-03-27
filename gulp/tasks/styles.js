var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');
var hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  // "return" because gulp.src is asynchronous
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(err) {
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/tmp/styles'));
});
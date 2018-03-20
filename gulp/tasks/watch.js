var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  })
});

// array of dependencies that must first complete 
// before cssInject runs
//
// cssInject injects css without refreshing the browser
gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/tmp/styles/styles.css')
    .pipe(browserSync.stream());
});
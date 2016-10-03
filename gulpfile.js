'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');


gulp.task('default', function() {
  gulp.run('styles', 'scripts');

  gulp.watch('./sass/**/*.scss', function(event) {
        gulp.run('styles');
  })

  gulp.watch('./js/source/script.js', function(event) {
        gulp.run('scripts');
  })
});

gulp.task('styles', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  return gulp.src(['./js/source/jquery-3.1.0.min.js', './js/source/jquery.jcarousel.min.js', './js/source/lodash.min.js', './js/source/script.js'])
    .pipe(concat('script.main.min.js'))
    .pipe(gulp.dest('./js/'));
});


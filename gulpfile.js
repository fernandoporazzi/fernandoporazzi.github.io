'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('css', () => {
  gulp.src('app/public/dev/stylus/main.styl')
    .pipe(stylus({
      'compress': true,
      'include css': true
    }))
    .pipe(gulp.dest('app/public/dist/css/'));
});

gulp.task('build', ['css']);
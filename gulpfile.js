'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');

gulp.task('images', () => {
  gulp.src('app/public/dev/img/**/*.*')
    .pipe(gulp.dest('app/public/dist/img/'))
});

gulp.task('fonts', () => {
  gulp.src('app/public/dev/font/**/*.*')
    .pipe(gulp.dest('app/public/dist/font/'))
});

gulp.task('css', () => {
  gulp.src('app/public/dev/stylus/main.styl')
    .pipe(stylus({
      'compress': true,
      'include css': true
    }))
    .pipe(gulp.dest('app/public/dist/css/'));
});

gulp.task('dev', ['build'], () => {
  gulp.watch('app/public/dev/stylus/**/*.styl', ['css']);
});

gulp.task('build', ['css', 'images', 'fonts']);

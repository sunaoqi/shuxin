const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');

gulp.task('sever', ['sass'], function () {
    connect.server({
        root: './',
        port: 8888,
        livereload: true
    });
    gulp.watch(['./index.html', './css/index.css'], ['html']);
    gulp.watch(['./scss/*scss'], ['sass']);
});

gulp.task('html', function () {
    gulp.src('./index.html').pipe(connect.reload());
});

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('lib'));
});
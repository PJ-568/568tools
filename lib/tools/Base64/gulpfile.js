// Module dependencies
var gulp = require('gulp');

var coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass');

var paths = {
    scripts: 'src/coffee/*.coffee',
    sass: 'src/sass/*.sass'
};

gulp.task('default', ['scripts', 'sass']);

gulp.task('scripts', function() {
    gulp.src(paths.scripts)
        .pipe(coffee({bare: true}))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
    .pipe(gulp.dest('dest/js'));
});

gulp.task('sass', function() {
    sass(paths.sass)
      .on('error', sass.logError)
      .pipe(gulp.dest('dest/css'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.sass, ['sass']);
});

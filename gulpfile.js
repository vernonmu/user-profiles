const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

var path = {
  scripts: ['public/app.js', 'public/**/*.js', '!public/build.js'],
  css: ['public/css/*.css']
}

gulp.task('default', ['build', 'minify'], function() {
  console.log('go gulp, go!');
});

gulp.task('build', function() {
  gulp.src(path.scripts)
    .pipe(concat('build.js'))
    .pipe(gulp.dest('public'))
});

gulp.task('minify', function() {
  gulp.src(path.css)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('public'))
});

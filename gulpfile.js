const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

var path = {
  scripts: ['public/app.js', 'public/**/*.js', '!public/build.js'],
  css: ['public/css/*.css']
}

gulp.task('default', ['del', 'build', 'minify', 'watch'], function() {
  console.log('go gulp, go!');
});

gulp.task('del', function() {
  del(['public/build.js', 'public/build.css'])
  console.log("deleting builds and css!");
})
gulp.task('build', function() {
  gulp.src(path.scripts)
    .pipe(concat('build.js'))
    .pipe(gulp.dest('public'))
});

gulp.task('minify', function() {
  gulp.src(path.css)
    .pipe(concat('build.css'))
    .pipe(gulp.dest('public'))
});

gulp.task('watch', function() {
  gulp.watch(path.scripts, path.css, ['build'])
})

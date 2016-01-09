var gulp = require('gulp');
var bower = require('gulp-bower');
var server = require('gulp-express');
var es6transpiler = require('gulp-es6-transpiler');

gulp.task('default', ['static', 'bower', 'server', 'watch']);

gulp.task('js', function() {
  return gulp.src("js/**/*")
    .pipe(es6transpiler())
    .pipe(gulp.dest('dist/js'));

});

gulp.task('static', function() {
  return gulp.src(['public/**/*'], { base: './public'})
      .pipe(gulp.dest('dist'));
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('dist/bower_components'));
});

// Running server
gulp.task('server', ['bower', 'static', 'js'], function() {
  server.run({file: 'app.js'});
});

// Watching for file changes
gulp.task('watch', ['server'], function() {
  gulp.watch(['public/**/*.*', "js/**/*.*", 'bower.json'], ['static', 'bower', 'js']);
  gulp.watch(['dest/**/*.*'], server.notify);
});

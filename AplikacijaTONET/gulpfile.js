var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');
var validator  = require('gulp-html');
var htmlmin = require('gulp-htmlmin');
var connect = require('gulp-connect');
var webserver = require('gulp-webserver');
var html = require('gulp-html');
var open = require('gulp-open');
const imagemin = require('gulp-imagemin');
var cssmin = require('gulp-cssmin');

gulp.task('connect', function() {
  return connect.server({
    root: 'src',
    livereload: true,
    port: 7770,
    fallback: './src/index.html'
  });
});

gulp.task('minify', function() {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(connect.reload())
    .pipe(gulp.dest('JsFile'));
});

gulp.task('slike',function() {
    gulp.src('src/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('JsFile'))
});

gulp.task('js', function() {
     
     gulp.src('./src/*.js')
     //.pipe(concat('all.min.js'))
     .pipe(uglify())
     .pipe(connect.reload())
     .pipe(gulp.dest('JsFile'));

});

gulp.task('cssMinfy', function(){
  return gulp.src('./src/cssfile.css')
    .pipe(cssmin())
    .pipe(connect.reload())
    .pipe(gulp.dest('JsFile'));
});

gulp.task('watch',function(){

    gulp.watch('./src/index.html',['minify']);
    gulp.watch('./src/*.js',['js']);
    gulp.watch('./src/*.jpg',['slike']);
    gulp.watch('./src/*.css',['cssMinfy']);
   // gulp.watch();
});

gulp.task('default', ['connect','minify','js','cssMinfy','slike','watch']);


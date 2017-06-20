(function () {
  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var cleanCSS = require('gulp-clean-css');
  var order = require('gulp-order');
  var embed = require('gulp-angular-embed-templates');
  var server = require('gulp-server-livereload');
  var runSeq = require('run-sequence');
  var watch = require('gulp-watch');
  var batch = require('gulp-batch');

  /**
   * Gulp task run a sequence of tasks minify files
   *
   * @usage
   *   $ gulp build --gulpfile gulpfile.js
   */
  gulp.task('build', function () {
    runSeq('minify-js', 'minify-css', 'web-server', 'watch');
  });

  /**
   * Gulp task to minify js and embed html templates files
   *
   * @usage
   *   $ gulp minify-js --gulpfile gulpfile.js
   */
  gulp.task('minify-js', function () {
    gulp.src([
      'app/**/*.js'
    ])
      .pipe(embed())
      .pipe(concat('tx.test.min.js'))
      .pipe(gulp.dest('dist/'));
  });

  gulp.task('watch', function () {
    gulp.watch(['app/**/*.js', '!./app/assets/dist'], ['minify-js']);
    gulp.watch('app/**/*.html', ['minify-js']);
    gulp.watch(['app/**/*.css', '!./app/assets/dist'], ['minify-css']);
  });

  /**
   * Gulp task to minify node_modules files
   *
   * @usage
   *   $ gulp vendor-js --gulpfile gulpfile.js
   */
  gulp.task('vendor-js', function () {
   gulp.src([
   './node_modules/angular/angular.min.js',
   './node_modules/angular-route/angular-route.min.js',
   './node_modules/jquery/dist/jquery.min.js',
   './node_modules/bootstrap/dist/js/bootstrap.min.js'
   ])
   .pipe(order([
   "**/*/angular.min.js",
   "**/*/angular-route.min.js",
   "**/*/jquery.min.js",
   "**/*/bootstrap.min.js"
   ], { base: './' }))
   .pipe(concat('tx.test.vendor.min.js'))
   .pipe(gulp.dest('dist/'));
   });

  /**
   * Gulp task to minify css files
   *
   * @usage
   *   $ gulp minify-css --gulpfile gulpfile.js
   */
  gulp.task('minify-css', function () {
    return gulp.src([
      'app/**/*.css'
    ])
      .pipe(concat('tx.test.min.css'))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/'));
  });

  /**
   * Gulp task to start the web-server
   *
   * @usage
   *   $ gulp web-server --gulpfile gulpfile.js
   */
  gulp.task('web-server', function () {
    gulp.src('.')
      .pipe(server({
        livereload: false,
        directoryListing: false,
        open: true,
        log: 'debug',
        clientConsole: false,
        port: 9191,
        host: 'localhost'
      }));
  });
})();
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

function compileScss() {
  return gulp
    .src('./src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
}

function watchFiles() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch(
    './src/scss/**/*.scss',
    compileScss
  );

  gulp.watch('./*.html').on(
    'change',
    browserSync.reload
  );
}

exports.default =
  gulp.series(
    compileScss,
    watchFiles
  );
var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');

gulp.task('sass', function () {
  return gulp.src('./public/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./public/css/**/*.scss', ['sass']);
});

let config = {
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [
    {
      test: /\.js/,
      loader: 'imports?define=>false'
    },
    {
      test:    /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader:  'babel-loader',
      query:   {
        presets: ['es2015', 'react'],
      },
    }],
  },
  resolve: {
    alias: {
      'scrollmagic.animation': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min'
    }
  }
};

gulp.task('webpack', function() {
  return gulp.src('./public/js/app.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('./public/js/dist/'));
});

gulp.task('webpack:watch', function() {
  config.watch = true;

  return gulp.src('./public/js/app.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('./public/js/dist/'));
});

gulp.task('default', ['sass', 'webpack']);

gulp.task('watch', ['sass:watch', 'webpack:watch']);

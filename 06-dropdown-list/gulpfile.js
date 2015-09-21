var gulp = require('gulp'); //skeleton - responsible for build process
var gutil = require('gulp-util'); //console logging build process
var source = require('vinyl-source-stream'); //moving text files around during build process
var browserify = require('browserify'); //figures out which parts of code require others parts
var watchify = require('watchify'); //reruns gulp file build when code changes
var reactify = require('reactify'); //converts jsx into js (works in conj with browserify)

//bundler sets out what the build function is to do
gulp.task('default', function(){
  var bundler = watchify(browserify({
    entries: ['./src/app.jsx'],
    transform: [reactify], // compile using reactify module
    extensions: ['.jsx'], // compile these files (jsx)
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  }));

  //bundler tasks are defined above but must be run which happens below
  function build(file) {
    if (file) gutil.log('Recompiling ' + file);
    return bundler
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error')) //if error during build process console log error
    .pipe(source('main.js')) //after bundle has run, put all into file main.js
    .pipe(gulp.dest('./')); //place main.js in this directory
  };
  build() //run build which is defined above
  bundler.on('update', build) // when files are changed, build again
});

//gulp to build
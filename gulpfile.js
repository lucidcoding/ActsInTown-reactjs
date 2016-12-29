var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
    return browserify('./source/app.jsx')
        .transform(babelify)
        .bundle()
        .pipe(source('actsintown-reactjs.js'))
        .pipe(gulp.dest('./build/'));
});

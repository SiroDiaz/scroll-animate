var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify');
    
gulp.task('jsmin', function() {
    return gulp.src('src/jquery.scroll-animate.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
    gulp.watch('src/jquery.scroll-animate.js', ['jsmin']);
});

gulp.task('default', ['watch']);
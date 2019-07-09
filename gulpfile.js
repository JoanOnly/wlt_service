var gulp = require('gulp'); //start gulp
var sass = require('gulp-sass'); //gulp sass compile plugin
var sourcemaps = require('gulp-sourcemaps'); // gulp source maps inline plugin
var browserSync = require('browser-sync').create(); // browser config
var rev = require('gulp-rev-append');

gulp.task('sass', function () {
    return gulp.src('src/sass/output/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('revHash', function() {
    gulp.src('dist/*.html')
        .pipe(rev())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch.sass', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('dist/css/*.css', ['revHash']);
    gulp.watch('dist/js/*.js', ['revHash']);
    browserSync.init({
        files: ["dist/css/*.css", "dist/js/*.js", "dist/*.html"],
        server: {
            baseDir: "dist",
            index: "index.html"
        },
        port: 2333
    });
});

gulp.task('default',['sass', 'watch.sass']);



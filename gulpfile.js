var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concatCSS = require('gulp-concat-css');

gulp.task('uilib-sass', function(){
    return gulp.src([
        'components/style.scss'
    ])
    .pipe(sass())
    .pipe(concatCSS("dw_ftadmin_uilib.css"))
    .pipe(gulp.dest('build/uilib'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('shell-sass', function(){
    return gulp.src([
        'build/shell/shell.scss'
    ])
    .pipe(sass())
    .pipe(gulp.dest('build/shell'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('browserSync', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('watch', ['browserSync', 'uilib-sass', 'shell-sass'], function(){
    gulp.watch([
        'build/shell/shell.scss',
        'components/style.scss',
        'components/**/*.scss'
    ], [
        'uilib-sass',
        'shell-sass'
    ]);

    gulp.watch([
        './*.html',
        'build/*.html',
        'components/*/*.html',
        'components/*/*.js'
    ], browserSync.reload);
});

gulp.task('default', ['watch']);
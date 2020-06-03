const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const spritesmith = require('gulp.spritesmith');
const rimraf = require('rimraf');





/*  --------------  Server  --------------  */
gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 8000,
            baseDir: "build"
        }
    });


    gulp.watch('build/**/*').on('change', browserSync.reload);
});


/*  --------------  Pug Compile  --------------  */
gulp.task('templates:compile', function buildHTML() {
    return gulp.src('templates/index.pug')
        .pipe(pug({
             pretty: true
        }))

        .pipe(gulp.dest('build'))
});


/*  --------------  Styles Compile  --------------  */
gulp.task('styles:compile', function () {
    return gulp.src('_dev/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

/*  --------------  Sprite  --------------  */
gulp.task('sprite', function(cb) {
    const spriteData = gulp.src('_dev/images/icons/*.png').pipe(spritesmith({
        imgName: 'sprite.png',
        imgPath: '../images/sprite.png',
        cssName: 'sprite.css'
    }));

    spriteData.img.pipe(gulp.dest('build/img/'));
    spriteData.css.pipe(gulp.dest('_dev/styles/global'));
    cb();
});


/*  --------------  Delete  --------------  */
gulp.task('clean', function del (cb) {
    return rimraf('build', cb)
});



/*  --------------  Copy Fonts  --------------  */
gulp.task('copy:fonts', function() {
    return gulp.src('./_dev/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts'));
});


/*  --------------  Copy Images  --------------  */
gulp.task('copy:images', function() {
    return gulp.src('./_dev/img/**/*.*')
        .pipe(gulp.dest('build/img'));
});
/*  --------------  Copy   --------------  */
gulp.task('copy', gulp.parallel('copy:fonts', 'copy:images'));


/*  --------------  Wathers  --------------  */
gulp.task('watch', function () {
    gulp.watch('_dev/js/*.js', gulp.series('copy:script'));
    gulp.watch('templates/**/*.pug', gulp.series('templates:compile'));
    gulp.watch('_dev/styles/**/*.scss', gulp.series('styles:compile'));
});



gulp.task('copy:script', function() {
    return gulp.src('./_dev/js/**/*.*')
        .pipe(gulp.dest('build/js'));
});

/*  --------------  Default  --------------  */
gulp.task('default', gulp.series(

    gulp.parallel('templates:compile','styles:compile','copy:script' ,'copy'),
    gulp.parallel('watch', 'server')
)
);
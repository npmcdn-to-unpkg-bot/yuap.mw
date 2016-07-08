var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
// var riot = require('gulp-riot');
// var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var base64 = require('gulp-base64');
var px2vw = require('gulp-px2vw');
var template = require('gulp-template-compile');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

browserSync.init({
	open: false,
	notify: false,
	// proxy: "http://localhost:8080/"
	server: {
		baseDir: "./"
	}
});

gulp.task('css', function() {
	gulp.src('public/css/style.scss')
		.pipe(sass())
		.pipe(csso())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(base64({
            baseDir: './',
            extensions: ['svg', 'png', 'jpg'],
            maxImageSize: 8*1024, // bytes
            debug: false
        }))
		.pipe(px2vw({
			width: 360,
			replace: true
		}))
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.stream());
});

gulp.task('templates', function() {
	gulp.src('public/templates/*.html')
		.pipe(template({
			namespace: "yellApp.templates",
			name: function (file) {
				return file.relative.replace(/\.html/, "");
			}
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('public/js'));
});

gulp.task('watch', function() {
	gulp.watch(['public/css/style.scss',
				'public/css/**/*.scss'], ['css']);

	gulp.watch('public/templates/*.html', ['templates']);

    gulp.watch([
		// "index.html",
		// "public/js/*.js",
		"public/js/**/*.js",
		"sections.html"]).on("change", reload);
});

gulp.task('default', ['css', 'templates', 'watch']);

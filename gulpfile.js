'use strict';

const gulp         = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssbeautify  = require('gulp-cssbeautify');
const cached       = require('gulp-cached');
const csscomb      = require('gulp-csscomb');
const progeny      = require('gulp-progeny');
const plumber      = require('gulp-plumber');
const sass         = require('gulp-sass');
const size         = require('gulp-size');

const AUTOPREFIXER_BROWSERS = [
	'ios >= 6',
	'android >= 4.0'
];

gulp.task('styles', () => {
	return gulp.src('./src/css/*.scss')
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err.messageFormatted);
				this.emit('end');
			}
		}))
		.pipe(cached('styles'))
		.pipe(progeny())
		.pipe(sass())
		.pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
		.pipe(cssbeautify())
		.pipe(csscomb())
		.pipe(size({title: 'styles'}))
		.pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
	gulp.watch('./src/css/*.scss', ['styles']);
})

gulp.task('default', ['watch']);

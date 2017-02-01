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
const argv         = require('yargs').argv;
const config       = require('./config');

const browsers = config.option.autoprefixer.browsers;
let AUTOPREFIXER_BROWSERS;

switch (argv.mode) {
	case 'pc':
		AUTOPREFIXER_BROWSERS = browsers.pc;
		break;

	case 'sp':
		AUTOPREFIXER_BROWSERS = browsers.sp;
		break;
	
	default:
		AUTOPREFIXER_BROWSERS = browsers.pc.concat(browsers.sp);
		break;
}

gulp.task('styles', () => {
	return gulp.src(config.dir.input)
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
		.pipe(gulp.dest(config.dir.output));
});

gulp.task('watch', () => {
	gulp.watch(config.dir.input, ['styles']);
})

gulp.task('default', ['watch']);

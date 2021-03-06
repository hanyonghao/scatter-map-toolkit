const gulp = require('gulp');
const pump = require('pump'); // 处理错误
const fs = require('fs');     // 文件操作

const srcPath = './../src/customize';
const destPath = './../customize';

module.exports = () => {
	return pump([
		gulp.src([
			`${ srcPath }/**/*`,
			`!${ srcPath }/**/*.js`,
			`!${ srcPath }/**/*.scss`
		]),
		gulp.dest('./../customize')
	], () => {
		if (fs.existsSync(`${ destPath }/module`)) {
			fs.rmdirSync(`${ destPath }/module`);
		}
	});
};
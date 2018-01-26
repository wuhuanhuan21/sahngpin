
const gulp = require("gulp");
const connect = require("gulp-connect"); //加载gulp-connect插件
const babel = require("gulp-babel"); //加载babel插件  解析ES6语法
const sass = require("gulp-sass-china"); // 加载sass插件


gulp.task("sayhello", ()=>{
	console.log("hello gulp");
})

gulp.task("server", ()=>{
	connect.server({
		root: "dist",//以dist文件为服务器的根目录
		port: 82,	//端口号
		livereload: true //开启自动刷新	
	})
})

gulp.task("html", ()=>{
	return gulp
				.src(["html/**/*.html"])
				.pipe(gulp.dest("dist/"))
				.pipe(connect.reload())
})
gulp.task("script", ()=>{
	return gulp
				.src(["scripts/**/*.js"])
				.pipe(gulp.dest("dist/src"))
})

gulp.task("ES6", ()=>{
	return gulp
				.src(["es6/*.js"])
				.pipe(babel({
					presets: ['env'] 
				}))
				.pipe(gulp.dest("dist/es6"))
})

gulp.task("sass", ()=> {
	return gulp
				.src("css/*.scss")
				.pipe(sass().on("error", sass.logError))
				.pipe(gulp.dest("dist/style/"))

}) 

//watch 自动检测 监听 Ctrl + s 必须触发Ctrl + s时才会有效执行
gulp.task("watch", ()=>{
	gulp.watch(["html/**/*.html"], ["html"]);
	gulp.watch(["scripts/**/*.js"], ["script"]);
	gulp.watch(["css/**/*.scss"], ["sass"]);
})

gulp.task("default", ["watch", "server"]);




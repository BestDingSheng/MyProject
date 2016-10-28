'use strict';
var gulp = require('gulp'),
    $ = require("gulp-load-plugins")(), 
    imagemin    = require('gulp-imagemin'),//压缩图片
    pngquant    = require("imagemin-pngquant"),//pngquant来压缩png图片
    tinypng     = require("gulp-tinypng"),//tinypng 我可爱的小熊猫
    tinypngCom  = require("gulp-tinypng-compress"),
    notify      = require("gulp-notify"),//提示信息
    livereload  = require('gulp-livereload'),//当代码变化时，执行实现
    browserSync = require('browser-sync').create();//浏览器同步刷新
    
// 路径初始化

var watchSrc   = ["app/**/*.*"],//服务要监听的路径
    seaverSrc  = "app",//服务开始的路径
    imgMinSrc  = 'app/images/';

//替换html路径
gulp.task('usemin', function() {
  return gulp.src('./app/index.html')
    .pipe($.usemin({
      js: [$.uglify(), $.rev()],
      css: [$.minifyCss(), $.rev()]
    }))
    .pipe(gulp.dest('dist/'))
});

//压缩图片
gulp.task('imgMin', function() {
return gulp.src(imgMinSrc+'*.+(jpeg|jpg|png|gif|svg)')
    .pipe(imagemin({
        progressive: true,
        use: [pngquant()] //使用pngquant来压缩png图片
    }))
    .pipe(gulp.dest("./dist/images"))//输出的路径
    .pipe(notify({ message: '图片压缩成功！' }));
});


//tinypng压缩图片
gulp.task('tinypng', function(){
    return gulp.src(imgMinSrc+'/*.+(jpeg|jpg|png|gif|svg)') // 源地址
    .pipe(tinypng("tinypng"))
    .pipe(gulp.dest("./dist/images")) // 输出路径
    .pipe(notify({ message: 'tinypng图片压缩成功！' }));
});

//自动刷新
gulp.task('watch', function() {
  livereload.listen(); //要在这里调用listen()方法
//gulp.watch(lessSrc+'*.less', ['less']);
});

//自动刷新浏览器
// Static server
gulp.task('serve', function() {
    var files = watchSrc;
    browserSync.init(files,{
        server: {
            baseDir: seaverSrc//启动服务的初始路径
        }
    });
});
//清除文件
gulp.task('clean', function() {
  gulp.src('./dist/*')
    .pipe($.clean());
});

// 默认任务
gulp.task('default',['serve','usemin','imgMin',]);

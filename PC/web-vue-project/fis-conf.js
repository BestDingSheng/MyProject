// 设置规范
fis.hook('commonjs');

// 启用相对路径插件
fis.hook('relative');

// 让所有文件，都使用相对路径。
fis.match('**', {
  relative: true
});

// 编译less
fis.match('components/**.less', {
    parser: fis.plugin('less-2.x'),
    rExt: '.css'
});


// 模块化js
fis.match('components/**.js', {
    isMod: true,
    release: '$0'
});
fis.match('lib/**.js', {
    isMod: true,
    release: '$0',
    useCache: true
});

// 发送index.html到服务器根目录
fis.match('components/page/(index.html)', {
    release: '$1'
});

// 发送favicon.ico到服务器根目录
fis.match('components/page/(favicon.ico)', {
    release: '$1'
});

//doc目录不发送
fis.match('doc', {
    release: false
});
// node_modules不发送
fis.match('node_modules',{
    release: false
});
// 文件路径简写
fis.match(/^\/components\/widget\/(.*)$/i, {
    id: '$1'
});
fis.match(/^\/components\/page\/children\/(.*)$/i, {
    id: '$1'
});
fis.match(/^\/lib\/(.*)$/i, {
    id: '$1'
});

// 发送图片到static/img/**/**.{png,jpg,gif}
fis.match('components/widget/(**)/img/(**.{jpg,png,gif})', {
    release: 'static/img/widget/$1/$2'
});

fis.match('components/page/(**)/img/(**.{png,jpg,gif})', {
    release: 'static/img/page/$1/$2'
});

fis.match('components/page/children/(**)/(**)/(**.{png,jpg,gif})', {
    release: 'static/img/page/children/$1/$2/$3'
});

// loader
fis.match('::packager', {
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        useInlineMap: true
    }),
    // 改变less打包顺序，把base放在第一位；
    packager: fis.plugin('map', {
        'static/css/all.css': [
            'main/base.less',
            '!main/var.less',
            'components/**.{less,css}'
        ]
    })
});

fis.match('components/**.js', {
        // 压缩js
        optimizer: 'uglify-js'
    })
    .match('static/**.js', {
        // 压缩js
        optimizer: 'uglify-js'
    })
    // 压缩css
    .match('**.{css,less}', {
        optimizer: 'clean-css'
    })
    // 压缩png图片
    .match('components/**.png', {
        optimizer: 'png-compressor'
    })
    // 加css3前缀
    .match('*.{css,less,scss}', {
        preprocessor: fis.plugin('autoprefixer', {
            "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
            "cascade": true
        })
    });

// 开发环境，不需要压缩JS,CSS,PNG
fis.media('debug').match('*.{js,css,less,png}',{
    optimizer : null
});
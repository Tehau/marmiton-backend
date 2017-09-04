var fs = require('fs');
var path = require('path');
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    filter = require('gulp-filter')
    babel = require('gulp-babel');
var bump = require('gulp-bump');
var runSequence = require('run-sequence');
var tar = require('gulp-tar');
// var gzip = require('gulp-gzip');
var del = require('del');
var config = require('./config.json');

var directories = {
    src: {
        main: 'src/',
        allSources: 'src/**'
    },
    dist: {
        main: 'dist/',
        archive: 'dist/archive',
        allFiles: 'dist/**'
    }
};
var sources = [directories.src.allSources, 'package.json'];

gulp.task('default', [
    'develop'
]);

gulp.task('bump', ['bump:patch']);

gulp.task('bump:major', function(){
    return gulp.src(['package.json'])
        .pipe(bump({type:'major'}))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:minor', function(){
    return gulp.src(['package.json'])
        .pipe(bump({type:'minor'}))
        .pipe(gulp.dest('./'));
});

gulp.task('bump:patch', function(){
    return gulp.src(['package.json'])
        .pipe(bump({type:'patch'}))
        .pipe(gulp.dest('./'));
});

gulp.task('serve',function (cb) {
    runSequence('build:dev','watch', cb);
});

gulp.task('watch',function (cb) {
    var started = false;
    nodemon({
        script: 'dist/index.js',
        ext: 'js json',
        watch: [
            'src/**/*.js',
            'node_modules/'
        ],
        tasks: ['build:dev'],
        stdout: false
    })
        .once('start', function(){
                  if (!started) {
                      cb();
                      started = true;
                  }
              })
        .on('readable', function () {
                this.stdout.pipe(process.stdout);
                this.stderr.pipe(process.stderr);
            });
});

gulp.task('dist:dev', function(cb){
    runSequence('clean:dist', 'build:dev', 'targz', cb);
});

gulp.task('dist:prod', function(cb){
    runSequence('clean:dist', 'build:prod', 'targz', cb);
});

gulp.task('targz', function(){
    return gulp.src(sources)
        .pipe(tar('archive.tar'))
        .pipe(gzip())
        .pipe(gulp.dest(directories.dist.archive));
});

gulp.task('clean:dist', function(){
    return del(directories.dist.allFiles);
});

gulp.task('build:dev', ['config:dev'], function(cb){
    var jsFilter = filter('src/**/*.js',{restore: true});
    gulp.src(directories.src.allSources)
    .pipe(jsFilter)
    .pipe(babel({
        presets: ['es2015','stage-2'],
        plugins: ['transform-async-to-generator','transform-regenerator',['transform-runtime',{
            "polyfill": false,
            "regenerator": true
        }]]
    }))
    .pipe(jsFilter.restore)
    .pipe(gulp.dest(directories.dist.main));
    cb();
});

gulp.task('build:prod', ['config:prod']);


gulp.task('config:dev', function(cb){
    var pathToWrite = path.join('src', 'config.json');
    fs.exists(pathToWrite, function(isExists){
        function go(){
            fs.writeFile(pathToWrite, JSON.stringify(config['dev']), cb);
        }

        if (isExists) {
            fs.unlink(pathToWrite, function (err) {
                if (err){
                    cb(err);
                    return;
                }
                go();
            });
        }
        else {
            go();
        }
    });
});

gulp.task('config:prod', function(cb){
    var pathToWrite = path.join('src', 'config.json');
    fs.exists(pathToWrite, function(isExists){
        function go(){
            fs.writeFile(pathToWrite, JSON.stringify(config['prod']), cb);
        }

        if (isExists) {
            fs.unlink(pathToWrite, function () {
                if (err){
                    cb(err);
                    return;
                }
                go();
            });
        }
        else {
            go();
        }
    });
});

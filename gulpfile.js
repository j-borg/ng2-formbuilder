var gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    ignore = require('gulp-ignore'),
    plugins = require('gulp-load-plugins')({
        lazy: true
    }),
    runSequence = require('run-sequence');

var paths = {
    dist: 'dist'
};

gulp.task('clean', function(done) {
    return gulp.src(['src/**/*.js', 'src/**/*.js.map'], { read: false })
    .pipe(ignore('node_modules/**'))
    .pipe(rimraf());
});

gulp.task('dev-server', plugins.shell.task('webpack-dev-server --inline --colors --progress --port 3000'));

gulp.task('build', plugins.shell.task([
    'rimraf dist',
    'webpack --config config/webpack.prod.js --progress --colors --profile --bail'
]));

gulp.task('serve', function(done) {
    runSequence('clean', 'dev-server', done);
});

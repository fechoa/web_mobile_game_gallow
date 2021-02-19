// Variables
const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemap = require('gulp-sourcemaps');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const newer = require('gulp-newer');
const del = require('del');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin')
const browserSync = require('browser-sync').create();



// Server
function sync() {
    browserSync.init({
        server: { baseDir: './app' },
        notify: false,
        online: true
    })
}


// Html 
function html() {
    return src('app/**.html')
        .pipe(fileinclude())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('./dist'))
}

// Styles
function styles() {
    return src('app/scss/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write('.'))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

// Scripts
function scripts() {
    return src('app/js/main.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js/'))
        .pipe(dest('./app/js/'))
        .pipe(browserSync.stream())
}

// Images
function images() {
    return gulp.src('app/img/**/*.{jpg,png,svg}')
        .pipe(newer('dist/img/'))
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3})
        ]))
        .pipe(dest('./dist/img/'))
}

// Clean IMG
function cleanimg() {
    return del('./dist/img', { force: true })
}

// Clean Dist
function cleandist() {
    return del('./dist', { force: true })
}

// Watcher
function startwatch() {
    watch('app/scss/**/*', styles),
    watch('app/js/main.js', scripts),
    watch('app/img/**/*', images),
    watch('app/*.html').on('change', browserSync.reload)
}




// Build
function buildcopy() {
    return src([
        'app/css/**',
        'app/fonts/**'
    ], { base: './app' })
    .pipe(dest('./dist'))
}


// Exports
exports.sync = sync;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.startwatch = startwatch;
exports.buildcopy = buildcopy;

exports.build = series(cleandist, html, styles, scripts, buildcopy)

exports.default = parallel(html, styles, scripts, sync, startwatch)

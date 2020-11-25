// sass,css
const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const postcss = require("gulp-postcss");
const cssnext = require("postcss-cssnext");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const gcmq = require("gulp-group-css-media-queries");
const browserSync = require("browser-sync");

// ブラウザの設定
const browsers = [
  "last 2 versions",
  "> 5%",
  "ie = 11",
  "not ie <= 10",
  "ios >= 8",
  "and_chr >= 5",
  "Android >= 5",
];

// ファイルパス
const srcPath = {
  css: "scss/*.scss",
  html: ["./**.php", "./**/*.php"],
};

const destPath = {
  css: "dist/css/",
  js: "dist/js/",
};

// Sass
const cssSass = () => {
  return src(srcPath.css)
    .pipe(sourcemaps.init())
    .pipe(
      plumber({
        errorHandler: notify.onError("Error: <%= error.message %>"),
      })
    )
    .pipe(sass())
    .pipe(postcss([cssnext(browsers)]))
    .pipe(dest(destPath.css))
    .pipe(cleanCSS())
    .pipe(rename({ extname: ".min.css" }))
    .pipe(gcmq())
    .pipe(sourcemaps.write("/maps"))
    .pipe(dest(destPath.css));
};

const browserSyncOption = {
  proxy: "http://localhost:8888/",
  open: true,
  watchOptions: {
    debounceDelay: 1000,
  },
  reloadOnRestart: true,
};

const browserSyncFunc = () => {
  browserSync.init(browserSyncOption);
};

const browserSyncReload = (done) => {
  browserSync.reload();
  done();
};

const watchFiles = () => {
  watch(srcPath.css, series(cssSass, browserSyncReload));
  watch(srcPath.html[0], series(browserSyncReload));
  watch(srcPath.html[1], series(browserSyncReload));
};

exports.default = series(
  series(cssSass),
  parallel(watchFiles, browserSyncFunc)
);

const { series, src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return (
    src("./src/sass/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      // .pipe(purgecss({ content: ["*.html"] }))
      .pipe(dest("./src/css"))
      .pipe(browserSync.stream())
  );
}

function watchChanges() {
  watch(
    ["./src/sass/**/*.scss", "./src/js/**/*.js", "./*.html"],
    series(buildStyles, reloadBrowser)
  );
}

function liveServer(done) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  done();
}

function reloadBrowser(done) {
  browserSync.reload();
  done();
}

exports.default = series(buildStyles, liveServer, watchChanges);

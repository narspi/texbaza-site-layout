import gulp from "gulp";
import panini from "panini";
import browserSync from "browser-sync";
import sourcemaps from "gulp-sourcemaps";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import gulpif from "gulp-if";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import rollupStream from "@rollup/stream";
import terser from "@rollup/plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';

const isDevelopment = process.env.PRODUCTION === "development";
const isTunnel = process.env.TUNNEL === "run";

const scss = gulpSass(dartSass);

const { src, dest, watch, series } = gulp;
const sync = browserSync.create();

// const rollupOptions = {
//   input: "src/js/main.js",
//   output: { format: "cjs" },
// };
// const stream = rollupStream(rollupOptions);

const htmlInclude = () => {
  panini.refresh();
  return src("src/html/pages/**/*.html")
    .pipe(
      panini({
        root: "src/html/pages",
        layouts: "src/html/layouts",
        partials: "src/html/partials",
        helpers: "src/html/helpers/",
        data: "src/html/data/",
      })
    )
    .pipe(dest("dist/"))
    .pipe(sync.stream());
};

const createCss = () => {
  return src("src/scss/**/*.scss")
    .pipe(gulpif(isDevelopment, sourcemaps.init()))
    .pipe(
      scss({
        outputStyle: "expanded",
      })
    )
    .pipe(
      cleanCSS({
        format: "beautify",
      })
    )
    .pipe(gulpif(isDevelopment, sourcemaps.write()))
    .pipe(dest("dist/css"))
    .pipe(sync.stream());
};

const createJs = () => {
  // return gulp
  //   .src("./src/js/**/*.js")
  //   .pipe(gulpif(isDevelopment, sourcemaps.init()))
  //   .pipe(
  //     rollup({
  //       input: "src/js/main.js",
  //       format: "iife",
  //       allowRealFiles: true,
  //       plugins: [
  //         terser({
  //           mangle: false, // Отключаем манглирование
  //           format: {
  //             beautify: true, // Отключаем минификацию
  //             comments: true, // Сохраняем комментарии
  //           },
  //         }),
  //       ],
  //     })
  //   )
  //   .pipe(gulpif(isDevelopment, sourcemaps.write()))
  //   .pipe(dest("dist/js"))
  //   .pipe(sync.stream());

  return rollupStream({
    input: "./src/js/main.js",
    output: { format: "cjs" },
    plugins: [
      terser({
        mangle: false, // Отключаем манглирование
        format: {
          beautify: true, // Отключаем минификацию
          comments: true, // Сохраняем комментарии
        },
      }),
      nodeResolve()
    ],
  })
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("./dist/js"));
};

const transportFonts = () => {
  return src("./src/fonts/**/*.*").pipe(dest("dist/fonts")).pipe(sync.stream());
};

const transportImg = () => {
  return src("./src/img/**/*.*").pipe(dest("dist/img")).pipe(sync.stream());
};

const server = () => {
  sync.init({
    server: "./dist",
    tunnel: isTunnel ? true : null,
  });
  watch("./src/fonts/**/*.*", transportFonts);
  watch("./src/img/**/*.*", transportImg);
  watch("./src/html/**/*.html", htmlInclude);
  watch("./src/scss/**/*.scss", createCss);
  watch("./src/js/**/*.js", createJs);
};

const buildServer = () => {
  sync.init({
    server: "./dist",
    tunnel: true,
  });
};

const defaultTask = series(
  htmlInclude,
  createCss,
  createJs,
  transportFonts,
  transportImg,
  server
);

const buildTask = series(
  htmlInclude,
  createCss,
  createJs,
  transportFonts,
  transportImg
);

const startServer = series(buildTask, buildServer);

export { defaultTask as default, buildTask as build, startServer as start };

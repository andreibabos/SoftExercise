const gulp = require('gulp'),
      nodemon = require('gulp-nodemon'),
      gulpMocha = require('gulp-mocha');

gulp.task("default", function(){
    nodemon({
        script: "app.js",
        ext: "js",
        env: {
            PORT: 8001
        },
        ignore: ["./node_modules/**"]

    }).on("restart", () => console.log("Restarting"));
});

gulp.task("test",function(){
    gulp.src("Tests/*.js",{read:false})
        .pipe(gulpMocha({reporter:"nyan"}))
});
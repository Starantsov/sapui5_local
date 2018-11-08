var gulp = require("gulp");
var server = require("browser-sync");

gulp.task("default", ["serve"], () => {
  console.log('starting browser sync');
})
gulp.task("serve", function() {
  server.init({
    server: "./webapp/",
    notify: false,
    port:1337
  });
  
  gulp.watch(["./webapp/**/*",'!./webapp/resources/**/*']).on("change" , server.reload);
 });



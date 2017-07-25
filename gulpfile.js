var gulp = require('gulp');
var spawn = require('child_process').spawn;


gulp.task('build', function (cb) {

  var cmd = null;

  if (process.env.NODE_ENV == "production") {
    cmd = spawn('ng', ['build', '--env=prod'], {
      stdio: 'inherit'
    });
  } else if (process.env.NODE_ENV == "qa") {
    cmd = spawn('ng', ['build', '--env=qa'], {
      stdio: 'inherit'
    });
  } else {
    cmd = spawn('ng', ['build', '--env=dev'], {
      stdio: 'inherit'
    });
  }

  cmd.on('close', function (code) {
    console.log('ng build exited with code: ' + code);
    cb(code);
  });
});

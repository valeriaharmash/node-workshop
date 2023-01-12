const fs = require('fs');

const ls = (done) => {
  // `files` will be an array of filenames, like ['bash.js', 'pwd.js']
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      done(files.join('\n'));
    }
  });
};

module.exports = {
  ls,
};

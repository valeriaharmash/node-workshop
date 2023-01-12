const fs = require('fs');

const cat = (done, path) => {
  console.log(path);
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
        done(data)
    }
  });
};

module.exports = {
  cat,
};

const { pwd } = require('./pwd');
const { ls } = require('./ls');
const { cat } = require('./cat');

const done = (output) => {
  // show the output
  process.stdout.write(output);
  // show the prompt
  process.stdout.write('\nprompt > ');
};

process.stdout.write('\nprompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

  const arguments = cmd.split(' ');
  const command = arguments[0];
  const path = arguments[1];

  if (command === 'pwd') {
    pwd(done);
  } else if (command === 'ls') {
    ls(done);
  } else if (command === 'cat') {
    cat(done, path);
  } else {
    process.stdout.write('Unrecognized command.');
    process.stdout.write('\nprompt > ');
  }
});

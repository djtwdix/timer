const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const args = process.argv.slice(2);

console.log("Welcome to Daniel's Interactive Timer");
console.log("*************************************")
const timer = () => {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === '\u0062') {
      process.stdout.write('\x07');
    }
  })
}

module.exports = timer;
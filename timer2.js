const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const args = process.argv.slice(2);

console.log("Welcome to Daniel's Interactive Timer");
console.log("*************************************")
console.log("Instructions:")
console.log("- Press 'b' to hear the alarm sound");
console.log("- Press any number between 1 - 9 to set the timer for that amount of seconds")
console.log("- Press 'ctrl + c' to exit");
process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log("Thanks for using me, ciao!")
      process.exit();
    }
    if (key === '\u0062') {
      process.stdout.write('\x07');
    }
    if (key === '\u0031') {
      console.log("Setting timer for 1 second...");
      setTimeout(() => process.stdout.write('\x07'), 1000);
      setTimeout(() => process.stdout.write('Timer done!\n'), 1000)
    }
    if (key === '\u0032') {
      console.log("Setting timer for 2 seconds...");
      setTimeout(() => process.stdout.write('\x07'), 2000);
      setTimeout(() => process.stdout.write('Timer done!\n'), 2000)
    }
    if (key === '\u0033') {
      console.log("Setting timer for 3 seconds...");
      setTimeout(() => process.stdout.write('\x07'), 3000);
      setTimeout(() => process.stdout.write('Timer done!\n'), 3000)
    }
    if (key === '\u0034') {
      console.log("Setting timer for 4 seconds...");
      setTimeout(() => process.stdout.write('\x07'), 4000);
      setTimeout(() => process.stdout.write('Timer done!\n'), 4000)
    }
    if (key === '\u0035') {
      console.log("Setting timer for 5 seconds...");
      setTimeout(() => process.stdout.write('\x07'), 5000);
      setTimeout(() => process.stdout.write('Timer done!\n'), 5000)
    }
    if (key === '\u0036') {
      console.log("Setting timer for 6 seconds...");
      setTimeout(() => process.stdout.write('\x07'), 6000);
      setTimeout(() => process.stdout.write('Timer done!\n'), 6000)
    }
    if (key === '\u0037') {
      console.log("Setting timer for 7 seconds...");
      setTimeout(() => process.stdout.write('\x07'), 7000);
      setTimeout(() => process.stdout.write('Timer done!\n'), 7000)
    }
    if (key === '\u0038') {
      console.log("Setting timer for 8 seconds...");
      setTimeout(() => process.stdout.write('\x07'), 8000);
      setTimeout(() => process.stdout.write('Timer done!\n'), 8000)
    }
    if (key === '\u0039') {
      console.log("Setting timer for 9 seconds...");
      setTimeout(() => process.stdout.write('\x07'), 9000);
      setTimeout(() => process.stdout.write('Timer done!\n'), 9000)
    }
  })

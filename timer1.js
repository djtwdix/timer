const args = process.argv.slice(2);

const timer = args => {
  for (const time of args) {
    if (time > 0 && typeof Number(time) === "number") {
      setTimeout(() => process.stdout.write('\x07'), time * 1000)
    }
  }
}

timer(args);
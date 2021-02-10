/* 
The user can press b and it should beep right away
The user can input any number from 1 to 9 and it should
immediately output "setting timer for x seconds...", and
beep after that number of seconds has passed
The user can use ctrl + c to exit the program, at which point 
the program should say "Thanks for using me, ciao!" before terminating */

const expect = require("'chai").expect;
const timer = require("../timer2");

describe("#timer2", () => {
  it ("The user can use ctrl + c to exit the program", (key) => {
    key = '\u0003'
    expect(timer).to.equal.(process.exit);
  })
})
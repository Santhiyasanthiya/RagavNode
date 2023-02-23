const OS = require("os")

// console.log("Free memory", OS.freemem()) 

// gb la vara vaikkura method 
console.log("Free memory", OS.freemem()/1024 / 1024 / 1024)

//total memory 

console.log("total memory", OS.totalmem()/1024 / 1024 / 1024)

//os version 
console.log("Version", OS.version())
// cpu 

console.log("CPU", OS.cpus())
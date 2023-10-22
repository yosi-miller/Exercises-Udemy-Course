const fs = require("fs")

fs.writeFile("message.txt", "Hello Node to yosi", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

const infr = fs.readFile("/Users/yosimiller/Downloads/קורס יודמי/BeackEnd/2.2 Native Modules/message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 

console.log(infr)
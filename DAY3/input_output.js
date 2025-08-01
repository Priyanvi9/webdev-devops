                                    //SYNC JS
// const fs = require("fs");
// const content = fs.readFileSync("b.txt", "utf-8");
// console.log(content);
// const contents= fs.readFileSync("a.txt","utf-8");
// console.log(contents);
                                  //ASYNC JS
// const fs = require("fs");
// fs.readFile("b.txt", "utf-8", (err, content) => {
//   if (err) {
//     console.error("Error reading b.txt:", err);
//   } else {
//     console.log(content);
//   }
// });

// function print(err,data){
//   console.log(data);
// }

// fs.readFile("c.txt", "utf-8",print); // print is a callback

// function timeout() {
//   console.log("Hey priyanvi!!");
// }
// setTimeout(timeout,50000); //browser gives //readfile - node js gives
// console.log("Im first");
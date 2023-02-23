// const fs = require("fs");
//  const quote = "Nothing is imposible. "

//**************************************************** */


//  fs.writeFile("./santhiya.html", quote, (err) => {
// console.log("Complete  !!!")
//  })

 //*******************backup* basic method ******************************** */

//  const fs = require("fs");
//  const quote1 = "Nothing is imposible. "

//  fs.writeFile("./backup/text-1", quote1, (err) => {
//     console.log("Complete  !!!")
//      })

 //*******************backup* loop  method ******************************** */
// intha mathiri panna yerminal la mattum 10 times varum 

//  const fs = require("fs");
//   const quote1 = "Nothing is imposible. "
 
// for (let i = 1; i < 10; i++) {
//     fs.writeFile("./backup/text-1", quote1, (err) => {
//         console.log("Complete  !!!")
//          })  
// }

//  ****************************** backup file la varanumn `template litral use pannanum `

// const fs = require("fs");
// const quote2 = "Nothing is imposible. "

// for (let i = 1; i < 10; i++) {
//   fs.writeFile(`./backup/text-${i}`, quote1, (err) => {
//       console.log("Complete  !!!")
//        })  
// }

//********************** */ promise use panni 30 files cal pandra method  


const fs = require("fs");
const quote2 = "Nothing is imposible. "

// const [, , noOfFiles] = process.argv;

// console.log(noOfFiles);

// for (let i = 1; i < noOfFiles; i++) {
//   fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
//       console.log("Complete  !!!")
//        })  
// }


//***next go to cool.txt step 1 */ 
//********************************************************************* */
// step 2 computer ku puriura language la answer varum 

// fs.readFile("./cool.txt", (err, data) => {
//     console.log(data)
// })


//**********UTF -8 SET UP  */
//human ku puriura language 

// fs.readFile("./cool.txt","utf-8", (err, data) => {
//     console.log(data)
// })

//********************(ERR Method ) ************************* */
//cool 1 nu oru file ella adanala error varum 
// read file 

// fs.readFile("./cool1.txt","utf-8", (err, data) => {
//    if (err) {
//     console.log("x", err);
//    } else {
//     console.log(data )
//    }
   
   
// })

//APPEND (add) to exisiting files **************************
// fun.html la already good morning nu eruinthathu koda kila erukkura line um adda agidum  
// ore line la thhan add agum 

// const quote3 = "dream without fear, love without limits";

// fs.appendFile("./fun.html", quote3, (err) => {
//     console.log("complete appending")
// });



//******************ore line la add agama erukkura method ********************************** */

// const quote3 = "dream without fear, love without limits";

// fs.appendFile("./fun.html",  "\n" + quote3, (err) => {
//     console.log("complete appending")

// });

//**********DELETE METHOD  */
//next create delete me .css and give some thing 


// delete-me.css file delete aagidchi 

 
fs.unlink("./delete-me.css", (err) => {
    console.log("delete successfully")
}); 


// next create indexedDB.js for express 
// console.log(process.argv);
// const sum = (a, b)=> a + b;


//*********************object destructure ******************************************************* */
// console.log(process.argv);
// const [, , n1, n2] = process.argv;
// const sum = (a, b)=> a + b;
// console.log(sum(n1, n2))
//result 4050 nu thssn vsrum 90 nu vsrsthu 

//******90 nu vara method  */

console.log(process.argv);
const [, , n1, n2] = process.argv;
const sum = (a, b)=> a + b;
console.log(sum(+n1, +n2))
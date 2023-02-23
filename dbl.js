// node la work aagurathu window la work aagathu 
// are:=
// console.log(process.argv) //argumentValue
// const double = (n) => n * 2
// console.log(double (process.argv[2]))

//process 
//array destructring  num oda value matum terminal la show aagum 

const [, , num] = process.argv;
console.log(process.argv) //argumentValue
const double = (n) => n * 2
console.log(double (process.argv[2]))
console.log(double(num));
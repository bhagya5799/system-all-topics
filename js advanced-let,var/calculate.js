// const problem = "3 add 16";
// const calculate = opr => {
//    const [num1, operation, num2] = opr.split(" ");
//    switch (operation) {
//       case "add":
//          return +num1 + +num2;
//       case "divide":
//          return +num1 / +num2;
//       case "subtract":
//          return +num1 - +num2;
//       case "multiply":
//          return +num1 * +num2;
//       case "modulo":
//          return +num1 % +num2;
//       default:
//          return 0;
//    }
// }
// console.log(calculate(problem));

// let a=require("readline-sync")
// let n1=a.question("entrnbr:")
// let n2=a.question("entrnbr:")
let problem ="6 multi 8"
const calculate=opr =>{
    const[n1,sbl,n2]=opr.split(" ");
    switch (sbl){
        case "add":
            return+n1+ +n2
        case  "divide":
            return +n1/+n2
        case "multi":
            return+n1*+n2
        case "sub":
            return+n1*+n2
    }
}
console.log(calculate(problem))
// function sum(x,y) {
//     return x+y
// }
// console.log(sum(10,11))
// function sub(x,y) {
//     return x-y
// }

// const mul=(x,y) => x*y
// function change() {
//     document.getElementById("test").innerHTML="changeddddddddddddddd";
// }
// function change1() {
//     document.getElementById("test").innerHTML="text changed";
// }
// function customalert() {
//     window.alert("sugalle");
// }
// function customwrite() {
//     document.write(5+6);
// }
// console.log("testing console")

// function printpage() {
//     window.print()
// }

// console.log(sum(8,9))
// console.log(sum(18,9))
// console.log(mul(8,9))

    function examplevar() {
        let x = 10;
        if (true) {
          let x=20;
          console.log(x);
        }

        console.log(x);
    }
examplevar()
    function examplelet() {
        let x = 10;
        if (true) {
        let x = 20; // This creates a new variable 'x' inside the block.
        console.log(x)
        }
        console.log(x); // Outputs 10
    }
examplelet()
    const PI = 3.14159;
    // PI = 3;  This will result in an error because you cannot reassign a 'const' variable.
    console.log(PI)
    const myArray = [1, 2, 3];
    myArray.push(4,5); // This is allowed because it doesn't reassign 'myArray'.
    console.log(myArray)

examplevar()


  
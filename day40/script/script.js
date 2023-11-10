
//10numbers

for(i=1;i<=10;i++){
    console.log(i)
}

//odd number <100

for(i=1;i<100;i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}

//multiplication table 0f 7

for(i=1;i<=10;i++){
    let x = i * 7
    console.log(7 + ' * ' + i + ' = ' + x);
}

//Print all the multiplication tables with numbers from 1 to 10

for(i=1;i<=10;i++){
    for(j=1;j<=10;j++){
        let mul = i + ' * ' + j + ' = ' + i*j
        console.log(mul);
    }
    console.log()
}


//Print all the multiplication tables with numbers from 1 to 10 as a function 

for(let i = 1; i <= 10; i++)
{
    printTable(i);
    
}

function printTable(n)
{
    for(let i = 1; i <= 10; i++)
    {
        let row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}

//Calculate the sum of numbers from 1 to 10
{
let x=0
for(i=0;i<=10;i++){
    x = x + i
}
console.log(x)
}

//calculate 10!

{
let x = 1
for(i=10;i>0;i--)
{
    x = x * i
}
console.log(x)
}

// Calculate the sum of odd numbers greater than 10 and less than 30
let x=0
for(i=10;i<30;i++){
    if(i%2 !== 0){
        x= x+i
    }
}
console.log(x);

//Create a function that will convert from Celsius to Fahrenheit
{
function far(c){
    return c * 1.8 + 32  
}
let converted = far(30)
console.log(converted)
}


//Create a function that will convert from Fahrenheit to Celsius

{
    function cel(f){
        return (f - 32) / 1.8 
    }
    let converted = cel(30)
    console.log(converted)
}
    
//Calculate the sum of numbers in an array of numbers

{
let arra = [1,2,3,4,5]
let x = 0
for(i=0;i<=arra.length;i++){    
    x = x + i
}
console.log(x)
}



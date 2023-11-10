// function add(num1,num2,callback){
//     let err=false
//     if (num1==0){
//         err=true
//     }
//     callback(num1+num2,err)
// }
// function multiply(num1,num2,callback){
//     callback(num1*num2)
// }
// function divide(num1,num2,callback){
//     callback(num1/num2)
// }

// add(2,2,(sum,err)=>{
//    if(err){
//     console.log("errorrooroorororoor")
//    }
//    else {
//        console.log(sum);
//        multiply(sum,sum,(product)=>{
//         console.log(product)
//         divide(product,sum,(quotient)=>{
//             console.log(quotient)
//         })
//        })
//    }
// })


const promise=require('promise')

function add(num1,num2){
    return new promise((resolve,reject)=>{
        if (num1==0){
            reject('num1 is zero cant execute')
        }
        else{
        resolve(num1+num2)
    }
    })
}
function multiply(num1,num2){
    return new promise((resolve,reject)=>{
        if (num1==0){
            reject('num1 is zero cant execute')
        }
        else{
        resolve(num1*num2)
    }
    })
}
function div(num1,num2){
    return new promise((resolve,reject)=>{
        if (num1==0){
            reject('num1 is zero cant execute')
        }
        else{
        resolve(num1/num2)
    }
    })
}

add(2,2).then((sum)=>{
    console.log(sum)
    return multiply(sum,sum)  
}).then((mul)=>{
    console.log(mul)
    return div(mul,2)
}).then((divreturn)=>{
    console.log(divreturn)
})
.catch((error)=>{
    console.log(error)
})


function myname(){
    return new promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('once upon a time there is a lion lived in a dense forest his name is pandinure')
        }, 3000);
    })
}
function mynumber(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('8089574288')
        },2000)
    })
}



promise.all([myname(),mynumber()]).then((result)=>{
    console.log(result)
})

async function callname(){
    let name = await myname()
    console.log(name)
    let number = await mynumber()
    console.log(number)
}
callname() 


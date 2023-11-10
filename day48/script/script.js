function product1(){
    return new Promise((resolve,reject)=>{
        fetch('https://dummyjson.com/products/1')
.then(res=>res.json())
.then((pro) =>{
        product = `<div class="proid"><p>${pro.id}</p></div>
        <div class="title"><p>${pro.title}</p></div>
        <div class="thumbnail"><img src=${pro.images} alt=""></div>
        <div class="price"><p>${pro.price}</p></div>
        <div class="discountPercentage"><p>${pro.discountPercentage}</p></div>
        <div class="rating"><p>${pro.rating}</p></div>`
        // document.getElementById('container').innerHTML = product
        resolve(pro)
} )
    .catch(error => {
        reject(error)
    })
    })
}
function product2(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            fetch('https://dummyjson.com/products/2')
            .then(res=>res.json())
            .then((pro) =>{
                    resolve(pro)
            } )
            .catch(error =>{
                reject(error)
            })
        },6000
        )
    })
}
function product3(){
    return new Promise((resolve,reject)=> {
        setTimeout(()=>{
            fetch('https://dummyjson.com/products/3')
            .then(res=>res.json())
            .then((pro) =>{
                    resolve(pro)
            } )
            .catch(error =>{
                reject(error)
            })
        },3000
        )
    })
}
// product1().then(pdata => {
//     console.log(pdata)
// }).catch(err => {
//     console.log(err,'fetch failed')
// })
// product2().then(pdata => {
//     console.log(pdata)
// }).catch(err => {
//     console.log(err,'fetch failed')
// })
// product3().then(pdata => {
//         console.log(pdata)
//     }).catch(err => {
//         console.log(err,'fetch failed')
//     })
// async function newfun(){
//     let p1 =await product1()
//     console.log(p1)
//     let p2 =await product2()
//     console.log(p2)
//     let p3 =await product3()
//     console.log(p3);
// }
// newfun()
Promise.all([product1(),product2(),product3()]).then((result)=>{
    console.log(result)
})
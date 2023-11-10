
let x = document.getElementById("rs")

function ans(){
    x.value = eval( x.value)
}
const inputs = document.querySelectorAll(".input")

inputs.forEach((input)=>{
    input.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log(e);
        x.value+= e.target.textContent
        // document.getElementById("trash").innerHTML = val
    })
})



const tests = document.querySelectorAll(".test")
tests.forEach((test)=>{
    if(test.getAttribute("data-action") === "clr"){
        test.addEventListener("click", (e)=>{
            // x.value = " " 
            location.reload()
            console.log(e)
        })
    }
    else if(test.getAttribute("data-action") === "result"){
        test.addEventListener("click", (e)=>{
            x.value = eval(x.value)
            console.log(e)
        })
    }
    else{
        test.addEventListener("click", (e)=>{
            x.value = x.value.slice(0,-1)
            console.log(x.value)
        })
    }
}) 



const operations= document.querySelectorAll(".op")

operations.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        console.log(e)
        let total = x.value
        let lchar = total.charAt(total.length - 1)
        const validOperators = "+-*/%";
        console.log(lchar)
        if(validOperators.includes(lchar)){
            x.value = x.value.slice(0,-1) 
            x.value += e.target.textContent
        }
        else{
            x.value += e.target.textContent
        }
    })
})


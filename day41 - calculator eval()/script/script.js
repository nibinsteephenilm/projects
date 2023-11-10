
// function input1(){
//    document.getElementById("rs").value = document.getElementsByClassName("numop").textContent
// }
let x = document.getElementById("rs")

function input1(button) {
    var val = button.textContent;
    x.value = x.value + val
    document.getElementById("trash").innerHTML = val
}
function add(){
    x.value = x.value + '+'
}
function ans(){
    x.value = eval( x.value)
}
function sub(){
    x.value = x.value + '-'
}
function div(){
    x.value = x.value + '/'
}
function mul(){
    x.value = x.value + '*'
}
function percent(){
    x.value = x.value + '%'
}
function clr(){
    x.value = " "
}
function back(){
    x.value = x.value.slice(0,-1)
}


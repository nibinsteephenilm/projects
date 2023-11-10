const canvas =document.querySelector("canvas")
const toolbtn = document.querySelectorAll(".tool")
const fillclr = document.querySelector("#fill-color")
const slider = document.querySelector("#slider")
const color = document.querySelectorAll(".colors .options")
const colorpicker = document.getElementById("colorpicker")
const eraser = document.getElementById("eraser")
const clearcanvas = document.querySelector(".clear")
const saveimg = document.querySelector(".save-img")
const eraserCursor = document.querySelector('.eraser-cursor');
// Add event listeners for undo and redo buttons
document.getElementById("undoButton").addEventListener("click", undo);
document.getElementById("redoButton").addEventListener("click", redo);


const ctx = canvas.getContext("2d")
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.imageSmoothingEnabled = true;

let isdrawing = false
let brushsize
let prevmouseX,prevmouseY,snapshot
let selectedtool = "brush"
let selectedcolor = "#000"
 
window.addEventListener("load",()=> {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
})

const startdraw = (e) => {
    isdrawing = true
    prevmouseX = e.offsetX
    prevmouseY = e.offsetY
    ctx.beginPath()
    ctx.strokeStyle = selectedcolor
    ctx.fillStyle = selectedcolor
    ctx.lineWidth = brushsize
    snapshot = ctx.getImageData(0,0,canvas.width,canvas.height)
}
const stopdraw = (e) => {
    isdrawing = false
}

const drawrect = (e)=>{
    if(!fillclr.checked){
        ctx.strokeRect(e.offsetX,e.offsetY, prevmouseX - e.offsetX, prevmouseY - e.offsetY)
    }else{
        ctx.fillRect(e.offsetX,e.offsetY, prevmouseX - e.offsetX, prevmouseY - e.offsetY)
    }
}
const drawcircle = (e) => {
        ctx.beginPath()
        let radius = Math.sqrt(Math.pow((prevmouseX-e.offsetX),2)+Math.pow((prevmouseY-e.offsetY),2))
        ctx.arc(prevmouseX,prevmouseY, radius, 0, 2 * Math.PI)
        fillclr.checked ? ctx.fill() : ctx.stroke()
}

const drawline = (e) =>{
    ctx.beginPath()
    ctx.moveTo(prevmouseX,prevmouseY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.stroke()
}

const drawtriangle = (e)=> {
    ctx.beginPath()
    ctx.moveTo(prevmouseX,prevmouseY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.lineTo(prevmouseX * 2 - e.offsetX, e.offsetY)
    ctx.closePath()
    ctx.stroke()
    fillclr.checked ? ctx.fill() : ctx.stroke()
}

const erase = (e)=>{
    ctx.strokeStyle = "#fff";
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}


const drawing = (e) => {
    if(!isdrawing) return
    ctx.putImageData(snapshot,0,0)
    if(selectedtool === "brush"){
        ctx.lineTo(e.offsetX,e.offsetY)
        ctx.stroke()
    }else if( selectedtool === "rectangle"){
        drawrect(e)
    }else if( selectedtool === "circle"){
        drawcircle(e)
    }else if( selectedtool === "line" ){
        drawline(e)
    }else if( selectedtool === "triangle" ){
        drawtriangle(e)
    }else if( selectedtool === "eraser"){
        erase(e)
    }
}

toolbtn.forEach(btn => {
    btn.addEventListener("click", ()=> {
        document.querySelector(".options.active").classList.remove("active")
        btn.classList.add("active")
        selectedtool = btn.id
        console.log(selectedtool)
        if (selectedtool === "eraser") {
            eraserCursor.style.display = 'block';
        } else {
            eraserCursor.style.display = 'none';
        }
    })
});

canvas.addEventListener('mousemove', (e) => {
    if (selectedtool === 'eraser') {
        const cursorSize = slider.value;
        eraserCursor.style.width = cursorSize + 'px';
        eraserCursor.style.height = cursorSize + 'px';
        eraserCursor.style.left = (e.pageX - cursorSize / 2) + 'px';
        eraserCursor.style.top = (e.pageY - cursorSize / 2) + 'px';
    }
});


slider.addEventListener("change", ()=> {
    brushsize = slider.value
})

color.forEach((btn)=>{
    btn.addEventListener("click", ()=> {
        document.querySelector(".options.selected").classList.remove("selected")
        btn.classList.add("selected")
        selectedcolor = window.getComputedStyle(btn).getPropertyValue("background-color")
    })
})
colorpicker.addEventListener("change",()=> {
    colorpicker.parentElement.style.background = colorpicker.value
    colorpicker.parentElement.click()
})


clearcanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})


saveimg.addEventListener("click", ()=> {
    const link = document.createElement("a")
    link.download = `${Date.now()}.jpg`
    link.href = canvas.toDataURL()
    link.click()
    console.log("print")
})


const undoStack = [];
const redoStack = [];
function saveCanvasState() {
    const currentState = ctx.getImageData(0, 0, canvas.width, canvas.height);
    undoStack.push(currentState);
}
function undo() {
    if (undoStack.length >= 2) {
        const lastState = undoStack.pop();
        redoStack.push(lastState);
        ctx.putImageData(undoStack[undoStack.length - 1], 0, 0);
    } else if (undoStack.length === 1) {
        const lastState = undoStack.pop();
        redoStack.push(lastState);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
function redo() {
    if (redoStack.length >= 1) {
        const nextState = redoStack.pop();
        undoStack.push(nextState);
        ctx.putImageData(nextState, 0, 0);
    }
}
document.getElementById("undoButton").addEventListener("click", undo);
document.getElementById("redoButton").addEventListener("click", redo);
canvas.addEventListener("mouseup", () => {
    saveCanvasState();
});
canvas.addEventListener("mousedown", () => {
    redoStack.length = 0;
});
canvas.addEventListener("mousedown",startdraw)
canvas.addEventListener("mousemove",drawing)
canvas.addEventListener("mouseup",stopdraw)
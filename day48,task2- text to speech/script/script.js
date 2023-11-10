function speaktxt(text){
    const synthesis=window.speechSynthesis
    const utterence = new SpeechSynthesisUtterance(text)
    // utterence.lang = 'en-us'
    synthesis.speak(utterence)
}

window.addEventListener('keydown',(event)=>{
    const key  = event.key
    document.getElementById('speech').textContent = 'key pressed ' + key
    speaktxt(key)
})

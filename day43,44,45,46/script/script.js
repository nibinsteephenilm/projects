let itms=[]
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((data) => {
            itms=data;
            let cardstring = "";
            itms.forEach((item) => {
            cardstring += `<div class="solocard" data-id=${item.id}>
            <div class="img">
                <img id="product-image" src=${item.image} alt="Product Image" />
            </div>
            <h3 id="product-price">$${item.price}</h3>
            <h2 id="product-title">${item.title}</h2>
            <p id="product-description" >${item.description}</p>
        </div>`   
                console.log(item);
    });
    document.getElementById("product-cards").innerHTML = cardstring

    const modal = document.getElementById("modal")
    
    const solocard = document.querySelectorAll(".solocard")
    const closemodal = document.getElementById("closemodal")
    solocard.forEach((card)=>{
        card.addEventListener("click", ()=>{
            modal.classList.add("showmodal")
            const cardid = card.getAttribute("data-id")
            cardclick(cardid)
        })
    })

    closemodal.addEventListener("click", ()=>{
        modal.classList.remove("showmodal")
    })
})
function cardclick(id=1){
    let ep ='';
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((item)=>{
        console.log(item)

        ep = `<div class="proimg"><img src=${item.image} alt=""></div>
        <div class="prodet">
            <div class="protitle"><p>${item.title}</p></div>
            <div class="proprice"><p>$ ${item.price}</p></div>
            <div class="prorating"><p>Rating : ${item.rating.rate}  ⭐</p></div>
            <div class="procount"><p>count : ${item.rating.count}</p></div>
            <div class="procat"><p></p>Category : ${item.category}</div>
            <div class="prodis"><p>${item.description}</p></div>
            <div class="purchase">
                <div class = "cart"><a>add to cart</a></div>
                <div class = "buy"><a>buy now</a></div>
            </div>
        </div>`
        console.log(ep)
        document.getElementById("productcontainer").innerHTML = ep

    })
  
}




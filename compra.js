swal({
    title:"Bienvenido a nuestra tienda de telescopios",
    button: "Comenzar a observar"
 })

 
 
 const clickButton = document.querySelectorAll(".btn")
 

 clickButton.forEach(btn => {
     btn.addEventListener("click", addToCarrito)
})

const shoppingContainer = document.querySelector('carrito')

function addToCarrito(e) {
    const button = e.target
    const item = button.closest(".card")
    const itemTitle = item.querySelector(".card-header").textContent;
    const itemPrice = item.querySelector(".precio").textContent;
    const itemImg = item.querySelector(".card-img-top").src;
    
   

    console.log(itemTitle, itemPrice, itemImg)
}






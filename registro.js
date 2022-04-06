class User {
    constructor(user, email, password) {
        this.user = user
        this.email = email
        this.password = password
    }

    login() {
        console.log(this.user + " esta dentro")
    }
}

let arrayUsuarios = []

localStorage.getItem("usuarios") ? arrayUsuarios = JSON.parse(localStorage.getItem("usuarios")) : localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios))




let formulario = document.getElementById("inputs")
let botonMostrarUsuarios = document.getElementById("mostrarUsers")
let divUsers = document.getElementById("divUsuarios")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    let user = document.getElementById("user").value 
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let dataform = new FormData(e.target)
    console.log(dataform.get("user"))
    console.log(dataform.get("email"))
    console.log(dataform.get("password"))

    if(!arrayUsuarios.some(usuarioArray => usuarioArray.email == email)){
    const usuario = new User(user, email, password)
    arrayUsuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios))
    formulario.reset()}
})

botonMostrarUsuarios.addEventListener("click", () => {
    arrayUsuarios.forEach((usuarioArray, indice) => {
        divUsers.innerHTML += `<div class="card border-primary mb-3" id="user${indice}"style="width: 18rem; margin: 10px;">
        <div class="card">
          <h5 class="card-title">Usuario ${usuarioArray.user}</h5>
          <p class="card-text">Email: ${usuarioArray.email}</p>
          <button id="boton${indice}" class="btn btn-light">Enviar</button>
        </div>
      </div>`
      console.log(...arrayUsuarios)
        
    })
})


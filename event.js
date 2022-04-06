


window.addEventListener(`load`, obtener_datos)

function obtener_datos(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=gjRYvzJTc2M2a07ApI4RI3TPba2XhzI876ol03AY`)
      .then(response => response.json())
      .then(data => mostrarDatos(data))

}


function mostrarDatos({date, title, media_type, url, explanation}) {
    let fecha = document.getElementById("fecha")
    fecha.innerHTML = date
    let titulo = document.getElementById("titulo")
    titulo.innerHTML = title
    let multimedia = document.getElementById("multimedia")
    if(media_type == 'video') {
        multimedia.innerHTML = `<iframe src=${url} frameborder="0" class="video"></iframe>`
    }else {
        multimedia.innerHTML =`<img src=${url} alt=${url} class="imagen">`
    }
    
    let explicacion = document.getElementById("explicacion")
    explicacion.innerHTML = explanation
}

let cerrar = document.getElementById("cerrar")
let abrir = document.querySelectorAll(".buttonC")
let modal = document.querySelectorAll(".P")
function abrirP() {
    abrir.forEach((elemento, clave) => {
        return elemento.addEventListener("click", () => {
            modal[clave].classList.toggle("abrir_cerrar")
        })
    });
}

abrirP()



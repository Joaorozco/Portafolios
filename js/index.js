const templateHeader = `
<nav class="navbar navbar-expand-lg bg-dark">
    <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse float-end" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-items">
            <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#">Sobre mi</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#">Contacto</a>
            </li>
            </ul>
        </div>
    </div>
</nav>`;
const header = document.querySelector("#header");
const templateAddHeader = header.innerHTML = templateHeader;

// ---------------------ANIMATION------------------------------


let sectionInicio = document.querySelector("#section-inicio");
let sectionSobreMi = document.querySelector("#section-sobre-mi");
let sectionSkills = document.querySelector("#section-skills");
let sectionProyecto = document.querySelector("#section-proyectos")
let sectionContacto = document.querySelector("#section-contacto")

ScrollReveal().reveal(sectionInicio, {
    duration: 1500,
    scale: 0.5,
    rotate: {
        x: 360,
        y:-180
    }
});

ScrollReveal().reveal(sectionSobreMi, {
    duration: 1500,
    scale: 0.5,
    rotate: {
        x: -360,
        y: 180,
    }
});

// ScrollReveal().reveal(sectionSkills,{
//     duration: 1000,
//     scale: 0.5,
//     rotate: {
//         x: -360,
//         y: 180,
//     }
// })

ScrollReveal().reveal(sectionProyecto,{
    duration: 1500,
    scale: 0.5,
    rotate: {
        x: 360,
        y: -180,
    }
})

ScrollReveal().reveal(sectionContacto,{
    duration: 1500,
    scale: 0.5,
    rotate: {
        x: -360,
        y: 180,
    }
})

const maquina = document.querySelector('.maquina-escribir');

const maquinaDeEscribir = (text = '', tiempo = 200, etiqueta = '') => {
    let arrayLetter = text.split('');
    etiqueta.innerHTML = '';
    let cont = 0;
    let escribir = setInterval(function() {
        etiqueta.innerHTML += arrayLetter[cont];
        cont++;
        if (cont === arrayLetter.length) {
            clearInterval(escribir);
        }
    },tiempo)
}
maquinaDeEscribir("Joaquin Orozco", 200, maquina)
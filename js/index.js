const root = document.querySelector("#root");

function ajax(url, metodo="get") {
    let httpMetodo = metodo;
    let xhr = new XMLHttpRequest;
    xhr.open(httpMetodo, url);
    xhr.send();
    // console.log(xhr.response);

    return xhr
}

(function home(){
    let xhr = ajax('home.html')
    // console.log(xhr);

    xhr.addEventListener('load', () => {
        root.innerHTML = xhr.response;

        // const maquina = document.querySelector('.maquina-escribir');
        // const maquinaDeEscribir = (text = '', tiempo = 200, etiqueta = '') => {
        // let arrayLetter = text.split('');
        // etiqueta.innerHTML = '';
        // let cont = 0;
        // let escribir = setInterval(function() {
        //     etiqueta.innerHTML += arrayLetter[cont];
        //     cont++;
        //     if (cont === arrayLetter.length) {
        //         clearInterval(escribir);
        //         }
        //     },tiempo)
        // }
        // maquinaDeEscribir("Joaquin Orozco", 200, maquina)
    })
})();

(function getPlatillaConHistoryHash(){
    let hash = location.hash;
    // console.log(root.hash);
    let archivo = (hash) ? hash.slice(1) + '.html' : 'home.html';
    let xhr = ajax(archivo);
    xhr.addEventListener('load', () => { 
        if (xhr.status === 200) {
            root.innerHTML = xhr.response
        }
    })

    let links = document.querySelectorAll('a')
    console.log(links);

    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            let id = link.id
            console.log(id);
            location.hash = id;
        })
    });

    window.addEventListener('hashchange', () => {
        let hash = location.hash
        // console.log(hash);

        let archivo = hash ? hash.slice(1) + '.html' : 'index.html';

        let xhr = ajax(archivo)
        xhr.addEventListener('load', () =>{
            if (xhr.status == 200) {

                root.innerHTML = xhr.response
            }
        })
    })
    
})();
// ------------------------------------------------------------
// ------------------------------------------------------------
// ---------------------ANIMATION------------------------------
// ------------------------------------------------------------
// ------------------------------------------------------------

let sectionInicio = document.querySelector('#section-inicio')
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

// ----------------------------
// NavBar(phone)
// ----------------------------
let btnToggle = document.querySelector('.toggle-btn');
let navHeader = document.querySelector('#header');
let btnClose = document.querySelector('.close-btn');
console.log(btnClose);

btnToggle.addEventListener('click',function(){
    navHeader.style.display = 'block';

    setTimeout(function(){
        navHeader.style.display = 'none'
    },5000)
})

btnClose.addEventListener('click', function(){
    navHeader.style.display = 'none'
})

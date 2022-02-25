let sectionInicio = document.querySelector("#section-inicio");
let sectionSobreMi = document.querySelector("#section-sobre-mi");
let sectionSkills = document.querySelector("#section-skills");

ScrollReveal().reveal(sectionInicio, {
    duration: 1000,
    scale: 0.5,
    rotate: {
        x:-180,
        y:-180
    }
});

ScrollReveal().reveal(sectionSobreMi, {
    duration: 1000,
    scale: 0.5
});

ScrollReveal().reveal(sectionSkills,{
    duration: 1000,
    scale: 0.5
});
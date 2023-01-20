//VARIAVEIS------------------------------------

const hero = document.querySelector(`.hero`);
const bricks = document.querySelector(`.bricks`)
const spike = document.querySelector(`.spike`)
const reload = document.querySelector(`.reload`)
const nuvem1 = document.querySelector(`.nuvem1`)
const nuvem2 = document.querySelector(`.nuvem2`)
const nuvem3 = document.querySelector(`.nuvem3`)
const heroDeath = document.querySelector(`.hero-death`)

//HERO JUMP -----------------------------

const jump = () => {
    hero.classList.add(`jump`);

    setTimeout(() => {
        hero.classList.remove(`jump`);
    }, 600)
}

//OBJETOS TIME ----------------------------

var Brecuo = bricks.classList.add(`recuo`)
var Srecuo = spike.classList.add(`recuo`)

const bricksANI = setInterval(() => {
    bricks.classList.add(`BrAni`)
    bricks.classList.remove(`recuo`)

    setTimeout(() => {
        bricks.classList.remove(`BrAni`);
        bricks.classList.add(`recuo`)
    }, 1000)
}, 2000)

sp = setInterval(1000)

const spikeANI = setInterval((sp) => {
    spike.classList.add(`BrAni`)
    spike.classList.remove(`recuo`)

    setTimeout(() => {
        spike.classList.remove(`BrAni`);
        spike.classList.add(`recuo`)
    }, 5000)
}, 10000)

//CARREGAR---------------------------------------

const carregar = () => {
    location.reload()
}

//SISTEM LOSE ------------------------------------

const sistema = setInterval(() => {
    const bricksPosition = bricks.offsetLeft
    const spikePosition = spike.offsetLeft
    const nuvem1Position = nuvem1.offsetLeft
    const nuvem2Position = nuvem2.offsetLeft
    const nuvem3Position = nuvem3.offsetLeft
    const heroPosition = +window.getComputedStyle(hero).bottom.replace(`px`, ``)

    if (bricksPosition <= 110 && bricksPosition > 50 && heroPosition < 30 || spikePosition <= 110 && spikePosition > 50 && heroPosition < 30) {

        spike.style.animation = `none`
        spike.style.left = `${spikePosition}px`

        bricks.style.animation = `none`
        bricks.style.left = `${bricksPosition}px`

        hero.style.animation = `none`
        hero.style.bottom = `${heroPosition}px`
        hero.style.visibility = `hidden`

        heroDeath.style.visibility = `visible`

        reload.style.visibility = `visible`

        reload.addEventListener(`click`, carregar)

        nuvem1.style.left = (`${nuvem1Position}px`)
        nuvem1.style.animation = (`none`)

        nuvem2.style.left = (`${nuvem2Position}px`)
        nuvem2.style.animation = (`none`)

        nuvem3.style.left = (`${nuvem3Position}px`)
        nuvem3.style.animation = (`none`)
    }
}, 10)

//CLICK JUMP ---------------------------------

document.addEventListener(`click`, jump)
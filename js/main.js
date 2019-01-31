const sections = document.querySelectorAll('.section')
const container = document.querySelector('.container')
const windowScroll = document.addEventListener("scroll", scrollAnimate)

scrollAnimate()

function scrollAnimate(){
    sections.forEach(section => sectionPosition(section))
}

//Called after every scroll event
//if top of section (x value) is less than the half the window size, AND, bottom of the section (x value) is also 
function sectionPosition(t){
    const halfWindowHeight = (window.innerHeight)/2
    const sevenWindowHeight = (window.innerHeight) * 0.7
    const sectionTop = t.querySelector('.innercontent').getBoundingClientRect().top
    const innerSectionBottom = sectionTop + t.querySelector('.innercontent').offsetHeight
    const sectionBottom = sectionTop + t.offsetHeight
    const attKey = t.getAttribute('data-menuitem')

    if (sectionTop <= halfWindowHeight && (sectionBottom - halfWindowHeight) > 0){
        const sectionRead = sevenWindowHeight / innerSectionBottom
        menuAdd(attKey, sectionRead)
    }
    else{
        t.classList.remove('visible')
        menuRemove(attKey)
    }
   
}

function menuAdd(m, r){
    const menuitem = document.querySelector(`.menuitem__${m}`)
    menuitem.classList.add('visible')
    r = Math.round(r * 10) / 10 //this gives a 0.x value
    if (r <= 1 && r >= 0){
        menuitem.querySelector('.readbar').style.height = `${100 * r}%`
    }
    else{
        menuitem.querySelector('.readbar').style.height = `100%`
    }
}

function menuRemove(m){
    const menuitem = document.querySelector(`.menuitem__${m}`)
    menuitem.classList.remove('visible')
    menuitem.querySelector('.readbar').style.height = `0%`
}
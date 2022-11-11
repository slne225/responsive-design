//toggle diplay between flex and block
const flex = document.getElementById('flex');
const flexbutton = document.getElementById('flexbutton');

function blockDisplay() {
    if (flex.style.display === 'flex') {
        flex.style.display = 'block';
        flexbutton.innerHTML = 'display: block';
    } else { 
        flex.style.display = 'flex';
        flexbutton.innerHTML = 'display: flex'
}
}

flexbutton.addEventListener('click', blockDisplay);

//toggle display between inline-flex and block
const inlineflex = document.getElementsByClassName('inline-flex container')
const inlinebutton = document.getElementById('inlinebutton')

function inlineFlexDisplay() {
    for (let i = 0; i < inlineflex.length; i++){
        if (inlineflex[i].style.display === 'block') {
            inlineflex[i].style.display = 'inline-flex'
            inlinebutton.innerHTML = 'display: inline-flex'
        }
        else {
            inlineflex[i].style.display = 'block';
            inlinebutton.innerHTML = 'display: block'
        }
    }
}

inlinebutton.addEventListener('click', inlineFlexDisplay)

const none = document.getElementById('none');
const flexstart = document.getElementById('flex-start');
const flexend = document.getElementById('flex-end');
const center = document.getElementById('center');
const spacearound = document.getElementById('space-around');
const spacebetween = document.getElementById('space-between');
const justifycontainer = document.getElementById('justify-content-container')
// const justifybutton = document.getElementsByClassName('justify-button')

// for (let i = 0; i < justifybutton.length; i++) {
//     console.log(justifybutton[i].innerHTML)
// }
function nonefunction() {
    if (justifycontainer.style.justifyContent !== 'none') {
        justifycontainer.style.display = 'block'
        justifycontainer.style.justifyContent = 'none'
    }
}
function flexstartfunction() {
    if (justifycontainer.style.justifyContent !== 'flex-start') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.justifyContent = 'flex-start'
    }
}
function flexendfunction() {
    if (justifycontainer.style.justifyContent !== 'flex-end') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.justifyContent = 'flex-end'
    }
}
function centerfunction() {
    if (justifycontainer.style.justifyContent !== 'center') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.justifyContent = 'center'
    }
}
function spacearoundfunction() {
    if (justifycontainer.style.justifyContent !== 'space-around') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.justifyContent = 'space-around'
    }
}
function spacebetweenfunction() {
    if (justifycontainer.style.justifyContent !== 'space-between') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.justifyContent = 'space-between'
    }
}
none.addEventListener('click', nonefunction)
flexstart.addEventListener('click', flexstartfunction)
flexend.addEventListener('click', flexendfunction)
center.addEventListener('click', centerfunction)    
spacearound.addEventListener('click', spacearoundfunction)
spacebetween.addEventListener('click', spacebetweenfunction)

// justifybutton.addEventListener('click', changeJustifyContent)
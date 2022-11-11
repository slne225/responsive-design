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
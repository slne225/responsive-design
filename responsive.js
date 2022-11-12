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

//justify content section
const none = document.getElementById('none');
const flexstart = document.getElementById('flex-start');
const flexend = document.getElementById('flex-end');
const center = document.getElementById('center');
const spacearound = document.getElementById('space-around');
const spacebetween = document.getElementById('space-between');
const justifycontainer = document.getElementById('justify-content-container')
const justifybutton = document.getElementsByClassName('justify-button')

// for (let i = 0; i < justifybutton.length; i++) {
//     console.log(justifybutton[i].innerHTML)
// }
function nonefunction() {
    if (justifycontainer.style.justifyContent !== 'none') {
        justifycontainer.style.display = 'block'
        justifycontainer.style.justifyContent = 'none'
        none.style.backgroundColor = 'orange'
        flexstart.style.backgroundColor = 'dodgerblue'
        flexend.style.backgroundColor = 'dodgerblue'
        center.style.backgroundColor = 'dodgerblue'
        spacearound.style.backgroundColor = 'dodgerblue'
        spacebetween.style.backgroundColor = 'dodgerblue'
    }
}
function flexstartfunction() {
    if (justifycontainer.style.justifyContent !== 'flex-start') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.justifyContent = 'flex-start'
        none.style.backgroundColor = 'dodgerblue'
        flexstart.style.backgroundColor = 'orange'
        flexend.style.backgroundColor = 'dodgerblue'
        center.style.backgroundColor = 'dodgerblue'
        spacearound.style.backgroundColor = 'dodgerblue'
        spacebetween.style.backgroundColor = 'dodgerblue'
    }
}
function flexendfunction() {
    if (justifycontainer.style.justifyContent !== 'flex-end') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.justifyContent = 'flex-end'
        none.style.backgroundColor = 'dodgerblue'
        flexstart.style.backgroundColor = 'dodgerblue'
        flexend.style.backgroundColor = 'orange'
        center.style.backgroundColor = 'dodgerblue'
        spacearound.style.backgroundColor = 'dodgerblue'
        spacebetween.style.backgroundColor = 'dodgerblue'
    }
}
function centerfunction() {
    if (justifycontainer.style.justifyContent !== 'center') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.justifyContent = 'center'
        none.style.backgroundColor = 'dodgerblue'
        flexstart.style.backgroundColor = 'dodgerblue'
        flexend.style.backgroundColor = 'dodgerblue'
        center.style.backgroundColor = 'orange'
        spacearound.style.backgroundColor = 'dodgerblue'
        spacebetween.style.backgroundColor = 'dodgerblue'
    }
}
function spacearoundfunction() {
    if (justifycontainer.style.justifyContent !== 'space-around') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.justifyContent = 'space-around'
        none.style.backgroundColor = 'dodgerblue'
        flexstart.style.backgroundColor = 'dodgerblue'
        flexend.style.backgroundColor = 'dodgerblue'
        center.style.backgroundColor = 'dodgerblue'
        spacearound.style.backgroundColor = 'orange'
        spacebetween.style.backgroundColor = 'dodgerblue'
    }
}
function spacebetweenfunction() {
    if (justifycontainer.style.justifyContent !== 'space-between') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.justifyContent = 'space-between'
        none.style.backgroundColor = 'dodgerblue'
        flexstart.style.backgroundColor = 'dodgerblue'
        flexend.style.backgroundColor = 'dodgerblue'
        center.style.backgroundColor = 'dodgerblue'
        spacearound.style.backgroundColor = 'dodgerblue'
        spacebetween.style.backgroundColor = 'orange'
    }
}
none.addEventListener('click', nonefunction);
flexstart.addEventListener('click', flexstartfunction);
flexend.addEventListener('click', flexendfunction);
center.addEventListener('click', centerfunction);    
spacearound.addEventListener('click', spacearoundfunction);
spacebetween.addEventListener('click', spacebetweenfunction);

//align items section
const flexstartalign = document.getElementById('flex-start-align');
const flexendalign = document.getElementById('flex-end-align');
const centeralign = document.getElementById('center-align');
const baseline = document.getElementById('baseline');

function flexstartalignfunction() {
    if (justifycontainer.style.alignItems !== 'flex-start') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.alignItems = 'flex-start'
        flexstartalign.style.backgroundColor = 'orange'
        flexendalign.style.backgroundColor = 'dodgerblue'
        centeralign.style.backgroundColor = 'dodgerblue'
        baseline.style.backgroundColor = 'dodgerblue'
    }
}
function flexendalignfunction() {
    if (justifycontainer.style.alignItems !== 'flex-end') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.alignItems = 'flex-end'
        flexstartalign.style.backgroundColor = 'dodgerblue'
        flexendalign.style.backgroundColor = 'orange'
        centeralign.style.backgroundColor = 'dodgerblue'
        baseline.style.backgroundColor = 'dodgerblue'
    }
}
function flexcenteralignfunction() {
    if (justifycontainer.style.alignItems !== 'center') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.alignItems = 'center'
        flexstartalign.style.backgroundColor = 'dodgerblue'
        flexendalign.style.backgroundColor = 'dodgerblue'
        centeralign.style.backgroundColor = 'orange'
        baseline.style.backgroundColor = 'dodgerblue'
    }
}
function baselinefunction() {
    if (justifycontainer.style.alignItems !== 'baseline') {
        justifycontainer.style.display = 'flex'
        justifycontainer.style.alignItems = 'baseline'
        flexstartalign.style.backgroundColor = 'dodgerblue'
        flexendalign.style.backgroundColor = 'dodgerblue'
        centeralign.style.backgroundColor = 'dodgerblue'
        baseline.style.backgroundColor = 'orange'
    }
}

flexstartalign.addEventListener('click', flexstartalignfunction)
flexendalign.addEventListener('click', flexendalignfunction)
centeralign.addEventListener('click', flexcenteralignfunction)
baseline.addEventListener('click', baselinefunction)

//grow and shrink section
const leftbox = document.getElementById('grow-shrink-left')
const centerbox = document.getElementById('grow-shrink-center')
const rightbox = document.getElementById('grow-shrink-right')
const growbutton = document.getElementById('grow-button')
const shrinkbutton = document.getElementById('shrink-button')
const resetbutton = document.getElementById('reset')

function growfunction() {
    if (growbutton.style.backgroundColor = 'dodgerblue'){
        centerbox.style.flexGrow = '3';
        leftbox.style.flexGrow = '1';
        rightbox.style.flexGrow = '1';
        growbutton.style.backgroundColor = 'orange';
        shrinkbutton.style.backgroundColor = 'dodgerblue';
        centerbox.style.flexShrink = '0';
        leftbox.style.flexShrink = '0';
        rightbox.style.flexShrink = '0';
        leftbox.style.flexBasis = '0'
        rightbox.style.flexBasis = '0'
        centerbox.style.flexBasis = '0'
    }
}
function shrinkfunction() {
    if (shrinkbutton.style.backgroundColor = 'dodgerblue'){
        centerbox.style.flexShrink = '1';
        leftbox.style.flexShrink = '3';
        rightbox.style.flexShrink = '3';
        shrinkbutton.style.backgroundColor = 'orange';
        growbutton.style.backgroundColor = 'dodgerblue';
        centerbox.style.flexGrow = '0';
        leftbox.style.flexGrow = '0';
        rightbox.style.flexGrow = '0';
        leftbox.style.flexBasis = '300px'
        rightbox.style.flexBasis = '300px'
        centerbox.style.flexBasis = '150px'
    }
}
function resetfunction() {
    if (resetbutton.style.backgroundColor = 'dodgerblue'){
        centerbox.style.flexShrink = '0';
        leftbox.style.flexShrink = '0';
        rightbox.style.flexShrink = '0';
        shrinkbutton.style.backgroundColor = 'dodgerblue';
        growbutton.style.backgroundColor = 'dodgerblue';
        centerbox.style.flexGrow = '0';
        leftbox.style.flexGrow = '0';
        rightbox.style.flexGrow = '0';
        leftbox.style.flexBasis = '100px'
        rightbox.style.flexBasis = '100px'
        centerbox.style.flexBasis = '100px'
        
    }
}

growbutton.addEventListener('click', growfunction)
shrinkbutton.addEventListener('click', shrinkfunction)
resetbutton.addEventListener('click', resetfunction)
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

// list of justify-content buttons by #id
const none = document.getElementById('none');
const flexstart = document.getElementById('flex-start');
const flexend = document.getElementById('flex-end');
const center = document.getElementById('center');
const spacearound = document.getElementById('space-around');
const spacebetween = document.getElementById('space-between');
const justifycontainer = document.getElementById('justify-content-container')
// const justifybutton = document.getElementsByClassName('justify-button')
const justifyButtons = document.querySelectorAll('.justify-button');
console.log(justifyButtons)

//resets background color of class .justify-content and sets display to flex
function resetJustifyBackgroundColor() {
    for (let i = 0; i < justifyButtons.length; i++){
    justifyButtons[i].style.backgroundColor = 'dodgerblue'
    }
    justifycontainer.style.display = 'flex'
}

//refactor using control flow
//highlight selected buttons and change justify-content property
function nonefunction() {
    resetJustifyBackgroundColor();
    none.style.backgroundColor = 'orange'
    justifycontainer.style.display = 'block'
    justifycontainer.style.justifyContent = 'none'
}
function flexstartfunction() {
    resetJustifyBackgroundColor();
    flexstart.style.backgroundColor = 'orange'
    justifycontainer.style.justifyContent = 'flex-start'
}
function flexendfunction() {
    resetJustifyBackgroundColor();
    flexend.style.backgroundColor = 'orange'
    justifycontainer.style.justifyContent = 'flex-end'
}
function centerfunction() {
    resetJustifyBackgroundColor();
    center.style.backgroundColor = 'orange'
    justifycontainer.style.justifyContent = 'center'
}
function spacearoundfunction() {
    resetJustifyBackgroundColor();
    spacearound.style.backgroundColor = 'orange'
    justifycontainer.style.justifyContent = 'space-around'
}
function spacebetweenfunction() {
    resetJustifyBackgroundColor();
    spacebetween.style.backgroundColor = 'orange';
    justifycontainer.style.justifyContent = 'space-between'

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
const classAlign = document.querySelectorAll('.align-items');

function resetAlignBackgroundColor() {
    for (let i = 0; i < classAlign.length; i++){
    classAlign[i].style.backgroundColor = 'dodgerblue'
    }
    justifycontainer.style.display = 'flex'
}

function flexstartalignfunction() {
    resetAlignBackgroundColor();
    flexstartalign.style.backgroundColor = 'orange';
    justifycontainer.style.alignItems = 'flex-start';
}
function flexendalignfunction() {
    resetAlignBackgroundColor();
    flexendalign.style.backgroundColor = 'orange';
    justifycontainer.style.alignItems = 'flex-end';
}
function flexcenteralignfunction() {
    resetAlignBackgroundColor();
    centeralign.style.backgroundColor = 'orange';
    justifycontainer.style.alignItems = 'center';
}
function baselinefunction() {
    resetAlignBackgroundColor();
    baseline.style.backgroundColor = 'orange';
    justifycontainer.style.alignItems = 'baseline';
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
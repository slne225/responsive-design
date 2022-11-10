let flex = document.getElementById('flex');
let button = document.getElementById('flex-button')


function blockDisplay() {
    if (flex.style.display === 'flex') {
        flex.style.display = 'block';
    } else { flex.style.display = 'flex'}
}

flex-button.addEventListener('click', blockDisplay)

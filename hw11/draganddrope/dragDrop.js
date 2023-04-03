const zones = document.querySelectorAll('.dragZone');
const secondPoligon = document.querySelector('.secondPoligon');
const img = document.querySelector('img');

zones.forEach(zone => {
    zone.addEventListener('dragover', prevent);
    zone.addEventListener('drop', dropElement);
    zone.addEventListener('dragstart', dragStart);
})


function dragStart(e){
    centerDrop(e);
}

function prevent(e){
    e.preventDefault();
}

function dropElement(e){
    
    centerDrop(e);
    this.appendChild(img);

}

function centerDrop(e){
    img.style.top = e.pageY - img.offsetHeight / 2 + 'px';
    img.style.left = e.pageX - img.offsetWidth / 2 + 'px';
}
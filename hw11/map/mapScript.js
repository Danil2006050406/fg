const region = document.querySelectorAll('path[data-region]');

region.forEach((item, i) => {
    item.addEventListener('mouseenter', createToolTip);
    item.addEventListener('mouseleave', removeToolTip);
});





function createToolTip(e){
    let region = this.getAttribute('data-region');
    let toolTip = document.createElement("div");
    toolTip.classList.add('toolTip');
    toolTip.innerText = region;
    toolTip.style.top = this.nextElementSibling.getAttribute('cy') + 'px';
    toolTip.style.left = this.nextElementSibling.getAttribute('cx') + 'px';
    document.body.appendChild(toolTip);
}

function removeToolTip(e){
    let toolTip = document.querySelector('.toolTip');
    toolTip.remove();
    console.log(e);
}
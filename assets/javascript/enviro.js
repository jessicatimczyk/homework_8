//BEE IMAGE FOLLOWS CURSER
const onMouseMove = (e) => {
    let curserBee = document.getElementById('curser_bee');
    curserBee.style.left = e.pageX + 'px';
    curserBee.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

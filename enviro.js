//function beeMouse(event) {
//    var mouseX = event.clientX;
//    var mouseY = event.clientY;
//    var curserBee = document.getElementById("curser_bee");
//    curserBee.style.left = mouseX + 'px';
//    curserBee.style.top = mouseY + 'px';
//}
//
//
//beeMouse(event);

//document.addEventListener('mousemove', function (e) {
//    let body = document.querySelector('body');
//    let curserBee = document.getElementById('curser_bee');
//    let left = e.offsetX;
//    let top = e.offsetY;
//    curserBee.style.left = left + 'px';
//    curserBee.style.top = top + 'px';
//});


const onMouseMove = (e) => {
    let curserBee = document.getElementById('curser_bee');
    curserBee.style.left = e.pageX + 'px';
    curserBee.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

window.addEventListener('contextmenu', RightClickMenu);
const rightMenu = document.querySelector('#rcb_menu');
const newTab = document.querySelector('#rcb_t6');
function RightClickMenu(e) {
    e.preventDefault();
    rightMenu.style.display = 'block';
    if (e.target.closest('a')) {
        newTab.style.display = 'block';
    } else {
        newTab.style.display = 'none';
    }
    let x = e.clientX, y = e.clientY,
    menuWidth = rightMenu.offsetWidth, menuHeight = rightMenu.offsetHeight,
    htmlWidth = document.body.clientWidth, htmlHeight = document.body.clientHeight;
    if (x + menuWidth < htmlWidth) rightMenu.style.left = x + 'px';
    else rightMenu.style.left = htmlWidth - menuWidth + 'px';
    if (y + menuHeight < htmlHeight) rightMenu.style.top = y + 'px';
    else rightMenu.style.top = htmlHeight - menuHeight + "px";
}
document.body.addEventListener('click', function () {
    rightMenu.style.display = 'none';
});
// document.querySelector('#rcb_menu').addEventListener('click', function (e) {
rightMenu.addEventListener('click', function (e) {
    switch (e.target.id) {
    case "rcb_t1":
        window.location.href="https://Tools.PJ568.eu.org/";
        break;
    case "rcb_t2":
        window.location.href="#";
        break;
    case "rcb_t3":
        window.history.back(-1);
        break;
    case "rcb_t4":
        window.history.forward(1);
        break;
    case "rcb_t5":
        window.location.reload();
        break;
    case "rcb_t6":
        if (e.target.closest('.open-in-new-tab')) {
            window.open(e.target.closest('.open-in-new-tab').getAttribute('href'), '_blank');
        }
        break;
    default:
        console.error(e.target.id);
        break;
    }
});
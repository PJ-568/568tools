window.addEventListener('contextmenu', RightClickMenu);
const rightMenu = document.querySelector('#rcb_menu');
const newTab = document.querySelector('#rcb_t6');
// const incertBtn = document.querySelector('#rcb_t7');
function RightClickMenu(e) {
    e.preventDefault();
    rightMenu.style.display = 'block';
    if (e.target.closest('a')) {
        newTab.style.display = 'block';
        // if (document.write(location.href) == 'https://tools.pj568.eu.org/') {incertBtn.style.display = 'block'}
        // incertBtn.style.display = 'block';
    } else {
        newTab.style.display = 'none';
        // incertBtn.style.display = 'none';
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

rightMenu.addEventListener('click', function (e) {
    switch (e.target.id) {
    case "rcb_t1":
        window.location.href="/";
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
        if (e.target.closest('a')) {
            var a = e.target.closest('a');
            var url = encodeURIComponent(a.getAttribute('href'));
            window.open(url);
        }
        break;
    case "rcb_t7":
        openBtnLink();
        break;
    default:
        console.error(e.target.id);
        break;
    }
});
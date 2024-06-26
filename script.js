let currentActiveDiv = null;
function toggleMenu() {
    var menu = document.querySelector('.side-menu');
    if (menu.style.left === '-25%') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-25%';
    }
}

function activeDiv(div) {
    if (currentActiveDiv) {
        currentActiveDiv.classList.remove('green-background');
    }
    div.classList.add('green-background');
    currentActiveDiv = div;
}

function toggleIcon() {
    var rightIcon = document.querySelector('.righticon');
    var downIcon = document.querySelector('.downicon');

    if (rightIcon.style.display === 'none') {
        rightIcon.style.display = 'inline-block';
        downIcon.style.display = 'none';
    } else {
        rightIcon.style.display = 'none';
        downIcon.style.display = 'inline-block';
    }
}

function toggleSubMenu(submenu) {
    var submenuItem = submenu.nextElementSibling;
    var rightIcon = submenu.querySelector('.righticon');
    var downIcon = submenu.querySelector('.downicon');

    submenuItem.style.display =
        submenuItem.style.display === 'block' ? 'none' : 'block';

    if (submenuItem.style.display === 'block') {
        rightIcon.style.display = 'none';
        downIcon.style.display = 'inline-block';
    } else {
        rightIcon.style.display = 'inline-block';
        downIcon.style.display = 'none';
    }

    activeDiv(submenu);
}



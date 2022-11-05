
function createMenuPage() {
        const header = document.querySelector('.header')
        const svg = document.querySelector('svg')
        svg.style.fill = "black"
        header.style.backgroundColor = "#ffedd5";
        header.style.color = "black"
        header.style.position = 'relative';

        const menu = document.createElement('div');
        menu.classList.add('menu')
        menu.innerHTML = "<h1>Our Menu</h1>"
        
    return menu
}

function loadMenu() {
    const main = document.getElementById('main')
    main.textContent = "";
    main.appendChild(createMenuPage())
}



export default loadMenu;
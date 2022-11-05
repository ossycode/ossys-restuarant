function createHambugerMenuPage() {
    // const header = document.querySelector('.header')
    // header.style.display = "none"
    const header = document.querySelector('.header')
    const svg = document.querySelector('svg')
    svg.style.fill = "black"
    header.style.backgroundColor = "#ffedd5";
    header.style.color = "black"
    header.style.position = 'relative';
    const footer = document.querySelector('.footer')
    // footer.style.display = "none"
    

    const navList = document.createElement('div');
    navList.classList.add('event')
    navList.innerHTML = "<ul> <li> Book a table </li> <li>Our menus </li> <li>Events & offers</li> <li>Gift cards </li> <li>Newsletter </li> <li> Contact us </li>     </ul>"
    
return navList
}

function hambugerMenuPage() {
const main = document.getElementById('main')
main.textContent = "";
main.appendChild(createHambugerMenuPage())
}



export default hambugerMenuPage;
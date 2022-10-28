
const content = document.getElementById('content')

function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')

    const nav = document.createElement('div');
    nav.classList.add('nav')

    const headerLogo = document.createElement('div');
    headerLogo.classList.add('logo')
    headerLogo.textContent  = "Ossy's";
    


    const navItems = document.createElement('div');
    navItems.classList.add('navItems')

    const navUL = document.createElement('ul');
    navUL.classList.add('navUL')

    const navBook = document.createElement('li');
    navBook.classList.add('navli')
    navBook.textContent = 'Book a table'

    const navMenu = document.createElement('li');
    navMenu.classList.add('navli')
    navMenu.textContent = 'Menus'


    const navEvents = document.createElement('li');
    navEvents.classList.add('navli')
    navEvents.textContent = 'Events & offers'


    const navContact = document.createElement('li');
    navContact.classList.add('navli')
    navContact.textContent = 'Contact'


    const hambugerMenu = document.createElement('div')
    hambugerMenu.classList.add('hambugerMenu')
    const aLink = document.createElement('a')
    aLink.classList.add('aLink')
    const svgImage = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="50"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>'
    aLink.innerHTML = svgImage;

    hambugerMenu.appendChild(aLink);
    navUL.appendChild(navBook);
    navUL.appendChild(navMenu);
    navUL.appendChild(navEvents);
    navUL.appendChild(navContact);

    navItems.appendChild(navUL);
    nav.appendChild(headerLogo);
    nav.appendChild(navItems);
    nav.appendChild(hambugerMenu);
    header.appendChild(nav);
    return header;
};


function createMain() {
    const main = document.createElement('div')
    main.classList.add('main')

    const firstMain = document.createElement('div')
    firstMain.classList.add('firstMain')
    
    
    main.appendChild(firstMain)
    return main;
};

function createFooter() {
    const footer = document.createElement('div')
    footer.classList.add('footer')
    return footer;
};


function initialisePage() {
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export default initialisePage;
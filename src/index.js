import {initialisePage, createMain} from './page-setup';
import loadMenu from './menus.js';
import loadContact from './contact';
import loadEvent from "./events";
import loadBooking from "./book";
import hambugerMenuPage from "./hambergermenu";

initialisePage();
loadHomepage()
menuPage() 
loadContactPage()
loadEventPage()
loadBookingPage()
loadHambugerMenuPage()



function loadHomepage() {
    const homePage = document.querySelector('#headerLogo');
    homePage.addEventListener('click', () => {
    const header = document.querySelector('.header')
    header.style.backgroundColor = "rgba(0,0,0,0.8)";
    header.style.color = "white"
    header.style.position = 'fixed';
    const svg = document.querySelector('svg')
    svg.style.fill = "white"

    const main = document.getElementById('main')
    main.textContent = "";
    main.appendChild(createMain())
    })
}

function menuPage() {
    const menuPage = document.getElementById('navMenu');
    menuPage.addEventListener('click' , (e) => {
    if (e.target.classList.contains("active")) return; {
        menuPage.classList.add('active')
        loadMenu()
        menuPage.classList.remove('active')
    }
})
}

function loadContactPage() {
    const contactbtn = document.getElementById('navContact');
    contactbtn.addEventListener('click' , (e) => {
    if (e.target.classList.contains("active"))return;  {
        contactbtn.classList.add('active')
        loadContact()
        contactbtn.classList.remove('active')
    }
});
};

function loadEventPage() {
    const eventBtn = document.getElementById('navEvents');
    eventBtn.addEventListener('click' , (e) => {
    if (e.target.classList.contains("active"))return;  {
        eventBtn.classList.add('active')
        loadEvent()
        eventBtn.classList.remove('active')
    }
});
};

function loadBookingPage() {
    const bookingBtn = document.getElementById('navBook');
    bookingBtn.addEventListener('click' , (e) => {
    if (e.target.classList.contains("active"))return;  {
        bookingBtn.classList.add('active')
        loadBooking()
        bookingBtn.classList.remove('active')
    }
});
};

function loadHambugerMenuPage() {
    const hambugerMenuBtn = document.getElementById('hambugerMenu');
    hambugerMenuBtn.addEventListener('click' , (e) => {
    if (e.target.classList.contains("active"))return;  {
        hambugerMenuBtn.classList.add('active')
        hambugerMenuPage()
        hambugerMenuBtn.classList.remove('active')
    }
});
};
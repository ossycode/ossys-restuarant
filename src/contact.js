
function createContactPage() {
    const header = document.querySelector('.header')
    header.style.backgroundColor = "#ffedd5";
    header.style.color = "black"
    header.style.position = 'relative';
    const svg = document.querySelector('svg')
    svg.style.fill = "black"

    const contact = document.createElement('div');
    contact.classList.add('contact')
    contact.innerHTML = "<h1>Contact us</h1>"
    
return contact
}

function loadContact() {
const main = document.getElementById('main')
main.textContent = " ";
main.appendChild(createContactPage())
}



export default loadContact;
function createEventPage() {
    const header = document.querySelector('.header')
    const svg = document.querySelector('svg')
    svg.style.fill = "black"
    header.style.backgroundColor = "#ffedd5";
    header.style.color = "black"
    header.style.position = 'relative';

    const event = document.createElement('div');
    event.classList.add('event')
    event.innerHTML = "<h1>Up coming Events</h1>"
    
return event
}

function loadEvent() {
const main = document.getElementById('main')
main.textContent = "";
main.appendChild(createEventPage())
}



export default loadEvent;
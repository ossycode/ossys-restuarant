
function createBookingPage() {
    const header = document.querySelector('.header')
    const svg = document.querySelector('svg')
    svg.style.fill = "black"
    header.style.backgroundColor = "#ffedd5";
    header.style.color = "black"
    header.style.position = 'relative';

    const booking = document.createElement('div');
    booking.classList.add('event')
    booking.innerHTML = "<h1>Book a table</h1>"
    
return booking
}

function loadBooking() {
const main = document.getElementById('main')
main.textContent = "";
main.appendChild(createBookingPage())
}



export default loadBooking;
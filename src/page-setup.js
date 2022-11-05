
const content = document.getElementById('content')

function createHeader() {
    const header = document.createElement('div')
    header.classList.add('header')

    const nav = document.createElement('div');
    nav.classList.add('nav')

    const headerLogo = document.createElement('div');
    headerLogo.classList.add('logo')
    headerLogo.id = 'headerLogo';
    headerLogo.textContent  = "Ossy's";
    


    const navItems = document.createElement('div');
    navItems.classList.add('navItems')

    const navUL = document.createElement('ul');
    navUL.classList.add('navUL')

    const navBook = document.createElement('li');
    navBook.classList.add('navli')
    navBook.id = 'navBook' ;
    navBook.textContent = 'Book a table'

    const navMenu = document.createElement('li');
    navMenu.classList.add('navli');
    navMenu.id = 'navMenu' ;
    navMenu.textContent = 'Menus'


    const navEvents = document.createElement('li');
    navEvents.classList.add('navli')
    navEvents.id = 'navEvents' ;
    navEvents.textContent = 'Events & offers'


    const navContact = document.createElement('li');
    navContact.classList.add('navli')
    navContact.id = 'navContact' ;
    navContact.textContent = 'Contact'


    const hambugerMenu = document.createElement('div')
    hambugerMenu.classList.add('hambugerMenu')
    hambugerMenu.id = 'hambugerMenu'
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


const createMain = () => {
    const main = document.createElement('div')
    main.classList.add('main')
    main.id = 'main';

    const firstMain = document.createElement('div')
    firstMain.classList.add('firstMain')
    
    //Create the slider
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    const slider1 = document.createElement('img')
    slider1.setAttribute('src', '../dist/assets/images/image1.jpg')

    const slider2 = document.createElement('img')
    slider2.setAttribute('src', '../dist/assets/images/Halloween-Pancake_2-3.jpg')

    const slider3 = document.createElement('img')
    slider3.setAttribute('src', '../dist/assets/images/image1.jpg')

    const slider4 = document.createElement('img')
    slider4.setAttribute('src', '../dist/assets/images/Halloween-Pancake_2-3.jpg')

    // Create the information
    const firstMainInfo = document.createElement('div')
    firstMainInfo.classList.add('firstMainInfo')
    firstMainInfo.innerHTML = " <h1>HERE'S TO GOOD FRIENDS, GOOD FOOD & GOOD TIMES</h1>" 
    firstMain.appendChild(firstMainInfo)

    //Create the form to book a table on the main screen

    const people = ['1 People', '2 People', '3 People', '4 People', '5 People', '6 People',
    '7 People', '8 People','9 People','10 People','11 People','12 People','13 People','14 People',
    '15 People']

    const bookTable =  document.createElement('div');
    bookTable.classList.add('bookTable')
    bookTable.innerHTML = "<h2>Book a table</h2>"

    const bookTableForm =  document.createElement('form');
    bookTableForm.classList.add('bookTableForm')
    bookTableForm.setAttribute('method',"post");
    bookTableForm.setAttribute('action',"submit.php");

    const locationInput = document.createElement("input");
    locationInput.classList.add('locationInput')
    locationInput.setAttribute('type',"text");
    locationInput.setAttribute('name',"location")
    locationInput.setAttribute('placeholder',"Enter location")

    const selectList = document.createElement("select");
    selectList.classList.add('mySelect')
    

    //Create and append the options
    for (let i = 0; i < people.length; i++) {
        let option = document.createElement("option");
        option.value = people[i];
        option.text = people[i];
        selectList.appendChild(option);
    }

    const dateInput = document.createElement("input");
    dateInput.classList.add('dateInput')
    dateInput.setAttribute('type',"date");
    dateInput.setAttribute('name',"date")
    
    const timeInput = document.createElement("input");
    timeInput.classList.add('timeInput')
    timeInput.setAttribute('type',"time");
    timeInput.setAttribute('name',"time")

    const bookTableFormBtn = document.createElement("input");
    bookTableFormBtn.classList.add('formBtn')
    bookTableFormBtn.setAttribute('type',"submit");
    bookTableFormBtn.setAttribute('value',"GO");


    bookTableForm.appendChild(locationInput);
    bookTableForm.appendChild(selectList);
    bookTableForm.appendChild(dateInput);
    bookTableForm.appendChild(timeInput);
    bookTableForm.appendChild(bookTableFormBtn);
    bookTable.appendChild(bookTableForm)
    firstMain.appendChild(bookTable)


    wrapper.appendChild(slider1)
    wrapper.appendChild(slider2)
    wrapper.appendChild(slider3)
    wrapper.appendChild(slider4)
    firstMain.appendChild(wrapper)
    main.appendChild(firstMain)


    const whatOn = document.createElement("div");
    whatOn.classList.add('whatOn')
    whatOn.innerHTML = "<h1>What's on at Ossy's</h1>"
    main.appendChild(whatOn)

    const whatOnInfo1 = document.createElement("div");
    whatOnInfo1.classList.add('whatOnInfo1')
    

    const whatOnInfo1TopLeft = document.createElement("div");
    whatOnInfo1TopLeft.classList.add('whatOnInfo1TopLeft')
    whatOnInfo1.appendChild(whatOnInfo1TopLeft)

    const whatOnInfo1TopRight = document.createElement("div");
    whatOnInfo1TopRight.classList.add('whatOnInfo1TopRight')
    whatOnInfo1.appendChild(whatOnInfo1TopRight)
    whatOnInfo1TopRight.innerHTML = "<div> <h2>Christmas at Ossy's</h2><p> Get Christmas Party Ready with Ossy's! </p> <button type='submit'>Find our more </button></div>";


    const whatOnInfo1DownLeft = document.createElement("div");
    whatOnInfo1DownLeft.classList.add('whatOnInfo1DownLeft')
    whatOnInfo1.appendChild(whatOnInfo1DownLeft)
    whatOnInfo1DownLeft.innerHTML = "<div> <h2>Seasonal Set Menu</h2><p> Sometimes being spoilt for choice makes it hard to make a choice at all. Fortunately our <br> carefully selected set menu makes it easier</p> <button type='submit'>Find our more </button></div>";


    const whatOnInfo1DownRight = document.createElement("div");
    whatOnInfo1DownRight.classList.add('whatOnInfo1DownRight')
    whatOnInfo1.appendChild(whatOnInfo1DownRight)

    main.appendChild(whatOnInfo1)
    return main;
};

function createFooter() {
    const footer = document.createElement('div')
    footer.classList.add('footer')

    const footerInfo = document.createElement('div')
    footerInfo.classList.add('footerInfo')

    const footerLogo = document.createElement('div');
    footerLogo.classList.add('footerLogo')
    footerLogo.innerHTML  = "<h1>Ossy's</h1>";

    const footerInfoDiv1 = document.createElement('div');
    footerInfoDiv1.classList.add('footerLogoUL1')
    const footerLogoUL1 = document.createElement('ul');
    footerLogoUL1.classList.add('footerLogoUL')
    footerInfoDiv1.appendChild(footerLogoUL1)

    const Ul1li1 = document.createElement('li');
    Ul1li1.textContent  = "Book a table";
    footerLogoUL1.appendChild(Ul1li1)

    const Ul1li2 = document.createElement('li');
    Ul1li2.textContent  = "Menus";
    footerLogoUL1.appendChild(Ul1li2)

    const Ul1li3 = document.createElement('li');
    Ul1li3.textContent  = "Private dinning";
    footerLogoUL1.appendChild(Ul1li3)

    const Ul1li4 = document.createElement('li');
    Ul1li4.textContent  = "Locations";
    footerLogoUL1.appendChild(Ul1li4)
    
    const footerInfoDiv2 = document.createElement('div');
    footerInfoDiv2.classList.add('footerLogoUL2')
    const footerLogoUL2 = document.createElement('ul');
    footerLogoUL2.classList.add('footerLogoUL')
    footerInfoDiv2.appendChild(footerLogoUL2)

    const Ul2li1 = document.createElement('li');
    Ul2li1.textContent  = "Contact us";
    footerLogoUL2.appendChild(Ul2li1)

    const Ul2li2 = document.createElement('li');
    Ul2li2.textContent  = "FAQs";
    footerLogoUL2.appendChild(Ul2li2)

    const Ul2li3 = document.createElement('li');
    Ul2li3.textContent  = "Join the team";
    footerLogoUL2.appendChild(Ul2li3)

    const Ul2li4 = document.createElement('li');
    Ul2li4.textContent  = "Terms & Conditions";
    footerLogoUL2.appendChild(Ul2li4)
    

    const footerSocial = document.createElement('div');
    footerSocial.classList.add('footerSocial')
    const footerSocialh2 = document.createElement('h2');
    footerSocialh2.textContent  = "Follow us";
    footerSocial.appendChild(footerSocialh2)
    

    const footerNewsletter = document.createElement('div');
    footerNewsletter.classList.add('footerNewsletter')
    const footerNewsletterh2 = document.createElement('h2');
    footerNewsletterh2.textContent  = "Newsletter";
    footerNewsletter.appendChild(footerNewsletterh2)
    const footerNewsletterBtn = document.createElement('button');
    footerNewsletterBtn.classList.add('footerNewsletterBtn')
    footerNewsletterBtn.setAttribute('type', 'submit')
    footerNewsletterBtn.textContent  = "Sign up";
    footerNewsletter.appendChild(footerNewsletterBtn)


    const footerPtag = document.createElement('p');
    footerPtag.classList.add('footerPtag')
    footerPtag.innerHTML = "<p> Website by OssyLab. </p>"
   
    footerInfo.appendChild(footerLogo)
    footerInfo.appendChild(footerInfoDiv1)
    footerInfo.appendChild(footerInfoDiv2)
    footerInfo.appendChild(footerSocial)
    footerInfo.appendChild(footerNewsletter)

    footer.appendChild(footerInfo)
    footer.appendChild(footerPtag)
    return footer;
};


const initialisePage = () => {
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export  {
    initialisePage, 
    createMain
};
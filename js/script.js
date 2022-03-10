const popupArr = [
    {
      id:1,
      title: 'Profesional Art Printing Data More',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      piture: './img/Tags.png',
    },
    {
      id:2,
      title: 'Data Dashboard healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      piture: './img/Tags.png',
    },
    {
      id:3,
      title: 'Awesome Website Portfolio Design',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      piture: './img/Tags.png',
    },
    {
      id:4,
      title: 'Profesional Art Printing Data More',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      piture: './img/Tags.png',
    },
    {
      id:5,
      title: 'Data Dashboard healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      piture: './img/Tags.png',
    },
    {
      id:6,
      title: 'Awesome Website Portfolio Design',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      piture: './img/Tags.png',
    },
  ];
  
let menu = document.querySelector(".burger-icon");
let menuBody = document.querySelector(".menu")
let close = document.querySelector(".close_btn");
let clsoePopupBtn = document.querySelector('.popup_close');
let popup = document.querySelector('.popup');
let sectionPopup=document.querySelector('.sectionPopup');
let portfolio = document.querySelector("#portfolio");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");
let logo = document.querySelector(".header a");
let cartsContainer = document.querySelector('#cartsContainer');
/* Elio Changes */
const button1 = document.getElementById('button1');
function closePopup(){
  sectionPopup.style.display = 'none'; 
}
function showPopup(projectId) {
  const project = popupArr.find((pr) => pr.id === projectId);
  fetch('DetailPopup.txt')
    .then((response) => response.text())
    .then((text) => {
      sectionPopup.innerHTML = text
      .replace('{project.title}', project.title)
      .replace('class="popup_close"','class="popup_close" onclick="closePopup()"')
    });
    sectionPopup.style.display = 'block'; 
}
/* Elio Changes */
button1.addEventListener('click', showPopup.bind(null, 1), false);

function toggle(menu){
    menu.classList.toggle('openMenu');
    const menuImg=document.querySelector('.imageHamburguer');
    menuImg.classList.toggle('imageIcon');
    logo.classList.toggle('logo-active');
}

// clsoePopupBtn.addEventListener('click', () => {
//     closePopup();
//   });

  const popelement = (cartDesign) => {
    const cardDiv = document.createElement('div');
    const cardH2 = document.createElement('h2');
    const cardP = document.createElement('p');
    const cardDiv2 = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardBtn = document.createElement('button');
    cardDiv.classList = 'cart-2';
    cardBtn.classList = 'card-btn-2';
    cardH2.textContent = cartDesign.title;
    cardP.textContent = cartDesign.description;
    cardImg.srcset = cartDesign.piture;
    cardBtn.textContent = 'See Project';
    cardBtn.setAttribute('onclick', 'closePopup()');
    cardDiv.appendChild(cardH2);
    cardDiv.appendChild(cardP);
    cardDiv.appendChild(cardDiv2);
    cardDiv.appendChild(cardBtn);
    cardDiv2.appendChild(cardImg);
    cartsContainer.appendChild(cardDiv);
  };
  
  popupArr.forEach((element) => {
    popelement(element);
  });
  
  
const popupArr = [
    {
      title: 'Profesional Art Printing Data More',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      piture: './img/Tags.png',
    },
    {
      title: 'Data Dashboard healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      piture: './img/Tags.png',
    },
    {
      title: 'Awesome Website Portfolio Design',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      piture: './img/Tags.png',
    },
    {
      title: 'Profesional Art Printing Data More',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      piture: './img/Tags.png',
    },
    {
      title: 'Data Dashboard healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      piture: './img/Tags.png',
    },
    {
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
let portfolio = document.querySelector("#portfolio");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");
let logo = document.querySelector(".header a");
let cartsContainer = document.querySelector('#cartsContainer');


function toggle(menu){
    menu.classList.toggle('openMenu');
    const menuImg=document.querySelector('.imageHamburguer');
    menuImg.classList.toggle('imageIcon');
    logo.classList.toggle('logo-active');
}

clsoePopupBtn.addEventListener('click', () => {
    closePopup();
  });
  
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
  
  
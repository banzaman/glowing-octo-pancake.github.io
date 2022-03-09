let menu = document.querySelector(".burger-icon");
let menuBody = document.querySelector(".menu")
let close = document.querySelector(".close_btn");

let portfolio = document.querySelector("#portfolio");
let about = document.querySelector("#about");
let contact = document.querySelector("#contact");
let logo = document.querySelector(".header a");


function toggle(menu){
    menu.classList.toggle('openMenu');
    const menuImg=document.querySelector('.imageHamburguer');
    menuImg.classList.toggle('imageIcon');
    logo.classList.toggle('logo-active');
}
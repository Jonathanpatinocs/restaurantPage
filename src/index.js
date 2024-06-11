import _, { first } from 'lodash';
import './style-home.css';
import './main.css'
import Logo from './logo-light.png';
import { createHomePage }from './home.js';
import { createMenuPage } from './menu';
import { createAboutPage } from './about';

function createHeader() {
    const header = document.getElementById('header');
    const headerTitle = document.createElement('div');
    const nav = document.getElementById('nav');
    const logo = new Image();
    logo.src = Logo;
    logo.id = 'headerLogo';
    headerTitle.innerHTML = _.join(['Johnys', 'Coffee'], ' ')
    headerTitle.classList.add('headerTitle');

    headerTitle.appendChild(logo);
    header.insertBefore(headerTitle, nav);
}

const homeButton = document.getElementById('Home');
const menuButton = document.getElementById('Menu');
const aboutButton = document.getElementById('About');
const contentDiv = document.getElementById('content');

function clear() {
    while(contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild);
    }
    homeButton.classList.remove('pageSelected');
    menuButton.classList.remove('pageSelected');
    aboutButton.classList.remove('pageSelected')
}

homeButton.addEventListener('click' , () => {
    clear();
    createHomePage();
    homeButton.classList.add('pageSelected');
})

menuButton.addEventListener('click', ()=> {
    clear();
    createMenuPage();
    menuButton.classList.add('pageSelected');
})
aboutButton.addEventListener('click', ()=> {
    clear();
    createAboutPage();
    aboutButton.classList.add('pageSelected');
})

createHomePage();
createHeader();




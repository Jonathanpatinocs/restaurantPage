import _ from 'lodash';
import './style-home.css';
import './main.css'
import Logo from './logo-light.png';
import { createHomePage }from './home.js';


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
createHomePage();
createHeader();

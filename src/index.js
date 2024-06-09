import _ from 'lodash';
import './style.css';
import Icon from './icon-light.png';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello');

    const icon_light = new Image();
    icon_light.src = Icon;

    element.appendChild(icon_light);
    return element;
}
console.log("helo");
document.body.appendChild(component());
import menuData from './menu.json';
import menuTemplate from './templates/menu.hbs';

const ulMenu = document.querySelector("ul.js-menu");
ulMenu.innerHTML = menuData.map(x => menuTemplate(x)).join('');
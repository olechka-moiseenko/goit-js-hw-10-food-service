import menuItemsArr from './menu.json';
const ulMenu = document.querySelector("ul.js-menu");
const menuItems = menuItemsArr.map(
  (x) => `<li class="menu__item">
  <article class="card">
    <img
    src= ${x.image}
    alt= ${x.image}
    class="card__image"
  />
  <div class="card__content">
  <h2 class="card__name">${x.name}</h2>
  <p class="card__price">
    <i class="material-icons"> monetization_on </i>
   ${x.price}
  </p>

  <p class="card__descr">
  ${x.description}
  </p>
  <ul class="tag-list">
     ${x.ingredients.map(i => `<li class="tag-list__item">${i}</li>`).join('')}
  </ul>
</div>
<button class="card__button button">
<i class="material-icons button__icon"> shopping_cart </i>
В корзину
</button>
</article>
</li>`
);
ulMenu.innerHTML = menuItems.join("");

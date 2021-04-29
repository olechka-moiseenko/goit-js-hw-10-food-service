const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');

function setTheme() {
  const theme = localStorage.getItem('theme');
  console.log(`theme: ${theme}`);
  if (theme === 'dark') {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
  }
  else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
  }
}

const checkbox = document.querySelector("#theme-switch-toggle");
checkbox.checked = localStorage.getItem('theme') === 'dark';
setTheme();

checkbox.addEventListener("change", (e) => {
    localStorage.setItem('theme', e.target.checked ? 'dark' : 'light');
    setTheme();
});
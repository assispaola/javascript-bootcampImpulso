// chamando elementos
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; // coloca o index pois retorna uma coleção/array
const footer = document.getElementsByTagName('footer')[0];
// transformando classe darkModeClass em uma constante (pq vai usar várias vezes)
const darkModeClass = 'dark-mode';

// add evento no elemento selecionado
button.addEventListener('click', changeMode)


// funtion PRINCIPAL Dark Mode
function changeMode() {
  changeClasses();
  changeText();
}

// function para o evento de mudar CLASSES (changeClasses)
function changeClasses() {
  button.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}


// function para o evento de mudar os TEXTOS (changeText)
function changeText() {
  const lightMode = 'Light Mode';
  const darkMode = 'Dark Mode';

  if (body.classList.contains(darkModeClass)) { // ele verifica se na classe button existe ('')
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode + ' ON';
    return;
  }

  button.innerHTML = darkMode;
  h1.innerHTML = lightMode + ' ON'
  return;
}
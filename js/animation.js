import anime from "../node_modules/animejs/lib/anime.es.js";

function handleCheckbox() {
    let container = document.createElement('div');
    container.classList.add('checkbox-container');
    let checkbox = document.createElement('div');
    checkbox.classList.add('checkbox');
    container.appendChild(checkbox);
}
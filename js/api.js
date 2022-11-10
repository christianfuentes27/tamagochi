import anime from '../node_modules/animejs/lib/anime.es.js';

var form = document.getElementById('form');

function addCheckbox(n) {
    for (let i = 0; i < n; i++) {
        let input = document.createElement('input');
        input.type = 'checkbox';
        form.appendChild(input);
    }
}

function addRange(n) {
    for (let i = 0; i < n; i++) {
        let input = document.createElement('input');
        input.type = 'range';
        form.appendChild(input);
    }
}

function init(json) {
    for (let key in json) {
        if(api.hasOwnProperty(key)) {
            eval(key)(json[key]);
        }
    }
}

var api = api || {};
api.init = init;
api.addCheckbox = addCheckbox;
api.addRange = addRange;

export default api;
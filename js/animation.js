import anime from "../node_modules/animejs/lib/anime.es.js";

function handleEvents(form) {
    createLabel(form);
    createCheckbox(form);
    createButton(form);
    createRange(form);
}

function createLabel(form) {
    let labels = getLabels(form);
    labels.forEach(labelForm => {
        let container = document.createElement('div');
        container.classList.add(`${labelForm.innerHTML.toLowerCase()}`);
        let label = document.createElement('h4');
        label.innerHTML = labelForm.innerHTML;
        container.appendChild(label);
        document.body.appendChild(container);
    });
}

function createCheckbox(form) {
    let checkboxes = getInputs(form, "checkbox");
    checkboxes.forEach(checkboxForm => {
        let container = document.createElement('div');
        container.classList.add('checkbox-container');
        let checkbox = document.createElement('div');
        checkbox.classList.add('checkbox');
        container.appendChild(checkbox);
        document.querySelector('.subtitles').appendChild(container);

        container.addEventListener('click', () => {
            movingCheckbox(container, checkbox, checkboxForm);
        });
    });
}

function createButton(form) {
    let buttons = getInputs(form, "button");
    buttons.forEach(buttonForm => {
        let btn = document.createElement('div');
        btn.classList.add('confirm-btn');
        btn.innerHTML = buttonForm.value;
        document.querySelector('.confirm').appendChild(btn);

        btn.addEventListener('mouseover', () => {
            anime({
                targets: btn,
                duration: 500,
                scale: 1.2,
                easing: 'easeInOutSine'
            });
        });

        btn.addEventListener('mouseout', () => {
            anime({
                targets: btn,
                duration: 500,
                scale: 1,
                easing: 'easeInOutSine'
            });
        });
    });
}

function createRange(form) {
    let ranges = getInputs(form, "range");
    ranges.forEach(rangeForm => {
        let range = document.createElement('input');
        range.type = rangeForm.type;
        document.querySelector('.volume').appendChild(range);

        range.addEventListener('change', () => {
            rangeForm.value = range.value;
        });
    });
}

function movingCheckbox(container, checkbox, checkboxForm) {
    let background = '#fff';
    let move = 0;
    if(!container.classList.contains('checked')) {
        container.classList.add('checked');
        checkboxForm.checked = true;
        move = 75;
        background = '#666';
    } else {
        container.classList.remove('checked');
        checkboxForm.checked = false;
    }
    
    anime({
        targets: checkbox,
        translateX: move,
        backgroundColor: background,
        duration: 500,
        easing: 'easeInOutExpo'
    });
}

function getInputs(form, type) {
    let inputs = [];
    for (let input of form.children) {
        if (input.getAttribute('type') == type) {
            inputs.push(input);
        }
    }
    return inputs;
}

function getLabels(form) {
    let labels = [];
    for (let label of form.children) {
        if (label.tagName == "LABEL") {
            labels.push(label);
        }
    }
    return labels;
}

var myAnimation = myAnimation || {};
myAnimation.handleEvents = handleEvents;

export default myAnimation;
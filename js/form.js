var form;

function initForm(config) {
    form = document.createElement('form');
    for (let key in config) {
        if (key === "elements") {
            handleElements(config[key]);
        } else {
            addAttribute(form, key, config[key]);
        }
    }
    document.body.appendChild(form);
    myForm.form = form;
}

function handleElements(elements) {
    for (const element of elements) {
        if (Object.keys(element)[0] == "element") {
            if (element.element === "label") {
                addLabel(element);
            } else if (element.element == "input"){
                addInput(element);
            }
        }
    }
}

function addLabel(element) {
    let label = document.createElement('label');
    for (let key in element) {
        if (key == "content") {
            label.innerHTML = element[key];
        }
    }
    form.appendChild(label);
}

function addInput(element) {
    let validInputValues = ['checkbox', 'range', 'button'];
    let input = document.createElement('input');
    for (let key in element) {
        if ((key == "type" && validInputValues.includes(element[key])) || key == "id" || key == "value") {
            addAttribute(input, key, element[key]);
        }
    }
    form.appendChild(input);
}

function addAttribute(element, key, value) {
    element.setAttribute(key, value);
}

var myForm = myForm || {};
myForm.initForm = initForm;

export default myForm;
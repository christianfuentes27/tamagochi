import myForm from "./form.js";
import myAnimation from "./animation.js";

myForm.initForm({
    "id": "myform",
    "elements": [
        {
            "element" : "label",
            "content" : "Subtitles"
        },
        {
            "element" : "input",
            "type" : "checkbox",
            "id" : "check-1"
        },
        {
            "element" : "label",
            "content" : "Volume"
        },
        {
            "element" : "input",
            "type" : "range",
            "id" : "range-1"
        },
        {
            "element" : "label",
            "content" : "Confirm"
        },
        {
            "element" : "input",
            "type" : "button",
            "value" : "OK",
            "id" : "button-1"
        }
    ],
});

myAnimation.handleEvents(myForm.form);
import myForm from "./form.js";

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
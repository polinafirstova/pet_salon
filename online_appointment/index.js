const form = document.forms["form"];
const button = form.elements["button"];
const clientName = document.getElementById('name');
const clientPhone = document.getElementById('phone');
const clientComment = document.getElementById('comment');
const my_window = document.getElementsByClassName("window")[0];
const close_btn = document.getElementsByClassName("close_window")[0];
const ok_btn = document.getElementsByClassName("ok")[0];

let maskOptions = {
    mask: '+7 (000) 000-00-00',
    lazy: false
}

let mask = new IMask(phone, maskOptions);

const client = {
    name: "",
    phone: "",
    comment: ""
}

const inputArray = [];
inputArray.push(clientName);
inputArray.push(clientPhone);
inputArray.push(clientComment);

button.addEventListener('click', inputValid);

function inputValid(event) {
    event.preventDefault();

    if (validation(form)) {
        openMyWindow();
    }
}

function validation(form) {
    let result = true;

    for (const input of inputArray) {
        if (input.value == "") {
            input.style.borderColor = "red";
            result = false;
        } else {
            input.style.borderColor = "green";
        }

        if (input.hasAttribute("data-reg")) {
            const inputValue = input.value;
            const inputReg = input.getAttribute("data-reg");
            const reg = new RegExp(inputReg);
            if (reg.test(inputValue)) {
                input.style.borderColor = "green";
                client.name = clientName.value;
            } else {
                input.style.borderColor = "red";
                result = false;
            }
        }
    };

    return result;
}

function openMyWindow() {
    my_window.style.opacity = "1";
    my_window.style.zIndex = "10";
    my_window.getElementsByClassName("greetings")[0].textContent = `Здравствуйте, ${client.name}!`;
}

close_btn.onclick = function () {
    my_window.style.opacity = "0";
    my_window.style.zIndex = "-1";
}

ok_btn.onclick = function () {
    my_window.style.opacity = "0";
    my_window.style.zIndex = "-1";
}

window.onclick = function (event) {
    if (event.target == my_window) {
        my_window.style.opacity = "0";
        my_window.style.zIndex = "-1";
    }
}
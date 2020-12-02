const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");


function forme() {
    var c = checkRequired([username, email, password, password2]);
    var u = checkLength(username, 3, 15);
    var l = checkLength(password, 6, 20);
    var e = checkEmail(email);
    var p = checkPassword(password, password2);
    if (c && u && l && e && p) {
        window.location.href = "home.html";
    } else {
        alert("please fill right information");
    }
}


function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "signup-form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "signup-form-control success";
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
        return true;
    } else {
        showError(input, "Email is not valid");
        return false;

    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArray) {
    var checkr = 0
    inputArray.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
            checkr = checkr + 1;

        }
    });
    if (checkr == 4) {
        return true;
    } else {
        return false;
    }
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be atleast ${min} characters`
        );
        return false;
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
        return false;
    } else {
        showSuccess(input);
        return true;

    }
}

function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
        return false;
    } else {

        return true;
    }
}
form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPassword(password, password2);
});
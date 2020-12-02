const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
var counter = 0

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
        counter = counter + 1;
    } else {
        showError(input, "Email is not valid");
        //counter = counter - 1;
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
            //counter = counter - 1;
        } else {
            showSuccess(input);
            counter = counter + 1;
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be atleast ${min} characters`
        );
        //counter = counter - 1;
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
        //counter = counter - 1;
    } else {
        showSuccess(input);
        counter = counter + 1;
    }
}

function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
        //counter = counter - 1;
    } else {
        counter = counter + 1;
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPassword(password, password2);
    direct();

});

function direct() {
    // if (counter == 8) {
    //     window.location.href = "home.html";
    // }
    console.log(counter)
}
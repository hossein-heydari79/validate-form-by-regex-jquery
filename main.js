const username = $("#name");
const email = $("#email");
const pass = $("#pass");
const tel = $("#tel");
const warn = $("#warn");

const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const phonePattern = /^(\+98|0)?9\d{9}$/;
const usernamePattern = /^[a-zA-Z]+([-_]?[a-zA-Z0-9]){4}/;

function validate(e) {
    if (username.val() == "" || email.val() == "" || pass.val() == "" || tel.val() == "") {
        warn.slideDown();
        warn.html("<strong>Error!</strong> Please fill in the blanks");
        return false;
    }

    else if (!username.val().match(usernamePattern)) {
        warn.slideDown();
        warn.html("<strong>Error!</strong> Please enter a valid username");
        return false;
    }

    else if (!email.val().match(emailPattern)) {
        warn.slideDown();
        warn.html("<strong>Error!</strong> Please enter a valid email");
        return false;
    }

    else if (!pass.val().match(passPattern)) {
        warn.slideDown();
        warn.html("<strong>Error!</strong> Please enter a valid password");
        return false;
    }

    else if (!tel.val().match(phonePattern)) {
        warn.slideDown();
        warn.html("<strong>Error!</strong> Please enter a valid phonenumber");
        return false;
    }


    else {
        warn.slideUp();
        alert("Send");
    }

}
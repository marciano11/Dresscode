var password_form = document.getElementById('inlog_password_form'), show_password = document.getElementById('show_password');

show_password.addEventListener('click', function (ev) {
    console.log('clicked');
    if (password_form.type === 'text'){
        password_form.type = 'password';
        show_password.innerHTML = "show password"

    }else {
        password_form.type = 'text';
        show_password.innerHTML = "hide password";
    }

} );




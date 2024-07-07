
document.addEventListener('DOMContentLoaded', function () {
    //1. Add a label to each of the input fields: username, password, confirm password
    const usernameLabel = document.createElement('label');
    usernameLabel.setAttribute('for', 'username');
    usernameLabel.textContent = 'Username:';
    document.getElementById('username').insertAdjacentElement('beforebegin', usernameLabel);

    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', 'password');
    passwordLabel.textContent = 'Password:';
    document.getElementById('password').insertAdjacentElement('beforebegin', passwordLabel);

    const confirmPasswordLabel = document.createElement('label');
    confirmPasswordLabel.setAttribute('for', 'confirmPassword');
    confirmPasswordLabel.textContent = 'Confirm Password:';
    document.getElementById('confirmPassword').insertAdjacentElement('beforebegin', confirmPasswordLabel);


    //2. Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.

    document.getElementById('registrationForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // reset error messages
        if (document.getElementById('username').ariaValueMax.trim() === '') {

        }

        if (document.getElementById('password').value.trim() === '') {

        }

        if (document.getElementById('confirmPassword').value.trim() === '') {

        }
    })
});



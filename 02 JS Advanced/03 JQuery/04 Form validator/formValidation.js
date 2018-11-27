function validate () {
    let usernameField = $('#username');
    let emailField = $('#email');
    let passwordField = $('#password');
    let confirmPasswordField = $('#confirm-password');
    let companyField = $('#companyNumber');
    let companyPanel = $('#companyInfo');

    $('#submit').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        let isValidForm = true;
       
        if (/^[a-zA-Z0-9]{3,20}$/.test(usernameField.val())) {
            usernameField.css('border', 'none');
        } else {
            isValidForm = false;
            usernameField.css('border-color', 'red');
        }

        if (/^.*@.*\..*$/.test(emailField.val())) {
            emailField.css('border', 'none');
        } else {
            isValidForm = false;
            emailField.css('border-color', 'red');
        }

        let isValidPassword = /^\w{5,15}$/.test(passwordField.val());
        let isConfirmed = /^\w{5,15}$/.test(confirmPasswordField.val());


        if (isValidPassword && isConfirmed && passwordField.val() === confirmPasswordField.val()) {
            passwordField.css('border', 'none');
            confirmPasswordField.css('border', 'none');
        } else {
            isValidForm = false;
            passwordField.css('border-color', 'red');
            confirmPasswordField.css('border-color', 'red');
        }

        if (companyPanel.css('display') === 'block') {
            if (/^[1-9][0-9][0-9][0-9]$/.test(companyField.val())) {
                companyField.css('border', 'none');
            } else {
                isValidForm = false;
                companyField.css('border-color', 'red');
            }
        }

        if (isValidForm) {
            $('#valid').css('display', 'block');
        }
    });

    $('#company').on('change', function (e) {
        if ($(e.target).is(':checked')) {
            companyPanel.css('display', 'block');
        } else {
            companyPanel.css('display', 'none');
        }
    });
}


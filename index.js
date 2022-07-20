        const form = document.getElementById("main-form");
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const submitButton = document.getElementById("button");
        const firstNameError = document.getElementById("firstName-error");
        const lastNameError = document.getElementById("lastName-error");
        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");
        const lengthError = document.getElementById("length-error");
        const firstError = document.querySelector(".error-first");
        const lastError = document.querySelector(".error-last");
        const mailError = document.querySelector(".error-email");
        const passError = document.querySelector(".error-password");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
        });

        submitButton.addEventListener("click", (event) => {
            if (firstName.value === "") {
                firstNameError.style.display = "inline";
                firstError.style.display = "inline";
                firstName.style.borderColor = '#e74c3c';

            } else {
                firstName.style.borderColor = 'green';

            }
            setTimeout(() => {
                firstNameError.style.display = "none";
                firstError.style.display = "none";
                firstName.style.borderColor = 'hsl(246, 25%, 77%)';
            }, 2000);
            
            if (lastName.value === "") {
                lastNameError.style.display = "inline";
                lastError.style.display = "inline";
                lastName.style.borderColor = '#e74c3c';

            } else {
                lastName.style.borderColor = 'green';
            }
            setTimeout(() => {
                lastNameError.style.display = "none";
                lastError.style.display = "none";
                lastName.style.borderColor = 'hsl(246, 25%, 77%)';
            }, 2000);
            
            if (email.value === "") {
                emailError.style.display = "inline";
                mailError.style.display = "inline";
                email.style.borderColor = '#e74c3c';

            } 
            else {
                email.style.borderColor = 'green';;
            }
            setTimeout(() => {
                emailError.style.display = "none";
                mailError.style.display = "none";
                email.style.borderColor = 'hsl(246, 25%, 77%)';
            }, 2000);
            
            if (password.value === "") {
                passwordError.style.display = "inline";
                passError.style.display = "inline";
                password.style.borderColor = '#e74c3c';
            } else if (password.value.length < 8)  {
                lengthError.style.display = "inline";
                passError.style.display = "inline"
                password.style.borderColor = '#e74c3c';
            }
            
            else {
                password.style.borderColor = 'green';
            }
            setTimeout(() => {
                passwordError.style.display = "none";
                passError.style.display = "none";
                lengthError.style.display = "none";
                password.style.borderColor = 'hsl(246, 25%, 77%)';
            }, 2000);
            
        });
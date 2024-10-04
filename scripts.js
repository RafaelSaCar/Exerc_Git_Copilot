document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Email validation
        const emailValue = emailInput.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            alert('Insira um e-mail válido');
            valid = false;
        }

        // Password validation
        const passwordValue = passwordInput.value;
        if (passwordValue.length < 6) {
            alert('Quantidade de caracteres abaixo da mínima (6)');
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
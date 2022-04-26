const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#name');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const confirmEmail = document.querySelector('#email_confirm');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#password_confirm');
const cgu = document.querySelector('#cgu');

// firstName et lastName doivent contenir au moins 3 caractères
firstName.addEventListener('input', function (e) {
    if (e.target.value.length < 3) {
        e.target.setCustomValidity('Le prénom doit contenir au moins 3 caractères');
    } else {
        e.target.setCustomValidity('');
    }
});

lastName.addEventListener('input', function (e) {
    if (e.target.value.length < 3) {
        e.target.setCustomValidity('Le nom doit contenir au moins 3 caractères');
    } else {
        e.target.setCustomValidity('');
    }
});

// age doit être supérieur à 18 ans
age.addEventListener('input', function (e) {
    if (e.target.value < 18) {
        e.target.setCustomValidity('Vous devez avoir plus de 18 ans');
    } else {
        e.target.setCustomValidity('');
    }
});

// vérifier qu'il sagit bien d'une adresse email avec un regex
email.addEventListener('input', function (e) {
    if (!e.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        e.target.setCustomValidity('L\'adresse email n\'est pas valide');
    } else {
        e.target.setCustomValidity('');
    }
});

// email doit être valide et correspondre à la confirmation
confirmEmail.addEventListener('input', function (e) {
    if (e.target.value !== email.value) {
        e.target.setCustomValidity('Les adresses emails ne correspondent pas');
    } else {
        e.target.setCustomValidity('');
    }
});

// password doit contenir au moins 6 caractères
password.addEventListener('input', function (e) {
    if (e.target.value.length < 6) {
        e.target.setCustomValidity('Le mot de passe doit contenir au moins 6 caractères');
    } else {
        e.target.setCustomValidity('');
    }
});

// password doit correspondre à la confirmation
confirmPassword.addEventListener('input', function (e) {
    if (e.target.value !== password.value) {
        e.target.setCustomValidity('Les mots de passe ne correspondent pas');
    } else {
        e.target.setCustomValidity('');
    }
});

// cgu doit être coché
cgu.addEventListener('input', function (e) {
    if (!e.target.checked) {
        e.target.setCustomValidity('Vous devez accepter les conditions générales d\'utilisation');
    } else {
        e.target.setCustomValidity('');
    }
});

// cgu doit être afficher un css cocher si il est coché
cgu.addEventListener('change', function (e) {
    if (e.target.checked) {
        e.target.setCustomValidity('');
    } else {
        e.target.setCustomValidity('Vous devez accepter les CGU');
    }
});

// définir valueMissing pour les champs obligatoires
firstName.setCustomValidity('Le prénom est obligatoire');
lastName.setCustomValidity('Le nom est obligatoire');
age.setCustomValidity('L\'âge est obligatoire');
email.setCustomValidity('L\'adresse email est obligatoire');
confirmEmail.setCustomValidity('La confirmation de l\'adresse email est obligatoire');
password.setCustomValidity('Le mot de passe est obligatoire');
confirmPassword.setCustomValidity('La confirmation du mot de passe est obligatoire');
cgu.setCustomValidity('Vous devez accepter les CGU');





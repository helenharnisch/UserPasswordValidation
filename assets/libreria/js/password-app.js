'use strict';

const validatePassword = () => {
  let password = document.getElementById('password').value;
  let texto;
  let expresion = /[0-9]/;

  if (password === null || password === '' || password.length === 0) {
    texto = 'Ingrese su contraseña';
    document.getElementById('texto2').innerHTML = texto;
    return false;
  } else if (password.length < 3) {
    texto = 'Su contraseña tiene que ser mayor a 3 caracteres ';
    document.getElementById('texto2').innerHTML = texto;
    return false;
  } else if (password.length > 7) {
    texto = 'Su contraseña tiene que ser menor a 7 caracteres ';
    document.getElementById('texto2').innerHTML = texto;
    return false;
  } else if (!expresion.test(password)) {
    texto = 'Ingrese solo caracteres válidos (números)';
    document.getElementById('texto2').innerHTML = texto;
    return false;
  }
  document.getElementById('password').value = '';
  document.getElementById('texto2').innerHTML = '';
};

module.exports = validatePassword;

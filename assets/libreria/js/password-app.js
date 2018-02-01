'use strict';

const validatePassword = () => {
  let password = document.getElementById('password').value;
  let texto;
  let expresion = /[0-9]/;

  if (password === null || password === '' || password.length === 0) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese su nombre</span>';
    document.getElementById('texto2').innerHTML = texto;
    return false;
  } else if (password.length < 3) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Tiene que ser mayor a 3 caracteres</span>';
    document.getElementById('texto2').innerHTML = texto;
    return false;
  } else if (password.length > 7) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Su contraseña tiene que ser menor a 7 caracteres</span>';
    document.getElementById('texto2').innerHTML = texto;
    return false;
  } else if (!expresion.test(password)) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos (números)</span>';
    document.getElementById('texto2').innerHTML = texto;
    return false;
  }
  document.getElementById('password').value = '';
  document.getElementById('texto2').innerHTML = '';
};

module.exports = validatePassword;

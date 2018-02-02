'use strict';

const validateUser = () => {
  let usuario = document.getElementById('user').value;
  let texto;
  let expresion = /[a-zA-Z]/;

  if (usuario === null || usuario === '' || usuario.length === 0) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese su nombre</span>';
    document.getElementById('texto').innerHTML = texto;
    return false;
  } else if (usuario.length < 3) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Tiene que ser mayor o igual a 3 caracteres</span>';
    document.getElementById('texto').innerHTML = texto;
    return false;
  } else if (!expresion.test(usuario)) {
    texto = '<span style="color: #fff; background-color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo caracteres válidos</span>';
    document.getElementById('texto').innerHTML = texto;
    return false;
  }
  document.getElementById('user').value = '';
  document.getElementById('texto').innerHTML = '';
};

module.exports = validateUser;

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

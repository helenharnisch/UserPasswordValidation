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

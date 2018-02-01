'use strict';

const validateUser = () => {
  let usuario = document.getElementById('user').value;
  let texto;
  let expresion = /[a-zA-Z]/;

  if (usuario === null || usuario === '' || usuario.length === 0) {
    texto = 'Ingrese su nombre';
    document.getElementById('texto').innerHTML = texto;
    return false;
  } else if (usuario.length < 3) {
    texto = 'Su nombre tiene que ser mayor o igual a 3 caracteres';
    document.getElementById('texto').innerHTML = texto;
    return false;
  } else if (!expresion.test(usuario)) {
    texto = 'Ingrese solo caracteres válidos';
    document.getElementById('texto').innerHTML = texto;
    return false;
  }
  document.getElementById('user').value = '';
  document.getElementById('texto').innerHTML = '';
};

module.exports = validateUser;

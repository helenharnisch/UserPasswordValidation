'use strict';

  const validarNombre = () => {
  let usuario = document.getElementById('nombre').value;
  let texto;
  let expresion = /[a-zA-Z]/;

  if (usuario === null || usuario === '' || usuario.length === 0) {
    texto = '<span style= "color:red;">Ingrese su nombre</span>';
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
  document.getElementById('nombre').value = '';
  document.getElementById('texto').innerHTML = '';
};


module.exports = validarNombre;

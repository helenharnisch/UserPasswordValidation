const inputPassword = document.getElementById('sendbtn');
inputPassword.addEventListener('click', function() {
  let password = document.getElementById('contraseña').value;
  let texto;
  let expresion = /[0-9]/;

  if (password === null || password === '' || password.length === 0) {
    texto = '<span style= "color:red;">Ingrese su contraseña</span>';
    document.getElementById('texto2').innerHTML = texto;
    return false;
  } else if (password.length < 3) {
    texto = 'Su contraseña tiene que ser mayor o igual a 3 caracteres';
    document.getElementById('texto2').innerHTML = texto;
    return false;
  } else if (!expresion.test(password)) {
    texto = 'Ingrese solo caracteres válidos (números)';
    document.getElementById('texto2').innerHTML = texto;
    return false;
  }
  document.getElementById('contraseña').value = '';
  document.getElementById('texto2').innerHTML = '';

});

module.exports = validarNombre;
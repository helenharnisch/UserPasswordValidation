const validarNombre = () => {
  let usuario = document.getElementById('nombre').value;

  if (usuario === null || usuario === '' || usuario.length === 0) {
    alert('Ingrese su nombre!!!');
    return false;
  }
  else if (usuario.length < 3) {
    alert('Su nombre tiene que ser mayor o igual a 3 caracteres!!!');
    return false;
  }
  else if  {
    alert('Ingrese un nombre válido');
    return false;
  }


}

module.exports = validarNombre;



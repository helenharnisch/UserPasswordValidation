function validarFormulario(){
  var usuario = document.getElementById("nombre").value;

  if (usuario == null || usuario == ''){
    alert("ingrese su nombre");
    return false;
  }
}

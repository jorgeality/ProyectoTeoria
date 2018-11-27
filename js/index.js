M.AutoInit();


document.getElementById('email').addEventListener('input', function () {
  campo = event.target;
  valido = document.getElementById('emailOK');

  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  validar(campo.value, 'valido', 'invalido');
});

document.getElementById('phone').addEventListener('input', function () {
  campo = event.target;
  valido = document.getElementById('phoneOK');

  emailRegex = /^\+\d{2,3}\s\d{7,10}$/;
  //Se muestra un texto a modo de ejemplo, luego va a ser un icono

  validar(campo.value, 'valido', 'invalido');

});

function validar(fieldValue, field1, field2){
  if (fieldValue.length > 0) {
    if (emailRegex.test(fieldValue)) {
      document.getElementById(field1).style.display = 'block';
      document.getElementById(field2).style.display = 'none';
      document.getElementById(field1).innerHTML = '<h3 class="center-align">válido</h3>';
    } else {
      document.getElementById(field2).style.display = 'block';
      document.getElementById(field1).style.display = 'none';
      document.getElementById(field2).innerHTML = '<h3 class="center-align">incorrecto</h3>';
    }
  } else {

    document.getElementById(field2).style.display = 'none';
    document.getElementById(field1).style.display = 'none';
  }
}

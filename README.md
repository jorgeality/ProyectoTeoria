# ProyectoTeoria

en este repositorio en se encuentra un ejemplo sencillo de como a través de 
expresiones regulares se pueden validar correos electronicos y numeros telefonicos
con su respetivo indicativo del pais.

expresiones regulares usadas: 

 * /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i     :
 
   esta expresion valida que el correo cumpla con la siguiente sintaxis: algo@algo.algo
   
 * /^\+\d{2,3}\s\d{7,10}$/    :
   
   esta expresion valida que el numero de telefono digitado cumpla con las siguiente sintaxis : +indicativo espacio numero_de_7_a_10_numero

presentado por: 
* jorge martinez
* victor ramos

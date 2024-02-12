do{
  
  //Precio base
  var precio_base = 1000

  //Variables de utilidad
  var cantidad_hijos = 0
  var cantidad_propiedades = 0

  //Valores de los recargos 
  var edad_18 = 0.1 // 10%
  var edad_25 = 0.2 // 20%
  var edad_50 = 0.3 // 30%

  var casado_18 = 0.1 // 10%
  var casado_25 = 0.2 // 20%
  var casado_50 = 0.3 // 30%

  var hijos_recargo = 0.2 // 20%

  var propiedades_recargo = 0.35 // 35%

  var ingresos_recargo = 0.05 // 5%

  //Recargos
  var recargo = 0
  var recargo_casado = 0
  var recargo_hijos = 0
  var recargo_total = 0
  var recargo_propiedades = 0
  var recargo_ingresos = 0

  //Precio final 
  var precio_final = 0



  //Mensajes de alerta para ingresar datos 
  var nombre = prompt("Ingrese su nombre, por favor")
  var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

  //Conversión edad a números
  var edad_numero = parseInt(edad)

  //Para verificar cónyuge y edad de este/a si hubiese
  var casado = prompt("¿Está casado actualmente? Si/No")
  var edad_conyuge

  if("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("¿Que edad tiene su esposo/a? Ingrese solamente números")
  }

  var edad_conyuge_numero
  edad_conyuge_numero = parseInt(edad_conyuge)

  //Para verificar hijos y número de hijos si los hubiese
  var hijos = prompt("¿Tiene hijos o hijas? Si/No")

  if("SI" == hijos.toUpperCase()){
    cantidad_hijos = prompt("¿Cuántos hijos/hijas tiene? Ingrese solamente números")
  }

  var cantidad_hijos_numero = parseInt(cantidad_hijos)

  //Para verificar si cuenta con propiedades
  var propiedades = prompt("¿Es actualmente dueño de alguna propiedad? Si/No")

  if("SI" == propiedades.toUpperCase()){
    cantidad_propiedades = prompt("¿Con cuántas propiedades cuenta? Ingrese sólo números")
  }
  var cantidad_propiedades_numero = parseInt(cantidad_propiedades)

  //Para solicitar su salario
  var salario = prompt("¿Cuánto es su salario mensual? Ingrese solamente números")

  //Calculo de recargos por edad del asegurado
  if(edad_numero>=18 && edad_numero<25){
    recargo = precio_base * edad_18
  }else if(edad_numero>=25 && edad_numero<50){
    recargo = precio_base * edad_25
  }else if(edad_numero>=50){
    recargo = precio_base * edad_50
  }

  //Calculo de recargos por cónyuge
  if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
    recargo_casado = precio_base*casado_18
  }else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
    recargo_casado = precio_base*casado_25
  }else if(edad_conyuge_numero>=50){
    recargo_casado = precio_base*casado_50
  }

  //Calculo de recargos por ingresos del asegurado
  recargo_ingresos = salario*ingresos_recargo

  //Calculo de recargos por hijos
  recargo_hijos = cantidad_hijos_numero*hijos_recargo*precio_base

  //Calculo de recargos antes del recargo por propiedades
  recargo_parcial = recargo + recargo_casado + recargo_hijos + recargo_ingresos

  //Calculo del precio parcial antes del recargo por propiedades
  precio_parcial = precio_base + recargo_parcial

  //Calculo de recargos por cantidad de propiedades
  recargo_propiedades = cantidad_propiedades_numero*propiedades_recargo*precio_parcial

  //Calculo de recargos total
  recargo_total = recargo_parcial + recargo_propiedades

  //Calculo del precio final
  precio_final = precio_parcial + recargo_propiedades

  //Resultado
  alert ("Para el asegurado "+nombre)
  alert ("El recargo total sera de: "+recargo_total)
  alert ("El precio sera de: "+precio_final)

  var salir = prompt("Para iniciar otra cotización presione Enter, para detener las cotizaciones escriba 'Salir'")

}while(salir.toUpperCase() !== "SALIR");
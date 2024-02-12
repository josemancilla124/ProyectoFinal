PROYECTO FINAL
FUNCIONAMIENTO DEL PROGRAMA

En primera instancia encontramos una estructura de control de bucle do-while, esta estructura nos permite generar un bucle y repetir el código que escribamos dentro infinitas mientras se cumpla o no la condición de nuestra elección. En este programa la condición para que el bucle se repita es que la variable "salir" no sea igual a "SALIR", en otras palabras, este bucle se repetirá hasta que se escriba la palabra "SALIR", logrado gracias a la condición while(salir.toUpperCase() !== "SALIR"). También podemos notar que se añadió un método para convertir los caractéres de nuestro string a mayúsculas, de esta forma no importa si se ingresa la palabra "salir" en mayúsculas o minúsculas. 

Dentro del bucle encontramos el código a ejecutar, en un inicio se declaran las variables a utilizar, las variables cuyo valor no cambiará se han declarado como una constante para evitar errores más adelante. 

Posteriormente se piden los datos del cliente y se guardan en una variable al mismo tiempo que se declaran, esto por medio de declarar la variable = prompt(). Ya que nuestras variables no fueron declaradas como int se debe hacer la conversión usando función parseInt, esto nos permitirá realizar cálculos numéricos con dichas respuestas. 

Para verificar el recargo por cónyuge utilizamos un prompt seguido de una condicional "if", lo que nos permite omitir ese código de ser necesario, también usamos esta condicional con el recargo por número de hijos y de propiedades. Estos 3 bloques de código sólo se ejecutarán si la respuesta al prompt es "SI" en cada uno respectivamente, de lo contrario se omitirán y seguirá con el resto del código. Cabe recalcar que los datos recopilados de estos bloques serán guardados en una variable nueva en donde se haya aplicado la función parseInt.

Para calcular el recargo por la edad del asegurado y la edad del/la cónyuge utilizamos las condicionales "if" y "else if", de este modo si la primera condición (edad 18-24 años) no se cumple, se omitirá ese bloque de código y se prosigue con el siguiente (edad 25-49 años) y si este tampoco se cumple proseguiremos con el último. Cuando la condición se cumple se realiza la operación matemática en la que multiplicamos el precio base por la constante de recargo correspondiente, y el resultado se guarda en una nueva variable.

Para el recargo por ingresos del asegurado multiplicamos la cantidad ingresada por la constante de ingresos_recargo que en este caso es 0.35 (35%) y el resultado se guarda en una variable nueva.

Para el recargo por cantidad de hijos multiplicamos la cantidad de hijos ingresada en formato Int por la constante de recargo por hijo por el precio base (X*0.2*1000), en donde X es el valo ingresado.

Realizamos un cálculo del recargo parcial ya que aún tenemos pendiente el recargo por propiedades, pero debido a que este se calcula sobre el total de la cotización, lo realizaremos posteriormente. Para calcular el recargo parcial sumamos todos los recargos que llevamos hasta el momento y los guardamos en la variable recargo_parcial, esta última la sumamos a su vez con el precio base para obtener el precio parcial.

Para calcular el recargo por propiedades multiplicamos la cantidad de propiedades por la constante de recargo de propiedades por el precio parcial que obtuvimos anteriormente.

Luego calculamos el recargo total sumando el recargo parcial más el recargo por propiedades, y esto lo sumamos al precio parcial para obtener el precio final.

Esto lo comunicamos al cliente o dependiente por medio de alertas, en el que aparecerán las variables nombre, recargo_total y precio_final.

Por último declaramos la variable "salir" utilizando un prompt indicando que escriba 'salir' para detener las cotizaciones o presione Enter para continuar realizándolas.


ASPECTOS A CONSIDERAR

- Diferenciar las variables de las constantes, y los beneficios que nos pueden traer en la realización del proyecto.

- Tener en cuenta que el recargo por propiedades no se realiza sobre el precio base, sino que sobre el total (subtotal) de la cotización, teniendo que agregarlo al final pero antes de calcular el total real.


RECOMENDACIONES PARA MEJORAR EL PROGRAMA

- Utilizar una interfaz dinámica.

- Agregar una alerta cuando se ingresa un dato no válido o de forma incorrecta y que sea posible corregirlo instantáneamente.

- Optimizar la forma en que se obtienen los datos, por ejemplo, en vez de preguntar ¿Está casado actualmente? Si/No, y luego pedir la edad del/la cónyuge, pedir "De estar casado/a, ingrese la edad de su cónyuge aquí".
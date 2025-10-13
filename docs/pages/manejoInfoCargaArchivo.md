### Manejo de Información Vía Carga de Archivo TXT

ForceSOS Web cuenta con un módulo para realizar las activaciones, Modificaciones y cancelaciones vía 
el procesamiento de un archivo TXT.

El archivo debe de estar estructurado de la siguiente manera. El archivo debe de contener las columnas 
en el orden especificado más abajo usando barras verticales como separador “|” aun cuando no se 
pongan datos en las mismas. Las columnas marcadas con un * son obligatorias. No se deben incluir los 
nombres de las columnas como encabezados. 

| **Col** | **Dato** | **Descripción** | **Tamaño máximo** |
|-----|------|-------------|---------------|
| 1 | Contrato* | Contrato del cliente. **Solo letras, números y guion**. No puede repetirse en la misma base de clientes. | 50 |
| 2 | Referencia* | Id del cliente. **Solo letras y números. Único por cada cliente** | 50 |
| 3 | Tipo | Tipo de id que se está usando. Opciones: **CED, PAS, RNC, RUC** | 3 |
| 4 | Nombre* | Nombre del cliente. **Solo letras** | 100 |
| 5 | Apellido* | Apellido del cliente. **Solo letras** | 100 |
| 6 | Genero | Sexo del cliente. Opciones: **F, M** | 1 |
| 7 | Email | Email del cliente, **solo se permite un correo**. No debe repetirse entre clientes de una misma base | 50 |
| 8 | Teléfono móvil 1* | Teléfono celular del cliente. Solo se permite un número por campo. **Solo se permiten caracteres numéricos**. | 15 |
| 9 | Teléfono móvil 2 | Teléfono celular secundario del cliente. Solo se permite un número por campo. **Solo se permiten caracteres numéricos** | 15 |
| 10 | Teléfono residencial | Teléfono residencial del cliente. Solo se permite un número por campo. **Solo se permiten caracteres numéricos** | 15 |
| 11 | Teléfono de oficina | Teléfono de la oficina del cliente. Solo se permite un número por campo. **Solo se permiten caracteres numéricos** | 15 |
| 12 | Dirección | Dirección del cliente. **Solo letras y números** | 200 |
| 13 | Inicio de contrato | Fecha de inicio del contrato. **Formato YYYY-MM-DD** | 10 |
| 14 | Fin de contrato | Fecha de fin de contrato. **Formato YYYY-MM-DD** | 10 |
| 15 | Vip | Indica si el cliente tendrá tratamiento vip. Valores **0,1** | 1 |
| 16 | Extra 1 | Información extra. **Solo letras y números** | 50 |
| 17 | Extra 2 | Información extra. **Solo letras y números** | 50 |
| 18 | Extra 3 | Información extra. **Solo letras y números** | 50 |
| 19 | Extra 4 | Información extra. **Solo letras y números** | 50 |
| 20 | Extra 5 | Información extra. **Solo letras y números** | 50 |
| 21 | Extra 6 | Información extra. **Solo letras y números** | 50 |
| 22 | Extra 7 | Información extra. **Solo letras y números** | 50 |

<br>
<br>
<span style="color:red">¡Información importante! </span>

La columna 1 (contrato) no puede repetirse para una misma base de clientes. 

La columna 2 (referencia) solo puede repetirse en caso de que se trate del m 

El número de teléfono en la columna Teléfono móvil 1 es utilizado para el inicio de sesión del cliente en 
la aplicación ForceSOS o la marca blanca del cliente corporativo. 

Si la validación por número de teléfono falla en la aplicación ForceSOS o alguna marca blanca, el cliente 
podrá acceder al llenar el formulario que se presenta con el contrato y la cedula que se incluyeron en el 
registro. 

Cuando un cliente es activado por primera vez, un correo de bienvenida será enviado a la dirección de 
correo que se incluya en la columna Email.

#### Aseguradoras

Para Aseguradoras de vehículos, los datos del vehículo deberán ser introducidos en los campos Extra 1 a 
Extra 7 con el siguiente orden:

| | |
|-|-|
| **Extra 1** - Marca | **Extra 5** - Número de chasis |
| **Extra 2** - Modelo | **Extra 6** - Placa |
| **Extra 3** - Año | **Extra 7** - Color |
| **Extra 4** - Número de motor | |

El campo de año sólo debe incluir números, si no tiene el año del vehículo debe dejar el campo en 
blanco, los datos a incluir no deben pasar de 50 caracteres. 

Un cliente que tenga un contrato de tipo aseguradora solo podrá requerir servicios de asistencia al 
vehículo que se haya enviado en el archivo de datos. 

#### Ejemplo de registro:
```text
ABC-123456|000000000|ced|Juan Alberto|Duran 
Paulino|F|duran@paulino.com|67773344|67773344|67773344|67773344|Calle 53, obarrio|2017-10
1|2018-10-1|0|||||||
```

#### Ejemplo de registro para aseguradoras:
```text
ABC-123456|000000000|ced|Juan Alberto|Duran 
Paulino|F|duran@paulino.com|67773344|67773344|67773344|67773344|Calle 53, obarrio|2017-10
1|2018-10-1|0|Toyota|Corolla|2008|1KZR9993322|JTEBU0000111111|L002233|Banco
```


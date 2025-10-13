
![Logo](./assets/banner.svg) <img src="./assets/Geotrack%20Solutions.png" alt="Geotrack" style="float:right; width:200px;" />
## __Comunicando con el Api__

El Api ha sido desarrollado bajo la alquitectura **R**epresentational **S**tate **T**ransfer (REST) que es un protocolo basado en HTTP 1.1. Para utilizar este Api utilice el lenguaje de programación con el que se sienta familiarizado.

Las acciones que provee el servicio web están definidas en un archivo WSDL. Para 
conectarse al servicio debe de conocer la URL de este, la cual será provista por el 
personal técnico de Geotrack Solutions.

Los datos para enviar al servicio deben de ponerse en el cuerpo del mensaje.

### Seguridad

El API ForceSOS v2.0 requiere de seguridad mediante una llave única encriptada que se envía en el encabezado de la petición http. El encabezado debe definirse como *“api-token”*, el valor de esta será un hash único asignado a la entidad corporativa.

EL API solo puede accederse a través de una conexión HTTPS.

## __Operaciones del API__

- [Obtener Clientes](./pages/obtenerCliente.md)
- [Obtener cliente por contrato](./pages/obtenerClienteContrato.md)
- [Obtener cliente por cédula, pasaporte o RUC](./pages/obtenerClienteCedulaPasaporteRUC.md)
- [Obtener las categorías](./pages/ObtenerCategorias.md)
- [Obtener clientes por categoría](./pages/ObtenerClienteCategoria.md)
- [Obtener contratos por categoría](./pages/obtenerContratoCategoria.md)
- [Crear cliente](./pages/crearCliente.md)
- [Actualizar contrato](./pages/actulizarContrato.md)
- [Carga de archivo de clientes](./pages/cargaArchivoClientes.md)
- [Carga de información vía web usando un archivo TXT](./pages/manejoInfoCargaArchivo.md)
- [Manejo de información vía SFTP](./pages/manejoInformacionSftp.md)
- [Procesamiento de datos vía correo electrónico](./pages/procesamientoDatosCorreo.md)
- [Reporte de procesamiento de lote de datos](./pages/reporteProcesamientolote.md)
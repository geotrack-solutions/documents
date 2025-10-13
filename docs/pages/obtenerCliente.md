### Obtener Clientes

Este recurso le permitirá listar todos los clientes activos e inactivos que están asociados al <span style="color:#2ECC71">token</span>  provisto en el encabezado.

> <span style="color:#2ECC71">GET</span> Https://monitoreo.forcesos.com/api_corporate/public/api/clients

#### Ejemplos:
__Curl__
```bash
curl --location --
request GET 'https://monitoreo.forcesos.com/api_corporate/public/api/clients' \
--header 'api-token: {token} '
```

__JAVA__
```java
OkHttpClient client = new OkHttpClient().newBuilder().build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
 .url("https://monitoreo.forcesos.com/api_corporate/public/api/clients")
 .method("GET", body)
 .addHeader("{token}")
 .build();
Response response = client.newCall(request).execute();
```

__PowerShell__
```bash
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("{token}")
$response = Invoke-
RestMethod 'https://monitoreo.forcesos.com/api_corporate/public/api/clients' -Method 'GET' -
Headers $headers
$response | ConvertTo-Json
```

#### Respuesta

La respuesta del servicio viene en formato JSON

Propiedades de la respuesta 


<table style="border-collapse:collapse; width:100%;">
  <tr>
    <td style="background:#333; color:#fff; padding:6px; width:120px;">data</td>
    <td style="border:1px solid #000; padding:6px;">Contiene un arreglo de objectos JSON con las informaciones del cliente</td>
  </tr>
  <tr>
    <td style="background:#333; color:#fff; padding:6px;">status</td>
    <td style="border:1px solid #000; padding:6px;">Contiene la información de estado de la respuesta.</td>
  </tr>
</table>

#### Ejemplo de Respuesta
```json
 { “data” : [ { 
            "row": "10", 
            "category_id": "119", 
            "contract": "AB-123-56", 
            "client_id": "E-0123-00123", 
            "client_id_type": "CED", 
            "names": "Juana de Arco ", 
            "gender": "f", 
            "email": "juana@arco.com", 
            "tel_mobile1": "66667777", 
            "tel_mobile2": "66667777", 
            "tel_home": "", 
            "tel_office": "", 
            "birthdate": "1978-04-16 12:22:42.000", 
            "contract_start": "2018-06-04 18:59:49.000", 
            "contract_end": "2019-06-04 18:59:49.000", 
            "contract_status": "inactive" 
        } 
    ], 
    "status": { 
        "status_code": "2000", 
        "status_message": "Success", 
        "description": "Respuesta de la petición web es correcta" 
    } 
} 
```
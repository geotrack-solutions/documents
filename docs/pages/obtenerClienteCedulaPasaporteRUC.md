### Obtener Cliente por Cedula, Pasaporte o RUC

Permite obtener la información del cliente que se tiene para la cedula, pasaporte o ruc especificado en 
el parámetro <span style="color:#2ECC71">reference</span> 



> <span style="color:#2ECC71">GET</span> https://monitoreo.forcesos.com/api_corporate/public/api/clients/reference?reference={reference} 

#### Ejemplos:
__Curl__
```bash
curl --location -
request GET 'https://monitoreo.forcesos.com/api_corporate/public/api/clients/reference?referen
ce={reference}' \ 
 --header 'api-token: {token}' 
```

__JAVA__
```java
OkHttpClient client = new OkHttpClient().newBuilder().build(); 
MediaType mediaType = MediaType.parse("text/plain"); 
RequestBody body = RequestBody.create(mediaType, ""); 
Request request = new Request.Builder() 
  .url("https://monitoreo.forcesos.com/api_corporate/public/api/clients/reference?reference={r
 eference}") 
  .method("GET", body) 
  .addHeader("api-token", "{token}") 
  .build(); 
Response response = client.newCall(request).execute();
```

__PowerShell__
```bash
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]" 
$headers.Add("api-token", "{token}") 
$response = Invoke -
RestMethod 'https://monitoreo.forcesos.com/api_corporate/public/api/clients/reference?referenc
 e= {reference}' -Method 'GET' -Headers $headers 
$response | ConvertTo-Json 
```

#### Respuesta

La respuesta del recurso es entregada en formato JSON

Propiedades de la respuesta 

<table style="border-collapse:collapse; width:100%;">
  <tr>
    <td style="background:#333; color:#fff; padding:6px; width:120px;">data</td>
    <td style="border:1px solid #000; padding:6px;">Contiene un arreglo de objectos JSON con las informaciones del cliente que tiene la referencia indicada</td>
  </tr>
  <tr>
    <td style="background:#333; color:#fff; padding:6px;">status</td>
    <td style="border:1px solid #000; padding:6px;">Contiene la información de estado de la respuesta.</td>
  </tr>
</table>

#### Ejemplo de Respuesta:

Si la referencia indicada existe entre los clientes a los cuales tiene acceso el token obtendrá la siguiente 
respuesta 

```json
{ 
   { 
    "data": [ 
        { 
            "row": "1", 
            "category_id": "119", 
            "contract": "E5BD0A70", 
            "client_id": "2202190953", 
            "client_id_type": "PAS", 
            "names": "Prueba Durank_7516", 
            "gender": "f", 
            "email": "durank7516@gmail.com", 
            "tel_mobile1": "8296656555", 
            "tel_mobile2": "8291231133", 
            "tel_home": "8091231231", 
            "tel_office": "", 
            "birthdate": "1988-01-09 14:08:54.000", 
            "contract_start": "2019-02-22 13:54:26.173", 
            "contract_end": "2099-01-01 11:50:00.000", 
            "contract_status": "active" 
        } 
    ], 
    "status": { 
        "status_code": "2000", 
        "status_message": "Success", 
        "description": "Respuesta de la petición web es correcta" 
    } 
} 
}
```

Si la referencia especificada no existe la respuesta tendrá un objeto data vacío. 

```json
{ 
    "data": [], 
    "status": { 
        "status_code": "2000", 
        "status_message": "Success", 
        "description": "Respuesta de la petición web es correcta" 
    } 
} 
```
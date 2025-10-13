### Obtener Cliente por Contracto

Permite obtener la información del cliente que tiene asignado el contrato. El contrato por consultar se 
indica en el parámetro <span style="color:#2ECC71">contract</span>  que debe enviarse en la URL.

> <span style="color:#2ECC71">GET</span> https://monitoreo.forcesos.com/api_corporate/public/api/clients/contract?contract={contract} 

#### Ejemplos:
__Curl__
```bash
curl --location -
request GET 'https://monitoreo.forcesos.com/api_corporate/public/api/clients/contract?contract
 = {contract}' \ 
 --header '{token}'
```

__JAVA__
```java
OkHttpClient client = new OkHttpClient().newBuilder().build(); 
MediaType mediaType = MediaType.parse("text/plain"); 
MediaType JSON = MediaType.parse("application/json; charset=utf-8"); 
RequestBody body = RequestBody.create(JSON, "{}"); 
Request request = new Request.Builder() 
  .url("https://monitoreo.forcesos.com/api_corporate/public/api/clients/contract?contract={con
 tract}") 
  .method("GET", body) 
  .addHeader("api-token", "{token}") 
  .build(); 
Response response = client.newCall(request).execute();
```

__PowerShell__
```bash
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]" 
$headers.Add("api-token", "{token}") 
 
$response = Invoke
RestMethod 'https://monitoreo.forcesos.com/api_corporate/public/api/clients/contract?contract=
 {contract}' -Method 'GET' -Headers $headers 
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

#### Ejemplo de Respuesta:

Si el contrato existe entre las categorías a las que puede acceder el token obtendrá la siguiente 
respuesta

```json
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
```

Si el contrato provisto no existe entre las categorías asignadas al token se entregrá un objeto data vacío 

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
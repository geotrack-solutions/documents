### Obtener Contratos por Categoría

Devuelve como respuesta solo la información de los contratos asignados a la categoría que se ha 
especificado en el parámetro  <span style="color:#2ECC71">category</span>.

> <span style="color:#2ECC71">GET</span> https://monitoreo.forcesos.com/api_corporate/public/api/clients/get-contracts-bycategory?={category} 
#### Ejemplos:
__Curl__
```bash
curl --location -
request GET 'https://monitoreo.forcesos.com/api_corporate/public/api/clients/get-contracts-by
category?category= {category}' \ 
--header 'api-token: {token}'
```
__JAVA__
```java
OkHttpClient client = new OkHttpClient().newBuilder().build(); 
MediaType mediaType = MediaType.parse("text/plain"); 
RequestBody body = RequestBody.create(mediaType, ""); 
Request request = new Request.Builder() 
  .url("https://monitoreo.forcesos.com/api_corporate/public/api/clients/get-contracts-by
category?category= {category}") 
  .method("GET", body) 
  .addHeader("api-token", "{token}") 
  .build(); 
Response response = client.newCall(request).execute();
```

__PowerShell__
```bash
$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]" 
$headers.Add("api-token", "{token}") 
 
$response = Invoke-
RestMethod 'https://monitoreo.forcesos.com/api_corporate/public/api/clients/get-contracts-by
category? {category}' 
-Method 'GET' -Headers $headers 
$response | ConvertTo-Json 
```


#### Respuesta

La respuesta del servicio viene en formato JSON

<table style="border-collapse:collapse; width:100%;">
  <tr>
    <td style="background:#333; color:#fff; padding:6px; width:120px;">data</td>
    <td style="border:1px solid #000; padding:6px;">Contiene un arreglo de objectos JSON con las informaciones de los contratos pertenecientes a 
la categoría provista </td>
  </tr>
</table> 

![tabla](../assets/categoriaporcontrato.png)

<table style="border-collapse:collapse; width:100%;">
  <tr>
    <td style="background: #333; color: #fff; padding: 8px; width: 120px; border: 1px solid #000;">status</td>
    <td style="padding: 8px; border: 1px solid #000;">
      Contiene la información de estado de la respuesta.
    </td>
  </tr>
</table>


#### Ejemplo de Respuesta

Si el token provisto tiene acceso a la categoría especificada, obtendrá una respuesta parecida a la 
siguiente 

```json
{ 
    "data": [ 
        { 
            "row": "1", 
            "corp_name": "USUARIOS PRUEBA FORCESOS DO", 
            "category_id": "119", 
            "client_category_name": "1", 
            "category_status": "1", 
            "contract_number": "E5BD0A70", 
            "contract_status": "active", 
            "contract_start": "2019-02-22 13:54:26.173", 
            "contract_end": "2099-01-01 11:50:00.000" 
        }, 
        { 
            "row": "2", 
            "corp_name": "USUARIOS PRUEBA FORCESOS DO", 
            "category_id": "119", 
            "client_category_name": "1", 
            "category_status": "1", 
            "contract_number": "2205181116", 
            "contract_status": "active", 
            "contract_start": "2022-07-20 16:07:58.820", 
            "contract_end": "2025-07-31 00:00:00.000" 
        } 
         
    ], 
    "status": { 
        "status_code": "2000", 
        "status_message": "Success", 
        "description": "Respuesta de la petición web es correcta" 
    } 
} 
 
```

Si el token no tiene acceso a la categoría solicitada o la categoría no existe 

```json
{ 
    "msg": "Esta categoría no pertenece al corporativo", 
    "error": { 
        "status_code": "3004", 
        "status_message": "Not Found", 
        "description": "El recurso solicitado no existe" 
    } 
} 
```
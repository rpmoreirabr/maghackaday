# Apiseguradora.DocumentoApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversiondocumentoPOST**](DocumentoApi.md#apiversiondocumentoPOST) | **POST** /api/{version}/Documento | Cria um documento
[**apiversiondocumentoidGET**](DocumentoApi.md#apiversiondocumentoidGET) | **GET** /api/{version}/Documento/{id} | Obtém um documento
[**apiversiondocumentoindiceDocumentocnpjcnpjGET**](DocumentoApi.md#apiversiondocumentoindiceDocumentocnpjcnpjGET) | **GET** /api/{version}/Documento | Obtém documentos de um indice.


<a name="apiversiondocumentoPOST"></a>
# **apiversiondocumentoPOST**
> APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean apiversiondocumentoPOST(documento, cnpj, version, authorization)

Cria um documento

Retorna o documento que foi criado

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.DocumentoApi();

var documento = new Apiseguradora.APISeguradoraContratoV1DocDocumento(); // APISeguradoraContratoV1DocDocumento | Documento a ser criado.

var cnpj = "cnpj_example"; // String | CNPJ do parceiro.

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversiondocumentoPOST(documento, cnpj, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documento** | [**APISeguradoraContratoV1DocDocumento**](APISeguradoraContratoV1DocDocumento.md)| Documento a ser criado. | 
 **cnpj** | **String**| CNPJ do parceiro. | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean**](APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, text/html, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversiondocumentoidGET"></a>
# **apiversiondocumentoidGET**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1DocDocumento apiversiondocumentoidGET(id, version, authorization)

Obtém um documento

Retorna um documento que esteja indexado nos sistemas de GED da Mongeral Aegon.

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.DocumentoApi();

var id = "id_example"; // String | Id do documento.

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversiondocumentoidGET(id, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id do documento. | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1DocDocumento**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1DocDocumento.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversiondocumentoindiceDocumentocnpjcnpjGET"></a>
# **apiversiondocumentoindiceDocumentocnpjcnpjGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1DocDocumento apiversiondocumentoindiceDocumentocnpjcnpjGET(cnpj, version, authorization, opts)

Obtém documentos de um indice.

Obtém um array de Documento contendo os documentos registrados no GED da Mongeral, de acordo com o índice informado.

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.DocumentoApi();

var cnpj = "cnpj_example"; // String | CNPJ do parceiro.

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização

var opts = { 
  'indiceDocumentoValor': "indiceDocumentoValor_example", // String | 
  'indiceDocumentoTipoIndice': "indiceDocumentoTipoIndice_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversiondocumentoindiceDocumentocnpjcnpjGET(cnpj, version, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnpj** | **String**| CNPJ do parceiro. | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 
 **indiceDocumentoValor** | **String**|  | [optional] 
 **indiceDocumentoTipoIndice** | **String**|  | [optional] 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1DocDocumento**](APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1DocDocumento.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


# Apiseguradora.DominioApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversiondominioidGET**](DominioApi.md#apiversiondominioidGET) | **GET** /api/{version}/Dominio/{id} | Obtém uma lista de elementos de um domínio específico


<a name="apiversiondominioidGET"></a>
# **apiversiondominioidGET**
> APISeguradoraHelperResultadoDaOperacaoRestAPIInfraestruturaContratoV1DadosDominio apiversiondominioidGET(id, version, authorization)

Obtém uma lista de elementos de um domínio específico

Obtém uma lista de elementos de um domínio específico

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.DominioApi();

var id = "id_example"; // String | Tipo do domínio

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversiondominioidGET(id, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Tipo do domínio | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPIInfraestruturaContratoV1DadosDominio**](APISeguradoraHelperResultadoDaOperacaoRestAPIInfraestruturaContratoV1DadosDominio.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


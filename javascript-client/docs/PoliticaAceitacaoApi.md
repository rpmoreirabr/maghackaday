# Apiseguradora.PoliticaAceitacaoApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionpoliticaAceitacaocnpjcnpjGET**](PoliticaAceitacaoApi.md#apiversionpoliticaAceitacaocnpjcnpjGET) | **GET** /api/{version}/PoliticaAceitacao | Recupera as políticas de aceitação


<a name="apiversionpoliticaAceitacaocnpjcnpjGET"></a>
# **apiversionpoliticaAceitacaocnpjcnpjGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1PoliticaAceitacaoPoliticaAceitacao apiversionpoliticaAceitacaocnpjcnpjGET(cnpj, version, authorization)

Recupera as políticas de aceitação

Retorna as políticas de aceitação vinculadas a um determinado CNPJ

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.PoliticaAceitacaoApi();

var cnpj = "cnpj_example"; // String | CNPJ do parceiro

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionpoliticaAceitacaocnpjcnpjGET(cnpj, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnpj** | **String**| CNPJ do parceiro | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1PoliticaAceitacaoPoliticaAceitacao**](APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1PoliticaAceitacaoPoliticaAceitacao.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


# Apiseguradora.VendaApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionvendaPOST**](VendaApi.md#apiversionvendaPOST) | **POST** /api/{version}/venda | Registra uma venda


<a name="apiversionvendaPOST"></a>
# **apiversionvendaPOST**
> APISeguradoraHelperResultadoDaOperacaoRestSystemInt64 apiversionvendaPOST(dadosVenda, version, authorization)

Registra uma venda

Registra uma proposta

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.VendaApi();

var dadosVenda = new Apiseguradora.APISeguradoraContratoV1PropostaDadosRegistrarVenda(); // APISeguradoraContratoV1PropostaDadosRegistrarVenda | Informações da proposta

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionvendaPOST(dadosVenda, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dadosVenda** | [**APISeguradoraContratoV1PropostaDadosRegistrarVenda**](APISeguradoraContratoV1PropostaDadosRegistrarVenda.md)| Informações da proposta | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemInt64**](APISeguradoraHelperResultadoDaOperacaoRestSystemInt64.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, text/html, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


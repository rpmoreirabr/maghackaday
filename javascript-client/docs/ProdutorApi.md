# Apiseguradora.ProdutorApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionprodutordocumentoparceiroGET**](ProdutorApi.md#apiversionprodutordocumentoparceiroGET) | **GET** /api/{version}/Produtor | Recupera os parceiros de um determinado produtor
[**apiversionprodutordocumentoparceiroGET_0**](ProdutorApi.md#apiversionprodutordocumentoparceiroGET_0) | **GET** /api/{version}/produtor/{documento}/parceiro | Recupera os parceiros de um determinado produtor
[**apiversionprodutoridGET**](ProdutorApi.md#apiversionprodutoridGET) | **GET** /api/{version}/Produtor/{id} | Recupera determinado produtor


<a name="apiversionprodutordocumentoparceiroGET"></a>
# **apiversionprodutordocumentoparceiroGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutorParceiro apiversionprodutordocumentoparceiroGET(documento, version, authorization)

Recupera os parceiros de um determinado produtor

Recupera os parceiros de um determinado produtor

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ProdutorApi();

var documento = "documento_example"; // String | Documento do produtor(CPF/CNPJ) (ou agente, vendedor)

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionprodutordocumentoparceiroGET(documento, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documento** | **String**| Documento do produtor(CPF/CNPJ) (ou agente, vendedor) | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutorParceiro**](APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutorParceiro.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionprodutordocumentoparceiroGET_0"></a>
# **apiversionprodutordocumentoparceiroGET_0**
> APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutorParceiro apiversionprodutordocumentoparceiroGET_0(documento, version, authorization)

Recupera os parceiros de um determinado produtor

Recupera os parceiros de um determinado produtor

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ProdutorApi();

var documento = "documento_example"; // String | Documento do produtor(CPF/CNPJ) (ou agente, vendedor)

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionprodutordocumentoparceiroGET_0(documento, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documento** | **String**| Documento do produtor(CPF/CNPJ) (ou agente, vendedor) | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutorParceiro**](APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutorParceiro.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionprodutoridGET"></a>
# **apiversionprodutoridGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutorProdutor apiversionprodutoridGET(id, version, authorization)

Recupera determinado produtor

Retorna determinado produtor

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ProdutorApi();

var id = "id_example"; // String | Documento ou Código do produtor (ou agente, vendedor)

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionprodutoridGET(id, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Documento ou Código do produtor (ou agente, vendedor) | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutorProdutor**](APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutorProdutor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


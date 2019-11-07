# Apiseguradora.ProdutoApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionprodutocodigoModeloPropostacodigoModeloPropostaGET**](ProdutoApi.md#apiversionprodutocodigoModeloPropostacodigoModeloPropostaGET) | **GET** /api/{version}/Produto | Recupera produtos
[**apiversionprodutoidcodigoModeloPropostacodigoModeloPropostaGET**](ProdutoApi.md#apiversionprodutoidcodigoModeloPropostacodigoModeloPropostaGET) | **GET** /api/{version}/Produto/{id} | Recupera um produto específico


<a name="apiversionprodutocodigoModeloPropostacodigoModeloPropostaGET"></a>
# **apiversionprodutocodigoModeloPropostacodigoModeloPropostaGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutoProduto apiversionprodutocodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, version, authorization)

Recupera produtos

Retorna os Produtos disponíveis para um determinado modelo de proposta

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ProdutoApi();

var codigoModeloProposta = "codigoModeloProposta_example"; // String | Código do modelo de proposta

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionprodutocodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codigoModeloProposta** | **String**| Código do modelo de proposta | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutoProduto**](APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutoProduto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionprodutoidcodigoModeloPropostacodigoModeloPropostaGET"></a>
# **apiversionprodutoidcodigoModeloPropostacodigoModeloPropostaGET**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ProdutoProduto apiversionprodutoidcodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, id, version, authorization)

Recupera um produto específico

Retorna um produto específico de um modelo de proposta

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ProdutoApi();

var codigoModeloProposta = "codigoModeloProposta_example"; // String | Código do modelo de proposta

var id = 56; // Number | Identificador do produto

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionprodutoidcodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, id, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codigoModeloProposta** | **String**| Código do modelo de proposta | 
 **id** | **Number**| Identificador do produto | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ProdutoProduto**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ProdutoProduto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


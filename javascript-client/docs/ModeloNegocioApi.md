# Apiseguradora.ModeloNegocioApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionmodeloNegocioidcnpjcnpjGET**](ModeloNegocioApi.md#apiversionmodeloNegocioidcnpjcnpjGET) | **GET** /api/{version}/ModeloNegocio/{id} | Recupera um modelo de Negocio específico
[**apiversionmodeloNegociomodeloNegociocnpjcnpjGET**](ModeloNegocioApi.md#apiversionmodeloNegociomodeloNegociocnpjcnpjGET) | **GET** /api/{version}/ModeloNegocio | Recupera modelos de Negocio
[**apiversionmodelonegocioPOST**](ModeloNegocioApi.md#apiversionmodelonegocioPOST) | **POST** /api/{version}/ModeloNegocio | Gravar Modelo de Negócio


<a name="apiversionmodeloNegocioidcnpjcnpjGET"></a>
# **apiversionmodeloNegocioidcnpjcnpjGET**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloNegocioModeloNegocio apiversionmodeloNegocioidcnpjcnpjGET(id, cnpj, version, authorization)

Recupera um modelo de Negocio específico

Recupera uma determinada instância de \"ModeloNegocio\" disponível para a empresa informada pelo código

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ModeloNegocioApi();

var id = 56; // Number | Código do modelo de Negocio

var cnpj = "cnpj_example"; // String | CNPJ da empresa

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionmodeloNegocioidcnpjcnpjGET(id, cnpj, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Código do modelo de Negocio | 
 **cnpj** | **String**| CNPJ da empresa | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloNegocioModeloNegocio**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloNegocioModeloNegocio.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionmodeloNegociomodeloNegociocnpjcnpjGET"></a>
# **apiversionmodeloNegociomodeloNegociocnpjcnpjGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloNegocioModeloNegocio apiversionmodeloNegociomodeloNegociocnpjcnpjGET(version, authorization, opts)

Recupera modelos de Negocio

Recupera as instâncias de \"ModeloNegocio\" disponíveis para a empresa informada e o modelo especificado

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ModeloNegocioApi();

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização

var opts = { 
  'cnpj': "cnpj_example", // String | CNPJ da empresa
  'modeloNegocioCodigoModeloNegocio': 56, // Number | 
  'modeloNegocioNome': "modeloNegocioNome_example", // String | 
  'modeloNegocioIdParceiro': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionmodeloNegociomodeloNegociocnpjcnpjGET(version, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 
 **cnpj** | **String**| CNPJ da empresa | [optional] 
 **modeloNegocioCodigoModeloNegocio** | **Number**|  | [optional] 
 **modeloNegocioNome** | **String**|  | [optional] 
 **modeloNegocioIdParceiro** | **Number**|  | [optional] 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloNegocioModeloNegocio**](APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloNegocioModeloNegocio.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionmodelonegocioPOST"></a>
# **apiversionmodelonegocioPOST**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO apiversionmodelonegocioPOST(dadosModeloNegocio, version, authorization)

Gravar Modelo de Negócio

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ModeloNegocioApi();

var dadosModeloNegocio = new Apiseguradora.APISeguradoraImplementacaoServicoDadosModeloNegocio(); // APISeguradoraImplementacaoServicoDadosModeloNegocio | 

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionmodelonegocioPOST(dadosModeloNegocio, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dadosModeloNegocio** | [**APISeguradoraImplementacaoServicoDadosModeloNegocio**](APISeguradoraImplementacaoServicoDadosModeloNegocio.md)|  | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, text/html, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


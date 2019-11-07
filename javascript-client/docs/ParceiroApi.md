# Apiseguradora.ParceiroApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionparceiroPOST**](ParceiroApi.md#apiversionparceiroPOST) | **POST** /api/{version}/Parceiro | Cadastrar Parceiro
[**apiversionparceiroPUT**](ParceiroApi.md#apiversionparceiroPUT) | **PUT** /api/{version}/Parceiro | Atualizar Parceiro
[**apiversionparceirocnpjcnpjGET**](ParceiroApi.md#apiversionparceirocnpjcnpjGET) | **GET** /api/{version}/Parceiro | Obter Parceiros


<a name="apiversionparceiroPOST"></a>
# **apiversionparceiroPOST**
> APISeguradoraHelperResultadoDaOperacaoRestSystemInt64 apiversionparceiroPOST(dadosCadastroParceiro, version, authorization)

Cadastrar Parceiro

Realiza cadastramento de parceiro

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ParceiroApi();

var dadosCadastroParceiro = new Apiseguradora.APISeguradoraContratoV1ParDadosCadastroParceiro(); // APISeguradoraContratoV1ParDadosCadastroParceiro | 

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionparceiroPOST(dadosCadastroParceiro, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dadosCadastroParceiro** | [**APISeguradoraContratoV1ParDadosCadastroParceiro**](APISeguradoraContratoV1ParDadosCadastroParceiro.md)|  | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemInt64**](APISeguradoraHelperResultadoDaOperacaoRestSystemInt64.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, text/html, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionparceiroPUT"></a>
# **apiversionparceiroPUT**
> APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean apiversionparceiroPUT(dadosEdicaoParceiro, version, authorization)

Atualizar Parceiro

Realiza edição de parceiro

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ParceiroApi();

var dadosEdicaoParceiro = new Apiseguradora.APISeguradoraContratoV1ParDadosCadastroParceiro(); // APISeguradoraContratoV1ParDadosCadastroParceiro | 

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionparceiroPUT(dadosEdicaoParceiro, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dadosEdicaoParceiro** | [**APISeguradoraContratoV1ParDadosCadastroParceiro**](APISeguradoraContratoV1ParDadosCadastroParceiro.md)|  | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean**](APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, text/html, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionparceirocnpjcnpjGET"></a>
# **apiversionparceirocnpjcnpjGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListMongeralESBPessoaContratoV1DadosParceiro apiversionparceirocnpjcnpjGET(version, authorization, opts)

Obter Parceiros

Retornar lista de Parceiros

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ParceiroApi();

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização

var opts = { 
  'cnpj': "cnpj_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionparceirocnpjcnpjGET(version, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 
 **cnpj** | **String**|  | [optional] 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListMongeralESBPessoaContratoV1DadosParceiro**](APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListMongeralESBPessoaContratoV1DadosParceiro.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


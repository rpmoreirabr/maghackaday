# Apiseguradora.PendenciaApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionpendenciacnpjcnpjPUT**](PendenciaApi.md#apiversionpendenciacnpjcnpjPUT) | **PUT** /api/{version}/Pendencia | Responde uma pendência.
[**apiversionpendenciacnpjcnpjnumeroPropostanumeroPropostaGET**](PendenciaApi.md#apiversionpendenciacnpjcnpjnumeroPropostanumeroPropostaGET) | **GET** /api/{version}/Pendencia | Recupera pendências.


<a name="apiversionpendenciacnpjcnpjPUT"></a>
# **apiversionpendenciacnpjcnpjPUT**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PendenciaPendencia apiversionpendenciacnpjcnpjPUT(pendencia, cnpj, version, authorization)

Responde uma pendência.

Responde uma pendência.

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.PendenciaApi();

var pendencia = new Apiseguradora.APISeguradoraContratoV1PendenciaPendencia(); // APISeguradoraContratoV1PendenciaPendencia | Informações da resposta da pendência.

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
apiInstance.apiversionpendenciacnpjcnpjPUT(pendencia, cnpj, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pendencia** | [**APISeguradoraContratoV1PendenciaPendencia**](APISeguradoraContratoV1PendenciaPendencia.md)| Informações da resposta da pendência. | 
 **cnpj** | **String**| CNPJ do parceiro | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PendenciaPendencia**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PendenciaPendencia.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, text/html, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionpendenciacnpjcnpjnumeroPropostanumeroPropostaGET"></a>
# **apiversionpendenciacnpjcnpjnumeroPropostanumeroPropostaGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1PendenciaPendencia apiversionpendenciacnpjcnpjnumeroPropostanumeroPropostaGET(cnpj, numeroProposta, version, authorization)

Recupera pendências.

Retorna as pendências abertas para o usuário selecionado. Opcional informar o número da proposta, para receber apenas as pendências da proposta informada.

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.PendenciaApi();

var cnpj = "cnpj_example"; // String | CNPJ do parceiro.

var numeroProposta = 789; // Number | Número da Proposta que se deseja verificar as pendências.

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionpendenciacnpjcnpjnumeroPropostanumeroPropostaGET(cnpj, numeroProposta, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnpj** | **String**| CNPJ do parceiro. | 
 **numeroProposta** | **Number**| Número da Proposta que se deseja verificar as pendências. | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1PendenciaPendencia**](APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1PendenciaPendencia.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


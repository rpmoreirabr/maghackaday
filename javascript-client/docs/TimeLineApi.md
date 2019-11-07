# Apiseguradora.TimeLineApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversiontimelinecnpjcnpjnumeroPropostanumeroPropostaGET**](TimeLineApi.md#apiversiontimelinecnpjcnpjnumeroPropostanumeroPropostaGET) | **GET** /api/{version}/TimeLine | Recupera o histórico de propostas.


<a name="apiversiontimelinecnpjcnpjnumeroPropostanumeroPropostaGET"></a>
# **apiversiontimelinecnpjcnpjnumeroPropostanumeroPropostaGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1TimeLineTimeLine apiversiontimelinecnpjcnpjnumeroPropostanumeroPropostaGET(cnpj, numeroProposta, version, authorization)

Recupera o histórico de propostas.

Retorna tudo que aconteceu com a proposta.

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.TimeLineApi();

var cnpj = "cnpj_example"; // String | CNPJ do parceiro

var numeroProposta = 789; // Number | Número da Proposta que se deseja verificar o histórico.

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversiontimelinecnpjcnpjnumeroPropostanumeroPropostaGET(cnpj, numeroProposta, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnpj** | **String**| CNPJ do parceiro | 
 **numeroProposta** | **Number**| Número da Proposta que se deseja verificar o histórico. | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1TimeLineTimeLine**](APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1TimeLineTimeLine.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


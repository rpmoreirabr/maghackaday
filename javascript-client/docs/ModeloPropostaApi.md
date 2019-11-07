# Apiseguradora.ModeloPropostaApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionmodeloPropostacnpjcnpjcompletocompletocanalVendacanalVendaGET**](ModeloPropostaApi.md#apiversionmodeloPropostacnpjcnpjcompletocompletocanalVendacanalVendaGET) | **GET** /api/{version}/ModeloProposta | Recupera modelos de proposta
[**apiversionmodeloPropostaidcnpjcnpjGET**](ModeloPropostaApi.md#apiversionmodeloPropostaidcnpjcnpjGET) | **GET** /api/{version}/ModeloProposta/{id} | Recupera um modelo de proposta específico


<a name="apiversionmodeloPropostacnpjcnpjcompletocompletocanalVendacanalVendaGET"></a>
# **apiversionmodeloPropostacnpjcnpjcompletocompletocanalVendacanalVendaGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloPropostaModeloProposta apiversionmodeloPropostacnpjcnpjcompletocompletocanalVendacanalVendaGET(cnpj, version, authorization, opts)

Recupera modelos de proposta

Recupera as instâncias de \"ModeloProposta\" disponíveis para a empresa informada

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ModeloPropostaApi();

var cnpj = "cnpj_example"; // String | CNPJ da empresa

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização

var opts = { 
  'completo': true, // Boolean | Indica se deve retornar a versão completa ou reduzida
  'canalVenda': 56 // Number | Canal de Comercialização da Proposta
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionmodeloPropostacnpjcnpjcompletocompletocanalVendacanalVendaGET(cnpj, version, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnpj** | **String**| CNPJ da empresa | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 
 **completo** | **Boolean**| Indica se deve retornar a versão completa ou reduzida | [optional] 
 **canalVenda** | **Number**| Canal de Comercialização da Proposta | [optional] 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloPropostaModeloProposta**](APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloPropostaModeloProposta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionmodeloPropostaidcnpjcnpjGET"></a>
# **apiversionmodeloPropostaidcnpjcnpjGET**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloPropostaModeloPropostaReduzido apiversionmodeloPropostaidcnpjcnpjGET(cnpj, id, version, authorization, opts)

Recupera um modelo de proposta específico

Recupera uma determinada instância de \"ModeloProposta\" disponível para a empresa informada pelo código

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ModeloPropostaApi();

var cnpj = "cnpj_example"; // String | CNPJ da empresa

var id = "id_example"; // String | Código do modelo de proposta

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização

var opts = { 
  'completo': true // Boolean | Modelo completo ou simplificado
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionmodeloPropostaidcnpjcnpjGET(cnpj, id, version, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cnpj** | **String**| CNPJ da empresa | 
 **id** | **String**| Código do modelo de proposta | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 
 **completo** | **Boolean**| Modelo completo ou simplificado | [optional] 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloPropostaModeloPropostaReduzido**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloPropostaModeloPropostaReduzido.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


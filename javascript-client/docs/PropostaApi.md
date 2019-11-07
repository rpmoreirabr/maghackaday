# Apiseguradora.PropostaApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionpropostacnpjcnpjPATCH**](PropostaApi.md#apiversionpropostacnpjcnpjPATCH) | **PATCH** /api/{version}/Proposta | Cancela uma proposta específica
[**apiversionpropostaidcnpjcnpjGET**](PropostaApi.md#apiversionpropostaidcnpjcnpjGET) | **GET** /api/{version}/Proposta/{id} | Recupera uma proposta específica e a bateria de comissões


<a name="apiversionpropostacnpjcnpjPATCH"></a>
# **apiversionpropostacnpjcnpjPATCH**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PropostaStatusProposta apiversionpropostacnpjcnpjPATCH(proposta, cnpj, version, authorization)

Cancela uma proposta específica

Cancela uma proposta específica

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.PropostaApi();

var proposta = new Apiseguradora.APISeguradoraContratoV1PropostaStatusProposta(); // APISeguradoraContratoV1PropostaStatusProposta | Informações da proposta para cancelamento

var cnpj = "cnpj_example"; // String | CNPJ do parceiro.

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionpropostacnpjcnpjPATCH(proposta, cnpj, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proposta** | [**APISeguradoraContratoV1PropostaStatusProposta**](APISeguradoraContratoV1PropostaStatusProposta.md)| Informações da proposta para cancelamento | 
 **cnpj** | **String**| CNPJ do parceiro. | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PropostaStatusProposta**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PropostaStatusProposta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, text/html, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionpropostaidcnpjcnpjGET"></a>
# **apiversionpropostaidcnpjcnpjGET**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PropostaResumoDaProposta apiversionpropostaidcnpjcnpjGET(id, cnpj, version, authorization)

Recupera uma proposta específica e a bateria de comissões

Recupera uma proposta específica e a bateria de comissões

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.PropostaApi();

var id = 789; // Number | Id da proposta

var cnpj = "cnpj_example"; // String | CNPJ do parceiro.

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionpropostaidcnpjcnpjGET(id, cnpj, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id da proposta | 
 **cnpj** | **String**| CNPJ do parceiro. | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PropostaResumoDaProposta**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PropostaResumoDaProposta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


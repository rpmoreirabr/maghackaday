# Apiseguradora.AgendamentoMedicoApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionagendamentomedicoidGET**](AgendamentoMedicoApi.md#apiversionagendamentomedicoidGET) | **GET** /api/{version}/AgendamentoMedico/{id} | Recupera lista de agendamentos médicos de uma proposta


<a name="apiversionagendamentomedicoidGET"></a>
# **apiversionagendamentomedicoidGET**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PropostaAgendamentoMedico apiversionagendamentomedicoidGET(id, version, authorization)

Recupera lista de agendamentos médicos de uma proposta

Recupera lista de agendamentos médicos de uma proposta pelo id da proposta

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.AgendamentoMedicoApi();

var id = 789; // Number | Id do proposta

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionagendamentomedicoidGET(id, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Id do proposta | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PropostaAgendamentoMedico**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1PropostaAgendamentoMedico.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


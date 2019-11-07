# Apiseguradora.SimulacaoEmpresarialApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionsimulacaoempresarialcnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST**](SimulacaoEmpresarialApi.md#apiversionsimulacaoempresarialcnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST) | **POST** /api/{version}/SimulacaoEmpresarial | Simula a contratação de produtos empresariais globais


<a name="apiversionsimulacaoempresarialcnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST"></a>
# **apiversionsimulacaoempresarialcnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial apiversionsimulacaoempresarialcnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST(proponente, cnpj, codigoModeloProposta, version, authorization)

Simula a contratação de produtos empresariais globais

Retorna capitais ou prêmios, filtrados pelo limite operacional disponível para os produtos e perfil informados

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.SimulacaoEmpresarialApi();

var proponente = new Apiseguradora.APISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial(); // APISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial | 

var cnpj = "cnpj_example"; // String | CNPJ da empresa

var codigoModeloProposta = "codigoModeloProposta_example"; // String | Código do modelo de proposta desejado

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionsimulacaoempresarialcnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST(proponente, cnpj, codigoModeloProposta, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proponente** | [**APISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial**](APISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial.md)|  | 
 **cnpj** | **String**| CNPJ da empresa | 
 **codigoModeloProposta** | **String**| Código do modelo de proposta desejado | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, text/html, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


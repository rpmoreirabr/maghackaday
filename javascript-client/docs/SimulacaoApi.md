# Apiseguradora.SimulacaoApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST**](SimulacaoApi.md#apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST) | **POST** /api/{version}/Simulacao | Simula a contratação de produtos.


<a name="apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST"></a>
# **apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST(proponente, cnpj, codigoModeloProposta, version, authorization)

Simula a contratação de produtos.

Retorna capitais ou prêmios, filtrados pelo limite operacional disponível para os produtos e perfil informados.

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.SimulacaoApi();

var proponente = new Apiseguradora.APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta(); // APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta | 

var cnpj = "cnpj_example"; // String | CNPJ do parceiro.

var codigoModeloProposta = "codigoModeloProposta_example"; // String | Código do modelo de proposta desejado.

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST(proponente, cnpj, codigoModeloProposta, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **proponente** | [**APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta**](APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta.md)|  | 
 **cnpj** | **String**| CNPJ do parceiro. | 
 **codigoModeloProposta** | **String**| Código do modelo de proposta desejado. | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, text/html, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


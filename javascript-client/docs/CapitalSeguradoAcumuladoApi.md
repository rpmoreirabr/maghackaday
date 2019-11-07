# Apiseguradora.CapitalSeguradoAcumuladoApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionCapitalSeguradoAcumuladocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST**](CapitalSeguradoAcumuladoApi.md#apiversionCapitalSeguradoAcumuladocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST) | **POST** /api/{version}/CapitalSeguradoAcumulado | Retorna o capital segurado acumulado do proponente por causa


<a name="apiversionCapitalSeguradoAcumuladocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST"></a>
# **apiversionCapitalSeguradoAcumuladocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1CapitalSeguradoAcumuladoResultadoCapitalSeguradoAcumulado apiversionCapitalSeguradoAcumuladocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST(pesquisa, cnpj, codigoModeloProposta, version, authorization)

Retorna o capital segurado acumulado do proponente por causa

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.CapitalSeguradoAcumuladoApi();

var pesquisa = new Apiseguradora.APISeguradoraContratoV1CapitalSeguradoAcumuladoCapitalSeguradoAcumuladoPesquisa(); // APISeguradoraContratoV1CapitalSeguradoAcumuladoCapitalSeguradoAcumuladoPesquisa | 

var cnpj = "cnpj_example"; // String | CNPJ do parceiro.

var codigoModeloProposta = "codigoModeloProposta_example"; // String | Código do modelo da proposta.

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionCapitalSeguradoAcumuladocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST(pesquisa, cnpj, codigoModeloProposta, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pesquisa** | [**APISeguradoraContratoV1CapitalSeguradoAcumuladoCapitalSeguradoAcumuladoPesquisa**](APISeguradoraContratoV1CapitalSeguradoAcumuladoCapitalSeguradoAcumuladoPesquisa.md)|  | 
 **cnpj** | **String**| CNPJ do parceiro. | 
 **codigoModeloProposta** | **String**| Código do modelo da proposta. | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1CapitalSeguradoAcumuladoResultadoCapitalSeguradoAcumulado**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1CapitalSeguradoAcumuladoResultadoCapitalSeguradoAcumulado.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, text/html, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


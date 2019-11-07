# Apiseguradora.FatorComissionamentoEmpresarialGlobalApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionFatorComissionamentoEmpresarialGlobalcnpjcnpjModeloPropostaModeloPropostaGET**](FatorComissionamentoEmpresarialGlobalApi.md#apiversionFatorComissionamentoEmpresarialGlobalcnpjcnpjModeloPropostaModeloPropostaGET) | **GET** /api/{version}/FatorComissionamentoEmpresarialGlobal | Recupera uma proposta específica e a bateria de comissões


<a name="apiversionFatorComissionamentoEmpresarialGlobalcnpjcnpjModeloPropostaModeloPropostaGET"></a>
# **apiversionFatorComissionamentoEmpresarialGlobalcnpjcnpjModeloPropostaModeloPropostaGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ComissaoFatorComissionamentoEmpresarial apiversionFatorComissionamentoEmpresarialGlobalcnpjcnpjModeloPropostaModeloPropostaGET(version, authorization, opts)

Recupera uma proposta específica e a bateria de comissões

Recupera uma proposta específica e a bateria de comissões

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.FatorComissionamentoEmpresarialGlobalApi();

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização

var opts = { 
  'pesquisaCNPJ': "pesquisaCNPJ_example", // String | 
  'pesquisaModeloProposta': "pesquisaModeloProposta_example", // String | 
  'pesquisaTipoCondicaoComercial': 56, // Number | 
  'pesquisaNivelAplicacaoCondicaoComercial': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionFatorComissionamentoEmpresarialGlobalcnpjcnpjModeloPropostaModeloPropostaGET(version, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 
 **pesquisaCNPJ** | **String**|  | [optional] 
 **pesquisaModeloProposta** | **String**|  | [optional] 
 **pesquisaTipoCondicaoComercial** | **Number**|  | [optional] 
 **pesquisaNivelAplicacaoCondicaoComercial** | **Number**|  | [optional] 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ComissaoFatorComissionamentoEmpresarial**](APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ComissaoFatorComissionamentoEmpresarial.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


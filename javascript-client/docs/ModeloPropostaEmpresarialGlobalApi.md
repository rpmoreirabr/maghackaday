# Apiseguradora.ModeloPropostaEmpresarialGlobalApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGET**](ModeloPropostaEmpresarialGlobalApi.md#apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGET) | **GET** /api/{version}/ModeloPropostaEmpresarialGlobal | Retorna os dados de modelos empresariais globais


<a name="apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGET"></a>
# **apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModeloPropostaEmpresarialGlobal apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGET(version, authorization, opts)

Retorna os dados de modelos empresariais globais

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.ModeloPropostaEmpresarialGlobalApi();

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização

var opts = { 
  'pesquisaCnpjParceiro': "pesquisaCnpjParceiro_example", // String | 
  'pesquisaCodigoModeloProposta': "pesquisaCodigoModeloProposta_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGET(version, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 
 **pesquisaCnpjParceiro** | **String**|  | [optional] 
 **pesquisaCodigoModeloProposta** | **String**|  | [optional] 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModeloPropostaEmpresarialGlobal**](APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModeloPropostaEmpresarialGlobal.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


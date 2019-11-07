# Apiseguradora.RegraComissaoApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionRegraComissaoidGET**](RegraComissaoApi.md#apiversionRegraComissaoidGET) | **GET** /api/{version}/RegraComissao/{id} | Obter regra comissão


<a name="apiversionRegraComissaoidGET"></a>
# **apiversionRegraComissaoidGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraImplementacaoServicoServicoRegraComissaoDadosComissionamentoTransformado apiversionRegraComissaoidGET(id, version, authorization)

Obter regra comissão

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.RegraComissaoApi();

var id = 789; // Number | 

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionRegraComissaoidGET(id, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraImplementacaoServicoServicoRegraComissaoDadosComissionamentoTransformado**](APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraImplementacaoServicoServicoRegraComissaoDadosComissionamentoTransformado.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


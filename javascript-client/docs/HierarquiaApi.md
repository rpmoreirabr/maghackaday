# Apiseguradora.HierarquiaApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionhierarquiadocumentoparceiroGET**](HierarquiaApi.md#apiversionhierarquiadocumentoparceiroGET) | **GET** /api/{version}/Hierarquia | 
[**apiversionhierarquiadocumentoparceiroGET_0**](HierarquiaApi.md#apiversionhierarquiadocumentoparceiroGET_0) | **GET** /api/{version}/hierarquia/{documento}/parceiro | 
[**apiversionhierarquiaidGET**](HierarquiaApi.md#apiversionhierarquiaidGET) | **GET** /api/{version}/Hierarquia/{id} | Recupera uma hierarquia de produtores a partir do documento do produtor


<a name="apiversionhierarquiadocumentoparceiroGET"></a>
# **apiversionhierarquiadocumentoparceiroGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1PropostaHierarquiaParceiro apiversionhierarquiadocumentoparceiroGET(documento, version, authorization)



### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.HierarquiaApi();

var documento = "documento_example"; // String | 

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionhierarquiadocumentoparceiroGET(documento, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documento** | **String**|  | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1PropostaHierarquiaParceiro**](APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1PropostaHierarquiaParceiro.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionhierarquiadocumentoparceiroGET_0"></a>
# **apiversionhierarquiadocumentoparceiroGET_0**
> APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1PropostaHierarquiaParceiro apiversionhierarquiadocumentoparceiroGET_0(documento, version, authorization)



### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.HierarquiaApi();

var documento = "documento_example"; // String | 

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionhierarquiadocumentoparceiroGET_0(documento, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documento** | **String**|  | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1PropostaHierarquiaParceiro**](APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1PropostaHierarquiaParceiro.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionhierarquiaidGET"></a>
# **apiversionhierarquiaidGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1PropostaHierarquia apiversionhierarquiaidGET(id, version, authorization)

Recupera uma hierarquia de produtores a partir do documento do produtor

Recupera um produtor específico pelo id

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.HierarquiaApi();

var id = "id_example"; // String | Identificação (CPF/CNPJ)

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionhierarquiaidGET(id, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Identificação (CPF/CNPJ) | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1PropostaHierarquia**](APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1PropostaHierarquia.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


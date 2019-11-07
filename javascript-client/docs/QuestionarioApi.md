# Apiseguradora.QuestionarioApi

All URIs are relative to *https://apiseguradora-v2.mgaapi.p.azurewebsites.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiversionquestionariocodigoModeloPropostacodigoModeloPropostaGET**](QuestionarioApi.md#apiversionquestionariocodigoModeloPropostacodigoModeloPropostaGET) | **GET** /api/{version}/Questionario | Recupera questionários
[**apiversionquestionarioidcodigoModeloPropostacodigoModeloPropostaGET**](QuestionarioApi.md#apiversionquestionarioidcodigoModeloPropostacodigoModeloPropostaGET) | **GET** /api/{version}/Questionario/{id} | Recupera um questionário específico


<a name="apiversionquestionariocodigoModeloPropostacodigoModeloPropostaGET"></a>
# **apiversionquestionariocodigoModeloPropostacodigoModeloPropostaGET**
> APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1QuestionarioQuestionario apiversionquestionariocodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, version, authorization)

Recupera questionários

Retorna os Produtos disponíveis para um determinado modelo de proposta

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.QuestionarioApi();

var codigoModeloProposta = "codigoModeloProposta_example"; // String | Código do modelo de proposta

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionquestionariocodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, version, authorization, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codigoModeloProposta** | **String**| Código do modelo de proposta | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1QuestionarioQuestionario**](APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1QuestionarioQuestionario.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml

<a name="apiversionquestionarioidcodigoModeloPropostacodigoModeloPropostaGET"></a>
# **apiversionquestionarioidcodigoModeloPropostacodigoModeloPropostaGET**
> APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1QuestionarioQuestionario apiversionquestionarioidcodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, id, version, authorization, opts)

Recupera um questionário específico

Retorna um produto específico de um modelo de proposta

### Example
```javascript
var Apiseguradora = require('apiseguradora');

var apiInstance = new Apiseguradora.QuestionarioApi();

var codigoModeloProposta = "codigoModeloProposta_example"; // String | Código do modelo de proposta

var id = 56; // Number | Identificador do produto

var version = "version_example"; // String | 

var authorization = "authorization_example"; // String | Token de autorização

var opts = { 
  'vigencia': new Date("2013-10-20T19:20:30+01:00") // Date | Identificador do produto
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.apiversionquestionarioidcodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, id, version, authorization, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **codigoModeloProposta** | **String**| Código do modelo de proposta | 
 **id** | **Number**| Identificador do produto | 
 **version** | **String**|  | 
 **authorization** | **String**| Token de autorização | 
 **vigencia** | **Date**| Identificador do produto | [optional] 

### Return type

[**APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1QuestionarioQuestionario**](APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1QuestionarioQuestionario.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/xml, text/xml


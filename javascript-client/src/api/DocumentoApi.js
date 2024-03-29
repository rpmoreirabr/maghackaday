/*
 * API.Seguradora
 * Serviços de Negócios expostos através de RESTful services, para integrações com parceiros e agilidade no desenvolvimento interno de softwares da companhia.
 *
 * OpenAPI spec version: v1
 * Contact: integracaosistemas@mongeralaegon.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/APISeguradoraContratoV1DocDocumento', 'model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1DocDocumento', 'model/APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean', 'model/APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1DocDocumento'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/APISeguradoraContratoV1DocDocumento'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1DocDocumento'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1DocDocumento'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.DocumentoApi = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1DocDocumento, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1DocDocumento, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1DocDocumento);
  }
}(this, function(ApiClient, APISeguradoraContratoV1DocDocumento, APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1DocDocumento, APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean, APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1DocDocumento) {
  'use strict';

  /**
   * Documento service.
   * @module api/DocumentoApi
   * @version v1
   */

  /**
   * Constructs a new DocumentoApi. 
   * @alias module:api/DocumentoApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiversiondocumentoPOST operation.
     * @callback module:api/DocumentoApi~apiversiondocumentoPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cria um documento
     * Retorna o documento que foi criado
     * @param {module:model/APISeguradoraContratoV1DocDocumento} documento Documento a ser criado.
     * @param {String} cnpj CNPJ do parceiro.
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {module:api/DocumentoApi~apiversiondocumentoPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean}
     */
    this.apiversiondocumentoPOST = function(documento, cnpj, version, authorization, callback) {
      var postBody = documento;

      // verify the required parameter 'documento' is set
      if (documento === undefined || documento === null) {
        throw new Error("Missing the required parameter 'documento' when calling apiversiondocumentoPOST");
      }

      // verify the required parameter 'cnpj' is set
      if (cnpj === undefined || cnpj === null) {
        throw new Error("Missing the required parameter 'cnpj' when calling apiversiondocumentoPOST");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversiondocumentoPOST");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversiondocumentoPOST");
      }


      var pathParams = {
        'version': version
      };
      var queryParams = {
        'cnpj': cnpj,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean;

      return this.apiClient.callApi(
        '/api/{version}/Documento', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiversiondocumentoidGET operation.
     * @callback module:api/DocumentoApi~apiversiondocumentoidGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1DocDocumento} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtém um documento
     * Retorna um documento que esteja indexado nos sistemas de GED da Mongeral Aegon.
     * @param {String} id Id do documento.
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {module:api/DocumentoApi~apiversiondocumentoidGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1DocDocumento}
     */
    this.apiversiondocumentoidGET = function(id, version, authorization, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiversiondocumentoidGET");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversiondocumentoidGET");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversiondocumentoidGET");
      }


      var pathParams = {
        'id': id,
        'version': version
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1DocDocumento;

      return this.apiClient.callApi(
        '/api/{version}/Documento/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiversiondocumentoindiceDocumentocnpjcnpjGET operation.
     * @callback module:api/DocumentoApi~apiversiondocumentoindiceDocumentocnpjcnpjGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1DocDocumento} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obtém documentos de um indice.
     * Obtém um array de Documento contendo os documentos registrados no GED da Mongeral, de acordo com o índice informado.
     * @param {String} cnpj CNPJ do parceiro.
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {Object} opts Optional parameters
     * @param {String} opts.indiceDocumentoValor 
     * @param {String} opts.indiceDocumentoTipoIndice 
     * @param {module:api/DocumentoApi~apiversiondocumentoindiceDocumentocnpjcnpjGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1DocDocumento}
     */
    this.apiversiondocumentoindiceDocumentocnpjcnpjGET = function(cnpj, version, authorization, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'cnpj' is set
      if (cnpj === undefined || cnpj === null) {
        throw new Error("Missing the required parameter 'cnpj' when calling apiversiondocumentoindiceDocumentocnpjcnpjGET");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversiondocumentoindiceDocumentocnpjcnpjGET");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversiondocumentoindiceDocumentocnpjcnpjGET");
      }


      var pathParams = {
        'version': version
      };
      var queryParams = {
        'cnpj': cnpj,
        'indiceDocumento.valor': opts['indiceDocumentoValor'],
        'indiceDocumento.tipoIndice': opts['indiceDocumentoTipoIndice'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'authorization': authorization
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1DocDocumento;

      return this.apiClient.callApi(
        '/api/{version}/Documento', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

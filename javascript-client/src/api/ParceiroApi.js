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
    define(['ApiClient', 'model/APISeguradoraContratoV1ParDadosCadastroParceiro', 'model/APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean', 'model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListMongeralESBPessoaContratoV1DadosParceiro', 'model/APISeguradoraHelperResultadoDaOperacaoRestSystemInt64'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/APISeguradoraContratoV1ParDadosCadastroParceiro'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListMongeralESBPessoaContratoV1DadosParceiro'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestSystemInt64'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.ParceiroApi = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1ParDadosCadastroParceiro, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListMongeralESBPessoaContratoV1DadosParceiro, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestSystemInt64);
  }
}(this, function(ApiClient, APISeguradoraContratoV1ParDadosCadastroParceiro, APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean, APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListMongeralESBPessoaContratoV1DadosParceiro, APISeguradoraHelperResultadoDaOperacaoRestSystemInt64) {
  'use strict';

  /**
   * Parceiro service.
   * @module api/ParceiroApi
   * @version v1
   */

  /**
   * Constructs a new ParceiroApi. 
   * @alias module:api/ParceiroApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiversionparceiroPOST operation.
     * @callback module:api/ParceiroApi~apiversionparceiroPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemInt64} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cadastrar Parceiro
     * Realiza cadastramento de parceiro
     * @param {module:model/APISeguradoraContratoV1ParDadosCadastroParceiro} dadosCadastroParceiro 
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {module:api/ParceiroApi~apiversionparceiroPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemInt64}
     */
    this.apiversionparceiroPOST = function(dadosCadastroParceiro, version, authorization, callback) {
      var postBody = dadosCadastroParceiro;

      // verify the required parameter 'dadosCadastroParceiro' is set
      if (dadosCadastroParceiro === undefined || dadosCadastroParceiro === null) {
        throw new Error("Missing the required parameter 'dadosCadastroParceiro' when calling apiversionparceiroPOST");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversionparceiroPOST");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversionparceiroPOST");
      }


      var pathParams = {
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
      var contentTypes = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestSystemInt64;

      return this.apiClient.callApi(
        '/api/{version}/Parceiro', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiversionparceiroPUT operation.
     * @callback module:api/ParceiroApi~apiversionparceiroPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Atualizar Parceiro
     * Realiza edição de parceiro
     * @param {module:model/APISeguradoraContratoV1ParDadosCadastroParceiro} dadosEdicaoParceiro 
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {module:api/ParceiroApi~apiversionparceiroPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean}
     */
    this.apiversionparceiroPUT = function(dadosEdicaoParceiro, version, authorization, callback) {
      var postBody = dadosEdicaoParceiro;

      // verify the required parameter 'dadosEdicaoParceiro' is set
      if (dadosEdicaoParceiro === undefined || dadosEdicaoParceiro === null) {
        throw new Error("Missing the required parameter 'dadosEdicaoParceiro' when calling apiversionparceiroPUT");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversionparceiroPUT");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversionparceiroPUT");
      }


      var pathParams = {
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
      var contentTypes = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestSystemBoolean;

      return this.apiClient.callApi(
        '/api/{version}/Parceiro', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiversionparceirocnpjcnpjGET operation.
     * @callback module:api/ParceiroApi~apiversionparceirocnpjcnpjGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListMongeralESBPessoaContratoV1DadosParceiro} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obter Parceiros
     * Retornar lista de Parceiros
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {Object} opts Optional parameters
     * @param {String} opts.cnpj 
     * @param {module:api/ParceiroApi~apiversionparceirocnpjcnpjGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListMongeralESBPessoaContratoV1DadosParceiro}
     */
    this.apiversionparceirocnpjcnpjGET = function(version, authorization, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversionparceirocnpjcnpjGET");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversionparceirocnpjcnpjGET");
      }


      var pathParams = {
        'version': version
      };
      var queryParams = {
        'cnpj': opts['cnpj'],
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
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListMongeralESBPessoaContratoV1DadosParceiro;

      return this.apiClient.callApi(
        '/api/{version}/Parceiro', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
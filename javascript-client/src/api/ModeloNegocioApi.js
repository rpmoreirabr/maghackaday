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
    define(['ApiClient', 'model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloNegocioModeloNegocio', 'model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO', 'model/APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloNegocioModeloNegocio', 'model/APISeguradoraImplementacaoServicoDadosModeloNegocio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloNegocioModeloNegocio'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloNegocioModeloNegocio'), require('../model/APISeguradoraImplementacaoServicoDadosModeloNegocio'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.ModeloNegocioApi = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloNegocioModeloNegocio, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloNegocioModeloNegocio, root.Apiseguradora.APISeguradoraImplementacaoServicoDadosModeloNegocio);
  }
}(this, function(ApiClient, APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloNegocioModeloNegocio, APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO, APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloNegocioModeloNegocio, APISeguradoraImplementacaoServicoDadosModeloNegocio) {
  'use strict';

  /**
   * ModeloNegocio service.
   * @module api/ModeloNegocioApi
   * @version v1
   */

  /**
   * Constructs a new ModeloNegocioApi. 
   * @alias module:api/ModeloNegocioApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiversionmodeloNegocioidcnpjcnpjGET operation.
     * @callback module:api/ModeloNegocioApi~apiversionmodeloNegocioidcnpjcnpjGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloNegocioModeloNegocio} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recupera um modelo de Negocio específico
     * Recupera uma determinada instância de \"ModeloNegocio\" disponível para a empresa informada pelo código
     * @param {Number} id Código do modelo de Negocio
     * @param {String} cnpj CNPJ da empresa
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {module:api/ModeloNegocioApi~apiversionmodeloNegocioidcnpjcnpjGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloNegocioModeloNegocio}
     */
    this.apiversionmodeloNegocioidcnpjcnpjGET = function(id, cnpj, version, authorization, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiversionmodeloNegocioidcnpjcnpjGET");
      }

      // verify the required parameter 'cnpj' is set
      if (cnpj === undefined || cnpj === null) {
        throw new Error("Missing the required parameter 'cnpj' when calling apiversionmodeloNegocioidcnpjcnpjGET");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversionmodeloNegocioidcnpjcnpjGET");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversionmodeloNegocioidcnpjcnpjGET");
      }


      var pathParams = {
        'id': id,
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
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'text/html', 'application/xml', 'text/xml'];
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ModeloNegocioModeloNegocio;

      return this.apiClient.callApi(
        '/api/{version}/ModeloNegocio/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiversionmodeloNegociomodeloNegociocnpjcnpjGET operation.
     * @callback module:api/ModeloNegocioApi~apiversionmodeloNegociomodeloNegociocnpjcnpjGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloNegocioModeloNegocio} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Recupera modelos de Negocio
     * Recupera as instâncias de \"ModeloNegocio\" disponíveis para a empresa informada e o modelo especificado
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {Object} opts Optional parameters
     * @param {String} opts.cnpj CNPJ da empresa
     * @param {Number} opts.modeloNegocioCodigoModeloNegocio 
     * @param {String} opts.modeloNegocioNome 
     * @param {Number} opts.modeloNegocioIdParceiro 
     * @param {module:api/ModeloNegocioApi~apiversionmodeloNegociomodeloNegociocnpjcnpjGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloNegocioModeloNegocio}
     */
    this.apiversionmodeloNegociomodeloNegociocnpjcnpjGET = function(version, authorization, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversionmodeloNegociomodeloNegociocnpjcnpjGET");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversionmodeloNegociomodeloNegociocnpjcnpjGET");
      }


      var pathParams = {
        'version': version
      };
      var queryParams = {
        'cnpj': opts['cnpj'],
        'modeloNegocio.codigoModeloNegocio': opts['modeloNegocioCodigoModeloNegocio'],
        'modeloNegocio.nome': opts['modeloNegocioNome'],
        'modeloNegocio.idParceiro': opts['modeloNegocioIdParceiro'],
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
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ModeloNegocioModeloNegocio;

      return this.apiClient.callApi(
        '/api/{version}/ModeloNegocio', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the apiversionmodelonegocioPOST operation.
     * @callback module:api/ModeloNegocioApi~apiversionmodelonegocioPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gravar Modelo de Negócio
     * @param {module:model/APISeguradoraImplementacaoServicoDadosModeloNegocio} dadosModeloNegocio 
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {module:api/ModeloNegocioApi~apiversionmodelonegocioPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO}
     */
    this.apiversionmodelonegocioPOST = function(dadosModeloNegocio, version, authorization, callback) {
      var postBody = dadosModeloNegocio;

      // verify the required parameter 'dadosModeloNegocio' is set
      if (dadosModeloNegocio === undefined || dadosModeloNegocio === null) {
        throw new Error("Missing the required parameter 'dadosModeloNegocio' when calling apiversionmodelonegocioPOST");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversionmodelonegocioPOST");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversionmodelonegocioPOST");
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
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO;

      return this.apiClient.callApi(
        '/api/{version}/ModeloNegocio', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
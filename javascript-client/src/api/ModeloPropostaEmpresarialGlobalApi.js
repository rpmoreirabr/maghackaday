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
    define(['ApiClient', 'model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModeloPropostaEmpresarialGlobal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModeloPropostaEmpresarialGlobal'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.ModeloPropostaEmpresarialGlobalApi = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModeloPropostaEmpresarialGlobal);
  }
}(this, function(ApiClient, APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModeloPropostaEmpresarialGlobal) {
  'use strict';

  /**
   * ModeloPropostaEmpresarialGlobal service.
   * @module api/ModeloPropostaEmpresarialGlobalApi
   * @version v1
   */

  /**
   * Constructs a new ModeloPropostaEmpresarialGlobalApi. 
   * @alias module:api/ModeloPropostaEmpresarialGlobalApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGET operation.
     * @callback module:api/ModeloPropostaEmpresarialGlobalApi~apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModeloPropostaEmpresarialGlobal} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retorna os dados de modelos empresariais globais
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {Object} opts Optional parameters
     * @param {String} opts.pesquisaCnpjParceiro 
     * @param {String} opts.pesquisaCodigoModeloProposta 
     * @param {module:api/ModeloPropostaEmpresarialGlobalApi~apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModeloPropostaEmpresarialGlobal}
     */
    this.apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGET = function(version, authorization, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGET");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversionmodeloPropostaEmpresarialGlobalcnpjParceirocnpjParceiroGET");
      }


      var pathParams = {
        'version': version
      };
      var queryParams = {
        'pesquisa.cnpjParceiro': opts['pesquisaCnpjParceiro'],
        'pesquisa.codigoModeloProposta': opts['pesquisaCodigoModeloProposta'],
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
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModeloPropostaEmpresarialGlobal;

      return this.apiClient.callApi(
        '/api/{version}/ModeloPropostaEmpresarialGlobal', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

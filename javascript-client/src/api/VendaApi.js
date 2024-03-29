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
    define(['ApiClient', 'model/APISeguradoraContratoV1PropostaDadosRegistrarVenda', 'model/APISeguradoraHelperResultadoDaOperacaoRestSystemInt64'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/APISeguradoraContratoV1PropostaDadosRegistrarVenda'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestSystemInt64'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.VendaApi = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1PropostaDadosRegistrarVenda, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestSystemInt64);
  }
}(this, function(ApiClient, APISeguradoraContratoV1PropostaDadosRegistrarVenda, APISeguradoraHelperResultadoDaOperacaoRestSystemInt64) {
  'use strict';

  /**
   * Venda service.
   * @module api/VendaApi
   * @version v1
   */

  /**
   * Constructs a new VendaApi. 
   * @alias module:api/VendaApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiversionvendaPOST operation.
     * @callback module:api/VendaApi~apiversionvendaPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemInt64} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registra uma venda
     * Registra uma proposta
     * @param {module:model/APISeguradoraContratoV1PropostaDadosRegistrarVenda} dadosVenda Informações da proposta
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {module:api/VendaApi~apiversionvendaPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemInt64}
     */
    this.apiversionvendaPOST = function(dadosVenda, version, authorization, callback) {
      var postBody = dadosVenda;

      // verify the required parameter 'dadosVenda' is set
      if (dadosVenda === undefined || dadosVenda === null) {
        throw new Error("Missing the required parameter 'dadosVenda' when calling apiversionvendaPOST");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversionvendaPOST");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversionvendaPOST");
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
        '/api/{version}/venda', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

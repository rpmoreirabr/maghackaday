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
    define(['ApiClient', 'model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraImplementacaoServicoServicoRegraComissaoDadosComissionamentoTransformado'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraImplementacaoServicoServicoRegraComissaoDadosComissionamentoTransformado'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.RegraComissaoApi = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraImplementacaoServicoServicoRegraComissaoDadosComissionamentoTransformado);
  }
}(this, function(ApiClient, APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraImplementacaoServicoServicoRegraComissaoDadosComissionamentoTransformado) {
  'use strict';

  /**
   * RegraComissao service.
   * @module api/RegraComissaoApi
   * @version v1
   */

  /**
   * Constructs a new RegraComissaoApi. 
   * @alias module:api/RegraComissaoApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiversionRegraComissaoidGET operation.
     * @callback module:api/RegraComissaoApi~apiversionRegraComissaoidGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraImplementacaoServicoServicoRegraComissaoDadosComissionamentoTransformado} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Obter regra comissão
     * @param {Number} id 
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {module:api/RegraComissaoApi~apiversionRegraComissaoidGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraImplementacaoServicoServicoRegraComissaoDadosComissionamentoTransformado}
     */
    this.apiversionRegraComissaoidGET = function(id, version, authorization, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiversionRegraComissaoidGET");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversionRegraComissaoidGET");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversionRegraComissaoidGET");
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
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestSystemCollectionsGenericListAPISeguradoraImplementacaoServicoServicoRegraComissaoDadosComissionamentoTransformado;

      return this.apiClient.callApi(
        '/api/{version}/RegraComissao/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

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
    define(['ApiClient', 'model/APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta', 'model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta'), require('../model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.SimulacaoApi = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta, root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta);
  }
}(this, function(ApiClient, APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta, APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta) {
  'use strict';

  /**
   * Simulacao service.
   * @module api/SimulacaoApi
   * @version v1
   */

  /**
   * Constructs a new SimulacaoApi. 
   * @alias module:api/SimulacaoApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST operation.
     * @callback module:api/SimulacaoApi~apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Simula a contratação de produtos.
     * Retorna capitais ou prêmios, filtrados pelo limite operacional disponível para os produtos e perfil informados.
     * @param {module:model/APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta} proponente 
     * @param {String} cnpj CNPJ do parceiro.
     * @param {String} codigoModeloProposta Código do modelo de proposta desejado.
     * @param {String} version 
     * @param {String} authorization Token de autorização
     * @param {module:api/SimulacaoApi~apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta}
     */
    this.apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST = function(proponente, cnpj, codigoModeloProposta, version, authorization, callback) {
      var postBody = proponente;

      // verify the required parameter 'proponente' is set
      if (proponente === undefined || proponente === null) {
        throw new Error("Missing the required parameter 'proponente' when calling apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST");
      }

      // verify the required parameter 'cnpj' is set
      if (cnpj === undefined || cnpj === null) {
        throw new Error("Missing the required parameter 'cnpj' when calling apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST");
      }

      // verify the required parameter 'codigoModeloProposta' is set
      if (codigoModeloProposta === undefined || codigoModeloProposta === null) {
        throw new Error("Missing the required parameter 'codigoModeloProposta' when calling apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST");
      }

      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling apiversionsimulacaocnpjcnpjcodigoModeloPropostacodigoModeloPropostaPOST");
      }


      var pathParams = {
        'version': version
      };
      var queryParams = {
        'cnpj': cnpj,
        'codigoModeloProposta': codigoModeloProposta,
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
      var returnType = APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta;

      return this.apiClient.callApi(
        '/api/{version}/Simulacao', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

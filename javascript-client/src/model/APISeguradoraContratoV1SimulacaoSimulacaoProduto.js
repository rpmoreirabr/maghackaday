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
    define(['ApiClient', 'model/APISeguradoraContratoV1SimulacaoSimulacaoCobertura'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1SimulacaoSimulacaoCobertura'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1SimulacaoSimulacaoProduto = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1SimulacaoSimulacaoCobertura);
  }
}(this, function(ApiClient, APISeguradoraContratoV1SimulacaoSimulacaoCobertura) {
  'use strict';

  /**
   * The APISeguradoraContratoV1SimulacaoSimulacaoProduto model module.
   * @module model/APISeguradoraContratoV1SimulacaoSimulacaoProduto
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1SimulacaoSimulacaoProduto</code>.
   * @alias module:model/APISeguradoraContratoV1SimulacaoSimulacaoProduto
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1SimulacaoSimulacaoProduto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1SimulacaoSimulacaoProduto} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1SimulacaoSimulacaoProduto} The populated <code>APISeguradoraContratoV1SimulacaoSimulacaoProduto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('idProduto'))
        obj.idProduto = ApiClient.convertToType(data['idProduto'], 'Number');
      if (data.hasOwnProperty('descricao'))
        obj.descricao = ApiClient.convertToType(data['descricao'], 'String');
      if (data.hasOwnProperty('descricaoComercial'))
        obj.descricaoComercial = ApiClient.convertToType(data['descricaoComercial'], 'String');
      if (data.hasOwnProperty('coberturas'))
        obj.coberturas = ApiClient.convertToType(data['coberturas'], [APISeguradoraContratoV1SimulacaoSimulacaoCobertura]);
    }
    return obj;
  }

  /**
   * @member {Number} idProduto
   */
  exports.prototype.idProduto = undefined;

  /**
   * @member {String} descricao
   */
  exports.prototype.descricao = undefined;

  /**
   * @member {String} descricaoComercial
   */
  exports.prototype.descricaoComercial = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1SimulacaoSimulacaoCobertura>} coberturas
   */
  exports.prototype.coberturas = undefined;

  return exports;

}));
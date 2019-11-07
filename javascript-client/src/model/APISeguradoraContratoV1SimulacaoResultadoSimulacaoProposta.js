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
    define(['ApiClient', 'model/APISeguradoraContratoV1SimulacaoSimulacaoProposta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1SimulacaoSimulacaoProposta'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1SimulacaoSimulacaoProposta);
  }
}(this, function(ApiClient, APISeguradoraContratoV1SimulacaoSimulacaoProposta) {
  'use strict';

  /**
   * The APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta model module.
   * @module model/APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta</code>.
   * @alias module:model/APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta} The populated <code>APISeguradoraContratoV1SimulacaoResultadoSimulacaoProposta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('simulacoes'))
        obj.simulacoes = ApiClient.convertToType(data['simulacoes'], [APISeguradoraContratoV1SimulacaoSimulacaoProposta]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1SimulacaoSimulacaoProposta>} simulacoes
   */
  exports.prototype.simulacoes = undefined;

  return exports;

}));

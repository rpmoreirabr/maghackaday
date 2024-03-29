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
    define(['ApiClient', 'model/APISeguradoraContratoV1PropostaPortador'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1PropostaPortador'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1PropostaCartao = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1PropostaPortador);
  }
}(this, function(ApiClient, APISeguradoraContratoV1PropostaPortador) {
  'use strict';

  /**
   * The APISeguradoraContratoV1PropostaCartao model module.
   * @module model/APISeguradoraContratoV1PropostaCartao
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1PropostaCartao</code>.
   * @alias module:model/APISeguradoraContratoV1PropostaCartao
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1PropostaCartao</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1PropostaCartao} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1PropostaCartao} The populated <code>APISeguradoraContratoV1PropostaCartao</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Numero'))
        obj.numero = ApiClient.convertToType(data['Numero'], 'String');
      if (data.hasOwnProperty('Validade'))
        obj.validade = ApiClient.convertToType(data['Validade'], 'Date');
      if (data.hasOwnProperty('NumPreAutorizacao'))
        obj.numPreAutorizacao = ApiClient.convertToType(data['NumPreAutorizacao'], 'Number');
      if (data.hasOwnProperty('Badeira'))
        obj.badeira = ApiClient.convertToType(data['Badeira'], 'String');
      if (data.hasOwnProperty('Parcela'))
        obj.parcela = ApiClient.convertToType(data['Parcela'], 'Number');
      if (data.hasOwnProperty('Portador'))
        obj.portador = APISeguradoraContratoV1PropostaPortador.constructFromObject(data['Portador']);
    }
    return obj;
  }

  /**
   * @member {String} numero
   */
  exports.prototype.numero = undefined;

  /**
   * @member {Date} validade
   */
  exports.prototype.validade = undefined;

  /**
   * @member {Number} numPreAutorizacao
   */
  exports.prototype.numPreAutorizacao = undefined;

  /**
   * @member {String} badeira
   */
  exports.prototype.badeira = undefined;

  /**
   * @member {Number} parcela
   */
  exports.prototype.parcela = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1PropostaPortador} portador
   */
  exports.prototype.portador = undefined;

  return exports;

}));

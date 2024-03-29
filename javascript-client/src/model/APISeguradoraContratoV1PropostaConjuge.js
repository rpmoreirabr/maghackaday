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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1PropostaConjuge = factory(root.Apiseguradora.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The APISeguradoraContratoV1PropostaConjuge model module.
   * @module model/APISeguradoraContratoV1PropostaConjuge
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1PropostaConjuge</code>.
   * @alias module:model/APISeguradoraContratoV1PropostaConjuge
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1PropostaConjuge</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1PropostaConjuge} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1PropostaConjuge} The populated <code>APISeguradoraContratoV1PropostaConjuge</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Nome'))
        obj.nome = ApiClient.convertToType(data['Nome'], 'String');
      if (data.hasOwnProperty('Idade'))
        obj.idade = ApiClient.convertToType(data['Idade'], 'Number');
      if (data.hasOwnProperty('Nascimento'))
        obj.nascimento = ApiClient.convertToType(data['Nascimento'], 'Date');
      if (data.hasOwnProperty('CPF'))
        obj.CPF = ApiClient.convertToType(data['CPF'], 'String');
      if (data.hasOwnProperty('TitularCpf'))
        obj.titularCpf = ApiClient.convertToType(data['TitularCpf'], 'Boolean');
      if (data.hasOwnProperty('Ocupacao'))
        obj.ocupacao = ApiClient.convertToType(data['Ocupacao'], 'String');
      if (data.hasOwnProperty('CdOcupacao'))
        obj.cdOcupacao = ApiClient.convertToType(data['CdOcupacao'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} nome
   */
  exports.prototype.nome = undefined;

  /**
   * @member {Number} idade
   */
  exports.prototype.idade = undefined;

  /**
   * @member {Date} nascimento
   */
  exports.prototype.nascimento = undefined;

  /**
   * @member {String} CPF
   */
  exports.prototype.CPF = undefined;

  /**
   * @member {Boolean} titularCpf
   */
  exports.prototype.titularCpf = undefined;

  /**
   * @member {String} ocupacao
   */
  exports.prototype.ocupacao = undefined;

  /**
   * @member {String} cdOcupacao
   */
  exports.prototype.cdOcupacao = undefined;

  return exports;

}));

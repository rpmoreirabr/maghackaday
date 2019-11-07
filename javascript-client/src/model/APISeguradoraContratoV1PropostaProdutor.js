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
    root.Apiseguradora.APISeguradoraContratoV1PropostaProdutor = factory(root.Apiseguradora.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The APISeguradoraContratoV1PropostaProdutor model module.
   * @module model/APISeguradoraContratoV1PropostaProdutor
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1PropostaProdutor</code>.
   * @alias module:model/APISeguradoraContratoV1PropostaProdutor
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1PropostaProdutor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1PropostaProdutor} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1PropostaProdutor} The populated <code>APISeguradoraContratoV1PropostaProdutor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('codigoProdutor'))
        obj.codigoProdutor = ApiClient.convertToType(data['codigoProdutor'], 'String');
      if (data.hasOwnProperty('documento'))
        obj.documento = ApiClient.convertToType(data['documento'], 'String');
      if (data.hasOwnProperty('nome'))
        obj.nome = ApiClient.convertToType(data['nome'], 'String');
      if (data.hasOwnProperty('cargo'))
        obj.cargo = ApiClient.convertToType(data['cargo'], 'String');
      if (data.hasOwnProperty('CodigoUnidadeProducao'))
        obj.codigoUnidadeProducao = ApiClient.convertToType(data['CodigoUnidadeProducao'], 'String');
      if (data.hasOwnProperty('OrdemHierarquia'))
        obj.ordemHierarquia = ApiClient.convertToType(data['OrdemHierarquia'], 'String');
      if (data.hasOwnProperty('NumeroSusep'))
        obj.numeroSusep = ApiClient.convertToType(data['NumeroSusep'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} codigoProdutor
   */
  exports.prototype.codigoProdutor = undefined;

  /**
   * @member {String} documento
   */
  exports.prototype.documento = undefined;

  /**
   * @member {String} nome
   */
  exports.prototype.nome = undefined;

  /**
   * @member {String} cargo
   */
  exports.prototype.cargo = undefined;

  /**
   * @member {String} codigoUnidadeProducao
   */
  exports.prototype.codigoUnidadeProducao = undefined;

  /**
   * @member {String} ordemHierarquia
   */
  exports.prototype.ordemHierarquia = undefined;

  /**
   * @member {String} numeroSusep
   */
  exports.prototype.numeroSusep = undefined;

  return exports;

}));

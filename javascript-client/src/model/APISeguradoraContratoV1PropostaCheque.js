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
    root.Apiseguradora.APISeguradoraContratoV1PropostaCheque = factory(root.Apiseguradora.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The APISeguradoraContratoV1PropostaCheque model module.
   * @module model/APISeguradoraContratoV1PropostaCheque
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1PropostaCheque</code>.
   * @alias module:model/APISeguradoraContratoV1PropostaCheque
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1PropostaCheque</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1PropostaCheque} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1PropostaCheque} The populated <code>APISeguradoraContratoV1PropostaCheque</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('NrCheque'))
        obj.nrCheque = ApiClient.convertToType(data['NrCheque'], 'String');
      if (data.hasOwnProperty('NrBanco'))
        obj.nrBanco = ApiClient.convertToType(data['NrBanco'], 'String');
      if (data.hasOwnProperty('NrAgencia'))
        obj.nrAgencia = ApiClient.convertToType(data['NrAgencia'], 'String');
      if (data.hasOwnProperty('ContaCorrente'))
        obj.contaCorrente = ApiClient.convertToType(data['ContaCorrente'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} nrCheque
   */
  exports.prototype.nrCheque = undefined;

  /**
   * @member {String} nrBanco
   */
  exports.prototype.nrBanco = undefined;

  /**
   * @member {String} nrAgencia
   */
  exports.prototype.nrAgencia = undefined;

  /**
   * @member {String} contaCorrente
   */
  exports.prototype.contaCorrente = undefined;

  return exports;

}));
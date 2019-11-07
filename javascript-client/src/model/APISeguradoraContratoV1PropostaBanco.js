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
    root.Apiseguradora.APISeguradoraContratoV1PropostaBanco = factory(root.Apiseguradora.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The APISeguradoraContratoV1PropostaBanco model module.
   * @module model/APISeguradoraContratoV1PropostaBanco
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1PropostaBanco</code>.
   * @alias module:model/APISeguradoraContratoV1PropostaBanco
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1PropostaBanco</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1PropostaBanco} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1PropostaBanco} The populated <code>APISeguradoraContratoV1PropostaBanco</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Numero'))
        obj.numero = ApiClient.convertToType(data['Numero'], 'Number');
      if (data.hasOwnProperty('Nome'))
        obj.nome = ApiClient.convertToType(data['Nome'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} numero
   */
  exports.prototype.numero = undefined;

  /**
   * @member {String} nome
   */
  exports.prototype.nome = undefined;

  return exports;

}));

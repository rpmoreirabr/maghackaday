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
    define(['ApiClient', 'model/APISeguradoraContratoV1ModeloNegocioEmpresaTeleunderwriting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1ModeloNegocioEmpresaTeleunderwriting'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioTeleUnderWriting = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioEmpresaTeleunderwriting);
  }
}(this, function(ApiClient, APISeguradoraContratoV1ModeloNegocioEmpresaTeleunderwriting) {
  'use strict';

  /**
   * The APISeguradoraContratoV1ModeloNegocioTeleUnderWriting model module.
   * @module model/APISeguradoraContratoV1ModeloNegocioTeleUnderWriting
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1ModeloNegocioTeleUnderWriting</code>.
   * @alias module:model/APISeguradoraContratoV1ModeloNegocioTeleUnderWriting
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1ModeloNegocioTeleUnderWriting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1ModeloNegocioTeleUnderWriting} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1ModeloNegocioTeleUnderWriting} The populated <code>APISeguradoraContratoV1ModeloNegocioTeleUnderWriting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('empresaTeleUnderWriting'))
        obj.empresaTeleUnderWriting = APISeguradoraContratoV1ModeloNegocioEmpresaTeleunderwriting.constructFromObject(data['empresaTeleUnderWriting']);
      if (data.hasOwnProperty('dataInicioVigencia'))
        obj.dataInicioVigencia = ApiClient.convertToType(data['dataInicioVigencia'], 'Date');
      if (data.hasOwnProperty('dataFimVigencia'))
        obj.dataFimVigencia = ApiClient.convertToType(data['dataFimVigencia'], 'Date');
      if (data.hasOwnProperty('capitalMinimo'))
        obj.capitalMinimo = ApiClient.convertToType(data['capitalMinimo'], 'Number');
      if (data.hasOwnProperty('capitalMaximo'))
        obj.capitalMaximo = ApiClient.convertToType(data['capitalMaximo'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1ModeloNegocioEmpresaTeleunderwriting} empresaTeleUnderWriting
   */
  exports.prototype.empresaTeleUnderWriting = undefined;

  /**
   * @member {Date} dataInicioVigencia
   */
  exports.prototype.dataInicioVigencia = undefined;

  /**
   * @member {Date} dataFimVigencia
   */
  exports.prototype.dataFimVigencia = undefined;

  /**
   * @member {Number} capitalMinimo
   */
  exports.prototype.capitalMinimo = undefined;

  /**
   * @member {Number} capitalMaximo
   */
  exports.prototype.capitalMaximo = undefined;

  return exports;

}));
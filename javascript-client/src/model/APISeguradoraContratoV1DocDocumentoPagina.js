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
    root.Apiseguradora.APISeguradoraContratoV1DocDocumentoPagina = factory(root.Apiseguradora.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The APISeguradoraContratoV1DocDocumentoPagina model module.
   * @module model/APISeguradoraContratoV1DocDocumentoPagina
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1DocDocumentoPagina</code>.
   * @alias module:model/APISeguradoraContratoV1DocDocumentoPagina
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1DocDocumentoPagina</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1DocDocumentoPagina} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1DocDocumentoPagina} The populated <code>APISeguradoraContratoV1DocDocumentoPagina</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('pagina'))
        obj.pagina = ApiClient.convertToType(data['pagina'], 'Number');
      if (data.hasOwnProperty('dados'))
        obj.dados = ApiClient.convertToType(data['dados'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Number} pagina
   */
  exports.prototype.pagina = undefined;

  /**
   * @member {Array.<String>} dados
   */
  exports.prototype.dados = undefined;

  return exports;

}));

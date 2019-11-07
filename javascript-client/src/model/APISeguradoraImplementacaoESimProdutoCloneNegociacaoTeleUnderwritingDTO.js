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
    root.Apiseguradora.APISeguradoraImplementacaoESimProdutoCloneNegociacaoTeleUnderwritingDTO = factory(root.Apiseguradora.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The APISeguradoraImplementacaoESimProdutoCloneNegociacaoTeleUnderwritingDTO model module.
   * @module model/APISeguradoraImplementacaoESimProdutoCloneNegociacaoTeleUnderwritingDTO
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraImplementacaoESimProdutoCloneNegociacaoTeleUnderwritingDTO</code>.
   * @alias module:model/APISeguradoraImplementacaoESimProdutoCloneNegociacaoTeleUnderwritingDTO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraImplementacaoESimProdutoCloneNegociacaoTeleUnderwritingDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraImplementacaoESimProdutoCloneNegociacaoTeleUnderwritingDTO} obj Optional instance to populate.
   * @return {module:model/APISeguradoraImplementacaoESimProdutoCloneNegociacaoTeleUnderwritingDTO} The populated <code>APISeguradoraImplementacaoESimProdutoCloneNegociacaoTeleUnderwritingDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CapitalMaximo'))
        obj.capitalMaximo = ApiClient.convertToType(data['CapitalMaximo'], 'Number');
      if (data.hasOwnProperty('CapitalMinimo'))
        obj.capitalMinimo = ApiClient.convertToType(data['CapitalMinimo'], 'Number');
      if (data.hasOwnProperty('FimVigencia'))
        obj.fimVigencia = ApiClient.convertToType(data['FimVigencia'], 'Date');
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'Number');
      if (data.hasOwnProperty('InicioVigencia'))
        obj.inicioVigencia = ApiClient.convertToType(data['InicioVigencia'], 'Date');
    }
    return obj;
  }

  /**
   * @member {Number} capitalMaximo
   */
  exports.prototype.capitalMaximo = undefined;

  /**
   * @member {Number} capitalMinimo
   */
  exports.prototype.capitalMinimo = undefined;

  /**
   * @member {Date} fimVigencia
   */
  exports.prototype.fimVigencia = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Date} inicioVigencia
   */
  exports.prototype.inicioVigencia = undefined;

  return exports;

}));

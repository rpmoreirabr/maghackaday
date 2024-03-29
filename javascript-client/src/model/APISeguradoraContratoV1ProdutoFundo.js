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
    root.Apiseguradora.APISeguradoraContratoV1ProdutoFundo = factory(root.Apiseguradora.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The APISeguradoraContratoV1ProdutoFundo model module.
   * @module model/APISeguradoraContratoV1ProdutoFundo
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1ProdutoFundo</code>.
   * @alias module:model/APISeguradoraContratoV1ProdutoFundo
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1ProdutoFundo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1ProdutoFundo} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1ProdutoFundo} The populated <code>APISeguradoraContratoV1ProdutoFundo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('cnpj'))
        obj.cnpj = ApiClient.convertToType(data['cnpj'], 'String');
      if (data.hasOwnProperty('sigla'))
        obj.sigla = ApiClient.convertToType(data['sigla'], 'String');
      if (data.hasOwnProperty('nomeFantasia'))
        obj.nomeFantasia = ApiClient.convertToType(data['nomeFantasia'], 'String');
      if (data.hasOwnProperty('percentualRendaVariavel'))
        obj.percentualRendaVariavel = ApiClient.convertToType(data['percentualRendaVariavel'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} cnpj
   */
  exports.prototype.cnpj = undefined;

  /**
   * @member {String} sigla
   */
  exports.prototype.sigla = undefined;

  /**
   * @member {String} nomeFantasia
   */
  exports.prototype.nomeFantasia = undefined;

  /**
   * @member {Number} percentualRendaVariavel
   */
  exports.prototype.percentualRendaVariavel = undefined;

  return exports;

}));

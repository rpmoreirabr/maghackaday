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
    define(['ApiClient', 'model/APISeguradoraContratoV1DocDocumentoPagina', 'model/APISeguradoraContratoV1DocIndiceDocumento'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1DocDocumentoPagina'), require('./APISeguradoraContratoV1DocIndiceDocumento'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1DocDocumento = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1DocDocumentoPagina, root.Apiseguradora.APISeguradoraContratoV1DocIndiceDocumento);
  }
}(this, function(ApiClient, APISeguradoraContratoV1DocDocumentoPagina, APISeguradoraContratoV1DocIndiceDocumento) {
  'use strict';

  /**
   * The APISeguradoraContratoV1DocDocumento model module.
   * @module model/APISeguradoraContratoV1DocDocumento
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1DocDocumento</code>.
   * @alias module:model/APISeguradoraContratoV1DocDocumento
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1DocDocumento</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1DocDocumento} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1DocDocumento} The populated <code>APISeguradoraContratoV1DocDocumento</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('dataDocumento'))
        obj.dataDocumento = ApiClient.convertToType(data['dataDocumento'], 'Date');
      if (data.hasOwnProperty('formato'))
        obj.formato = ApiClient.convertToType(data['formato'], 'String');
      if (data.hasOwnProperty('grupoDocumento'))
        obj.grupoDocumento = ApiClient.convertToType(data['grupoDocumento'], 'String');
      if (data.hasOwnProperty('qtdePaginas'))
        obj.qtdePaginas = ApiClient.convertToType(data['qtdePaginas'], 'Number');
      if (data.hasOwnProperty('tipoDocumento'))
        obj.tipoDocumento = ApiClient.convertToType(data['tipoDocumento'], 'String');
      if (data.hasOwnProperty('nomeArquivo'))
        obj.nomeArquivo = ApiClient.convertToType(data['nomeArquivo'], 'String');
      if (data.hasOwnProperty('indicesDocumento'))
        obj.indicesDocumento = ApiClient.convertToType(data['indicesDocumento'], [APISeguradoraContratoV1DocIndiceDocumento]);
      if (data.hasOwnProperty('pagina'))
        obj.pagina = ApiClient.convertToType(data['pagina'], [APISeguradoraContratoV1DocDocumentoPagina]);
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Date} dataDocumento
   */
  exports.prototype.dataDocumento = undefined;

  /**
   * @member {String} formato
   */
  exports.prototype.formato = undefined;

  /**
   * @member {String} grupoDocumento
   */
  exports.prototype.grupoDocumento = undefined;

  /**
   * @member {Number} qtdePaginas
   */
  exports.prototype.qtdePaginas = undefined;

  /**
   * @member {String} tipoDocumento
   */
  exports.prototype.tipoDocumento = undefined;

  /**
   * @member {String} nomeArquivo
   */
  exports.prototype.nomeArquivo = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1DocIndiceDocumento>} indicesDocumento
   */
  exports.prototype.indicesDocumento = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1DocDocumentoPagina>} pagina
   */
  exports.prototype.pagina = undefined;

  return exports;

}));

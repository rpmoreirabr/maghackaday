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
    define(['ApiClient', 'model/APISeguradoraContratoV1PropostaSubdivisao'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1PropostaSubdivisao'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1PropostaFolha = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1PropostaSubdivisao);
  }
}(this, function(ApiClient, APISeguradoraContratoV1PropostaSubdivisao) {
  'use strict';

  /**
   * The APISeguradoraContratoV1PropostaFolha model module.
   * @module model/APISeguradoraContratoV1PropostaFolha
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1PropostaFolha</code>.
   * @alias module:model/APISeguradoraContratoV1PropostaFolha
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1PropostaFolha</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1PropostaFolha} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1PropostaFolha} The populated <code>APISeguradoraContratoV1PropostaFolha</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('NomeFuncionario'))
        obj.nomeFuncionario = ApiClient.convertToType(data['NomeFuncionario'], 'String');
      if (data.hasOwnProperty('MatFuncional'))
        obj.matFuncional = ApiClient.convertToType(data['MatFuncional'], 'String');
      if (data.hasOwnProperty('Complemento'))
        obj.complemento = ApiClient.convertToType(data['Complemento'], 'String');
      if (data.hasOwnProperty('CodOrgao'))
        obj.codOrgao = ApiClient.convertToType(data['CodOrgao'], 'Number');
      if (data.hasOwnProperty('CpfFuncionario'))
        obj.cpfFuncionario = ApiClient.convertToType(data['CpfFuncionario'], 'Number');
      if (data.hasOwnProperty('Subdivisoes'))
        obj.subdivisoes = ApiClient.convertToType(data['Subdivisoes'], [APISeguradoraContratoV1PropostaSubdivisao]);
    }
    return obj;
  }

  /**
   * @member {String} nomeFuncionario
   */
  exports.prototype.nomeFuncionario = undefined;

  /**
   * @member {String} matFuncional
   */
  exports.prototype.matFuncional = undefined;

  /**
   * @member {String} complemento
   */
  exports.prototype.complemento = undefined;

  /**
   * @member {Number} codOrgao
   */
  exports.prototype.codOrgao = undefined;

  /**
   * @member {Number} cpfFuncionario
   */
  exports.prototype.cpfFuncionario = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1PropostaSubdivisao>} subdivisoes
   */
  exports.prototype.subdivisoes = undefined;

  return exports;

}));

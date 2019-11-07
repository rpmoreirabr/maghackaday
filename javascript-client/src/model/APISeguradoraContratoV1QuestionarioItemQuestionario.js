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
    define(['ApiClient', 'model/APISeguradoraContratoV1QuestionarioTipoItemQuestionario'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1QuestionarioTipoItemQuestionario'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1QuestionarioItemQuestionario = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1QuestionarioTipoItemQuestionario);
  }
}(this, function(ApiClient, APISeguradoraContratoV1QuestionarioTipoItemQuestionario) {
  'use strict';

  /**
   * The APISeguradoraContratoV1QuestionarioItemQuestionario model module.
   * @module model/APISeguradoraContratoV1QuestionarioItemQuestionario
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1QuestionarioItemQuestionario</code>.
   * @alias module:model/APISeguradoraContratoV1QuestionarioItemQuestionario
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1QuestionarioItemQuestionario</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1QuestionarioItemQuestionario} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1QuestionarioItemQuestionario} The populated <code>APISeguradoraContratoV1QuestionarioItemQuestionario</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('descricao'))
        obj.descricao = ApiClient.convertToType(data['descricao'], 'String');
      if (data.hasOwnProperty('tipo'))
        obj.tipo = APISeguradoraContratoV1QuestionarioTipoItemQuestionario.constructFromObject(data['tipo']);
      if (data.hasOwnProperty('ordem'))
        obj.ordem = ApiClient.convertToType(data['ordem'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} descricao
   */
  exports.prototype.descricao = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1QuestionarioTipoItemQuestionario} tipo
   */
  exports.prototype.tipo = undefined;

  /**
   * @member {Number} ordem
   */
  exports.prototype.ordem = undefined;

  return exports;

}));

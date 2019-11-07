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
    define(['ApiClient', 'model/APISeguradoraContratoV1PendenciaPendencia', 'model/APISeguradoraContratoV1PropostaAgendamentoMedico'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1PendenciaPendencia'), require('./APISeguradoraContratoV1PropostaAgendamentoMedico'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1TimeLineTimeLine = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1PendenciaPendencia, root.Apiseguradora.APISeguradoraContratoV1PropostaAgendamentoMedico);
  }
}(this, function(ApiClient, APISeguradoraContratoV1PendenciaPendencia, APISeguradoraContratoV1PropostaAgendamentoMedico) {
  'use strict';

  /**
   * The APISeguradoraContratoV1TimeLineTimeLine model module.
   * @module model/APISeguradoraContratoV1TimeLineTimeLine
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1TimeLineTimeLine</code>.
   * @alias module:model/APISeguradoraContratoV1TimeLineTimeLine
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1TimeLineTimeLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1TimeLineTimeLine} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1TimeLineTimeLine} The populated <code>APISeguradoraContratoV1TimeLineTimeLine</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Data'))
        obj.data = ApiClient.convertToType(data['Data'], 'Date');
      if (data.hasOwnProperty('Status'))
        obj.status = ApiClient.convertToType(data['Status'], 'String');
      if (data.hasOwnProperty('Usuario'))
        obj.usuario = ApiClient.convertToType(data['Usuario'], 'String');
      if (data.hasOwnProperty('Pendencias'))
        obj.pendencias = ApiClient.convertToType(data['Pendencias'], [APISeguradoraContratoV1PendenciaPendencia]);
      if (data.hasOwnProperty('AgendamentosMedicos'))
        obj.agendamentosMedicos = APISeguradoraContratoV1PropostaAgendamentoMedico.constructFromObject(data['AgendamentosMedicos']);
    }
    return obj;
  }

  /**
   * @member {Date} data
   */
  exports.prototype.data = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {String} usuario
   */
  exports.prototype.usuario = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1PendenciaPendencia>} pendencias
   */
  exports.prototype.pendencias = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1PropostaAgendamentoMedico} agendamentosMedicos
   */
  exports.prototype.agendamentosMedicos = undefined;

  return exports;

}));
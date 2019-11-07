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
    define(['ApiClient', 'model/APISeguradoraContratoV1ModeloPropostaCanalComercializacao', 'model/APISeguradoraContratoV1ModeloPropostaFormaPagamento', 'model/APISeguradoraContratoV1ModeloPropostaGrupoProposta', 'model/APISeguradoraContratoV1ProdutoPeriodicidade'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1ModeloPropostaCanalComercializacao'), require('./APISeguradoraContratoV1ModeloPropostaFormaPagamento'), require('./APISeguradoraContratoV1ModeloPropostaGrupoProposta'), require('./APISeguradoraContratoV1ProdutoPeriodicidade'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1ModeloPropostaModeloProposta = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1ModeloPropostaCanalComercializacao, root.Apiseguradora.APISeguradoraContratoV1ModeloPropostaFormaPagamento, root.Apiseguradora.APISeguradoraContratoV1ModeloPropostaGrupoProposta, root.Apiseguradora.APISeguradoraContratoV1ProdutoPeriodicidade);
  }
}(this, function(ApiClient, APISeguradoraContratoV1ModeloPropostaCanalComercializacao, APISeguradoraContratoV1ModeloPropostaFormaPagamento, APISeguradoraContratoV1ModeloPropostaGrupoProposta, APISeguradoraContratoV1ProdutoPeriodicidade) {
  'use strict';

  /**
   * The APISeguradoraContratoV1ModeloPropostaModeloProposta model module.
   * @module model/APISeguradoraContratoV1ModeloPropostaModeloProposta
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1ModeloPropostaModeloProposta</code>.
   * @alias module:model/APISeguradoraContratoV1ModeloPropostaModeloProposta
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1ModeloPropostaModeloProposta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1ModeloPropostaModeloProposta} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1ModeloPropostaModeloProposta} The populated <code>APISeguradoraContratoV1ModeloPropostaModeloProposta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('nome'))
        obj.nome = ApiClient.convertToType(data['nome'], 'String');
      if (data.hasOwnProperty('descricaoModeloProposta'))
        obj.descricaoModeloProposta = ApiClient.convertToType(data['descricaoModeloProposta'], 'String');
      if (data.hasOwnProperty('dataUltimaAlteracao'))
        obj.dataUltimaAlteracao = ApiClient.convertToType(data['dataUltimaAlteracao'], 'Date');
      if (data.hasOwnProperty('namespace'))
        obj.namespace = ApiClient.convertToType(data['namespace'], 'String');
      if (data.hasOwnProperty('formasPagamento'))
        obj.formasPagamento = ApiClient.convertToType(data['formasPagamento'], [APISeguradoraContratoV1ModeloPropostaFormaPagamento]);
      if (data.hasOwnProperty('diasVencimento'))
        obj.diasVencimento = ApiClient.convertToType(data['diasVencimento'], ['Number']);
      if (data.hasOwnProperty('periodicidades'))
        obj.periodicidades = ApiClient.convertToType(data['periodicidades'], [APISeguradoraContratoV1ProdutoPeriodicidade]);
      if (data.hasOwnProperty('ticketMinimo'))
        obj.ticketMinimo = ApiClient.convertToType(data['ticketMinimo'], 'Number');
      if (data.hasOwnProperty('politicaValidacao'))
        obj.politicaValidacao = ApiClient.convertToType(data['politicaValidacao'], 'String');
      if (data.hasOwnProperty('canalComercializacao'))
        obj.canalComercializacao = APISeguradoraContratoV1ModeloPropostaCanalComercializacao.constructFromObject(data['canalComercializacao']);
      if (data.hasOwnProperty('grupo'))
        obj.grupo = APISeguradoraContratoV1ModeloPropostaGrupoProposta.constructFromObject(data['grupo']);
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} nome
   */
  exports.prototype.nome = undefined;

  /**
   * @member {String} descricaoModeloProposta
   */
  exports.prototype.descricaoModeloProposta = undefined;

  /**
   * @member {Date} dataUltimaAlteracao
   */
  exports.prototype.dataUltimaAlteracao = undefined;

  /**
   * @member {String} namespace
   */
  exports.prototype.namespace = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ModeloPropostaFormaPagamento>} formasPagamento
   */
  exports.prototype.formasPagamento = undefined;

  /**
   * @member {Array.<Number>} diasVencimento
   */
  exports.prototype.diasVencimento = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ProdutoPeriodicidade>} periodicidades
   */
  exports.prototype.periodicidades = undefined;

  /**
   * @member {Number} ticketMinimo
   */
  exports.prototype.ticketMinimo = undefined;

  /**
   * @member {String} politicaValidacao
   */
  exports.prototype.politicaValidacao = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1ModeloPropostaCanalComercializacao} canalComercializacao
   */
  exports.prototype.canalComercializacao = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1ModeloPropostaGrupoProposta} grupo
   */
  exports.prototype.grupo = undefined;

  return exports;

}));

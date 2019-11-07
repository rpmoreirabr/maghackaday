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
    define(['ApiClient', 'model/APISeguradoraContratoV1SimulacaoSimulacaoDependenciaCoberturaProduto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1SimulacaoSimulacaoDependenciaCoberturaProduto'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1SimulacaoSimulacaoCobertura = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1SimulacaoSimulacaoDependenciaCoberturaProduto);
  }
}(this, function(ApiClient, APISeguradoraContratoV1SimulacaoSimulacaoDependenciaCoberturaProduto) {
  'use strict';

  /**
   * The APISeguradoraContratoV1SimulacaoSimulacaoCobertura model module.
   * @module model/APISeguradoraContratoV1SimulacaoSimulacaoCobertura
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1SimulacaoSimulacaoCobertura</code>.
   * @alias module:model/APISeguradoraContratoV1SimulacaoSimulacaoCobertura
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1SimulacaoSimulacaoCobertura</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1SimulacaoSimulacaoCobertura} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1SimulacaoSimulacaoCobertura} The populated <code>APISeguradoraContratoV1SimulacaoSimulacaoCobertura</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('descricao'))
        obj.descricao = ApiClient.convertToType(data['descricao'], 'String');
      if (data.hasOwnProperty('tipoId'))
        obj.tipoId = ApiClient.convertToType(data['tipoId'], 'Number');
      if (data.hasOwnProperty('capitalBase'))
        obj.capitalBase = ApiClient.convertToType(data['capitalBase'], 'Number');
      if (data.hasOwnProperty('causaId'))
        obj.causaId = ApiClient.convertToType(data['causaId'], 'String');
      if (data.hasOwnProperty('limite'))
        obj.limite = ApiClient.convertToType(data['limite'], 'Number');
      if (data.hasOwnProperty('tipoCapitalBase'))
        obj.tipoCapitalBase = ApiClient.convertToType(data['tipoCapitalBase'], 'String');
      if (data.hasOwnProperty('premioBase'))
        obj.premioBase = ApiClient.convertToType(data['premioBase'], 'Number');
      if (data.hasOwnProperty('prazoCerto'))
        obj.prazoCerto = ApiClient.convertToType(data['prazoCerto'], 'Number');
      if (data.hasOwnProperty('prazoRenda'))
        obj.prazoRenda = ApiClient.convertToType(data['prazoRenda'], 'Number');
      if (data.hasOwnProperty('prazoDecrescimo'))
        obj.prazoDecrescimo = ApiClient.convertToType(data['prazoDecrescimo'], 'Number');
      if (data.hasOwnProperty('prazoPagamentoAntecipado'))
        obj.prazoPagamentoAntecipado = ApiClient.convertToType(data['prazoPagamentoAntecipado'], 'Number');
      if (data.hasOwnProperty('idadePagamentoAntecipado'))
        obj.idadePagamentoAntecipado = ApiClient.convertToType(data['idadePagamentoAntecipado'], 'Number');
      if (data.hasOwnProperty('custoFixo'))
        obj.custoFixo = ApiClient.convertToType(data['custoFixo'], 'Number');
      if (data.hasOwnProperty('dependenciasCoberturaProdutos'))
        obj.dependenciasCoberturaProdutos = ApiClient.convertToType(data['dependenciasCoberturaProdutos'], [APISeguradoraContratoV1SimulacaoSimulacaoDependenciaCoberturaProduto]);
      if (data.hasOwnProperty('valorMinimoCapitalContratacao'))
        obj.valorMinimoCapitalContratacao = ApiClient.convertToType(data['valorMinimoCapitalContratacao'], 'Number');
      if (data.hasOwnProperty('valorLimiteCapitalReferencia'))
        obj.valorLimiteCapitalReferencia = ApiClient.convertToType(data['valorLimiteCapitalReferencia'], 'Number');
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
   * @member {Number} tipoId
   */
  exports.prototype.tipoId = undefined;

  /**
   * @member {Number} capitalBase
   */
  exports.prototype.capitalBase = undefined;

  /**
   * @member {String} causaId
   */
  exports.prototype.causaId = undefined;

  /**
   * @member {Number} limite
   */
  exports.prototype.limite = undefined;

  /**
   * @member {String} tipoCapitalBase
   */
  exports.prototype.tipoCapitalBase = undefined;

  /**
   * @member {Number} premioBase
   */
  exports.prototype.premioBase = undefined;

  /**
   * @member {Number} prazoCerto
   */
  exports.prototype.prazoCerto = undefined;

  /**
   * @member {Number} prazoRenda
   */
  exports.prototype.prazoRenda = undefined;

  /**
   * @member {Number} prazoDecrescimo
   */
  exports.prototype.prazoDecrescimo = undefined;

  /**
   * @member {Number} prazoPagamentoAntecipado
   */
  exports.prototype.prazoPagamentoAntecipado = undefined;

  /**
   * @member {Number} idadePagamentoAntecipado
   */
  exports.prototype.idadePagamentoAntecipado = undefined;

  /**
   * @member {Number} custoFixo
   */
  exports.prototype.custoFixo = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1SimulacaoSimulacaoDependenciaCoberturaProduto>} dependenciasCoberturaProdutos
   */
  exports.prototype.dependenciasCoberturaProdutos = undefined;

  /**
   * @member {Number} valorMinimoCapitalContratacao
   */
  exports.prototype.valorMinimoCapitalContratacao = undefined;

  /**
   * @member {Number} valorLimiteCapitalReferencia
   */
  exports.prototype.valorLimiteCapitalReferencia = undefined;

  return exports;

}));

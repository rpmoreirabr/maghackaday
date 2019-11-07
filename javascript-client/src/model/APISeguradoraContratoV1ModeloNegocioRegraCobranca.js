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
    define(['ApiClient', 'model/APISeguradoraContratoV1ModeloNegocioConvenioAceito', 'model/APISeguradoraContratoV1ModeloNegocioFormaCobrancaProduto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1ModeloNegocioConvenioAceito'), require('./APISeguradoraContratoV1ModeloNegocioFormaCobrancaProduto'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioRegraCobranca = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioConvenioAceito, root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioFormaCobrancaProduto);
  }
}(this, function(ApiClient, APISeguradoraContratoV1ModeloNegocioConvenioAceito, APISeguradoraContratoV1ModeloNegocioFormaCobrancaProduto) {
  'use strict';

  /**
   * The APISeguradoraContratoV1ModeloNegocioRegraCobranca model module.
   * @module model/APISeguradoraContratoV1ModeloNegocioRegraCobranca
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1ModeloNegocioRegraCobranca</code>.
   * @alias module:model/APISeguradoraContratoV1ModeloNegocioRegraCobranca
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1ModeloNegocioRegraCobranca</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1ModeloNegocioRegraCobranca} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1ModeloNegocioRegraCobranca} The populated <code>APISeguradoraContratoV1ModeloNegocioRegraCobranca</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('tipoAgrupamentoId'))
        obj.tipoAgrupamentoId = ApiClient.convertToType(data['tipoAgrupamentoId'], 'Number');
      if (data.hasOwnProperty('permiteAgrupamento'))
        obj.permiteAgrupamento = ApiClient.convertToType(data['permiteAgrupamento'], 'Boolean');
      if (data.hasOwnProperty('cobrancaEmitidaMongeral'))
        obj.cobrancaEmitidaMongeral = ApiClient.convertToType(data['cobrancaEmitidaMongeral'], 'Boolean');
      if (data.hasOwnProperty('emiteContribuicaoAntecipada'))
        obj.emiteContribuicaoAntecipada = ApiClient.convertToType(data['emiteContribuicaoAntecipada'], 'Boolean');
      if (data.hasOwnProperty('quantidadeDeMesesDaContribuicaoAntecipada'))
        obj.quantidadeDeMesesDaContribuicaoAntecipada = ApiClient.convertToType(data['quantidadeDeMesesDaContribuicaoAntecipada'], 'Number');
      if (data.hasOwnProperty('diasVencimento'))
        obj.diasVencimento = ApiClient.convertToType(data['diasVencimento'], ['Number']);
      if (data.hasOwnProperty('periodicidades'))
        obj.periodicidades = ApiClient.convertToType(data['periodicidades'], ['Number']);
      if (data.hasOwnProperty('formasDeCobranca'))
        obj.formasDeCobranca = ApiClient.convertToType(data['formasDeCobranca'], [APISeguradoraContratoV1ModeloNegocioFormaCobrancaProduto]);
      if (data.hasOwnProperty('conveniosAceitos'))
        obj.conveniosAceitos = ApiClient.convertToType(data['conveniosAceitos'], [APISeguradoraContratoV1ModeloNegocioConvenioAceito]);
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} tipoAgrupamentoId
   */
  exports.prototype.tipoAgrupamentoId = undefined;

  /**
   * @member {Boolean} permiteAgrupamento
   */
  exports.prototype.permiteAgrupamento = undefined;

  /**
   * @member {Boolean} cobrancaEmitidaMongeral
   */
  exports.prototype.cobrancaEmitidaMongeral = undefined;

  /**
   * @member {Boolean} emiteContribuicaoAntecipada
   */
  exports.prototype.emiteContribuicaoAntecipada = undefined;

  /**
   * @member {Number} quantidadeDeMesesDaContribuicaoAntecipada
   */
  exports.prototype.quantidadeDeMesesDaContribuicaoAntecipada = undefined;

  /**
   * @member {Array.<Number>} diasVencimento
   */
  exports.prototype.diasVencimento = undefined;

  /**
   * @member {Array.<Number>} periodicidades
   */
  exports.prototype.periodicidades = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ModeloNegocioFormaCobrancaProduto>} formasDeCobranca
   */
  exports.prototype.formasDeCobranca = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ModeloNegocioConvenioAceito>} conveniosAceitos
   */
  exports.prototype.conveniosAceitos = undefined;

  return exports;

}));

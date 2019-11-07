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
    define(['ApiClient', 'model/APISeguradoraContratoV1ModeloNegocioLimiteOperacionalPorFaixa', 'model/APISeguradoraContratoV1ModeloNegocioStatusPoliticaAceitacao'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1ModeloNegocioLimiteOperacionalPorFaixa'), require('./APISeguradoraContratoV1ModeloNegocioStatusPoliticaAceitacao'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioLimiteOperacionalPorFaixa, root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioStatusPoliticaAceitacao);
  }
}(this, function(ApiClient, APISeguradoraContratoV1ModeloNegocioLimiteOperacionalPorFaixa, APISeguradoraContratoV1ModeloNegocioStatusPoliticaAceitacao) {
  'use strict';

  /**
   * The APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao model module.
   * @module model/APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao</code>.
   * @alias module:model/APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao} The populated <code>APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('codigoModeloProposta'))
        obj.codigoModeloProposta = ApiClient.convertToType(data['codigoModeloProposta'], 'String');
      if (data.hasOwnProperty('dataVigencia'))
        obj.dataVigencia = ApiClient.convertToType(data['dataVigencia'], 'Date');
      if (data.hasOwnProperty('statusPoliticaAceitacao'))
        obj.statusPoliticaAceitacao = APISeguradoraContratoV1ModeloNegocioStatusPoliticaAceitacao.constructFromObject(data['statusPoliticaAceitacao']);
      if (data.hasOwnProperty('descricao'))
        obj.descricao = ApiClient.convertToType(data['descricao'], 'String');
      if (data.hasOwnProperty('minimoContribuicaoClientesNovos'))
        obj.minimoContribuicaoClientesNovos = ApiClient.convertToType(data['minimoContribuicaoClientesNovos'], 'Number');
      if (data.hasOwnProperty('minimoContribuicaoClientesAntigos'))
        obj.minimoContribuicaoClientesAntigos = ApiClient.convertToType(data['minimoContribuicaoClientesAntigos'], 'Number');
      if (data.hasOwnProperty('imcMinimoRecusa'))
        obj.imcMinimoRecusa = ApiClient.convertToType(data['imcMinimoRecusa'], 'Number');
      if (data.hasOwnProperty('imcMinimoExame'))
        obj.imcMinimoExame = ApiClient.convertToType(data['imcMinimoExame'], 'Number');
      if (data.hasOwnProperty('imcMaximoRecusa'))
        obj.imcMaximoRecusa = ApiClient.convertToType(data['imcMaximoRecusa'], 'Number');
      if (data.hasOwnProperty('imcMaximoExame'))
        obj.imcMaximoExame = ApiClient.convertToType(data['imcMaximoExame'], 'Number');
      if (data.hasOwnProperty('qtdeMaximaCigarrosRecusa'))
        obj.qtdeMaximaCigarrosRecusa = ApiClient.convertToType(data['qtdeMaximaCigarrosRecusa'], 'Number');
      if (data.hasOwnProperty('qtdeMaximaCigarrosExame'))
        obj.qtdeMaximaCigarrosExame = ApiClient.convertToType(data['qtdeMaximaCigarrosExame'], 'Number');
      if (data.hasOwnProperty('diasMaximoRecusa'))
        obj.diasMaximoRecusa = ApiClient.convertToType(data['diasMaximoRecusa'], 'Number');
      if (data.hasOwnProperty('mesesEntreSubscricoes'))
        obj.mesesEntreSubscricoes = ApiClient.convertToType(data['mesesEntreSubscricoes'], 'Number');
      if (data.hasOwnProperty('mesesEntreResgates'))
        obj.mesesEntreResgates = ApiClient.convertToType(data['mesesEntreResgates'], 'Number');
      if (data.hasOwnProperty('mesesEntreReducoesContribuicao'))
        obj.mesesEntreReducoesContribuicao = ApiClient.convertToType(data['mesesEntreReducoesContribuicao'], 'Number');
      if (data.hasOwnProperty('valorCapitalAcionarCoaf'))
        obj.valorCapitalAcionarCoaf = ApiClient.convertToType(data['valorCapitalAcionarCoaf'], 'Number');
      if (data.hasOwnProperty('exigeConfirmacaoVenda'))
        obj.exigeConfirmacaoVenda = ApiClient.convertToType(data['exigeConfirmacaoVenda'], 'Boolean');
      if (data.hasOwnProperty('dataCriacao'))
        obj.dataCriacao = ApiClient.convertToType(data['dataCriacao'], 'Date');
      if (data.hasOwnProperty('dataInicioVigencia'))
        obj.dataInicioVigencia = ApiClient.convertToType(data['dataInicioVigencia'], 'Date');
      if (data.hasOwnProperty('dataFimVigencia'))
        obj.dataFimVigencia = ApiClient.convertToType(data['dataFimVigencia'], 'Date');
      if (data.hasOwnProperty('mesesEntreCancelamentos'))
        obj.mesesEntreCancelamentos = ApiClient.convertToType(data['mesesEntreCancelamentos'], 'Number');
      if (data.hasOwnProperty('limitesOperacionais'))
        obj.limitesOperacionais = ApiClient.convertToType(data['limitesOperacionais'], [APISeguradoraContratoV1ModeloNegocioLimiteOperacionalPorFaixa]);
    }
    return obj;
  }

  /**
   * @member {String} codigoModeloProposta
   */
  exports.prototype.codigoModeloProposta = undefined;

  /**
   * @member {Date} dataVigencia
   */
  exports.prototype.dataVigencia = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1ModeloNegocioStatusPoliticaAceitacao} statusPoliticaAceitacao
   */
  exports.prototype.statusPoliticaAceitacao = undefined;

  /**
   * @member {String} descricao
   */
  exports.prototype.descricao = undefined;

  /**
   * @member {Number} minimoContribuicaoClientesNovos
   */
  exports.prototype.minimoContribuicaoClientesNovos = undefined;

  /**
   * @member {Number} minimoContribuicaoClientesAntigos
   */
  exports.prototype.minimoContribuicaoClientesAntigos = undefined;

  /**
   * @member {Number} imcMinimoRecusa
   */
  exports.prototype.imcMinimoRecusa = undefined;

  /**
   * @member {Number} imcMinimoExame
   */
  exports.prototype.imcMinimoExame = undefined;

  /**
   * @member {Number} imcMaximoRecusa
   */
  exports.prototype.imcMaximoRecusa = undefined;

  /**
   * @member {Number} imcMaximoExame
   */
  exports.prototype.imcMaximoExame = undefined;

  /**
   * @member {Number} qtdeMaximaCigarrosRecusa
   */
  exports.prototype.qtdeMaximaCigarrosRecusa = undefined;

  /**
   * @member {Number} qtdeMaximaCigarrosExame
   */
  exports.prototype.qtdeMaximaCigarrosExame = undefined;

  /**
   * @member {Number} diasMaximoRecusa
   */
  exports.prototype.diasMaximoRecusa = undefined;

  /**
   * @member {Number} mesesEntreSubscricoes
   */
  exports.prototype.mesesEntreSubscricoes = undefined;

  /**
   * @member {Number} mesesEntreResgates
   */
  exports.prototype.mesesEntreResgates = undefined;

  /**
   * @member {Number} mesesEntreReducoesContribuicao
   */
  exports.prototype.mesesEntreReducoesContribuicao = undefined;

  /**
   * @member {Number} valorCapitalAcionarCoaf
   */
  exports.prototype.valorCapitalAcionarCoaf = undefined;

  /**
   * @member {Boolean} exigeConfirmacaoVenda
   */
  exports.prototype.exigeConfirmacaoVenda = undefined;

  /**
   * @member {Date} dataCriacao
   */
  exports.prototype.dataCriacao = undefined;

  /**
   * @member {Date} dataInicioVigencia
   */
  exports.prototype.dataInicioVigencia = undefined;

  /**
   * @member {Date} dataFimVigencia
   */
  exports.prototype.dataFimVigencia = undefined;

  /**
   * @member {Number} mesesEntreCancelamentos
   */
  exports.prototype.mesesEntreCancelamentos = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ModeloNegocioLimiteOperacionalPorFaixa>} limitesOperacionais
   */
  exports.prototype.limitesOperacionais = undefined;

  return exports;

}));
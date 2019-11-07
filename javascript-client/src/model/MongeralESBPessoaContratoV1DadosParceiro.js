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
    define(['ApiClient', 'model/MongeralESBPessoaContratoV1DadosTipoParceiro'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MongeralESBPessoaContratoV1DadosTipoParceiro'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.MongeralESBPessoaContratoV1DadosParceiro = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.MongeralESBPessoaContratoV1DadosTipoParceiro);
  }
}(this, function(ApiClient, MongeralESBPessoaContratoV1DadosTipoParceiro) {
  'use strict';

  /**
   * The MongeralESBPessoaContratoV1DadosParceiro model module.
   * @module model/MongeralESBPessoaContratoV1DadosParceiro
   * @version v1
   */

  /**
   * Constructs a new <code>MongeralESBPessoaContratoV1DadosParceiro</code>.
   * @alias module:model/MongeralESBPessoaContratoV1DadosParceiro
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>MongeralESBPessoaContratoV1DadosParceiro</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MongeralESBPessoaContratoV1DadosParceiro} obj Optional instance to populate.
   * @return {module:model/MongeralESBPessoaContratoV1DadosParceiro} The populated <code>MongeralESBPessoaContratoV1DadosParceiro</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('PessoaId'))
        obj.pessoaId = ApiClient.convertToType(data['PessoaId'], 'Number');
      if (data.hasOwnProperty('TipoPessoaId'))
        obj.tipoPessoaId = ApiClient.convertToType(data['TipoPessoaId'], 'Number');
      if (data.hasOwnProperty('Nome'))
        obj.nome = ApiClient.convertToType(data['Nome'], 'String');
      if (data.hasOwnProperty('Observacao'))
        obj.observacao = ApiClient.convertToType(data['Observacao'], 'String');
      if (data.hasOwnProperty('InscricaoMunicipal'))
        obj.inscricaoMunicipal = ApiClient.convertToType(data['InscricaoMunicipal'], 'String');
      if (data.hasOwnProperty('PossuiAuditoria'))
        obj.possuiAuditoria = ApiClient.convertToType(data['PossuiAuditoria'], 'Boolean');
      if (data.hasOwnProperty('NaturezaJuridicaId'))
        obj.naturezaJuridicaId = ApiClient.convertToType(data['NaturezaJuridicaId'], 'Number');
      if (data.hasOwnProperty('RazaoSocial'))
        obj.razaoSocial = ApiClient.convertToType(data['RazaoSocial'], 'String');
      if (data.hasOwnProperty('Cnpj'))
        obj.cnpj = ApiClient.convertToType(data['Cnpj'], 'Number');
      if (data.hasOwnProperty('InscricaoEstadual'))
        obj.inscricaoEstadual = ApiClient.convertToType(data['InscricaoEstadual'], 'Number');
      if (data.hasOwnProperty('AtividadeEconomicaPrincipal'))
        obj.atividadeEconomicaPrincipal = ApiClient.convertToType(data['AtividadeEconomicaPrincipal'], 'String');
      if (data.hasOwnProperty('DataAbertura'))
        obj.dataAbertura = ApiClient.convertToType(data['DataAbertura'], 'Date');
      if (data.hasOwnProperty('DataEncerramento'))
        obj.dataEncerramento = ApiClient.convertToType(data['DataEncerramento'], 'Date');
      if (data.hasOwnProperty('DesobrigadaCnpj'))
        obj.desobrigadaCnpj = ApiClient.convertToType(data['DesobrigadaCnpj'], 'Number');
      if (data.hasOwnProperty('Cei'))
        obj.cei = ApiClient.convertToType(data['Cei'], 'Number');
      if (data.hasOwnProperty('InscricaIss'))
        obj.inscricaIss = ApiClient.convertToType(data['InscricaIss'], 'Number');
      if (data.hasOwnProperty('TipoRamoAtividadeId'))
        obj.tipoRamoAtividadeId = ApiClient.convertToType(data['TipoRamoAtividadeId'], 'Number');
      if (data.hasOwnProperty('RegimeTributarioDiferenciado'))
        obj.regimeTributarioDiferenciado = ApiClient.convertToType(data['RegimeTributarioDiferenciado'], 'Boolean');
      if (data.hasOwnProperty('TipoAtividadeEconomicaId'))
        obj.tipoAtividadeEconomicaId = ApiClient.convertToType(data['TipoAtividadeEconomicaId'], 'Number');
      if (data.hasOwnProperty('TipoAtividadeEconomica'))
        obj.tipoAtividadeEconomica = ApiClient.convertToType(data['TipoAtividadeEconomica'], 'String');
      if (data.hasOwnProperty('AtividadeEconomicaSecundaria'))
        obj.atividadeEconomicaSecundaria = ApiClient.convertToType(data['AtividadeEconomicaSecundaria'], 'String');
      if (data.hasOwnProperty('FaturamentoUltimoExercicio'))
        obj.faturamentoUltimoExercicio = ApiClient.convertToType(data['FaturamentoUltimoExercicio'], 'Number');
      if (data.hasOwnProperty('ResultadoUltimoExercicio'))
        obj.resultadoUltimoExercicio = ApiClient.convertToType(data['ResultadoUltimoExercicio'], 'Number');
      if (data.hasOwnProperty('AnoUltimoExercicio'))
        obj.anoUltimoExercicio = ApiClient.convertToType(data['AnoUltimoExercicio'], 'Number');
      if (data.hasOwnProperty('ResponsavelCeiPessoaId'))
        obj.responsavelCeiPessoaId = ApiClient.convertToType(data['ResponsavelCeiPessoaId'], 'Number');
      if (data.hasOwnProperty('TiposParceiro'))
        obj.tiposParceiro = ApiClient.convertToType(data['TiposParceiro'], [MongeralESBPessoaContratoV1DadosTipoParceiro]);
      if (data.hasOwnProperty('CorPrimaria'))
        obj.corPrimaria = ApiClient.convertToType(data['CorPrimaria'], 'String');
      if (data.hasOwnProperty('CorSecundaria'))
        obj.corSecundaria = ApiClient.convertToType(data['CorSecundaria'], 'String');
      if (data.hasOwnProperty('UrlLogoPositivo'))
        obj.urlLogoPositivo = ApiClient.convertToType(data['UrlLogoPositivo'], 'String');
      if (data.hasOwnProperty('UrlLogoNegativo'))
        obj.urlLogoNegativo = ApiClient.convertToType(data['UrlLogoNegativo'], 'String');
      if (data.hasOwnProperty('UrlImagemTopo'))
        obj.urlImagemTopo = ApiClient.convertToType(data['UrlImagemTopo'], 'String');
      if (data.hasOwnProperty('UrlImagemServico'))
        obj.urlImagemServico = ApiClient.convertToType(data['UrlImagemServico'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} pessoaId
   */
  exports.prototype.pessoaId = undefined;

  /**
   * @member {Number} tipoPessoaId
   */
  exports.prototype.tipoPessoaId = undefined;

  /**
   * @member {String} nome
   */
  exports.prototype.nome = undefined;

  /**
   * @member {String} observacao
   */
  exports.prototype.observacao = undefined;

  /**
   * @member {String} inscricaoMunicipal
   */
  exports.prototype.inscricaoMunicipal = undefined;

  /**
   * @member {Boolean} possuiAuditoria
   */
  exports.prototype.possuiAuditoria = undefined;

  /**
   * @member {Number} naturezaJuridicaId
   */
  exports.prototype.naturezaJuridicaId = undefined;

  /**
   * @member {String} razaoSocial
   */
  exports.prototype.razaoSocial = undefined;

  /**
   * @member {Number} cnpj
   */
  exports.prototype.cnpj = undefined;

  /**
   * @member {Number} inscricaoEstadual
   */
  exports.prototype.inscricaoEstadual = undefined;

  /**
   * @member {String} atividadeEconomicaPrincipal
   */
  exports.prototype.atividadeEconomicaPrincipal = undefined;

  /**
   * @member {Date} dataAbertura
   */
  exports.prototype.dataAbertura = undefined;

  /**
   * @member {Date} dataEncerramento
   */
  exports.prototype.dataEncerramento = undefined;

  /**
   * @member {Number} desobrigadaCnpj
   */
  exports.prototype.desobrigadaCnpj = undefined;

  /**
   * @member {Number} cei
   */
  exports.prototype.cei = undefined;

  /**
   * @member {Number} inscricaIss
   */
  exports.prototype.inscricaIss = undefined;

  /**
   * @member {Number} tipoRamoAtividadeId
   */
  exports.prototype.tipoRamoAtividadeId = undefined;

  /**
   * @member {Boolean} regimeTributarioDiferenciado
   */
  exports.prototype.regimeTributarioDiferenciado = undefined;

  /**
   * @member {Number} tipoAtividadeEconomicaId
   */
  exports.prototype.tipoAtividadeEconomicaId = undefined;

  /**
   * @member {String} tipoAtividadeEconomica
   */
  exports.prototype.tipoAtividadeEconomica = undefined;

  /**
   * @member {String} atividadeEconomicaSecundaria
   */
  exports.prototype.atividadeEconomicaSecundaria = undefined;

  /**
   * @member {Number} faturamentoUltimoExercicio
   */
  exports.prototype.faturamentoUltimoExercicio = undefined;

  /**
   * @member {Number} resultadoUltimoExercicio
   */
  exports.prototype.resultadoUltimoExercicio = undefined;

  /**
   * @member {Number} anoUltimoExercicio
   */
  exports.prototype.anoUltimoExercicio = undefined;

  /**
   * @member {Number} responsavelCeiPessoaId
   */
  exports.prototype.responsavelCeiPessoaId = undefined;

  /**
   * @member {Array.<module:model/MongeralESBPessoaContratoV1DadosTipoParceiro>} tiposParceiro
   */
  exports.prototype.tiposParceiro = undefined;

  /**
   * @member {String} corPrimaria
   */
  exports.prototype.corPrimaria = undefined;

  /**
   * @member {String} corSecundaria
   */
  exports.prototype.corSecundaria = undefined;

  /**
   * @member {String} urlLogoPositivo
   */
  exports.prototype.urlLogoPositivo = undefined;

  /**
   * @member {String} urlLogoNegativo
   */
  exports.prototype.urlLogoNegativo = undefined;

  /**
   * @member {String} urlImagemTopo
   */
  exports.prototype.urlImagemTopo = undefined;

  /**
   * @member {String} urlImagemServico
   */
  exports.prototype.urlImagemServico = undefined;

  return exports;

}));

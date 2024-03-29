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
    define(['ApiClient', 'model/APISeguradoraContratoV1ModeloPropostaFormaPagamento', 'model/APISeguradoraContratoV1ProdutoCobertura', 'model/APISeguradoraContratoV1ProdutoDependenciaProduto', 'model/APISeguradoraContratoV1ProdutoFundo', 'model/APISeguradoraContratoV1ProdutoPeriodicidade', 'model/APISeguradoraContratoV1ProdutoPrazoRenda', 'model/APISeguradoraContratoV1ProdutoTipoProponente'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1ModeloPropostaFormaPagamento'), require('./APISeguradoraContratoV1ProdutoCobertura'), require('./APISeguradoraContratoV1ProdutoDependenciaProduto'), require('./APISeguradoraContratoV1ProdutoFundo'), require('./APISeguradoraContratoV1ProdutoPeriodicidade'), require('./APISeguradoraContratoV1ProdutoPrazoRenda'), require('./APISeguradoraContratoV1ProdutoTipoProponente'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1ProdutoProduto = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1ModeloPropostaFormaPagamento, root.Apiseguradora.APISeguradoraContratoV1ProdutoCobertura, root.Apiseguradora.APISeguradoraContratoV1ProdutoDependenciaProduto, root.Apiseguradora.APISeguradoraContratoV1ProdutoFundo, root.Apiseguradora.APISeguradoraContratoV1ProdutoPeriodicidade, root.Apiseguradora.APISeguradoraContratoV1ProdutoPrazoRenda, root.Apiseguradora.APISeguradoraContratoV1ProdutoTipoProponente);
  }
}(this, function(ApiClient, APISeguradoraContratoV1ModeloPropostaFormaPagamento, APISeguradoraContratoV1ProdutoCobertura, APISeguradoraContratoV1ProdutoDependenciaProduto, APISeguradoraContratoV1ProdutoFundo, APISeguradoraContratoV1ProdutoPeriodicidade, APISeguradoraContratoV1ProdutoPrazoRenda, APISeguradoraContratoV1ProdutoTipoProponente) {
  'use strict';

  /**
   * The APISeguradoraContratoV1ProdutoProduto model module.
   * @module model/APISeguradoraContratoV1ProdutoProduto
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1ProdutoProduto</code>.
   * @alias module:model/APISeguradoraContratoV1ProdutoProduto
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1ProdutoProduto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1ProdutoProduto} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1ProdutoProduto} The populated <code>APISeguradoraContratoV1ProdutoProduto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('descricao'))
        obj.descricao = ApiClient.convertToType(data['descricao'], 'String');
      if (data.hasOwnProperty('descricaoComercial'))
        obj.descricaoComercial = ApiClient.convertToType(data['descricaoComercial'], 'String');
      if (data.hasOwnProperty('dataUltimaAlteracao'))
        obj.dataUltimaAlteracao = ApiClient.convertToType(data['dataUltimaAlteracao'], 'Date');
      if (data.hasOwnProperty('coberturas'))
        obj.coberturas = ApiClient.convertToType(data['coberturas'], [APISeguradoraContratoV1ProdutoCobertura]);
      if (data.hasOwnProperty('dependenciasProdutos'))
        obj.dependenciasProdutos = ApiClient.convertToType(data['dependenciasProdutos'], [APISeguradoraContratoV1ProdutoDependenciaProduto]);
      if (data.hasOwnProperty('fundos'))
        obj.fundos = ApiClient.convertToType(data['fundos'], [APISeguradoraContratoV1ProdutoFundo]);
      if (data.hasOwnProperty('periodicidades'))
        obj.periodicidades = ApiClient.convertToType(data['periodicidades'], [APISeguradoraContratoV1ProdutoPeriodicidade]);
      if (data.hasOwnProperty('tipoProponente'))
        obj.tipoProponente = APISeguradoraContratoV1ProdutoTipoProponente.constructFromObject(data['tipoProponente']);
      if (data.hasOwnProperty('idadeMinima'))
        obj.idadeMinima = ApiClient.convertToType(data['idadeMinima'], 'Number');
      if (data.hasOwnProperty('idadeMaxima'))
        obj.idadeMaxima = ApiClient.convertToType(data['idadeMaxima'], 'Number');
      if (data.hasOwnProperty('idadeExclusao'))
        obj.idadeExclusao = ApiClient.convertToType(data['idadeExclusao'], 'Number');
      if (data.hasOwnProperty('indicarBeneficiario'))
        obj.indicarBeneficiario = ApiClient.convertToType(data['indicarBeneficiario'], 'Boolean');
      if (data.hasOwnProperty('exigeDPS'))
        obj.exigeDPS = ApiClient.convertToType(data['exigeDPS'], 'Boolean');
      if (data.hasOwnProperty('prazoCerto'))
        obj.prazoCerto = ApiClient.convertToType(data['prazoCerto'], ['Number']);
      if (data.hasOwnProperty('prazoRenda'))
        obj.prazoRenda = ApiClient.convertToType(data['prazoRenda'], [APISeguradoraContratoV1ProdutoPrazoRenda]);
      if (data.hasOwnProperty('profissoesAceitas'))
        obj.profissoesAceitas = ApiClient.convertToType(data['profissoesAceitas'], ['Number']);
      if (data.hasOwnProperty('profissoesRecusadas'))
        obj.profissoesRecusadas = ApiClient.convertToType(data['profissoesRecusadas'], ['Number']);
      if (data.hasOwnProperty('ufsRecusadas'))
        obj.ufsRecusadas = ApiClient.convertToType(data['ufsRecusadas'], ['String']);
      if (data.hasOwnProperty('prazoDecrescimo'))
        obj.prazoDecrescimo = ApiClient.convertToType(data['prazoDecrescimo'], ['Number']);
      if (data.hasOwnProperty('idadeAntecipacao'))
        obj.idadeAntecipacao = ApiClient.convertToType(data['idadeAntecipacao'], ['Number']);
      if (data.hasOwnProperty('tempoAntecipacao'))
        obj.tempoAntecipacao = ApiClient.convertToType(data['tempoAntecipacao'], ['Number']);
      if (data.hasOwnProperty('formasPagamento'))
        obj.formasPagamento = ApiClient.convertToType(data['formasPagamento'], [APISeguradoraContratoV1ModeloPropostaFormaPagamento]);
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
   * @member {String} descricaoComercial
   */
  exports.prototype.descricaoComercial = undefined;

  /**
   * @member {Date} dataUltimaAlteracao
   */
  exports.prototype.dataUltimaAlteracao = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ProdutoCobertura>} coberturas
   */
  exports.prototype.coberturas = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ProdutoDependenciaProduto>} dependenciasProdutos
   */
  exports.prototype.dependenciasProdutos = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ProdutoFundo>} fundos
   */
  exports.prototype.fundos = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ProdutoPeriodicidade>} periodicidades
   */
  exports.prototype.periodicidades = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1ProdutoTipoProponente} tipoProponente
   */
  exports.prototype.tipoProponente = undefined;

  /**
   * @member {Number} idadeMinima
   */
  exports.prototype.idadeMinima = undefined;

  /**
   * @member {Number} idadeMaxima
   */
  exports.prototype.idadeMaxima = undefined;

  /**
   * @member {Number} idadeExclusao
   */
  exports.prototype.idadeExclusao = undefined;

  /**
   * @member {Boolean} indicarBeneficiario
   */
  exports.prototype.indicarBeneficiario = undefined;

  /**
   * @member {Boolean} exigeDPS
   */
  exports.prototype.exigeDPS = undefined;

  /**
   * @member {Array.<Number>} prazoCerto
   */
  exports.prototype.prazoCerto = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ProdutoPrazoRenda>} prazoRenda
   */
  exports.prototype.prazoRenda = undefined;

  /**
   * @member {Array.<Number>} profissoesAceitas
   */
  exports.prototype.profissoesAceitas = undefined;

  /**
   * @member {Array.<Number>} profissoesRecusadas
   */
  exports.prototype.profissoesRecusadas = undefined;

  /**
   * @member {Array.<String>} ufsRecusadas
   */
  exports.prototype.ufsRecusadas = undefined;

  /**
   * @member {Array.<Number>} prazoDecrescimo
   */
  exports.prototype.prazoDecrescimo = undefined;

  /**
   * @member {Array.<Number>} idadeAntecipacao
   */
  exports.prototype.idadeAntecipacao = undefined;

  /**
   * @member {Array.<Number>} tempoAntecipacao
   */
  exports.prototype.tempoAntecipacao = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ModeloPropostaFormaPagamento>} formasPagamento
   */
  exports.prototype.formasPagamento = undefined;

  return exports;

}));

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
    define(['ApiClient', 'model/APISeguradoraImplementacaoESimProdutoCloneNegociacaoNegociacaoDTO'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraImplementacaoESimProdutoCloneNegociacaoNegociacaoDTO'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraImplementacaoESimProdutoCloneNegociacaoNegociacaoDTO);
  }
}(this, function(ApiClient, APISeguradoraImplementacaoESimProdutoCloneNegociacaoNegociacaoDTO) {
  'use strict';

  /**
   * The APISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO model module.
   * @module model/APISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO</code>.
   * @alias module:model/APISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO} obj Optional instance to populate.
   * @return {module:model/APISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO} The populated <code>APISeguradoraImplementacaoESimProdutoCloneNegociacaoModeloPropostaDTO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CanalComercializacao'))
        obj.canalComercializacao = ApiClient.convertToType(data['CanalComercializacao'], 'Number');
      if (data.hasOwnProperty('CodigoModelo'))
        obj.codigoModelo = ApiClient.convertToType(data['CodigoModelo'], 'String');
      if (data.hasOwnProperty('CondicaoComercialId'))
        obj.condicaoComercialId = ApiClient.convertToType(data['CondicaoComercialId'], 'Number');
      if (data.hasOwnProperty('Descricao'))
        obj.descricao = ApiClient.convertToType(data['Descricao'], 'String');
      if (data.hasOwnProperty('FormaComercializacaoId'))
        obj.formaComercializacaoId = ApiClient.convertToType(data['FormaComercializacaoId'], 'Number');
      if (data.hasOwnProperty('Negociacao'))
        obj.negociacao = APISeguradoraImplementacaoESimProdutoCloneNegociacaoNegociacaoDTO.constructFromObject(data['Negociacao']);
      if (data.hasOwnProperty('PossuiDps'))
        obj.possuiDps = ApiClient.convertToType(data['PossuiDps'], 'Boolean');
      if (data.hasOwnProperty('ProdutosRestritos'))
        obj.produtosRestritos = ApiClient.convertToType(data['ProdutosRestritos'], ['Number']);
    }
    return obj;
  }

  /**
   * @member {Number} canalComercializacao
   */
  exports.prototype.canalComercializacao = undefined;

  /**
   * @member {String} codigoModelo
   */
  exports.prototype.codigoModelo = undefined;

  /**
   * @member {Number} condicaoComercialId
   */
  exports.prototype.condicaoComercialId = undefined;

  /**
   * @member {String} descricao
   */
  exports.prototype.descricao = undefined;

  /**
   * @member {Number} formaComercializacaoId
   */
  exports.prototype.formaComercializacaoId = undefined;

  /**
   * @member {module:model/APISeguradoraImplementacaoESimProdutoCloneNegociacaoNegociacaoDTO} negociacao
   */
  exports.prototype.negociacao = undefined;

  /**
   * @member {Boolean} possuiDps
   */
  exports.prototype.possuiDps = undefined;

  /**
   * @member {Array.<Number>} produtosRestritos
   */
  exports.prototype.produtosRestritos = undefined;

  return exports;

}));

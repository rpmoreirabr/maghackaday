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
    define(['ApiClient', 'model/APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao', 'model/APISeguradoraContratoV1ModeloNegocioPoliticaRelacionamento', 'model/APISeguradoraContratoV1ModeloNegocioProdutoNegociado', 'model/APISeguradoraContratoV1ModeloNegocioTeleUnderWriting', 'model/APISeguradoraContratoV1ProdutoDependenciaProduto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao'), require('./APISeguradoraContratoV1ModeloNegocioPoliticaRelacionamento'), require('./APISeguradoraContratoV1ModeloNegocioProdutoNegociado'), require('./APISeguradoraContratoV1ModeloNegocioTeleUnderWriting'), require('./APISeguradoraContratoV1ProdutoDependenciaProduto'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioModeloNegocio = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao, root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioPoliticaRelacionamento, root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioProdutoNegociado, root.Apiseguradora.APISeguradoraContratoV1ModeloNegocioTeleUnderWriting, root.Apiseguradora.APISeguradoraContratoV1ProdutoDependenciaProduto);
  }
}(this, function(ApiClient, APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao, APISeguradoraContratoV1ModeloNegocioPoliticaRelacionamento, APISeguradoraContratoV1ModeloNegocioProdutoNegociado, APISeguradoraContratoV1ModeloNegocioTeleUnderWriting, APISeguradoraContratoV1ProdutoDependenciaProduto) {
  'use strict';

  /**
   * The APISeguradoraContratoV1ModeloNegocioModeloNegocio model module.
   * @module model/APISeguradoraContratoV1ModeloNegocioModeloNegocio
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1ModeloNegocioModeloNegocio</code>.
   * @alias module:model/APISeguradoraContratoV1ModeloNegocioModeloNegocio
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1ModeloNegocioModeloNegocio</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1ModeloNegocioModeloNegocio} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1ModeloNegocioModeloNegocio} The populated <code>APISeguradoraContratoV1ModeloNegocioModeloNegocio</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('modeloRelacionamento'))
        obj.modeloRelacionamento = ApiClient.convertToType(data['modeloRelacionamento'], 'Number');
      if (data.hasOwnProperty('nome'))
        obj.nome = ApiClient.convertToType(data['nome'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Number');
      if (data.hasOwnProperty('tipo'))
        obj.tipo = ApiClient.convertToType(data['tipo'], 'Number');
      if (data.hasOwnProperty('pessoaIdParceiro'))
        obj.pessoaIdParceiro = ApiClient.convertToType(data['pessoaIdParceiro'], 'Number');
      if (data.hasOwnProperty('observacao'))
        obj.observacao = ApiClient.convertToType(data['observacao'], 'String');
      if (data.hasOwnProperty('dataCriacao'))
        obj.dataCriacao = ApiClient.convertToType(data['dataCriacao'], 'Date');
      if (data.hasOwnProperty('dataInativacao'))
        obj.dataInativacao = ApiClient.convertToType(data['dataInativacao'], 'Date');
      if (data.hasOwnProperty('cnpjParceiro'))
        obj.cnpjParceiro = ApiClient.convertToType(data['cnpjParceiro'], 'Number');
      if (data.hasOwnProperty('nomeEmpresaModeloNegocio'))
        obj.nomeEmpresaModeloNegocio = ApiClient.convertToType(data['nomeEmpresaModeloNegocio'], 'String');
      if (data.hasOwnProperty('teleUnderWriting'))
        obj.teleUnderWriting = ApiClient.convertToType(data['teleUnderWriting'], [APISeguradoraContratoV1ModeloNegocioTeleUnderWriting]);
      if (data.hasOwnProperty('produtosNegociados'))
        obj.produtosNegociados = ApiClient.convertToType(data['produtosNegociados'], [APISeguradoraContratoV1ModeloNegocioProdutoNegociado]);
      if (data.hasOwnProperty('regrasDependencia'))
        obj.regrasDependencia = ApiClient.convertToType(data['regrasDependencia'], [APISeguradoraContratoV1ProdutoDependenciaProduto]);
      if (data.hasOwnProperty('regrasAceitacao'))
        obj.regrasAceitacao = APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao.constructFromObject(data['regrasAceitacao']);
      if (data.hasOwnProperty('politicasRelacionamento'))
        obj.politicasRelacionamento = ApiClient.convertToType(data['politicasRelacionamento'], [APISeguradoraContratoV1ModeloNegocioPoliticaRelacionamento]);
      if (data.hasOwnProperty('modelosProposta'))
        obj.modelosProposta = ApiClient.convertToType(data['modelosProposta'], ['String']);
    }
    return obj;
  }

  /**
   * @member {Number} modeloRelacionamento
   */
  exports.prototype.modeloRelacionamento = undefined;

  /**
   * @member {String} nome
   */
  exports.prototype.nome = undefined;

  /**
   * @member {Number} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Number} tipo
   */
  exports.prototype.tipo = undefined;

  /**
   * @member {Number} pessoaIdParceiro
   */
  exports.prototype.pessoaIdParceiro = undefined;

  /**
   * @member {String} observacao
   */
  exports.prototype.observacao = undefined;

  /**
   * @member {Date} dataCriacao
   */
  exports.prototype.dataCriacao = undefined;

  /**
   * @member {Date} dataInativacao
   */
  exports.prototype.dataInativacao = undefined;

  /**
   * @member {Number} cnpjParceiro
   */
  exports.prototype.cnpjParceiro = undefined;

  /**
   * @member {String} nomeEmpresaModeloNegocio
   */
  exports.prototype.nomeEmpresaModeloNegocio = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ModeloNegocioTeleUnderWriting>} teleUnderWriting
   */
  exports.prototype.teleUnderWriting = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ModeloNegocioProdutoNegociado>} produtosNegociados
   */
  exports.prototype.produtosNegociados = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ProdutoDependenciaProduto>} regrasDependencia
   */
  exports.prototype.regrasDependencia = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1ModeloNegocioPoliticaDeAceitacao} regrasAceitacao
   */
  exports.prototype.regrasAceitacao = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ModeloNegocioPoliticaRelacionamento>} politicasRelacionamento
   */
  exports.prototype.politicasRelacionamento = undefined;

  /**
   * @member {Array.<String>} modelosProposta
   */
  exports.prototype.modelosProposta = undefined;

  return exports;

}));
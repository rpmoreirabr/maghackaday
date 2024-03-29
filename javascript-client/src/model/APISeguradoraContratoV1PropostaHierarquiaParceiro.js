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
    define(['ApiClient', 'model/APISeguradoraContratoV1ProdutorParceiro', 'model/APISeguradoraContratoV1PropostaProdutor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1ProdutorParceiro'), require('./APISeguradoraContratoV1PropostaProdutor'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1PropostaHierarquiaParceiro = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1ProdutorParceiro, root.Apiseguradora.APISeguradoraContratoV1PropostaProdutor);
  }
}(this, function(ApiClient, APISeguradoraContratoV1ProdutorParceiro, APISeguradoraContratoV1PropostaProdutor) {
  'use strict';

  /**
   * The APISeguradoraContratoV1PropostaHierarquiaParceiro model module.
   * @module model/APISeguradoraContratoV1PropostaHierarquiaParceiro
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1PropostaHierarquiaParceiro</code>.
   * @alias module:model/APISeguradoraContratoV1PropostaHierarquiaParceiro
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1PropostaHierarquiaParceiro</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1PropostaHierarquiaParceiro} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1PropostaHierarquiaParceiro} The populated <code>APISeguradoraContratoV1PropostaHierarquiaParceiro</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Parceiros'))
        obj.parceiros = ApiClient.convertToType(data['Parceiros'], [APISeguradoraContratoV1ProdutorParceiro]);
      if (data.hasOwnProperty('UnidadeProducao'))
        obj.unidadeProducao = ApiClient.convertToType(data['UnidadeProducao'], 'String');
      if (data.hasOwnProperty('Produtores'))
        obj.produtores = ApiClient.convertToType(data['Produtores'], [APISeguradoraContratoV1PropostaProdutor]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ProdutorParceiro>} parceiros
   */
  exports.prototype.parceiros = undefined;

  /**
   * @member {String} unidadeProducao
   */
  exports.prototype.unidadeProducao = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1PropostaProdutor>} produtores
   */
  exports.prototype.produtores = undefined;

  return exports;

}));

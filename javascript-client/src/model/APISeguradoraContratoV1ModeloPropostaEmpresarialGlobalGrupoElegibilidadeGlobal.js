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
    define(['ApiClient', 'model/APISeguradoraContratoV1ModeloPropostaEmpresarialAtividadeEconomica', 'model/APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModuloGlobal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1ModeloPropostaEmpresarialAtividadeEconomica'), require('./APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModuloGlobal'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalGrupoElegibilidadeGlobal = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1ModeloPropostaEmpresarialAtividadeEconomica, root.Apiseguradora.APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModuloGlobal);
  }
}(this, function(ApiClient, APISeguradoraContratoV1ModeloPropostaEmpresarialAtividadeEconomica, APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModuloGlobal) {
  'use strict';

  /**
   * The APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalGrupoElegibilidadeGlobal model module.
   * @module model/APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalGrupoElegibilidadeGlobal
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalGrupoElegibilidadeGlobal</code>.
   * @alias module:model/APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalGrupoElegibilidadeGlobal
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalGrupoElegibilidadeGlobal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalGrupoElegibilidadeGlobal} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalGrupoElegibilidadeGlobal} The populated <code>APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalGrupoElegibilidadeGlobal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('atividadesEconomicas'))
        obj.atividadesEconomicas = ApiClient.convertToType(data['atividadesEconomicas'], [APISeguradoraContratoV1ModeloPropostaEmpresarialAtividadeEconomica]);
      if (data.hasOwnProperty('descricao'))
        obj.descricao = ApiClient.convertToType(data['descricao'], 'String');
      if (data.hasOwnProperty('grupoDeRisco'))
        obj.grupoDeRisco = ApiClient.convertToType(data['grupoDeRisco'], 'Number');
      if (data.hasOwnProperty('modulos'))
        obj.modulos = ApiClient.convertToType(data['modulos'], [APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModuloGlobal]);
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ModeloPropostaEmpresarialAtividadeEconomica>} atividadesEconomicas
   */
  exports.prototype.atividadesEconomicas = undefined;

  /**
   * @member {String} descricao
   */
  exports.prototype.descricao = undefined;

  /**
   * @member {Number} grupoDeRisco
   */
  exports.prototype.grupoDeRisco = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalModuloGlobal>} modulos
   */
  exports.prototype.modulos = undefined;

  return exports;

}));
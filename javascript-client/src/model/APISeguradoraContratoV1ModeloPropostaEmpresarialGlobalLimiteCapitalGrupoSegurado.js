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
    define(['ApiClient', 'model/APISeguradoraContratoV1ModeloPropostaEmpresarialTipo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1ModeloPropostaEmpresarialTipo'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalLimiteCapitalGrupoSegurado = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1ModeloPropostaEmpresarialTipo);
  }
}(this, function(ApiClient, APISeguradoraContratoV1ModeloPropostaEmpresarialTipo) {
  'use strict';

  /**
   * The APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalLimiteCapitalGrupoSegurado model module.
   * @module model/APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalLimiteCapitalGrupoSegurado
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalLimiteCapitalGrupoSegurado</code>.
   * @alias module:model/APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalLimiteCapitalGrupoSegurado
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalLimiteCapitalGrupoSegurado</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalLimiteCapitalGrupoSegurado} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalLimiteCapitalGrupoSegurado} The populated <code>APISeguradoraContratoV1ModeloPropostaEmpresarialGlobalLimiteCapitalGrupoSegurado</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('tipoGrupoSegurado'))
        obj.tipoGrupoSegurado = APISeguradoraContratoV1ModeloPropostaEmpresarialTipo.constructFromObject(data['tipoGrupoSegurado']);
      if (data.hasOwnProperty('limite'))
        obj.limite = ApiClient.convertToType(data['limite'], 'Number');
    }
    return obj;
  }

  /**
   * @member {module:model/APISeguradoraContratoV1ModeloPropostaEmpresarialTipo} tipoGrupoSegurado
   */
  exports.prototype.tipoGrupoSegurado = undefined;

  /**
   * @member {Number} limite
   */
  exports.prototype.limite = undefined;

  return exports;

}));

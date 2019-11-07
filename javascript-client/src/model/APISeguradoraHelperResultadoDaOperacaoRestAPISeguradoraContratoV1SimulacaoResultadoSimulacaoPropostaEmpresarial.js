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
    define(['ApiClient', 'model/APISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial);
  }
}(this, function(ApiClient, APISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial) {
  'use strict';

  /**
   * The APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial model module.
   * @module model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial</code>.
   * Resultado da Operação
   * @alias module:model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial} obj Optional instance to populate.
   * @return {module:model/APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial} The populated <code>APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Valor'))
        obj.valor = APISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial.constructFromObject(data['Valor']);
      if (data.hasOwnProperty('Mensagens'))
        obj.mensagens = ApiClient.convertToType(data['Mensagens'], ['String']);
      if (data.hasOwnProperty('HouveErrosDuranteProcessamento'))
        obj.houveErrosDuranteProcessamento = ApiClient.convertToType(data['HouveErrosDuranteProcessamento'], 'Boolean');
    }
    return obj;
  }

  /**
   * Valor da Operação
   * @member {module:model/APISeguradoraContratoV1SimulacaoResultadoSimulacaoPropostaEmpresarial} valor
   */
  exports.prototype.valor = undefined;

  /**
   * Mensagens de contexto da operação
   * @member {Array.<String>} mensagens
   */
  exports.prototype.mensagens = undefined;

  /**
   * Indicador se a operação foi concluída com sucesso
   * @member {Boolean} houveErrosDuranteProcessamento
   */
  exports.prototype.houveErrosDuranteProcessamento = undefined;

  return exports;

}));

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
    define(['ApiClient', 'model/APISeguradoraContratoV1PropostaBeneficiario', 'model/APISeguradoraContratoV1PropostaDadosCobranca', 'model/APISeguradoraContratoV1PropostaDadosProponente', 'model/APISeguradoraContratoV1PropostaInstituidor', 'model/APISeguradoraContratoV1PropostaPlanos', 'model/APISeguradoraContratoV1PropostaReciboPrimeiroPagamento', 'model/APISeguradoraContratoV1PropostaUsoCorretor', 'model/APISeguradoraContratoV1PropostaUsoMongeral'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APISeguradoraContratoV1PropostaBeneficiario'), require('./APISeguradoraContratoV1PropostaDadosCobranca'), require('./APISeguradoraContratoV1PropostaDadosProponente'), require('./APISeguradoraContratoV1PropostaInstituidor'), require('./APISeguradoraContratoV1PropostaPlanos'), require('./APISeguradoraContratoV1PropostaReciboPrimeiroPagamento'), require('./APISeguradoraContratoV1PropostaUsoCorretor'), require('./APISeguradoraContratoV1PropostaUsoMongeral'));
  } else {
    // Browser globals (root is window)
    if (!root.Apiseguradora) {
      root.Apiseguradora = {};
    }
    root.Apiseguradora.APISeguradoraContratoV1PropostaDadosRegistrarVenda = factory(root.Apiseguradora.ApiClient, root.Apiseguradora.APISeguradoraContratoV1PropostaBeneficiario, root.Apiseguradora.APISeguradoraContratoV1PropostaDadosCobranca, root.Apiseguradora.APISeguradoraContratoV1PropostaDadosProponente, root.Apiseguradora.APISeguradoraContratoV1PropostaInstituidor, root.Apiseguradora.APISeguradoraContratoV1PropostaPlanos, root.Apiseguradora.APISeguradoraContratoV1PropostaReciboPrimeiroPagamento, root.Apiseguradora.APISeguradoraContratoV1PropostaUsoCorretor, root.Apiseguradora.APISeguradoraContratoV1PropostaUsoMongeral);
  }
}(this, function(ApiClient, APISeguradoraContratoV1PropostaBeneficiario, APISeguradoraContratoV1PropostaDadosCobranca, APISeguradoraContratoV1PropostaDadosProponente, APISeguradoraContratoV1PropostaInstituidor, APISeguradoraContratoV1PropostaPlanos, APISeguradoraContratoV1PropostaReciboPrimeiroPagamento, APISeguradoraContratoV1PropostaUsoCorretor, APISeguradoraContratoV1PropostaUsoMongeral) {
  'use strict';

  /**
   * The APISeguradoraContratoV1PropostaDadosRegistrarVenda model module.
   * @module model/APISeguradoraContratoV1PropostaDadosRegistrarVenda
   * @version v1
   */

  /**
   * Constructs a new <code>APISeguradoraContratoV1PropostaDadosRegistrarVenda</code>.
   * @alias module:model/APISeguradoraContratoV1PropostaDadosRegistrarVenda
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>APISeguradoraContratoV1PropostaDadosRegistrarVenda</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APISeguradoraContratoV1PropostaDadosRegistrarVenda} obj Optional instance to populate.
   * @return {module:model/APISeguradoraContratoV1PropostaDadosRegistrarVenda} The populated <code>APISeguradoraContratoV1PropostaDadosRegistrarVenda</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CNPJ'))
        obj.CNPJ = ApiClient.convertToType(data['CNPJ'], 'String');
      if (data.hasOwnProperty('ModeloProposta'))
        obj.modeloProposta = ApiClient.convertToType(data['ModeloProposta'], 'String');
      if (data.hasOwnProperty('Instituidor'))
        obj.instituidor = APISeguradoraContratoV1PropostaInstituidor.constructFromObject(data['Instituidor']);
      if (data.hasOwnProperty('DadosProponente'))
        obj.dadosProponente = APISeguradoraContratoV1PropostaDadosProponente.constructFromObject(data['DadosProponente']);
      if (data.hasOwnProperty('Planos'))
        obj.planos = APISeguradoraContratoV1PropostaPlanos.constructFromObject(data['Planos']);
      if (data.hasOwnProperty('Beneficiarios'))
        obj.beneficiarios = ApiClient.convertToType(data['Beneficiarios'], [APISeguradoraContratoV1PropostaBeneficiario]);
      if (data.hasOwnProperty('DadosCobranca'))
        obj.dadosCobranca = APISeguradoraContratoV1PropostaDadosCobranca.constructFromObject(data['DadosCobranca']);
      if (data.hasOwnProperty('ReciboPrimeiroPagamento'))
        obj.reciboPrimeiroPagamento = APISeguradoraContratoV1PropostaReciboPrimeiroPagamento.constructFromObject(data['ReciboPrimeiroPagamento']);
      if (data.hasOwnProperty('UsoMongeral'))
        obj.usoMongeral = APISeguradoraContratoV1PropostaUsoMongeral.constructFromObject(data['UsoMongeral']);
      if (data.hasOwnProperty('UsoCorretor'))
        obj.usoCorretor = APISeguradoraContratoV1PropostaUsoCorretor.constructFromObject(data['UsoCorretor']);
      if (data.hasOwnProperty('RespostasQuestionario'))
        obj.respostasQuestionario = ApiClient.convertToType(data['RespostasQuestionario'], ['Number']);
    }
    return obj;
  }

  /**
   * @member {String} CNPJ
   */
  exports.prototype.CNPJ = undefined;

  /**
   * @member {String} modeloProposta
   */
  exports.prototype.modeloProposta = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1PropostaInstituidor} instituidor
   */
  exports.prototype.instituidor = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1PropostaDadosProponente} dadosProponente
   */
  exports.prototype.dadosProponente = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1PropostaPlanos} planos
   */
  exports.prototype.planos = undefined;

  /**
   * @member {Array.<module:model/APISeguradoraContratoV1PropostaBeneficiario>} beneficiarios
   */
  exports.prototype.beneficiarios = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1PropostaDadosCobranca} dadosCobranca
   */
  exports.prototype.dadosCobranca = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1PropostaReciboPrimeiroPagamento} reciboPrimeiroPagamento
   */
  exports.prototype.reciboPrimeiroPagamento = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1PropostaUsoMongeral} usoMongeral
   */
  exports.prototype.usoMongeral = undefined;

  /**
   * @member {module:model/APISeguradoraContratoV1PropostaUsoCorretor} usoCorretor
   */
  exports.prototype.usoCorretor = undefined;

  /**
   * @member {Array.<Number>} respostasQuestionario
   */
  exports.prototype.respostasQuestionario = undefined;

  return exports;

}));

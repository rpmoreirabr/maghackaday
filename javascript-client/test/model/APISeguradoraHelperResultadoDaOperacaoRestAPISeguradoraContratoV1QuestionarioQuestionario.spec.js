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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Apiseguradora);
  }
}(this, function(expect, Apiseguradora) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1QuestionarioQuestionario', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1QuestionarioQuestionario();
      });

      it('should create an instance of APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1QuestionarioQuestionario', function() {
        // TODO: update the code to test APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1QuestionarioQuestionario
        expect(instance).to.be.a(Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1QuestionarioQuestionario);
      });

      it('should have the property valor (base name: "Valor")', function() {
        // TODO: update the code to test the property valor
        expect(instance).to.have.property('valor');
        // expect(instance.valor).to.be(expectedValueLiteral);
      });

      it('should have the property mensagens (base name: "Mensagens")', function() {
        // TODO: update the code to test the property mensagens
        expect(instance).to.have.property('mensagens');
        // expect(instance.mensagens).to.be(expectedValueLiteral);
      });

      it('should have the property houveErrosDuranteProcessamento (base name: "HouveErrosDuranteProcessamento")', function() {
        // TODO: update the code to test the property houveErrosDuranteProcessamento
        expect(instance).to.have.property('houveErrosDuranteProcessamento');
        // expect(instance.houveErrosDuranteProcessamento).to.be(expectedValueLiteral);
      });

    });
  });

}));

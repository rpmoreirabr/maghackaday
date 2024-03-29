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
    describe('APISeguradoraContratoV1PropostaCartao', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1PropostaCartao();
      });

      it('should create an instance of APISeguradoraContratoV1PropostaCartao', function() {
        // TODO: update the code to test APISeguradoraContratoV1PropostaCartao
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1PropostaCartao);
      });

      it('should have the property numero (base name: "Numero")', function() {
        // TODO: update the code to test the property numero
        expect(instance).to.have.property('numero');
        // expect(instance.numero).to.be(expectedValueLiteral);
      });

      it('should have the property validade (base name: "Validade")', function() {
        // TODO: update the code to test the property validade
        expect(instance).to.have.property('validade');
        // expect(instance.validade).to.be(expectedValueLiteral);
      });

      it('should have the property numPreAutorizacao (base name: "NumPreAutorizacao")', function() {
        // TODO: update the code to test the property numPreAutorizacao
        expect(instance).to.have.property('numPreAutorizacao');
        // expect(instance.numPreAutorizacao).to.be(expectedValueLiteral);
      });

      it('should have the property badeira (base name: "Badeira")', function() {
        // TODO: update the code to test the property badeira
        expect(instance).to.have.property('badeira');
        // expect(instance.badeira).to.be(expectedValueLiteral);
      });

      it('should have the property parcela (base name: "Parcela")', function() {
        // TODO: update the code to test the property parcela
        expect(instance).to.have.property('parcela');
        // expect(instance.parcela).to.be(expectedValueLiteral);
      });

      it('should have the property portador (base name: "Portador")', function() {
        // TODO: update the code to test the property portador
        expect(instance).to.have.property('portador');
        // expect(instance.portador).to.be(expectedValueLiteral);
      });

    });
  });

}));

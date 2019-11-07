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
    describe('APISeguradoraContratoV1PropostaRepresentanteLegal', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1PropostaRepresentanteLegal();
      });

      it('should create an instance of APISeguradoraContratoV1PropostaRepresentanteLegal', function() {
        // TODO: update the code to test APISeguradoraContratoV1PropostaRepresentanteLegal
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1PropostaRepresentanteLegal);
      });

      it('should have the property nome (base name: "Nome")', function() {
        // TODO: update the code to test the property nome
        expect(instance).to.have.property('nome');
        // expect(instance.nome).to.be(expectedValueLiteral);
      });

      it('should have the property CPF (base name: "CPF")', function() {
        // TODO: update the code to test the property CPF
        expect(instance).to.have.property('CPF');
        // expect(instance.CPF).to.be(expectedValueLiteral);
      });

      it('should have the property parentesco (base name: "Parentesco")', function() {
        // TODO: update the code to test the property parentesco
        expect(instance).to.have.property('parentesco');
        // expect(instance.parentesco).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    describe('APISeguradoraContratoV1PropostaBeneficiario', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1PropostaBeneficiario();
      });

      it('should create an instance of APISeguradoraContratoV1PropostaBeneficiario', function() {
        // TODO: update the code to test APISeguradoraContratoV1PropostaBeneficiario
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1PropostaBeneficiario);
      });

      it('should have the property nome (base name: "Nome")', function() {
        // TODO: update the code to test the property nome
        expect(instance).to.have.property('nome');
        // expect(instance.nome).to.be(expectedValueLiteral);
      });

      it('should have the property dataNascimento (base name: "DataNascimento")', function() {
        // TODO: update the code to test the property dataNascimento
        expect(instance).to.have.property('dataNascimento');
        // expect(instance.dataNascimento).to.be(expectedValueLiteral);
      });

      it('should have the property parentesco (base name: "Parentesco")', function() {
        // TODO: update the code to test the property parentesco
        expect(instance).to.have.property('parentesco');
        // expect(instance.parentesco).to.be(expectedValueLiteral);
      });

      it('should have the property participacao (base name: "Participacao")', function() {
        // TODO: update the code to test the property participacao
        expect(instance).to.have.property('participacao');
        // expect(instance.participacao).to.be(expectedValueLiteral);
      });

      it('should have the property cdPlano (base name: "CdPlano")', function() {
        // TODO: update the code to test the property cdPlano
        expect(instance).to.have.property('cdPlano');
        // expect(instance.cdPlano).to.be(expectedValueLiteral);
      });

    });
  });

}));
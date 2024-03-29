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
    describe('APISeguradoraContratoV1PropostaEndereco', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1PropostaEndereco();
      });

      it('should create an instance of APISeguradoraContratoV1PropostaEndereco', function() {
        // TODO: update the code to test APISeguradoraContratoV1PropostaEndereco
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1PropostaEndereco);
      });

      it('should have the property tipo (base name: "Tipo")', function() {
        // TODO: update the code to test the property tipo
        expect(instance).to.have.property('tipo');
        // expect(instance.tipo).to.be(expectedValueLiteral);
      });

      it('should have the property logradouro (base name: "Logradouro")', function() {
        // TODO: update the code to test the property logradouro
        expect(instance).to.have.property('logradouro');
        // expect(instance.logradouro).to.be(expectedValueLiteral);
      });

      it('should have the property numero (base name: "Numero")', function() {
        // TODO: update the code to test the property numero
        expect(instance).to.have.property('numero');
        // expect(instance.numero).to.be(expectedValueLiteral);
      });

      it('should have the property COMPLEMENTO (base name: "COMPLEMENTO")', function() {
        // TODO: update the code to test the property COMPLEMENTO
        expect(instance).to.have.property('COMPLEMENTO');
        // expect(instance.COMPLEMENTO).to.be(expectedValueLiteral);
      });

      it('should have the property BAIRRO (base name: "BAIRRO")', function() {
        // TODO: update the code to test the property BAIRRO
        expect(instance).to.have.property('BAIRRO');
        // expect(instance.BAIRRO).to.be(expectedValueLiteral);
      });

      it('should have the property CIDADE (base name: "CIDADE")', function() {
        // TODO: update the code to test the property CIDADE
        expect(instance).to.have.property('CIDADE');
        // expect(instance.CIDADE).to.be(expectedValueLiteral);
      });

      it('should have the property ESTADO (base name: "ESTADO")', function() {
        // TODO: update the code to test the property ESTADO
        expect(instance).to.have.property('ESTADO');
        // expect(instance.ESTADO).to.be(expectedValueLiteral);
      });

      it('should have the property CEP (base name: "CEP")', function() {
        // TODO: update the code to test the property CEP
        expect(instance).to.have.property('CEP');
        // expect(instance.CEP).to.be(expectedValueLiteral);
      });

    });
  });

}));

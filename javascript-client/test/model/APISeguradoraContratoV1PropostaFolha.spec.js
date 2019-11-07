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
    describe('APISeguradoraContratoV1PropostaFolha', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1PropostaFolha();
      });

      it('should create an instance of APISeguradoraContratoV1PropostaFolha', function() {
        // TODO: update the code to test APISeguradoraContratoV1PropostaFolha
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1PropostaFolha);
      });

      it('should have the property nomeFuncionario (base name: "NomeFuncionario")', function() {
        // TODO: update the code to test the property nomeFuncionario
        expect(instance).to.have.property('nomeFuncionario');
        // expect(instance.nomeFuncionario).to.be(expectedValueLiteral);
      });

      it('should have the property matFuncional (base name: "MatFuncional")', function() {
        // TODO: update the code to test the property matFuncional
        expect(instance).to.have.property('matFuncional');
        // expect(instance.matFuncional).to.be(expectedValueLiteral);
      });

      it('should have the property complemento (base name: "Complemento")', function() {
        // TODO: update the code to test the property complemento
        expect(instance).to.have.property('complemento');
        // expect(instance.complemento).to.be(expectedValueLiteral);
      });

      it('should have the property codOrgao (base name: "CodOrgao")', function() {
        // TODO: update the code to test the property codOrgao
        expect(instance).to.have.property('codOrgao');
        // expect(instance.codOrgao).to.be(expectedValueLiteral);
      });

      it('should have the property cpfFuncionario (base name: "CpfFuncionario")', function() {
        // TODO: update the code to test the property cpfFuncionario
        expect(instance).to.have.property('cpfFuncionario');
        // expect(instance.cpfFuncionario).to.be(expectedValueLiteral);
      });

      it('should have the property subdivisoes (base name: "Subdivisoes")', function() {
        // TODO: update the code to test the property subdivisoes
        expect(instance).to.have.property('subdivisoes');
        // expect(instance.subdivisoes).to.be(expectedValueLiteral);
      });

    });
  });

}));
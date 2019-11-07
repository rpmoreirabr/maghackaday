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
    describe('APISeguradoraContratoV1PoliticaAceitacaoLimiteOperacionalRenda', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1PoliticaAceitacaoLimiteOperacionalRenda();
      });

      it('should create an instance of APISeguradoraContratoV1PoliticaAceitacaoLimiteOperacionalRenda', function() {
        // TODO: update the code to test APISeguradoraContratoV1PoliticaAceitacaoLimiteOperacionalRenda
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1PoliticaAceitacaoLimiteOperacionalRenda);
      });

      it('should have the property causa (base name: "causa")', function() {
        // TODO: update the code to test the property causa
        expect(instance).to.have.property('causa');
        // expect(instance.causa).to.be(expectedValueLiteral);
      });

      it('should have the property idadeInicial (base name: "idadeInicial")', function() {
        // TODO: update the code to test the property idadeInicial
        expect(instance).to.have.property('idadeInicial');
        // expect(instance.idadeInicial).to.be(expectedValueLiteral);
      });

      it('should have the property idadeFinal (base name: "idadeFinal")', function() {
        // TODO: update the code to test the property idadeFinal
        expect(instance).to.have.property('idadeFinal');
        // expect(instance.idadeFinal).to.be(expectedValueLiteral);
      });

      it('should have the property multiploRenda (base name: "multiploRenda")', function() {
        // TODO: update the code to test the property multiploRenda
        expect(instance).to.have.property('multiploRenda');
        // expect(instance.multiploRenda).to.be(expectedValueLiteral);
      });

    });
  });

}));

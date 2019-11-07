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
    describe('APISeguradoraContratoV1ParDadosCadastroParceiro', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1ParDadosCadastroParceiro();
      });

      it('should create an instance of APISeguradoraContratoV1ParDadosCadastroParceiro', function() {
        // TODO: update the code to test APISeguradoraContratoV1ParDadosCadastroParceiro
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1ParDadosCadastroParceiro);
      });

      it('should have the property cnpj (base name: "Cnpj")', function() {
        // TODO: update the code to test the property cnpj
        expect(instance).to.have.property('cnpj');
        // expect(instance.cnpj).to.be(expectedValueLiteral);
      });

      it('should have the property razaoSocial (base name: "RazaoSocial")', function() {
        // TODO: update the code to test the property razaoSocial
        expect(instance).to.have.property('razaoSocial');
        // expect(instance.razaoSocial).to.be(expectedValueLiteral);
      });

      it('should have the property nomeFantasia (base name: "NomeFantasia")', function() {
        // TODO: update the code to test the property nomeFantasia
        expect(instance).to.have.property('nomeFantasia');
        // expect(instance.nomeFantasia).to.be(expectedValueLiteral);
      });

      it('should have the property prioridadeAtendimentoBeneficio (base name: "PrioridadeAtendimentoBeneficio")', function() {
        // TODO: update the code to test the property prioridadeAtendimentoBeneficio
        expect(instance).to.have.property('prioridadeAtendimentoBeneficio');
        // expect(instance.prioridadeAtendimentoBeneficio).to.be(expectedValueLiteral);
      });

      it('should have the property tipoAtividadeEconomica (base name: "TipoAtividadeEconomica")', function() {
        // TODO: update the code to test the property tipoAtividadeEconomica
        expect(instance).to.have.property('tipoAtividadeEconomica');
        // expect(instance.tipoAtividadeEconomica).to.be(expectedValueLiteral);
      });

      it('should have the property tipos (base name: "Tipos")', function() {
        // TODO: update the code to test the property tipos
        expect(instance).to.have.property('tipos');
        // expect(instance.tipos).to.be(expectedValueLiteral);
      });

      it('should have the property corPrimaria (base name: "CorPrimaria")', function() {
        // TODO: update the code to test the property corPrimaria
        expect(instance).to.have.property('corPrimaria');
        // expect(instance.corPrimaria).to.be(expectedValueLiteral);
      });

      it('should have the property corSecundaria (base name: "CorSecundaria")', function() {
        // TODO: update the code to test the property corSecundaria
        expect(instance).to.have.property('corSecundaria');
        // expect(instance.corSecundaria).to.be(expectedValueLiteral);
      });

      it('should have the property logoPositivo (base name: "LogoPositivo")', function() {
        // TODO: update the code to test the property logoPositivo
        expect(instance).to.have.property('logoPositivo');
        // expect(instance.logoPositivo).to.be(expectedValueLiteral);
      });

      it('should have the property logoNegativo (base name: "LogoNegativo")', function() {
        // TODO: update the code to test the property logoNegativo
        expect(instance).to.have.property('logoNegativo');
        // expect(instance.logoNegativo).to.be(expectedValueLiteral);
      });

      it('should have the property imagemTopo (base name: "ImagemTopo")', function() {
        // TODO: update the code to test the property imagemTopo
        expect(instance).to.have.property('imagemTopo');
        // expect(instance.imagemTopo).to.be(expectedValueLiteral);
      });

      it('should have the property imagemServico (base name: "ImagemServico")', function() {
        // TODO: update the code to test the property imagemServico
        expect(instance).to.have.property('imagemServico');
        // expect(instance.imagemServico).to.be(expectedValueLiteral);
      });

    });
  });

}));
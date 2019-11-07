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
    describe('APISeguradoraContratoV1ModeloNegocioItemServico', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1ModeloNegocioItemServico();
      });

      it('should create an instance of APISeguradoraContratoV1ModeloNegocioItemServico', function() {
        // TODO: update the code to test APISeguradoraContratoV1ModeloNegocioItemServico
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1ModeloNegocioItemServico);
      });

      it('should have the property tipoServico (base name: "tipoServico")', function() {
        // TODO: update the code to test the property tipoServico
        expect(instance).to.have.property('tipoServico');
        // expect(instance.tipoServico).to.be(expectedValueLiteral);
      });

      it('should have the property servicoId (base name: "servicoId")', function() {
        // TODO: update the code to test the property servicoId
        expect(instance).to.have.property('servicoId');
        // expect(instance.servicoId).to.be(expectedValueLiteral);
      });

      it('should have the property itemServicoId (base name: "itemServicoId")', function() {
        // TODO: update the code to test the property itemServicoId
        expect(instance).to.have.property('itemServicoId');
        // expect(instance.itemServicoId).to.be(expectedValueLiteral);
      });

      it('should have the property descricao (base name: "descricao")', function() {
        // TODO: update the code to test the property descricao
        expect(instance).to.have.property('descricao');
        // expect(instance.descricao).to.be(expectedValueLiteral);
      });

      it('should have the property nome (base name: "nome")', function() {
        // TODO: update the code to test the property nome
        expect(instance).to.have.property('nome');
        // expect(instance.nome).to.be(expectedValueLiteral);
      });

      it('should have the property sigla (base name: "sigla")', function() {
        // TODO: update the code to test the property sigla
        expect(instance).to.have.property('sigla');
        // expect(instance.sigla).to.be(expectedValueLiteral);
      });

      it('should have the property assitencialCondicionado (base name: "assitencialCondicionado")', function() {
        // TODO: update the code to test the property assitencialCondicionado
        expect(instance).to.have.property('assitencialCondicionado');
        // expect(instance.assitencialCondicionado).to.be(expectedValueLiteral);
      });

      it('should have the property cestaBasica (base name: "cestaBasica")', function() {
        // TODO: update the code to test the property cestaBasica
        expect(instance).to.have.property('cestaBasica');
        // expect(instance.cestaBasica).to.be(expectedValueLiteral);
      });

      it('should have the property sorteio (base name: "sorteio")', function() {
        // TODO: update the code to test the property sorteio
        expect(instance).to.have.property('sorteio');
        // expect(instance.sorteio).to.be(expectedValueLiteral);
      });

      it('should have the property safAFFamiliar (base name: "safAFFamiliar")', function() {
        // TODO: update the code to test the property safAFFamiliar
        expect(instance).to.have.property('safAFFamiliar');
        // expect(instance.safAFFamiliar).to.be(expectedValueLiteral);
      });

      it('should have the property safIndividual (base name: "safIndividual")', function() {
        // TODO: update the code to test the property safIndividual
        expect(instance).to.have.property('safIndividual');
        // expect(instance.safIndividual).to.be(expectedValueLiteral);
      });

    });
  });

}));
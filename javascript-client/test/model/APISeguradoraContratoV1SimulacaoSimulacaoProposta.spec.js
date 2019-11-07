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
    describe('APISeguradoraContratoV1SimulacaoSimulacaoProposta', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1SimulacaoSimulacaoProposta();
      });

      it('should create an instance of APISeguradoraContratoV1SimulacaoSimulacaoProposta', function() {
        // TODO: update the code to test APISeguradoraContratoV1SimulacaoSimulacaoProposta
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1SimulacaoSimulacaoProposta);
      });

      it('should have the property proponente (base name: "proponente")', function() {
        // TODO: update the code to test the property proponente
        expect(instance).to.have.property('proponente');
        // expect(instance.proponente).to.be(expectedValueLiteral);
      });

      it('should have the property produtos (base name: "produtos")', function() {
        // TODO: update the code to test the property produtos
        expect(instance).to.have.property('produtos');
        // expect(instance.produtos).to.be(expectedValueLiteral);
      });

      it('should have the property periodicidadeCobrancaId (base name: "periodicidadeCobrancaId")', function() {
        // TODO: update the code to test the property periodicidadeCobrancaId
        expect(instance).to.have.property('periodicidadeCobrancaId');
        // expect(instance.periodicidadeCobrancaId).to.be(expectedValueLiteral);
      });

      it('should have the property prazoDecrescimo (base name: "prazoDecrescimo")', function() {
        // TODO: update the code to test the property prazoDecrescimo
        expect(instance).to.have.property('prazoDecrescimo');
        // expect(instance.prazoDecrescimo).to.be(expectedValueLiteral);
      });

      it('should have the property prazoPagamentoAntecipado (base name: "prazoPagamentoAntecipado")', function() {
        // TODO: update the code to test the property prazoPagamentoAntecipado
        expect(instance).to.have.property('prazoPagamentoAntecipado');
        // expect(instance.prazoPagamentoAntecipado).to.be(expectedValueLiteral);
      });

      it('should have the property idadePagamentoAntecipado (base name: "idadePagamentoAntecipado")', function() {
        // TODO: update the code to test the property idadePagamentoAntecipado
        expect(instance).to.have.property('idadePagamentoAntecipado');
        // expect(instance.idadePagamentoAntecipado).to.be(expectedValueLiteral);
      });

      it('should have the property prazoCerto (base name: "prazoCerto")', function() {
        // TODO: update the code to test the property prazoCerto
        expect(instance).to.have.property('prazoCerto');
        // expect(instance.prazoCerto).to.be(expectedValueLiteral);
      });

      it('should have the property prazoRenda (base name: "prazoRenda")', function() {
        // TODO: update the code to test the property prazoRenda
        expect(instance).to.have.property('prazoRenda');
        // expect(instance.prazoRenda).to.be(expectedValueLiteral);
      });

      it('should have the property ticketMinimo (base name: "ticketMinimo")', function() {
        // TODO: update the code to test the property ticketMinimo
        expect(instance).to.have.property('ticketMinimo');
        // expect(instance.ticketMinimo).to.be(expectedValueLiteral);
      });

    });
  });

}));
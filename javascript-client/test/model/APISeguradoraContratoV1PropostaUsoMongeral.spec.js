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
    describe('APISeguradoraContratoV1PropostaUsoMongeral', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1PropostaUsoMongeral();
      });

      it('should create an instance of APISeguradoraContratoV1PropostaUsoMongeral', function() {
        // TODO: update the code to test APISeguradoraContratoV1PropostaUsoMongeral
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1PropostaUsoMongeral);
      });

      it('should have the property convAdesao (base name: "ConvAdesao")', function() {
        // TODO: update the code to test the property convAdesao
        expect(instance).to.have.property('convAdesao');
        // expect(instance.convAdesao).to.be(expectedValueLiteral);
      });

      it('should have the property acaoMarketing (base name: "AcaoMarketing")', function() {
        // TODO: update the code to test the property acaoMarketing
        expect(instance).to.have.property('acaoMarketing');
        // expect(instance.acaoMarketing).to.be(expectedValueLiteral);
      });

      it('should have the property alternativa (base name: "Alternativa")', function() {
        // TODO: update the code to test the property alternativa
        expect(instance).to.have.property('alternativa');
        // expect(instance.alternativa).to.be(expectedValueLiteral);
      });

      it('should have the property sucursal (base name: "Sucursal")', function() {
        // TODO: update the code to test the property sucursal
        expect(instance).to.have.property('sucursal');
        // expect(instance.sucursal).to.be(expectedValueLiteral);
      });

      it('should have the property dirRegional (base name: "DirRegional")', function() {
        // TODO: update the code to test the property dirRegional
        expect(instance).to.have.property('dirRegional');
        // expect(instance.dirRegional).to.be(expectedValueLiteral);
      });

      it('should have the property gerSucursal (base name: "GerSucursal")', function() {
        // TODO: update the code to test the property gerSucursal
        expect(instance).to.have.property('gerSucursal');
        // expect(instance.gerSucursal).to.be(expectedValueLiteral);
      });

      it('should have the property gerComercial (base name: "GerComercial")', function() {
        // TODO: update the code to test the property gerComercial
        expect(instance).to.have.property('gerComercial');
        // expect(instance.gerComercial).to.be(expectedValueLiteral);
      });

      it('should have the property agente (base name: "Agente")', function() {
        // TODO: update the code to test the property agente
        expect(instance).to.have.property('agente');
        // expect(instance.agente).to.be(expectedValueLiteral);
      });

      it('should have the property corretor1 (base name: "Corretor1")', function() {
        // TODO: update the code to test the property corretor1
        expect(instance).to.have.property('corretor1');
        // expect(instance.corretor1).to.be(expectedValueLiteral);
      });

      it('should have the property corretor2 (base name: "Corretor2")', function() {
        // TODO: update the code to test the property corretor2
        expect(instance).to.have.property('corretor2');
        // expect(instance.corretor2).to.be(expectedValueLiteral);
      });

      it('should have the property agenteFidelizacao (base name: "AgenteFidelizacao")', function() {
        // TODO: update the code to test the property agenteFidelizacao
        expect(instance).to.have.property('agenteFidelizacao');
        // expect(instance.agenteFidelizacao).to.be(expectedValueLiteral);
      });

      it('should have the property modeloProposta (base name: "ModeloProposta")', function() {
        // TODO: update the code to test the property modeloProposta
        expect(instance).to.have.property('modeloProposta');
        // expect(instance.modeloProposta).to.be(expectedValueLiteral);
      });

      it('should have the property modeloPropostaGed (base name: "ModeloPropostaGed")', function() {
        // TODO: update the code to test the property modeloPropostaGed
        expect(instance).to.have.property('modeloPropostaGed');
        // expect(instance.modeloPropostaGed).to.be(expectedValueLiteral);
      });

      it('should have the property tipoComissao (base name: "TipoComissao")', function() {
        // TODO: update the code to test the property tipoComissao
        expect(instance).to.have.property('tipoComissao');
        // expect(instance.tipoComissao).to.be(expectedValueLiteral);
      });

    });
  });

}));

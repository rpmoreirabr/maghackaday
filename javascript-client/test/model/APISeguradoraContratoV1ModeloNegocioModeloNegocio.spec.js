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
    describe('APISeguradoraContratoV1ModeloNegocioModeloNegocio', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1ModeloNegocioModeloNegocio();
      });

      it('should create an instance of APISeguradoraContratoV1ModeloNegocioModeloNegocio', function() {
        // TODO: update the code to test APISeguradoraContratoV1ModeloNegocioModeloNegocio
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1ModeloNegocioModeloNegocio);
      });

      it('should have the property modeloRelacionamento (base name: "modeloRelacionamento")', function() {
        // TODO: update the code to test the property modeloRelacionamento
        expect(instance).to.have.property('modeloRelacionamento');
        // expect(instance.modeloRelacionamento).to.be(expectedValueLiteral);
      });

      it('should have the property nome (base name: "nome")', function() {
        // TODO: update the code to test the property nome
        expect(instance).to.have.property('nome');
        // expect(instance.nome).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property tipo (base name: "tipo")', function() {
        // TODO: update the code to test the property tipo
        expect(instance).to.have.property('tipo');
        // expect(instance.tipo).to.be(expectedValueLiteral);
      });

      it('should have the property pessoaIdParceiro (base name: "pessoaIdParceiro")', function() {
        // TODO: update the code to test the property pessoaIdParceiro
        expect(instance).to.have.property('pessoaIdParceiro');
        // expect(instance.pessoaIdParceiro).to.be(expectedValueLiteral);
      });

      it('should have the property observacao (base name: "observacao")', function() {
        // TODO: update the code to test the property observacao
        expect(instance).to.have.property('observacao');
        // expect(instance.observacao).to.be(expectedValueLiteral);
      });

      it('should have the property dataCriacao (base name: "dataCriacao")', function() {
        // TODO: update the code to test the property dataCriacao
        expect(instance).to.have.property('dataCriacao');
        // expect(instance.dataCriacao).to.be(expectedValueLiteral);
      });

      it('should have the property dataInativacao (base name: "dataInativacao")', function() {
        // TODO: update the code to test the property dataInativacao
        expect(instance).to.have.property('dataInativacao');
        // expect(instance.dataInativacao).to.be(expectedValueLiteral);
      });

      it('should have the property cnpjParceiro (base name: "cnpjParceiro")', function() {
        // TODO: update the code to test the property cnpjParceiro
        expect(instance).to.have.property('cnpjParceiro');
        // expect(instance.cnpjParceiro).to.be(expectedValueLiteral);
      });

      it('should have the property nomeEmpresaModeloNegocio (base name: "nomeEmpresaModeloNegocio")', function() {
        // TODO: update the code to test the property nomeEmpresaModeloNegocio
        expect(instance).to.have.property('nomeEmpresaModeloNegocio');
        // expect(instance.nomeEmpresaModeloNegocio).to.be(expectedValueLiteral);
      });

      it('should have the property teleUnderWriting (base name: "teleUnderWriting")', function() {
        // TODO: update the code to test the property teleUnderWriting
        expect(instance).to.have.property('teleUnderWriting');
        // expect(instance.teleUnderWriting).to.be(expectedValueLiteral);
      });

      it('should have the property produtosNegociados (base name: "produtosNegociados")', function() {
        // TODO: update the code to test the property produtosNegociados
        expect(instance).to.have.property('produtosNegociados');
        // expect(instance.produtosNegociados).to.be(expectedValueLiteral);
      });

      it('should have the property regrasDependencia (base name: "regrasDependencia")', function() {
        // TODO: update the code to test the property regrasDependencia
        expect(instance).to.have.property('regrasDependencia');
        // expect(instance.regrasDependencia).to.be(expectedValueLiteral);
      });

      it('should have the property regrasAceitacao (base name: "regrasAceitacao")', function() {
        // TODO: update the code to test the property regrasAceitacao
        expect(instance).to.have.property('regrasAceitacao');
        // expect(instance.regrasAceitacao).to.be(expectedValueLiteral);
      });

      it('should have the property politicasRelacionamento (base name: "politicasRelacionamento")', function() {
        // TODO: update the code to test the property politicasRelacionamento
        expect(instance).to.have.property('politicasRelacionamento');
        // expect(instance.politicasRelacionamento).to.be(expectedValueLiteral);
      });

      it('should have the property modelosProposta (base name: "modelosProposta")', function() {
        // TODO: update the code to test the property modelosProposta
        expect(instance).to.have.property('modelosProposta');
        // expect(instance.modelosProposta).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    describe('APISeguradoraContratoV1ProdutoProduto', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1ProdutoProduto();
      });

      it('should create an instance of APISeguradoraContratoV1ProdutoProduto', function() {
        // TODO: update the code to test APISeguradoraContratoV1ProdutoProduto
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoProduto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property descricao (base name: "descricao")', function() {
        // TODO: update the code to test the property descricao
        expect(instance).to.have.property('descricao');
        // expect(instance.descricao).to.be(expectedValueLiteral);
      });

      it('should have the property descricaoComercial (base name: "descricaoComercial")', function() {
        // TODO: update the code to test the property descricaoComercial
        expect(instance).to.have.property('descricaoComercial');
        // expect(instance.descricaoComercial).to.be(expectedValueLiteral);
      });

      it('should have the property dataUltimaAlteracao (base name: "dataUltimaAlteracao")', function() {
        // TODO: update the code to test the property dataUltimaAlteracao
        expect(instance).to.have.property('dataUltimaAlteracao');
        // expect(instance.dataUltimaAlteracao).to.be(expectedValueLiteral);
      });

      it('should have the property coberturas (base name: "coberturas")', function() {
        // TODO: update the code to test the property coberturas
        expect(instance).to.have.property('coberturas');
        // expect(instance.coberturas).to.be(expectedValueLiteral);
      });

      it('should have the property dependenciasProdutos (base name: "dependenciasProdutos")', function() {
        // TODO: update the code to test the property dependenciasProdutos
        expect(instance).to.have.property('dependenciasProdutos');
        // expect(instance.dependenciasProdutos).to.be(expectedValueLiteral);
      });

      it('should have the property fundos (base name: "fundos")', function() {
        // TODO: update the code to test the property fundos
        expect(instance).to.have.property('fundos');
        // expect(instance.fundos).to.be(expectedValueLiteral);
      });

      it('should have the property periodicidades (base name: "periodicidades")', function() {
        // TODO: update the code to test the property periodicidades
        expect(instance).to.have.property('periodicidades');
        // expect(instance.periodicidades).to.be(expectedValueLiteral);
      });

      it('should have the property tipoProponente (base name: "tipoProponente")', function() {
        // TODO: update the code to test the property tipoProponente
        expect(instance).to.have.property('tipoProponente');
        // expect(instance.tipoProponente).to.be(expectedValueLiteral);
      });

      it('should have the property idadeMinima (base name: "idadeMinima")', function() {
        // TODO: update the code to test the property idadeMinima
        expect(instance).to.have.property('idadeMinima');
        // expect(instance.idadeMinima).to.be(expectedValueLiteral);
      });

      it('should have the property idadeMaxima (base name: "idadeMaxima")', function() {
        // TODO: update the code to test the property idadeMaxima
        expect(instance).to.have.property('idadeMaxima');
        // expect(instance.idadeMaxima).to.be(expectedValueLiteral);
      });

      it('should have the property idadeExclusao (base name: "idadeExclusao")', function() {
        // TODO: update the code to test the property idadeExclusao
        expect(instance).to.have.property('idadeExclusao');
        // expect(instance.idadeExclusao).to.be(expectedValueLiteral);
      });

      it('should have the property indicarBeneficiario (base name: "indicarBeneficiario")', function() {
        // TODO: update the code to test the property indicarBeneficiario
        expect(instance).to.have.property('indicarBeneficiario');
        // expect(instance.indicarBeneficiario).to.be(expectedValueLiteral);
      });

      it('should have the property exigeDPS (base name: "exigeDPS")', function() {
        // TODO: update the code to test the property exigeDPS
        expect(instance).to.have.property('exigeDPS');
        // expect(instance.exigeDPS).to.be(expectedValueLiteral);
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

      it('should have the property profissoesAceitas (base name: "profissoesAceitas")', function() {
        // TODO: update the code to test the property profissoesAceitas
        expect(instance).to.have.property('profissoesAceitas');
        // expect(instance.profissoesAceitas).to.be(expectedValueLiteral);
      });

      it('should have the property profissoesRecusadas (base name: "profissoesRecusadas")', function() {
        // TODO: update the code to test the property profissoesRecusadas
        expect(instance).to.have.property('profissoesRecusadas');
        // expect(instance.profissoesRecusadas).to.be(expectedValueLiteral);
      });

      it('should have the property ufsRecusadas (base name: "ufsRecusadas")', function() {
        // TODO: update the code to test the property ufsRecusadas
        expect(instance).to.have.property('ufsRecusadas');
        // expect(instance.ufsRecusadas).to.be(expectedValueLiteral);
      });

      it('should have the property prazoDecrescimo (base name: "prazoDecrescimo")', function() {
        // TODO: update the code to test the property prazoDecrescimo
        expect(instance).to.have.property('prazoDecrescimo');
        // expect(instance.prazoDecrescimo).to.be(expectedValueLiteral);
      });

      it('should have the property idadeAntecipacao (base name: "idadeAntecipacao")', function() {
        // TODO: update the code to test the property idadeAntecipacao
        expect(instance).to.have.property('idadeAntecipacao');
        // expect(instance.idadeAntecipacao).to.be(expectedValueLiteral);
      });

      it('should have the property tempoAntecipacao (base name: "tempoAntecipacao")', function() {
        // TODO: update the code to test the property tempoAntecipacao
        expect(instance).to.have.property('tempoAntecipacao');
        // expect(instance.tempoAntecipacao).to.be(expectedValueLiteral);
      });

      it('should have the property formasPagamento (base name: "formasPagamento")', function() {
        // TODO: update the code to test the property formasPagamento
        expect(instance).to.have.property('formasPagamento');
        // expect(instance.formasPagamento).to.be(expectedValueLiteral);
      });

    });
  });

}));

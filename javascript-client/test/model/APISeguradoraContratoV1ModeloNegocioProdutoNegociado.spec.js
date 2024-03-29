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
    describe('APISeguradoraContratoV1ModeloNegocioProdutoNegociado', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1ModeloNegocioProdutoNegociado();
      });

      it('should create an instance of APISeguradoraContratoV1ModeloNegocioProdutoNegociado', function() {
        // TODO: update the code to test APISeguradoraContratoV1ModeloNegocioProdutoNegociado
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1ModeloNegocioProdutoNegociado);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property modeloRelacionamentoProdutoId (base name: "modeloRelacionamentoProdutoId")', function() {
        // TODO: update the code to test the property modeloRelacionamentoProdutoId
        expect(instance).to.have.property('modeloRelacionamentoProdutoId');
        // expect(instance.modeloRelacionamentoProdutoId).to.be(expectedValueLiteral);
      });

      it('should have the property sigla (base name: "sigla")', function() {
        // TODO: update the code to test the property sigla
        expect(instance).to.have.property('sigla');
        // expect(instance.sigla).to.be(expectedValueLiteral);
      });

      it('should have the property nome (base name: "nome")', function() {
        // TODO: update the code to test the property nome
        expect(instance).to.have.property('nome');
        // expect(instance.nome).to.be(expectedValueLiteral);
      });

      it('should have the property nomeFantasia (base name: "nomeFantasia")', function() {
        // TODO: update the code to test the property nomeFantasia
        expect(instance).to.have.property('nomeFantasia');
        // expect(instance.nomeFantasia).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property contratacaoObrigatoria (base name: "contratacaoObrigatoria")', function() {
        // TODO: update the code to test the property contratacaoObrigatoria
        expect(instance).to.have.property('contratacaoObrigatoria');
        // expect(instance.contratacaoObrigatoria).to.be(expectedValueLiteral);
      });

      it('should have the property regraCobrancaId (base name: "regraCobrancaId")', function() {
        // TODO: update the code to test the property regraCobrancaId
        expect(instance).to.have.property('regraCobrancaId');
        // expect(instance.regraCobrancaId).to.be(expectedValueLiteral);
      });

      it('should have the property tipoProponente (base name: "tipoProponente")', function() {
        // TODO: update the code to test the property tipoProponente
        expect(instance).to.have.property('tipoProponente');
        // expect(instance.tipoProponente).to.be(expectedValueLiteral);
      });

      it('should have the property permiteAjuste (base name: "permiteAjuste")', function() {
        // TODO: update the code to test the property permiteAjuste
        expect(instance).to.have.property('permiteAjuste');
        // expect(instance.permiteAjuste).to.be(expectedValueLiteral);
      });

      it('should have the property permiteReativacao (base name: "permiteReativacao")', function() {
        // TODO: update the code to test the property permiteReativacao
        expect(instance).to.have.property('permiteReativacao');
        // expect(instance.permiteReativacao).to.be(expectedValueLiteral);
      });

      it('should have the property permiteReducao (base name: "permiteReducao")', function() {
        // TODO: update the code to test the property permiteReducao
        expect(instance).to.have.property('permiteReducao');
        // expect(instance.permiteReducao).to.be(expectedValueLiteral);
      });

      it('should have the property carteira (base name: "carteira")', function() {
        // TODO: update the code to test the property carteira
        expect(instance).to.have.property('carteira');
        // expect(instance.carteira).to.be(expectedValueLiteral);
      });

      it('should have the property taxaDeRentabilidade (base name: "taxaDeRentabilidade")', function() {
        // TODO: update the code to test the property taxaDeRentabilidade
        expect(instance).to.have.property('taxaDeRentabilidade');
        // expect(instance.taxaDeRentabilidade).to.be(expectedValueLiteral);
      });

      it('should have the property tiposDeRelacionamento (base name: "tiposDeRelacionamento")', function() {
        // TODO: update the code to test the property tiposDeRelacionamento
        expect(instance).to.have.property('tiposDeRelacionamento');
        // expect(instance.tiposDeRelacionamento).to.be(expectedValueLiteral);
      });

      it('should have the property dependencias (base name: "dependencias")', function() {
        // TODO: update the code to test the property dependencias
        expect(instance).to.have.property('dependencias');
        // expect(instance.dependencias).to.be(expectedValueLiteral);
      });

      it('should have the property regraCobranca (base name: "regraCobranca")', function() {
        // TODO: update the code to test the property regraCobranca
        expect(instance).to.have.property('regraCobranca');
        // expect(instance.regraCobranca).to.be(expectedValueLiteral);
      });

      it('should have the property coberturas (base name: "coberturas")', function() {
        // TODO: update the code to test the property coberturas
        expect(instance).to.have.property('coberturas');
        // expect(instance.coberturas).to.be(expectedValueLiteral);
      });

      it('should have the property codigoPlanoSysPrev (base name: "codigoPlanoSysPrev")', function() {
        // TODO: update the code to test the property codigoPlanoSysPrev
        expect(instance).to.have.property('codigoPlanoSysPrev');
        // expect(instance.codigoPlanoSysPrev).to.be(expectedValueLiteral);
      });

      it('should have the property ehComercializado (base name: "ehComercializado")', function() {
        // TODO: update the code to test the property ehComercializado
        expect(instance).to.have.property('ehComercializado');
        // expect(instance.ehComercializado).to.be(expectedValueLiteral);
      });

      it('should have the property restricaoSexo (base name: "restricaoSexo")', function() {
        // TODO: update the code to test the property restricaoSexo
        expect(instance).to.have.property('restricaoSexo');
        // expect(instance.restricaoSexo).to.be(expectedValueLiteral);
      });

      it('should have the property referenciaCoberturaId (base name: "referenciaCoberturaId")', function() {
        // TODO: update the code to test the property referenciaCoberturaId
        expect(instance).to.have.property('referenciaCoberturaId');
        // expect(instance.referenciaCoberturaId).to.be(expectedValueLiteral);
      });

      it('should have the property produtoPrincipal (base name: "produtoPrincipal")', function() {
        // TODO: update the code to test the property produtoPrincipal
        expect(instance).to.have.property('produtoPrincipal');
        // expect(instance.produtoPrincipal).to.be(expectedValueLiteral);
      });

      it('should have the property profissoesAceitas (base name: "profissoesAceitas")', function() {
        // TODO: update the code to test the property profissoesAceitas
        expect(instance).to.have.property('profissoesAceitas');
        // expect(instance.profissoesAceitas).to.be(expectedValueLiteral);
      });

      it('should have the property permiteContratacaoParcial (base name: "permiteContratacaoParcial")', function() {
        // TODO: update the code to test the property permiteContratacaoParcial
        expect(instance).to.have.property('permiteContratacaoParcial');
        // expect(instance.permiteContratacaoParcial).to.be(expectedValueLiteral);
      });

      it('should have the property estahRestrito (base name: "estahRestrito")', function() {
        // TODO: update the code to test the property estahRestrito
        expect(instance).to.have.property('estahRestrito');
        // expect(instance.estahRestrito).to.be(expectedValueLiteral);
      });

      it('should have the property descricaoComercial (base name: "descricaoComercial")', function() {
        // TODO: update the code to test the property descricaoComercial
        expect(instance).to.have.property('descricaoComercial');
        // expect(instance.descricaoComercial).to.be(expectedValueLiteral);
      });

      it('should have the property valorMinimoCapitalContratacao (base name: "valorMinimoCapitalContratacao")', function() {
        // TODO: update the code to test the property valorMinimoCapitalContratacao
        expect(instance).to.have.property('valorMinimoCapitalContratacao');
        // expect(instance.valorMinimoCapitalContratacao).to.be(expectedValueLiteral);
      });

      it('should have the property valorLimiteCapitalReferencia (base name: "valorLimiteCapitalReferencia")', function() {
        // TODO: update the code to test the property valorLimiteCapitalReferencia
        expect(instance).to.have.property('valorLimiteCapitalReferencia');
        // expect(instance.valorLimiteCapitalReferencia).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    describe('APISeguradoraImplementacaoESimProdutoCloneNegociacaoProdutoNegociaoDTO', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraImplementacaoESimProdutoCloneNegociacaoProdutoNegociaoDTO();
      });

      it('should create an instance of APISeguradoraImplementacaoESimProdutoCloneNegociacaoProdutoNegociaoDTO', function() {
        // TODO: update the code to test APISeguradoraImplementacaoESimProdutoCloneNegociacaoProdutoNegociaoDTO
        expect(instance).to.be.a(Apiseguradora.APISeguradoraImplementacaoESimProdutoCloneNegociacaoProdutoNegociaoDTO);
      });

      it('should have the property coberturasNegociadas (base name: "CoberturasNegociadas")', function() {
        // TODO: update the code to test the property coberturasNegociadas
        expect(instance).to.have.property('coberturasNegociadas');
        // expect(instance.coberturasNegociadas).to.be(expectedValueLiteral);
      });

      it('should have the property formasCobranca (base name: "FormasCobranca")', function() {
        // TODO: update the code to test the property formasCobranca
        expect(instance).to.have.property('formasCobranca');
        // expect(instance.formasCobranca).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "Id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property nomeFantasia (base name: "NomeFantasia")', function() {
        // TODO: update the code to test the property nomeFantasia
        expect(instance).to.have.property('nomeFantasia');
        // expect(instance.nomeFantasia).to.be(expectedValueLiteral);
      });

      it('should have the property produtoId (base name: "ProdutoId")', function() {
        // TODO: update the code to test the property produtoId
        expect(instance).to.have.property('produtoId');
        // expect(instance.produtoId).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    describe('APISeguradoraContratoV1ProdutoDependenciaCoberturaProduto', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1ProdutoDependenciaCoberturaProduto();
      });

      it('should create an instance of APISeguradoraContratoV1ProdutoDependenciaCoberturaProduto', function() {
        // TODO: update the code to test APISeguradoraContratoV1ProdutoDependenciaCoberturaProduto
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoDependenciaCoberturaProduto);
      });

      it('should have the property itemProdutoId (base name: "itemProdutoId")', function() {
        // TODO: update the code to test the property itemProdutoId
        expect(instance).to.have.property('itemProdutoId');
        // expect(instance.itemProdutoId).to.be(expectedValueLiteral);
      });

      it('should have the property tipo (base name: "tipo")', function() {
        // TODO: update the code to test the property tipo
        expect(instance).to.have.property('tipo');
        // expect(instance.tipo).to.be(expectedValueLiteral);
      });

      it('should have the property percentualMinimoReferencia (base name: "percentualMinimoReferencia")', function() {
        // TODO: update the code to test the property percentualMinimoReferencia
        expect(instance).to.have.property('percentualMinimoReferencia');
        // expect(instance.percentualMinimoReferencia).to.be(expectedValueLiteral);
      });

      it('should have the property percentualMaximoReferencia (base name: "percentualMaximoReferencia")', function() {
        // TODO: update the code to test the property percentualMaximoReferencia
        expect(instance).to.have.property('percentualMaximoReferencia');
        // expect(instance.percentualMaximoReferencia).to.be(expectedValueLiteral);
      });

    });
  });

}));
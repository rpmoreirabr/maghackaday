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
    describe('APISeguradoraContratoV1PendenciaPendencia', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1PendenciaPendencia();
      });

      it('should create an instance of APISeguradoraContratoV1PendenciaPendencia', function() {
        // TODO: update the code to test APISeguradoraContratoV1PendenciaPendencia
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1PendenciaPendencia);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property idProposta (base name: "idProposta")', function() {
        // TODO: update the code to test the property idProposta
        expect(instance).to.have.property('idProposta');
        // expect(instance.idProposta).to.be(expectedValueLiteral);
      });

      it('should have the property dataPendencia (base name: "dataPendencia")', function() {
        // TODO: update the code to test the property dataPendencia
        expect(instance).to.have.property('dataPendencia');
        // expect(instance.dataPendencia).to.be(expectedValueLiteral);
      });

      it('should have the property responsavel (base name: "responsavel")', function() {
        // TODO: update the code to test the property responsavel
        expect(instance).to.have.property('responsavel');
        // expect(instance.responsavel).to.be(expectedValueLiteral);
      });

      it('should have the property grupo (base name: "grupo")', function() {
        // TODO: update the code to test the property grupo
        expect(instance).to.have.property('grupo');
        // expect(instance.grupo).to.be(expectedValueLiteral);
      });

      it('should have the property descricao (base name: "descricao")', function() {
        // TODO: update the code to test the property descricao
        expect(instance).to.have.property('descricao');
        // expect(instance.descricao).to.be(expectedValueLiteral);
      });

      it('should have the property resposta (base name: "resposta")', function() {
        // TODO: update the code to test the property resposta
        expect(instance).to.have.property('resposta');
        // expect(instance.resposta).to.be(expectedValueLiteral);
      });

      it('should have the property autor (base name: "autor")', function() {
        // TODO: update the code to test the property autor
        expect(instance).to.have.property('autor');
        // expect(instance.autor).to.be(expectedValueLiteral);
      });

      it('should have the property documento (base name: "documento")', function() {
        // TODO: update the code to test the property documento
        expect(instance).to.have.property('documento');
        // expect(instance.documento).to.be(expectedValueLiteral);
      });

    });
  });

}));
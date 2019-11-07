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
    describe('APISeguradoraContratoV1ModeloNegocioApoliceAngariadaIndividualmente', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1ModeloNegocioApoliceAngariadaIndividualmente();
      });

      it('should create an instance of APISeguradoraContratoV1ModeloNegocioApoliceAngariadaIndividualmente', function() {
        // TODO: update the code to test APISeguradoraContratoV1ModeloNegocioApoliceAngariadaIndividualmente
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1ModeloNegocioApoliceAngariadaIndividualmente);
      });

      it('should have the property numero (base name: "numero")', function() {
        // TODO: update the code to test the property numero
        expect(instance).to.have.property('numero');
        // expect(instance.numero).to.be(expectedValueLiteral);
      });

      it('should have the property estipulantePessoaId (base name: "estipulantePessoaId")', function() {
        // TODO: update the code to test the property estipulantePessoaId
        expect(instance).to.have.property('estipulantePessoaId');
        // expect(instance.estipulantePessoaId).to.be(expectedValueLiteral);
      });

      it('should have the property dataInicio (base name: "dataInicio")', function() {
        // TODO: update the code to test the property dataInicio
        expect(instance).to.have.property('dataInicio');
        // expect(instance.dataInicio).to.be(expectedValueLiteral);
      });

      it('should have the property dataFim (base name: "dataFim")', function() {
        // TODO: update the code to test the property dataFim
        expect(instance).to.have.property('dataFim');
        // expect(instance.dataFim).to.be(expectedValueLiteral);
      });

    });
  });

}));

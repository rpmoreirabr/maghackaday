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
    describe('APISeguradoraContratoV1SimulacaoSimulacaoHistoricoDoenca', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1SimulacaoSimulacaoHistoricoDoenca();
      });

      it('should create an instance of APISeguradoraContratoV1SimulacaoSimulacaoHistoricoDoenca', function() {
        // TODO: update the code to test APISeguradoraContratoV1SimulacaoSimulacaoHistoricoDoenca
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1SimulacaoSimulacaoHistoricoDoenca);
      });

      it('should have the property codigoCID10 (base name: "codigoCID10")', function() {
        // TODO: update the code to test the property codigoCID10
        expect(instance).to.have.property('codigoCID10');
        // expect(instance.codigoCID10).to.be(expectedValueLiteral);
      });

      it('should have the property descricao (base name: "descricao")', function() {
        // TODO: update the code to test the property descricao
        expect(instance).to.have.property('descricao');
        // expect(instance.descricao).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    describe('APISeguradoraContratoV1ModeloNegocioDecrescimoContribuicao', function() {
      beforeEach(function() {
        instance = new Apiseguradora.APISeguradoraContratoV1ModeloNegocioDecrescimoContribuicao();
      });

      it('should create an instance of APISeguradoraContratoV1ModeloNegocioDecrescimoContribuicao', function() {
        // TODO: update the code to test APISeguradoraContratoV1ModeloNegocioDecrescimoContribuicao
        expect(instance).to.be.a(Apiseguradora.APISeguradoraContratoV1ModeloNegocioDecrescimoContribuicao);
      });

      it('should have the property ano (base name: "ano")', function() {
        // TODO: update the code to test the property ano
        expect(instance).to.have.property('ano');
        // expect(instance.ano).to.be(expectedValueLiteral);
      });

      it('should have the property prazo (base name: "prazo")', function() {
        // TODO: update the code to test the property prazo
        expect(instance).to.have.property('prazo');
        // expect(instance.prazo).to.be(expectedValueLiteral);
      });

      it('should have the property percentual (base name: "percentual")', function() {
        // TODO: update the code to test the property percentual
        expect(instance).to.have.property('percentual');
        // expect(instance.percentual).to.be(expectedValueLiteral);
      });

    });
  });

}));

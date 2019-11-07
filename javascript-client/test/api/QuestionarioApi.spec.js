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

  beforeEach(function() {
    instance = new Apiseguradora.QuestionarioApi();
  });

  describe('(package)', function() {
    describe('QuestionarioApi', function() {
      describe('apiversionquestionariocodigoModeloPropostacodigoModeloPropostaGET', function() {
        it('should call apiversionquestionariocodigoModeloPropostacodigoModeloPropostaGET successfully', function(done) {
          // TODO: uncomment, update parameter values for apiversionquestionariocodigoModeloPropostacodigoModeloPropostaGET call and complete the assertions
          /*
          var codigoModeloProposta = "codigoModeloProposta_example";
          var version = "version_example";
          var authorization = "authorization_example";

          instance.apiversionquestionariocodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, version, authorization, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1QuestionarioQuestionario);
            {
              let dataCtr = data.valor;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioQuestionario);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.descricao).to.be.a('string');
                expect(data.descricao).to.be("");
                expect(data.dataUltimaAlteracao).to.be.a(Date);
                expect(data.dataUltimaAlteracao).to.be(new Date());
                expect(data.tipo).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioTipoQuestionario);
                      expect(data.tipo.sigla).to.be.a('string');
                  expect(data.tipo.sigla).to.be("");
                  expect(data.tipo.id).to.be.a('number');
                  expect(data.tipo.id).to.be(0);
                  expect(data.tipo.descricao).to.be.a('string');
                  expect(data.tipo.descricao).to.be("");
                expect(data.sexo).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioSexo);
                      expect(data.sexo.id).to.be.a('number');
                  expect(data.sexo.id).to.be(0);
                  expect(data.sexo.descricao).to.be.a('string');
                  expect(data.sexo.descricao).to.be("");
                expect(data.relacaoSegurado).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoTipoRelacaoSegurado);
                      expect(data.relacaoSegurado.id).to.be.a('number');
                  expect(data.relacaoSegurado.id).to.be(0);
                  expect(data.relacaoSegurado.descricao).to.be.a('string');
                  expect(data.relacaoSegurado.descricao).to.be("");
                {
                  let dataCtr = data.condicoes;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioCondicao);
                    expect(data.chave).to.be.a('string');
                    expect(data.chave).to.be("");
                    expect(data.operacao).to.be.a('string');
                    expect(data.operacao).to.be("");
                    expect(data.valor).to.be.a('string');
                    expect(data.valor).to.be("");
                  }
                }
                {
                  let dataCtr = data.perguntas;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioItemQuestionario);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be(0);
                    expect(data.descricao).to.be.a('string');
                    expect(data.descricao).to.be("");
                    expect(data.tipo).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioTipoItemQuestionario);
                          expect(data.tipo.id).to.be.a('number');
                      expect(data.tipo.id).to.be(0);
                      expect(data.tipo.descricao).to.be.a('string');
                      expect(data.tipo.descricao).to.be("");
                    expect(data.ordem).to.be.a('number');
                    expect(data.ordem).to.be(0);
                  }
                }
              }
            }
            {
              let dataCtr = data.mensagens;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.houveErrosDuranteProcessamento).to.be.a('boolean');
            expect(data.houveErrosDuranteProcessamento).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('apiversionquestionarioidcodigoModeloPropostacodigoModeloPropostaGET', function() {
        it('should call apiversionquestionarioidcodigoModeloPropostacodigoModeloPropostaGET successfully', function(done) {
          // TODO: uncomment, update parameter values for apiversionquestionarioidcodigoModeloPropostacodigoModeloPropostaGET call and complete the assertions
          /*
          var codigoModeloProposta = "codigoModeloProposta_example";
          var id = 56;
          var version = "version_example";
          var authorization = "authorization_example";
          var opts = {};
          opts.vigencia = new Date("2013-10-20T19:20:30+01:00");

          instance.apiversionquestionarioidcodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, id, version, authorization, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1QuestionarioQuestionario);
            expect(data.valor).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioQuestionario);
                  expect(data.valor.id).to.be.a('number');
              expect(data.valor.id).to.be(0);
              expect(data.valor.descricao).to.be.a('string');
              expect(data.valor.descricao).to.be("");
              expect(data.valor.dataUltimaAlteracao).to.be.a(Date);
              expect(data.valor.dataUltimaAlteracao).to.be(new Date());
              expect(data.valor.tipo).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioTipoQuestionario);
                    expect(data.valor.tipo.sigla).to.be.a('string');
                expect(data.valor.tipo.sigla).to.be("");
                expect(data.valor.tipo.id).to.be.a('number');
                expect(data.valor.tipo.id).to.be(0);
                expect(data.valor.tipo.descricao).to.be.a('string');
                expect(data.valor.tipo.descricao).to.be("");
              expect(data.valor.sexo).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioSexo);
                    expect(data.valor.sexo.id).to.be.a('number');
                expect(data.valor.sexo.id).to.be(0);
                expect(data.valor.sexo.descricao).to.be.a('string');
                expect(data.valor.sexo.descricao).to.be("");
              expect(data.valor.relacaoSegurado).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoTipoRelacaoSegurado);
                    expect(data.valor.relacaoSegurado.id).to.be.a('number');
                expect(data.valor.relacaoSegurado.id).to.be(0);
                expect(data.valor.relacaoSegurado.descricao).to.be.a('string');
                expect(data.valor.relacaoSegurado.descricao).to.be("");
              {
                let dataCtr = data.valor.condicoes;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioCondicao);
                  expect(data.chave).to.be.a('string');
                  expect(data.chave).to.be("");
                  expect(data.operacao).to.be.a('string');
                  expect(data.operacao).to.be("");
                  expect(data.valor).to.be.a('string');
                  expect(data.valor).to.be("");
                }
              }
              {
                let dataCtr = data.valor.perguntas;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioItemQuestionario);
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be(0);
                  expect(data.descricao).to.be.a('string');
                  expect(data.descricao).to.be("");
                  expect(data.tipo).to.be.a(Apiseguradora.APISeguradoraContratoV1QuestionarioTipoItemQuestionario);
                        expect(data.tipo.id).to.be.a('number');
                    expect(data.tipo.id).to.be(0);
                    expect(data.tipo.descricao).to.be.a('string');
                    expect(data.tipo.descricao).to.be("");
                  expect(data.ordem).to.be.a('number');
                  expect(data.ordem).to.be(0);
                }
              }
            {
              let dataCtr = data.mensagens;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.houveErrosDuranteProcessamento).to.be.a('boolean');
            expect(data.houveErrosDuranteProcessamento).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
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
    instance = new Apiseguradora.ProdutoApi();
  });

  describe('(package)', function() {
    describe('ProdutoApi', function() {
      describe('apiversionprodutocodigoModeloPropostacodigoModeloPropostaGET', function() {
        it('should call apiversionprodutocodigoModeloPropostacodigoModeloPropostaGET successfully', function(done) {
          // TODO: uncomment, update parameter values for apiversionprodutocodigoModeloPropostacodigoModeloPropostaGET call and complete the assertions
          /*
          var codigoModeloProposta = "codigoModeloProposta_example";
          var version = "version_example";
          var authorization = "authorization_example";

          instance.apiversionprodutocodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, version, authorization, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestSystemLinqIQueryableAPISeguradoraContratoV1ProdutoProduto);
            {
              let dataCtr = data.valor;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoProduto);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.descricao).to.be.a('string');
                expect(data.descricao).to.be("");
                expect(data.descricaoComercial).to.be.a('string');
                expect(data.descricaoComercial).to.be("");
                expect(data.dataUltimaAlteracao).to.be.a(Date);
                expect(data.dataUltimaAlteracao).to.be(new Date());
                {
                  let dataCtr = data.coberturas;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoCobertura);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be(0);
                    expect(data.itemProdutoId).to.be.a('number');
                    expect(data.itemProdutoId).to.be(0);
                    expect(data.descricao).to.be.a('string');
                    expect(data.descricao).to.be("");
                    expect(data.descricaoComercial).to.be.a('string');
                    expect(data.descricaoComercial).to.be("");
                    expect(data.obrigatoria).to.be.a('boolean');
                    expect(data.obrigatoria).to.be(false);
                    {
                      let dataCtr = data.prazoCerto;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                        expect(data).to.be(0);
                      }
                    }
                    {
                      let dataCtr = data.prazoRenda;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoPrazoRenda);
                        expect(data.id).to.be.a('number');
                        expect(data.id).to.be(0);
                        expect(data.descricao).to.be.a('string');
                        expect(data.descricao).to.be("");
                        expect(data.valorMinimo).to.be.a('number');
                        expect(data.valorMinimo).to.be(0);
                        expect(data.valorMaximo).to.be.a('number');
                        expect(data.valorMaximo).to.be(0);
                      }
                    }
                    expect(data.tipo).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoTipoCobertura);
                          expect(data.tipo.id).to.be.a('number');
                      expect(data.tipo.id).to.be(0);
                      expect(data.tipo.descricao).to.be.a('string');
                      expect(data.tipo.descricao).to.be("");
                    expect(data.tipoRelacaoSegurado).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoTipoRelacaoSegurado);
                          expect(data.tipoRelacaoSegurado.id).to.be.a('number');
                      expect(data.tipoRelacaoSegurado.id).to.be(0);
                      expect(data.tipoRelacaoSegurado.descricao).to.be.a('string');
                      expect(data.tipoRelacaoSegurado.descricao).to.be("");
                    expect(data.idadeEntrada).to.be.a('number');
                    expect(data.idadeEntrada).to.be(0);
                    expect(data.idadeSaida).to.be.a('number');
                    expect(data.idadeSaida).to.be(0);
                    expect(data.idadeExclusao).to.be.a('number');
                    expect(data.idadeExclusao).to.be(0);
                    expect(data.indicarBeneficiario).to.be.a('boolean');
                    expect(data.indicarBeneficiario).to.be(false);
                    expect(data.valorFixo).to.be.a('number');
                    expect(data.valorFixo).to.be(0.0);
                    expect(data.capitalFixo).to.be.a('number');
                    expect(data.capitalFixo).to.be(0.0);
                    {
                      let dataCtr = data.causas;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoCausa);
                        expect(data.id).to.be.a('number');
                        expect(data.id).to.be(0);
                        expect(data.descricao).to.be.a('string');
                        expect(data.descricao).to.be("");
                      }
                    }
                    expect(data.coberturaPrincipal).to.be.a('boolean');
                    expect(data.coberturaPrincipal).to.be(false);
                    expect(data.exigeDPS).to.be.a('boolean');
                    expect(data.exigeDPS).to.be(false);
                    {
                      let dataCtr = data.fundos;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoFundo);
                        expect(data.id).to.be.a('number');
                        expect(data.id).to.be(0);
                        expect(data.cnpj).to.be.a('string');
                        expect(data.cnpj).to.be("");
                        expect(data.sigla).to.be.a('string');
                        expect(data.sigla).to.be("");
                        expect(data.nomeFantasia).to.be.a('string');
                        expect(data.nomeFantasia).to.be("");
                        expect(data.percentualRendaVariavel).to.be.a('number');
                        expect(data.percentualRendaVariavel).to.be(0.0);
                      }
                    }
                    {
                      let dataCtr = data.profissoesRecusadas;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                        expect(data).to.be(0);
                      }
                    }
                    {
                      let dataCtr = data.ufsRecusadas;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("");
                      }
                    }
                    {
                      let dataCtr = data.prazoDecrescimo;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                        expect(data).to.be(0);
                      }
                    }
                    {
                      let dataCtr = data.idadeAntecipacao;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                        expect(data).to.be(0);
                      }
                    }
                    {
                      let dataCtr = data.tempoAntecipacao;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('number');
                        expect(data).to.be(0);
                      }
                    }
                    {
                      let dataCtr = data.dependenciasCoberturaProdutos;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoDependenciaCoberturaProduto);
                        expect(data.itemProdutoId).to.be.a('number');
                        expect(data.itemProdutoId).to.be(0);
                        expect(data.tipo).to.be.a('number');
                        expect(data.tipo).to.be(0);
                        expect(data.percentualMinimoReferencia).to.be.a('number');
                        expect(data.percentualMinimoReferencia).to.be(0.0);
                        expect(data.percentualMaximoReferencia).to.be.a('number');
                        expect(data.percentualMaximoReferencia).to.be(0.0);
                      }
                    }
                    expect(data.valorMinimoCapitalContratacao).to.be.a('number');
                    expect(data.valorMinimoCapitalContratacao).to.be(0.0);
                    expect(data.valorLimiteCapitalReferencia).to.be.a('number');
                    expect(data.valorLimiteCapitalReferencia).to.be(0.0);
                  }
                }
                {
                  let dataCtr = data.dependenciasProdutos;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoDependenciaProduto);
                    expect(data.produtoId).to.be.a('number');
                    expect(data.produtoId).to.be(0);
                    expect(data.tipo).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoTipoDependenciaProduto);
                          expect(data.tipo.id).to.be.a('number');
                      expect(data.tipo.id).to.be(0);
                      expect(data.tipo.descricao).to.be.a('string');
                      expect(data.tipo.descricao).to.be("");
                      expect(data.tipo.sigla).to.be.a('string');
                      expect(data.tipo.sigla).to.be("");
                  }
                }
                {
                  let dataCtr = data.fundos;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoFundo);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be(0);
                    expect(data.cnpj).to.be.a('string');
                    expect(data.cnpj).to.be("");
                    expect(data.sigla).to.be.a('string');
                    expect(data.sigla).to.be("");
                    expect(data.nomeFantasia).to.be.a('string');
                    expect(data.nomeFantasia).to.be("");
                    expect(data.percentualRendaVariavel).to.be.a('number');
                    expect(data.percentualRendaVariavel).to.be(0.0);
                  }
                }
                {
                  let dataCtr = data.periodicidades;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoPeriodicidade);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be(0);
                    expect(data.descricao).to.be.a('string');
                    expect(data.descricao).to.be("");
                  }
                }
                expect(data.tipoProponente).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoTipoProponente);
                      expect(data.tipoProponente.id).to.be.a('number');
                  expect(data.tipoProponente.id).to.be(0);
                  expect(data.tipoProponente.descricao).to.be.a('string');
                  expect(data.tipoProponente.descricao).to.be("");
                expect(data.idadeMinima).to.be.a('number');
                expect(data.idadeMinima).to.be(0);
                expect(data.idadeMaxima).to.be.a('number');
                expect(data.idadeMaxima).to.be(0);
                expect(data.idadeExclusao).to.be.a('number');
                expect(data.idadeExclusao).to.be(0);
                expect(data.indicarBeneficiario).to.be.a('boolean');
                expect(data.indicarBeneficiario).to.be(false);
                expect(data.exigeDPS).to.be.a('boolean');
                expect(data.exigeDPS).to.be(false);
                {
                  let dataCtr = data.prazoCerto;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                {
                  let dataCtr = data.prazoRenda;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoPrazoRenda);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be(0);
                    expect(data.descricao).to.be.a('string');
                    expect(data.descricao).to.be("");
                    expect(data.valorMinimo).to.be.a('number');
                    expect(data.valorMinimo).to.be(0);
                    expect(data.valorMaximo).to.be.a('number');
                    expect(data.valorMaximo).to.be(0);
                  }
                }
                {
                  let dataCtr = data.profissoesAceitas;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                {
                  let dataCtr = data.profissoesRecusadas;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                {
                  let dataCtr = data.ufsRecusadas;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                {
                  let dataCtr = data.prazoDecrescimo;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                {
                  let dataCtr = data.idadeAntecipacao;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                {
                  let dataCtr = data.tempoAntecipacao;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                {
                  let dataCtr = data.formasPagamento;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ModeloPropostaFormaPagamento);
                    expect(data.id).to.be.a('number');
                    expect(data.id).to.be(0);
                    expect(data.descricao).to.be.a('string');
                    expect(data.descricao).to.be("");
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
      describe('apiversionprodutoidcodigoModeloPropostacodigoModeloPropostaGET', function() {
        it('should call apiversionprodutoidcodigoModeloPropostacodigoModeloPropostaGET successfully', function(done) {
          // TODO: uncomment, update parameter values for apiversionprodutoidcodigoModeloPropostacodigoModeloPropostaGET call and complete the assertions
          /*
          var codigoModeloProposta = "codigoModeloProposta_example";
          var id = 56;
          var version = "version_example";
          var authorization = "authorization_example";

          instance.apiversionprodutoidcodigoModeloPropostacodigoModeloPropostaGET(codigoModeloProposta, id, version, authorization, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Apiseguradora.APISeguradoraHelperResultadoDaOperacaoRestAPISeguradoraContratoV1ProdutoProduto);
            expect(data.valor).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoProduto);
                  expect(data.valor.id).to.be.a('number');
              expect(data.valor.id).to.be(0);
              expect(data.valor.descricao).to.be.a('string');
              expect(data.valor.descricao).to.be("");
              expect(data.valor.descricaoComercial).to.be.a('string');
              expect(data.valor.descricaoComercial).to.be("");
              expect(data.valor.dataUltimaAlteracao).to.be.a(Date);
              expect(data.valor.dataUltimaAlteracao).to.be(new Date());
              {
                let dataCtr = data.valor.coberturas;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoCobertura);
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be(0);
                  expect(data.itemProdutoId).to.be.a('number');
                  expect(data.itemProdutoId).to.be(0);
                  expect(data.descricao).to.be.a('string');
                  expect(data.descricao).to.be("");
                  expect(data.descricaoComercial).to.be.a('string');
                  expect(data.descricaoComercial).to.be("");
                  expect(data.obrigatoria).to.be.a('boolean');
                  expect(data.obrigatoria).to.be(false);
                  {
                    let dataCtr = data.prazoCerto;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(0);
                    }
                  }
                  {
                    let dataCtr = data.prazoRenda;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoPrazoRenda);
                      expect(data.id).to.be.a('number');
                      expect(data.id).to.be(0);
                      expect(data.descricao).to.be.a('string');
                      expect(data.descricao).to.be("");
                      expect(data.valorMinimo).to.be.a('number');
                      expect(data.valorMinimo).to.be(0);
                      expect(data.valorMaximo).to.be.a('number');
                      expect(data.valorMaximo).to.be(0);
                    }
                  }
                  expect(data.tipo).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoTipoCobertura);
                        expect(data.tipo.id).to.be.a('number');
                    expect(data.tipo.id).to.be(0);
                    expect(data.tipo.descricao).to.be.a('string');
                    expect(data.tipo.descricao).to.be("");
                  expect(data.tipoRelacaoSegurado).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoTipoRelacaoSegurado);
                        expect(data.tipoRelacaoSegurado.id).to.be.a('number');
                    expect(data.tipoRelacaoSegurado.id).to.be(0);
                    expect(data.tipoRelacaoSegurado.descricao).to.be.a('string');
                    expect(data.tipoRelacaoSegurado.descricao).to.be("");
                  expect(data.idadeEntrada).to.be.a('number');
                  expect(data.idadeEntrada).to.be(0);
                  expect(data.idadeSaida).to.be.a('number');
                  expect(data.idadeSaida).to.be(0);
                  expect(data.idadeExclusao).to.be.a('number');
                  expect(data.idadeExclusao).to.be(0);
                  expect(data.indicarBeneficiario).to.be.a('boolean');
                  expect(data.indicarBeneficiario).to.be(false);
                  expect(data.valorFixo).to.be.a('number');
                  expect(data.valorFixo).to.be(0.0);
                  expect(data.capitalFixo).to.be.a('number');
                  expect(data.capitalFixo).to.be(0.0);
                  {
                    let dataCtr = data.causas;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoCausa);
                      expect(data.id).to.be.a('number');
                      expect(data.id).to.be(0);
                      expect(data.descricao).to.be.a('string');
                      expect(data.descricao).to.be("");
                    }
                  }
                  expect(data.coberturaPrincipal).to.be.a('boolean');
                  expect(data.coberturaPrincipal).to.be(false);
                  expect(data.exigeDPS).to.be.a('boolean');
                  expect(data.exigeDPS).to.be(false);
                  {
                    let dataCtr = data.fundos;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoFundo);
                      expect(data.id).to.be.a('number');
                      expect(data.id).to.be(0);
                      expect(data.cnpj).to.be.a('string');
                      expect(data.cnpj).to.be("");
                      expect(data.sigla).to.be.a('string');
                      expect(data.sigla).to.be("");
                      expect(data.nomeFantasia).to.be.a('string');
                      expect(data.nomeFantasia).to.be("");
                      expect(data.percentualRendaVariavel).to.be.a('number');
                      expect(data.percentualRendaVariavel).to.be(0.0);
                    }
                  }
                  {
                    let dataCtr = data.profissoesRecusadas;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(0);
                    }
                  }
                  {
                    let dataCtr = data.ufsRecusadas;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  {
                    let dataCtr = data.prazoDecrescimo;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(0);
                    }
                  }
                  {
                    let dataCtr = data.idadeAntecipacao;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(0);
                    }
                  }
                  {
                    let dataCtr = data.tempoAntecipacao;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('number');
                      expect(data).to.be(0);
                    }
                  }
                  {
                    let dataCtr = data.dependenciasCoberturaProdutos;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoDependenciaCoberturaProduto);
                      expect(data.itemProdutoId).to.be.a('number');
                      expect(data.itemProdutoId).to.be(0);
                      expect(data.tipo).to.be.a('number');
                      expect(data.tipo).to.be(0);
                      expect(data.percentualMinimoReferencia).to.be.a('number');
                      expect(data.percentualMinimoReferencia).to.be(0.0);
                      expect(data.percentualMaximoReferencia).to.be.a('number');
                      expect(data.percentualMaximoReferencia).to.be(0.0);
                    }
                  }
                  expect(data.valorMinimoCapitalContratacao).to.be.a('number');
                  expect(data.valorMinimoCapitalContratacao).to.be(0.0);
                  expect(data.valorLimiteCapitalReferencia).to.be.a('number');
                  expect(data.valorLimiteCapitalReferencia).to.be(0.0);
                }
              }
              {
                let dataCtr = data.valor.dependenciasProdutos;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoDependenciaProduto);
                  expect(data.produtoId).to.be.a('number');
                  expect(data.produtoId).to.be(0);
                  expect(data.tipo).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoTipoDependenciaProduto);
                        expect(data.tipo.id).to.be.a('number');
                    expect(data.tipo.id).to.be(0);
                    expect(data.tipo.descricao).to.be.a('string');
                    expect(data.tipo.descricao).to.be("");
                    expect(data.tipo.sigla).to.be.a('string');
                    expect(data.tipo.sigla).to.be("");
                }
              }
              {
                let dataCtr = data.valor.fundos;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoFundo);
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be(0);
                  expect(data.cnpj).to.be.a('string');
                  expect(data.cnpj).to.be("");
                  expect(data.sigla).to.be.a('string');
                  expect(data.sigla).to.be("");
                  expect(data.nomeFantasia).to.be.a('string');
                  expect(data.nomeFantasia).to.be("");
                  expect(data.percentualRendaVariavel).to.be.a('number');
                  expect(data.percentualRendaVariavel).to.be(0.0);
                }
              }
              {
                let dataCtr = data.valor.periodicidades;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoPeriodicidade);
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be(0);
                  expect(data.descricao).to.be.a('string');
                  expect(data.descricao).to.be("");
                }
              }
              expect(data.valor.tipoProponente).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoTipoProponente);
                    expect(data.valor.tipoProponente.id).to.be.a('number');
                expect(data.valor.tipoProponente.id).to.be(0);
                expect(data.valor.tipoProponente.descricao).to.be.a('string');
                expect(data.valor.tipoProponente.descricao).to.be("");
              expect(data.valor.idadeMinima).to.be.a('number');
              expect(data.valor.idadeMinima).to.be(0);
              expect(data.valor.idadeMaxima).to.be.a('number');
              expect(data.valor.idadeMaxima).to.be(0);
              expect(data.valor.idadeExclusao).to.be.a('number');
              expect(data.valor.idadeExclusao).to.be(0);
              expect(data.valor.indicarBeneficiario).to.be.a('boolean');
              expect(data.valor.indicarBeneficiario).to.be(false);
              expect(data.valor.exigeDPS).to.be.a('boolean');
              expect(data.valor.exigeDPS).to.be(false);
              {
                let dataCtr = data.valor.prazoCerto;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              {
                let dataCtr = data.valor.prazoRenda;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ProdutoPrazoRenda);
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be(0);
                  expect(data.descricao).to.be.a('string');
                  expect(data.descricao).to.be("");
                  expect(data.valorMinimo).to.be.a('number');
                  expect(data.valorMinimo).to.be(0);
                  expect(data.valorMaximo).to.be.a('number');
                  expect(data.valorMaximo).to.be(0);
                }
              }
              {
                let dataCtr = data.valor.profissoesAceitas;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              {
                let dataCtr = data.valor.profissoesRecusadas;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              {
                let dataCtr = data.valor.ufsRecusadas;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              {
                let dataCtr = data.valor.prazoDecrescimo;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              {
                let dataCtr = data.valor.idadeAntecipacao;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              {
                let dataCtr = data.valor.tempoAntecipacao;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('number');
                  expect(data).to.be(0);
                }
              }
              {
                let dataCtr = data.valor.formasPagamento;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(Apiseguradora.APISeguradoraContratoV1ModeloPropostaFormaPagamento);
                  expect(data.id).to.be.a('number');
                  expect(data.id).to.be(0);
                  expect(data.descricao).to.be.a('string');
                  expect(data.descricao).to.be("");
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

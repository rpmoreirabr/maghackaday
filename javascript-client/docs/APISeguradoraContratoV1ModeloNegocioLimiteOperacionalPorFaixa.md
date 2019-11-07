# Apiseguradora.APISeguradoraContratoV1ModeloNegocioLimiteOperacionalPorFaixa

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sigla** | **String** |  | [optional] 
**descricao** | **String** |  | [optional] 
**nomeTipoLimiteOperacional** | **String** |  | [optional] 
**tipoGrupoCobertura** | **String** |  | [optional] 
**coberturasIds** | **[Number]** |  | [optional] 
**tipoLimiteOperacional** | **String** |  | [optional] 
**limitesPorIdade** | [**[APISeguradoraContratoV1ModeloNegocioLimitePorFaixaEtaria]**](APISeguradoraContratoV1ModeloNegocioLimitePorFaixaEtaria.md) |  | [optional] 
**limitesPorRenda** | [**[APISeguradoraContratoV1ModeloNegocioLimitePorFaixaRenda]**](APISeguradoraContratoV1ModeloNegocioLimitePorFaixaRenda.md) |  | [optional] 
**limitesPorProfissoes** | [**[APISeguradoraContratoV1ModeloNegocioLimitePorFaixaProfissao]**](APISeguradoraContratoV1ModeloNegocioLimitePorFaixaProfissao.md) |  | [optional] 
**limiteOperacionalCausaId** | **Number** |  | [optional] 


<a name="TipoLimiteOperacionalEnum"></a>
## Enum: TipoLimiteOperacionalEnum


* `indefinido` (value: `"Indefinido"`)

* `idade` (value: `"Idade"`)

* `profissao` (value: `"Profissao"`)

* `renda` (value: `"Renda"`)





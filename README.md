
## Documentação da API

## Instalação

Instale com npm

```bash
  npm install
```
## Configuração do banco

Configure com npm

```bash
  npm run config
```

## Configuração de variáveis
Crie um arquivo .env na raiz do projeto e coloque a seguinte linha PORT=8080

## Execução 

Execute com npm

```bash
  npm start
```


#### Cadastra um veiculo

```http
  POST /carros
```
Body
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. Detalhe o nome do carro ex: "BMW X1" |
| `fabricante` | `string` | **Obrigatório**. Fabricante, ex: "BMW" |
| `placa` | `string` | **Obrigatório**. Placa, ex: "ABC-1234" |

#### Retorna todos os itens

```http
  GET /carros
```


#### Retorna um item

```http
  GET /carros/buscaid/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Busca pelo nome

```http
  GET /carros/buscanome/${nome}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer apagar |

#### Apagar um carro pelo id

```http
  DELETE /carros/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### Atualizar um carro pelo id
```http
  PATCH /carros/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

Body
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. Detalhe o nome do carro ex: "BMW X1" |
| `fabricante` | `string` | **Obrigatório**. Fabricante, ex: "BMW" |
| `placa` | `string` | **Obrigatório**. Placa, ex: "ABC-1234" |



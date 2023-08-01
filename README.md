# Maeztra Ecommerce

[Link do projeto](https://ecommerce-maeztra-fxzy7swy3-andersonvlidio.vercel.app/)

## Ferramentas utilizadas
- Next Js [Next.js Documentation](https://nextjs.org/docs)
- Sass [Sass](https://sass-lang.com/documentation/)
- Mantine Ui [Mantine UI](https://mantine.dev/)
- vercel [vercel](https://vercel.com/docs)
## Iniciar projeto
 - Bixar o projeto, ou clonar.
 - baixar as dependências: npm i, yarn.
 - entrar na pasta do projeto.
 - yarn dev.
 - Abrir [http://localhost:3000](http://localhost:3000) para ver os resultados.

## Descrição

- Um site construido com NextJs que consome uma api de criadas internamente e estilizado com Sass. Obejetivo desse projeto foi concluir um desafio da empresa Maeztra.

## backend
- Criei apis com o NextJs para retornar os dados do carousel.
As apis se encontra dentro de `pages/apis`.

- Para fazer as request no front eu usei o [Axios](https://axios-http.com/docs/intro)

#### Retorna todos os itens

```http
  GET /api/products
```

#### Retorna todas as marcas

```http
  GET /api/brands
```
#### Retorna todas as vantagens

```http
  GET /api/vantages
```
#### Retorna todas as categorias

```http
  GET /api/categories
```

##### exemplo com axios:

```const fetchData = async () => {
      try {
        const response = await axios.get<Shelfs[]>("/api/products");
        const data = response.data;
        setItems(data);
      } catch (error) {
        console.error("Ocorreu um erro na requisição:", error);
      }
    };
```


## Deploy

O deploy foi feito através do site do Vercel pois o github Pages não tem compatibilidade com páginas renderizadas no servidor. 
Como criei apis locais, e usei o component <Image /> para renderizar as imagens, tive que fazer o deploy pelo vercel.

## Author

| ![Anderson Vieira Lidio](https://avatars0.githubusercontent.com/u/59943925?s=400&u=56d24f89e2742b77de0ae9e9de2d0005f566395c&v=4) |
| :------------------------------------------------------------------------------------------------------------------------------: |
|                                     [Anderson Veira Lidio](https://github.comAndersonvlidio)                                     |

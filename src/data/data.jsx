const DataItens = [
  {
    idProduto: "1",
    nome: "Bolo de Brigadeiro",
    idCategoria: "1",
    preco: "124.50",
    descricao: "Bolo de Brigadeiro com recheio cremoso e cobertura de granulado.",
    foto: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
    shortLink: "https://encurtador.com.br/foJM7",
  },
  {
    idProduto: "2",
    nome: "Cupcake de Nuteela",
    idCategoria: "1",
    preco: "2.99",
    descricao: "Cupcake de Nuteela com cobertura de chocolate e avelãs",
    foto: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    shortLink: "https://encurtador.com.br/dqxHP",
  },
  {
    idProduto: "3",
    nome: "Floresta negra com cerejas",
    idCategoria: "1",
    preco: "89.90",
    descricao: "Floresta negra com cerejas frescas e calda de chocolate.",
    foto: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
    shortLink: "https://encurtador.com.br/cqFO2",
  },
  {
    idProduto: "4",
    nome: "Bolo Confete Rainbow",
    idCategoria: "1",
    preco: "154.20",
    descricao:
      "Bolo Confete Rainbow com massa de baunilha e cobertura de confete colorido.",
    foto: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=636&q=80",
    shortLink: "https://encurtador.com.br/TVW12",
  },
  {
    idProduto: "5",
    nome: "Doma de Gelo",
    idCategoria: "1",
    preco: "89.90",
    descricao:
      "Doma de Gelo com massa de baunilha, frutas roxas e cobertura de chantilly",
    foto: "https://images.unsplash.com/photo-1595272568891-123402d0fb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    shortLink: "https://encurtador.com.br/eCDZ4",
  },
  {
    idProduto: "6",
    nome: "Torta de Maçã",
    idCategoria: "1",
    preco: "7.99",
    descricao: "Torta de maçã com massa folheada e cobertura de açúcar.",
    foto: "https://images.unsplash.com/photo-1545396635-011a9a6a5650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    shortLink: "https://encurtador.com.br/fIUX5",
  },
  {
    idProduto: "7",
    nome: "Pão de Queijo",
    idCategoria: "1",
    preco: "29.90",
    descricao: "Pão de Queijo com recheio de queijo e presunto mineiro.",
    foto: "https://images.unsplash.com/photo-1559141680-d0bd7bc5af84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    shortLink: "https://encurtador.com.br/twyIW",
  },
  {
    idProduto: "8",
    nome: "Macaroon Fantastic",
    idCategoria: "1",
    preco: "3.90",
    descricao: "Macaroon Colorido com recheio de chocolate e morango.",
    foto: "https://images.unsplash.com/photo-1571506165871-ee72a35bc9d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    shortLink: "https://encurtador.com.br/hjklq"
  },
  {
    idProduto: "9",
    nome: "Mini Bolo de Iorgute",
    idCategoria: "1",
    preco: "19.99",
    descricao: "Mini Bolo de Iorgute com calda de frutas vermelhas, castanhas e morangos.",
    foto: "https://images.unsplash.com/photo-1653542772885-ad3ce0f86f52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
    shortLink: "https://encurtador.com.br/dvFW7"
  },
  {
    idProduto: "10",
    nome: "Gellato Caffé",
    idCategoria: "1",
    preco: "17.99",
    descricao: "Gellato Caffé com calda de chocolate e castanhas.",
    foto: "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    shortLink: "https://shre.ink/QXZi"
  },
  {
    idProduto: "11",
    nome: "Classic Ice Cream Roll",
    idCategoria: "1",
    preco: "15.00",
    descricao: "Classic Ice Cream Roll com calda de chocolate e castanhas.",
    foto: "https://images.unsplash.com/photo-1641665273583-45bfc9f3d292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    shortLink: "https://shre.ink/QXMT"
  },
  {
    idProduto: "12",
    nome: "Café Mocha",
    idCategoria: "2",
    preco: "5.99",
    descricao:
      "Uma deliciosa mistura de café, leite e chocolate com um toque de chantilly.",
    foto: "https://images.unsplash.com/photo-1680327284937-1e1cb66c3ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    shortLink: "https://shre.ink/QXMP"
  },
  {
    idProduto: "13",
    nome: "Café Latte",
    idCategoria: "2",
    preco: "4.99",
    descricao: "Café com leite cremoso e saboroso, perfeito para começar o dia.",
    foto: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
    shortLink: "https://shre.ink/QXZM"
  },
  {
    idProduto: "14",
    nome: "Café Americano",
    idCategoria: "2",
    preco: "28.99",
    descricao: "Café forte e intenso, ideal para quem gosta de café puro, possui um sabor marcante.",
    foto: "https://images.unsplash.com/photo-1528699633788-424224dc89b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=733&q=80",
    shortLink: "https://shre.ink/QXZ8"
  },
  {
    idProduto: "15",
    nome: "Cappuccino",
    idCategoria: "2",
    preco: "5.50",
    descricao:
      "Café com leite e espuma de leite cremosa, polvilhado com chocolate em pó.",
    foto: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
    shortLink: "https://shre.ink/QXZS"
  },
  {
    idProduto: "16",
    nome: "Café Espresso",
    idCategoria: "2",
    preco: "3.50",
    descricao: "Café concentrado e forte, com sabor intenso e marcante.",
    foto: "https://images.unsplash.com/photo-1522992319-0365e5f11656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
    shortLink: "https://shre.ink/QXZ5"
  },
  {
    idProduto: "17",
    nome: "Café Cown Latte",
    idCategoria: "2",
    preco: "4.50",
    descricao: "Café suave e cremoso, com leite fresco e saboroso.",
    foto: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
    shortLink: "https://shre.ink/QXZ7"
  },
  {
    idProduto: "18",
    nome: "Mocha Branco",
    idCategoria: "2",
    preco: "6.50",
    descricao: "Café com leite, chocolate branco.",
    foto: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
    shortLink: "https://shre.ink/QXZh"
  },
];
export default DataItens;

/**
 * encurtar urls:
 * https://url.gratis/pt-br/
 * https://www.encurtador.com.br/ {acho que é pago :/ funcionou para alguns}
*/
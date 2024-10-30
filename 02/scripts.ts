type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}

type CarrinhoComEndereco = Omit<Carrinho, `tipoTransacao`> & {
    endereco: Endereco,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
}

//Teste do tipo
const venda: CarrinhoComEndereco = {
    item: {
        nome: `Monitor`,
        descricao: `Monitor gamer`,
        valor: 150000
    },
    qtd: 1,
    desconto: 0,
    frete: 1000,
    tipoTransacao: 'debito',
    cartao: {
        numero: 1234123412341234,
        validade: `10/28`,
        nome: `Etore Grande`,
        cvv: 123
    },
    endereco: {
        cep: `1231234asdfa`,
        rua: `fdfjlsdf`,
        bairro: `fdfsdfsd`,
        cidade: `dfasfsdf`,
        estado: `fdsfsdf`
    }
}
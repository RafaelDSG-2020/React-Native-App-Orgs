import Logo from "../../assets/logo.png";


import tomate from "../../assets/frutas/Tomate.png";
import brocolis from "../../assets/frutas/Brócolis.png";
import batata from "../../assets/frutas/Batata.png";
import pepino from "../../assets/frutas/Pepino.png";
import abobora from "../../assets/frutas/Abóbora.png";


const cesta = {
    topo:{
        titulo:"Detalhes da Cesta",
    },
    detalhes:{
        nome:"Cesta de Verduras",
        Nome_Fazenda:"Jenny Jack Farm",
        Logo_fazenda:Logo,
        Descricao:"Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        Preco:"R$ 40,00",
        Botao:"Comprar",
    },
    itens:{
        titulo: "Itens Da Cesta",
        lista: 
        [
            {
                nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brocolis",
                imagem: brocolis,
            },
            {
                nome: "Batata",
                imagem: batata,
            },
            {
                nome: "Pepino",
                imagem: pepino,
            },
            {
                nome: "Abóbora",
                imagem: abobora,
            }

        ]
    }
}



export default cesta;
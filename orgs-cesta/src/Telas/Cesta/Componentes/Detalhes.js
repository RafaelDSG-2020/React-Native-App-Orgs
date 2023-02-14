import React from "react";
import { StyleSheet , Image, View , TouchableOpacity} from "react-native";
import Texto from "../../../Componete/Texto.js";




export default function Detalhes ({nome,Nome_Fazenda,Logo_fazenda,Descricao,Preco, Botao})
{
    return <>


        <Texto style={estilos.nome}>{nome}</Texto>

        <View style={estilos.fazenda}>
            <Texto style={estilos.nome_da_fazenda}>{Nome_Fazenda}</Texto>
            <Image source={Logo_fazenda} style={estilos.imgagem_fazenda}/>
        </View>

        <Texto style={estilos.descricao}>{Descricao}</Texto>
        
        <Texto style={estilos.preco}>{Preco}</Texto>

        <TouchableOpacity style={estilos.botao} onPress={()=>{console.log("AEEE")}}>
            <Texto style={estilos.Texto_Botao}>
                {Botao}
            </Texto>
        </TouchableOpacity>

    </>
}

const estilos = StyleSheet.create
({
    nome:{
        color:"#464646",
        fontSize: 26,
        lineHeight: 42,
        textAlign:"center",
        fontWeight:"bold",
        padding:"3%",
    },
    fazenda:{
        flexDirection:"row-reverse",
        paddingVertical:12,
    },
    imgagem_fazenda:{
        width: 48,
        height: 32,
    },
    nome_da_fazenda:{
        fontSize:18,
        lineHeight:26,
        marginLeft:12,
        fontWeight:"bold",
        
    },
    descricao:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",

    },
    preco:{
        color:"#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao:{
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 8,
    },
    Texto_Botao:{
        textAlign: "center",
        color: "#FFFFFF",
        fontWeight:"bold",
        lineHeight: 26,
    },
  
   
})
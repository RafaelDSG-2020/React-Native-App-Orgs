import React from "react";
import { StyleSheet , Image, View, FlatList  } from "react-native";
import Texto from "../../../Componete/Texto";

export default function Item({item: {nome, imagem} })
{
    return <View style={estilos.items}>
        <Image source={imagem} style={estilos.imagem}/>
         <Texto style={estilos.nome}>{nome}</Texto>
    </View>
    // return <>
    // <Texto style={estilos.titulo}>{titulo}</Texto>
    // <FlatList 
    // data={lista}
    // renderItem={renderitem}
    // keyExtractor={({nome}) => nome}
    // />

    {/* {lista.map(({nome , imagem}) =>
    {
        return <View key={nome} style={estilos.item}>
                <Image source={imagem} style={estilos.imagem}/>
                <Texto style={estilos.nome}>{nome}</Texto>
        </View>
    })} */}
    // </>
}

const estilos = StyleSheet.create
({
    
    items:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems:"center",
    },
    imagem:{
        width: 46,
        height: 46,
    },
    nome:{
        fontWeight: "bold",
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    },
})
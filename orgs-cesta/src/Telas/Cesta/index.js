import React from "react";
import { ScrollView,StyleSheet , Image, Dimensions, Text, View, FlatList } from "react-native";
import Detalhes from "./Componentes/Detalhes.js";
import Texto from "../../Componete/Texto.js";
import Topo from "./Componentes/Topo.js";
import Item from "./Componentes/Item.js";

export default function Cesta({topo , detalhes , itens})
{
    return <>
    <FlatList 
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent = {() => {
            return <>
            <Topo {...topo}></Topo>
            <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
            </View>
            </>
        }}
    />

    
    </>
}

const estilos = StyleSheet.create
({
    titulo:{
        color:"#464646",
        fontWeight:"bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight:32,
        textAlign:"center",

    },
    cesta:{
        paddingVertical: 8,
        paddingHorizontal:16,

    },
     
});
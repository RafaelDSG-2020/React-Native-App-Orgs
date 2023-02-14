import React from "react";
import { StyleSheet,Text } from "react-native";

export default function Texto({ children, style })
{
    let estilo = estilos.texto;
    if(style?.fontWeight === "bold")
    {
        estilo = estilos.texto_negrito;
    }
    
    return <Text style={[style,estilo]}> {children} </Text>
}

const estilos = StyleSheet.create
({
    texto: {
        fontFamily:"MonteSerratRegular",
        fontWeight: "normal",
    },
    texto_negrito:{
        fontFamily: "MontSerratBold",
        fontWeight: "normal",
    }    
})
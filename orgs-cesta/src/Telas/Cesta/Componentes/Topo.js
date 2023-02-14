import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import topo from "../../../../assets/topo.png";
import Texto from "../../../Componete/Texto";

const width = Dimensions.get("screen").width;

export default function Topo({titulo})
{
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>{titulo}</Texto>

    </>
}

const estilos = StyleSheet.create
({
    topo:{
        width: "100%",
        height: ((578 / 768) * width),
    },
    titulo:{
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 20,
        lineHeight: 26,
        color: "#F0F8FF",
        fontWeight: "bold",
        padding: 18,
    },
})


 
import * as WebBrowser from 'expo-web-browser';
import React, {PureComponent} from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';



export default function MovieCard() {
    let {container, cardText, card, cardImage}= styles
  return (
   <View style={container}>
        <TouchableOpacity style={card}>
            <Image style={cardImage}></Image>
            <Text style={cardText}></Text>
        </TouchableOpacity>
   </View>
  );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },

    cardText:{
    },

    card:{
        backgroundColor:"#fff",
        width:'40%',
        height:'30%',
        borderRadius:20
    },

    cardImage:{

    }


})
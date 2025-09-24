import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import HomeScreen from '../App'; // Importando a tel
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons"; // importando ícones

export default function PageHome(){
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
        <View style={styles.container2} >

         <Text styele={styles.title}>Bem vindo a tela principal </Text>
       
       </View>
    </View>
    );



}

const styles = StyleSheet.create({
container:{
    padding: 20,

},
container2:{
alignItems: "center",
},

title: {
    color:"red"
},


})

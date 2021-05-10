import React, {useEffect, useState} from 'react';
import {View,KeyboardAvoidingView,Platform, Image, Text, StyleSheet,TouchableOpacity, TextInput, Button} from 'react-native';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Header({navigation}) {
    


    useEffect(() => {
        function headerf(){
            console.warn( navigation)
        }

        headerf();

    }, []);

    return(
    <Text style={styles.titulotela}>Lista de Produtos</Text>
    )

}


const styles = StyleSheet.create({
    titulotela:{
        marginTop:50,
        marginBottom: 10,
        marginHorizontal: 10,
        fontSize:20
    }




});
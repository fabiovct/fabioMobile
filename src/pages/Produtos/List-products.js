import React, {useState, useEffect} from 'react';
import {View,KeyboardAvoidingView,Platform, Image, Text, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';


export default function ListProducts({navigation}) {
    const [token, setToken] = useState('');
    // console.warn(AsyncStorage.getItem('@storage_Key'));

    function teste(){
        navigation.navigate('Login');
    }



    useEffect(() => {

        setToken('TESTE')


    }, []);
    

    return (
        // <Text>{token}</Text>
        <TouchableOpacity style={styles.buttom}>
        <Text onPress={teste} style={styles.buttomText}>Teste</Text>
    </TouchableOpacity>
        // <FlatList></FlatList>
    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label:{
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30

    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },

    buttom: {
        height: 42,
        backgroundColor:'#f05a5b',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 2,
    },

    buttomText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
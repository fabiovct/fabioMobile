import React, {useState} from 'react';
import {View,KeyboardAvoidingView,Platform, Image, Text, StyleSheet,TouchableOpacity, TextInput} from 'react-native';
// import api from '../services/api';
import logo from '../../assets/logo.png';

export default function Login() {
    async function handleSubmit() {
        const [email, setEmail] = useState('');
        const [techs, setTechs] = useState('');

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo}/>
            <KeyboardAvoidingView style={styles.form}>
                <Text style={styles.label}>Seu Email *</Text>
                <TextInput
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                />
                <Text style={styles.label}>Tecnologias *</Text>
                <TextInput
                style={styles.input}
                placeholder="Tecnologias de interesse"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                />
                <TouchableOpacity style={styles.buttom}>
                    <Text style={styles.buttomText}>Encontrar spots</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
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
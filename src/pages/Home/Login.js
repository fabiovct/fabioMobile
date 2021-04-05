import React, {useState} from 'react';
import {View,KeyboardAvoidingView,Platform, Image, Text, StyleSheet,TouchableOpacity, TextInput, Button} from 'react-native';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Login({navigation}) {
    // const navigation = useNavigation();
    // async function handleSubmit() {
    //     const [email, setEmail] = useState('');
    //     const [techs, setTechs] = useState('');

    // }

    async function login(event){
        event.preventDefault();
        const data = {
            "email": email,
            "password": password
        }

    try {
       await api.post('api/login', data, {
        }).then((result) => {
            navigation.navigate('ListProducts')
            // if(result.data != 0){
            //     AsyncStorage.setItem('@storage_Key', result.data)
            //     navigation.navigate('ListProducts')
            // }else{
            //     // console.warn('sjhadkjahdkjsa')
            //     alert('senha ou login errados')
            // }
        });
    } catch (error) {
            console.warn(error)
    }
        
    }


    // async function loginUser(event) {
    //     console.log(event)
    //     event.preventDefault();
    //     const data = {
    //         'email': email,
    //         'password': password
    //     };

    //     const response =  await api.post('api/login', data, {

    //     });
    //     if(response.data['token']){
    //         localStorage.setItem('token',response.data['token'])
    //         window.location.href = '/home';
    //     }
        
        
    // }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                onChangeText={email => setEmail(email)}
                />
                <Text style={styles.label}>password </Text>
                <TextInput
                style={styles.input}
                placeholder="Tecnologias de interesse"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                />
                {/* <TouchableOpacity style={styles.buttom}> */}
                    <Button onPress={login} style={styles.buttomLogar} title='Logar'/>
                {/* </TouchableOpacity> */}
            </KeyboardAvoidingView>
        </KeyboardAvoidingView>
        )



}


const styles = StyleSheet.create({
    buttomLogar: {
        margin: 10
    },

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
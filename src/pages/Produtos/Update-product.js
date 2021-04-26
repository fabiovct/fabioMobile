import React, {useEffect, useState} from 'react';
import {View,KeyboardAvoidingView,Platform, Image, Text, StyleSheet,TouchableOpacity, TextInput, Button} from 'react-native';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function UpdateProduct({route,navigation}) {

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock_quantity, setStock_quantity] = useState('');
    // console.warn(navigation.state.params.id)
    // const [user,setuser] =  useState(route.params ? route.params:{})

     async function update(event){
        event.preventDefault();
        const data = {
            "id": navigation.state.params.id,
            "name": name,
            "brand": brand,
            "description": description,
            "price": price,
            "stock_quantity": stock_quantity
        }
        console.warn(data)

        try {
            await api.put('api/products/update-products', data, {
             }).then((result) => {
                 navigation.navigate('ListProducts')
             });
         } catch (error) {
             console.warn(error)
         }   
    }

    function voltar(){
        navigation.navigate('ListProducts');
    }

    useEffect(() => {

        async function selectProdutos(){
            const data = {
                id: navigation.state.params.id
            }
    
        try {
           await api.post('api/products/select-product', data, {
            }).then((result) => {
                console.warn(result.data.price)
                setName(result.data.name)
                setBrand(result.data.brand)
                setDescription(result.data.description)
                setPrice(result.data.price)
                setStock_quantity(result.data.stock_quantity)
                

            
            });
        } catch (error) {
                console.warn(error)
        }
            
        }

        selectProdutos();

    }, []);

    return (

        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <KeyboardAvoidingView style={styles.form}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                style={styles.input}
                placeholder="nome do produto"
                placeholderTextColor="#999"
                keyboardType="name"
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={name => setName(name)}
                />
                <Text style={styles.label}>Marca </Text>
                <TextInput
                style={styles.input}
                placeholder="marca do produto"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                value={brand}
                onChangeText={brand => setBrand(brand)}
                />
                <Text style={styles.label}>Descrição </Text>
                <TextInput
                style={styles.input}
                placeholder="descrição do produto"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                value={description}
                onChangeText={description => setDescription(description)}
                />
                <Text style={styles.label}>Preço </Text>
                <TextInput
                style={styles.input}
                placeholder="preço do produto"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                value={price.toString()}
                onChangeText={price => setPrice(price)}
                />
                <Text style={styles.label}>Qtd. estoque </Text>
                <TextInput
                style={styles.input}
                placeholder="quantidade"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                value={stock_quantity.toString()}
                keyboardType="numeric"
                onChangeText={stock_quantity => setStock_quantity(stock_quantity)}
                />
                    <Button onPress={update} style={styles.buttomLogar} title='Cadastrar'/>
            </KeyboardAvoidingView>
            <Button
            onPress={voltar}
            title="Voltar"
            color="green"
            />
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
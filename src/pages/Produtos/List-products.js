import React, {useState, useEffect} from 'react';
import {View,KeyboardAvoidingView,Platform, Image, Text, StyleSheet,TouchableOpacity, TextInput, Button, SafeAreaView, StatusBar} from 'react-native';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';


export default function ListProducts({navigation}) {
    const [token, setToken] = useState('');
    const [produtos, setProdutos] = useState();
    // console.warn(AsyncStorage.getItem('@storage_Key'));

    function teste(){
        navigation.navigate('Login');
    }

    function novo(){
        alert('ddd')
    }



    useEffect(() => {

        async function listProdutos(event){
    
        try {
           await api.get('api/products/list-products', {
            }).then((result) => {
                setProdutos(result.data)

            
            });
        } catch (error) {
                console.warn(error)
        }
            
        }

        listProdutos();


    }, []);

    const Item = ({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.name+' - '+item.brand+' - '+item.price}</Text>
        </View>
      );


    const renderItem = ({ item }) => (
        <Item item={item} />
      );
    

    return (
        <>
        <Text style={styles.titulotela}>Lista de Produtos</Text>
        
    {/* <SafeAreaView style={styles.container}> */}
      <FlatList
      style={styles.diva}
        data={produtos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    {/* </SafeAreaView> */}

    <Button
    onPress={novo}
    title="Add"
    color="green"
    />

    <Button
    onPress={teste}
    title="Logout"
    color="#841584"
    />
    </>
        // <TouchableOpacity style={styles.buttom}>
        //     <Text onPress={teste} style={styles.buttomText}>Teste</Text>
        // </TouchableOpacity>
        // <FlatList></FlatList>
    )


}


const styles = StyleSheet.create({
    titulotela:{
        marginTop:50,
        marginHorizontal: 10,
        fontSize:20

    },
    diva: {
        marginTop:50
    },
    container: {
      flex: 1,
      marginTop: 10,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 10,
    },
    title: {
      fontSize: 16,
    },
  });
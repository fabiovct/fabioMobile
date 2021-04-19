import React, {useState, useEffect} from 'react';
import {View,KeyboardAvoidingView,Platform, Image, Text, StyleSheet,TouchableOpacity, TextInput, SafeAreaView, StatusBar} from 'react-native';
import api from '../../services/api';
import logo from '../../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem, Avatar, Button, Icon } from 'react-native-elements'


export default function ListProducts({navigation}) {
    const [token, setToken] = useState('');
    const [produtos, setProdutos] = useState();
    // console.warn(AsyncStorage.getItem('@storage_Key'));

    function teste(){
        navigation.navigate('Login');
    }

    function novo(){
      navigation.navigate('NewProduct');
    }

    async function listProdutos(){
    
      try {
         await api.get('api/products/list-products', {
          }).then((result) => {
              setProdutos(result.data)

          
          });
      } catch (error) {
              console.warn(error)
      }
          
      }

    async function confirmUserDeletion(product){
      console.warn(product)

      // event.preventDefault();
      const data = {
          "id": product.id,
      }


      try {
        await api.post('api/products/delete-products', data, {
         }).then((result) => {
             listProdutos();

         
         });
     } catch (error) {
             console.warn(error)
     }
      
    }

    function getActions(product){
      return (
          <>
              {/* <Button onPress={() => props.navigation.navigate('UserForm', user)} 
              type="clear"
              icon={<Icon name="edit" size={25} color="orange"/>}
              /> */}
              <Button onPress={() => confirmUserDeletion(product)} 
              type="clear"
              icon={<Icon name="delete" size={25} color="red"/>}
              />
          </>
      )
  }


  function getItem({item}) {
    return (
      <ListItem rightElement={getActions(item)} key={item.id}  >
        {/* <Avatar source={{uri: item.name}} /> */}
        <ListItem.Title >{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.brand}</ListItem.Subtitle>
        <ListItem ><Text>{item.price}</Text></ListItem>
        <ListItem >{getActions(item)}</ListItem>
        {/* <ListItem.Content>{getActions(user)}</ListItem.Content> */}
    </ListItem>

    )
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

      //onPress={() =>  navigation.navigate('ListProducts',item)}
    

    return (
        <>
        <Text style={styles.titulotela}>Lista de Produtos</Text>
            <FlatList
                keyExtractor={item => item.id}
                data={produtos}
                renderItem={getItem}
            />





        

        
    {/* <SafeAreaView style={styles.container}> */}
      {/* <FlatList
      style={styles.diva}
        data={produtos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
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
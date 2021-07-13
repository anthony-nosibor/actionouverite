import React, {useContext, useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import auth from '@react-native-firebase/auth';
import { FirebaseContext } from '../../FirebaseContext' ;
import {useDispatch} from 'react-redux' ;

import Header from '../Header' ;
import Compte from '../Compte';
import Detail from '../Detail';
import Footer from '../Footer' ;



const initPlayers = (queryAllPlayer, dispatch) => {
      return queryAllPlayer().onSnapshot((snapshot)=>{
         
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              dispatch(addPlayer(
                                   { id: change.doc.id,
                                     ...change.doc.data()} 
              ))
            }
            if (change.type === "modified") {
                dispatch(updatePlayer(
                                    { id: change.doc.id,
                                      ...change.doc.data()} 
                ))
            }
            if (change.type === "removed") {             
            dispatch(deletePlayer(change.doc.id))             
            }
      });
    });
}

const Home = ({navigation}) => {
  const { queryAllPlayer } = useContext(FirebaseContext) ;
  const dispatch = useDispatch() ;
  
  
  useEffect(() => {
    //init contact (montage)
    const unSubPlayers = initPlayers(queryAllPlayer, dispatch)
    return () => {
     //unsub init contact (démontage)
     unSubPlayers();
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
    
        <Header />
        <Detail/>
     

    </SafeAreaView>
  )
}

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
        screenOptions={{
          headerShown: false
        }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Detail" component={Detail} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const index = () => {
    
  return (
  
            <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeStackScreen} /> 
              <Tab.Screen name="Compte" component={Compte} /> 
            </Tab.Navigator> 

        );
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
})

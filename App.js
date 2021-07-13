import React, {useContext, useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FirebaseContext } from './FirebaseContext' ;

import Inscription from './Components/Inscription';
import Connexion from './Components/Connexion';
import Participant from './Components/Participant';
import SaisieJoueur from './Components/SaisieJoueur';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = ({navigation}) => {
    const {auth} = useContext(FirebaseContext) ;
    const [user, setUser] = useState(null) ;
    
        useEffect(() => {
          // dispatch(addNavigation())
          const authChange = auth.onAuthStateChanged(userAuth=>{
            setUser(userAuth)
            console.log('userAuth', userAuth)
          })
          return () => {
            authChange
          }
        }, [])
  return (
    <NavigationContainer>
  
            <Stack.Navigator  screenOptions={{
                              headerShown: false
        }}>
              <>
              <Stack.Screen name="Participant" component={Participant} /> 
              <Stack.Screen name="SaisieJoueur" component={SaisieJoueur} /> 
              </>
            </Stack.Navigator>
    
    
    </NavigationContainer>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
})

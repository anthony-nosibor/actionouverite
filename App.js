import React, {useContext, useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FirebaseContext } from './FirebaseContext' ;

import Inscription from './Components/Inscription';
import Connexion from './Components/Connexion';
import Accueil from './Components/Accueil';
import Participant from './Components/Participant';
import SaisieJoueur from './Components/SaisieJoueur';
import Partie from './Components/Partie';



const Stack = createStackNavigator();

const App = ({navigation}) => {

  return (
    <NavigationContainer>
  
            <Stack.Navigator  >
              
              <Stack.Screen options={{ headerShown: false }} name="Accueil" component={Accueil} />
              <Stack.Screen options={{ headerShown: false }} name="Participant" component={Participant} /> 
              <Stack.Screen options={{ headerShown: false }} name="SaisieJoueur" component={SaisieJoueur} />
              <Stack.Screen options={{ headerShown: false }} name="Partie" component={Partie} />  
            
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

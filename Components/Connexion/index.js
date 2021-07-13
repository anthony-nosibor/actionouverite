import React, {useState, useContext} from 'react';
import { View, Text } from 'react-native';
import {Button, Input} from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import {FirebaseContext} from '../../FirebaseContext'



const index = ({navigation}) => {

    const {auth} = useContext(FirebaseContext)
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const connexion = () => {
        try {
            auth.signInWithEmailAndPassword( email, password)
            console.log('connexion', email, password);
            
        } catch (error) {
            console.log(error)
        }

    }
    const logout = () => {
        auth.signOut();
    }
    

    return (
        <View>
            <Text >Veuillez vous identifier afin de jouer :</Text>
            <Input
                placeholder='Email'
                onChangeText={setEmail}
                value={email}
            />
            <Input
                placeholder='Mot de passe'
                secureTextEntry={true}
                onChangeText={setpassword}
                value={password}
            />
            <Button
                title="Connexion"
                onPress={connexion}
            />
            <Text >Si vous n'êtes pas encore inscris cliqué ci-dessous :</Text>
             <Button
                title="inscription"
                onPress={()=>navigation.navigate('Inscription')}
            />
            <Text ></Text>
             <Button
                title="déconnexion"
                onPress={logout}
            />
        </View>
    )
}

export default index


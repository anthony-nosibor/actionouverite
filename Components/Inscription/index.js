import React, {useState, useContext} from 'react';
import { View, Text } from 'react-native';
import {Button, Input} from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import {FirebaseContext} from '../../FirebaseContext';



const index = ({navigation}) => {

    const {auth, queryAddUser} = useContext(FirebaseContext)
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const inscription = async () => {
        try {
            const {user} =await auth.createUserWithEmailAndPassword( email, password);

                await queryAddUser(user.uid, {email:user.email});

            }catch(error) {
                console.log(error)
            }

    }
    
    const logout = () => {
        auth.signOut();
    }
    

    return (
        <View>

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
                title="Inscrivez-vous"
                onPress={inscription}
            />
            <Text ></Text>
             <Button
                title="Retour vers Connexion"
                onPress={()=>navigation.navigate('Connexion')}
            />

        </View>
    )
}

export default index

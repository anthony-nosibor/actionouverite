import React, { useState,useEffect  } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button, Divider, Input   } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import  { useSelector, useDispatch } from 'react-redux';
import { afficheliste } from '../../Redux/Actions/listplayer';


const index = ({navigation}) => {

    const [name, setName] = useState(null);
    const {listPlayer, nombreJoueurs} = useSelector(state => state);

    const dispatch = useDispatch() ;

    const validate = () => {
        dispatch(afficheliste(name));
        setName("");
         console.log("liste des joueurs :", name );
    };

    useEffect(() => {
        listPlayer.length == nombreJoueurs ? navigation.navigate('Partie') : null
        // console.log("listPlayer :",listPlayer, nombreJoueurs)
        return () => {
            
        }
    }, [listPlayer]);

    return (
        <View>
            <ImageBackground source={ require('../../images/foule.jpg')}
                            style={{resizeMode:'cover',
                                    width:'100%',
                                    height:'100%'}}>
            <Text style= {{    fontSize: 20,
                               fontWeight: "bold",
                               fontFamily: "Cochin",
                               marginBottom:30
                          }}> 
                          Veuillez entrer vos pseudos ? 
            </Text>
                            <Input
                                    placeholder='Noms des joueurs...'
                                    onChangeText={setName}
                                    value={name}
                                    leftIcon={
                                        <Icon
                                        name='users'
                                        size={24}
                                        color='black'
                                        />
                                    }
                            />      
                                   
          <Button
              buttonStyle=  {{
                  width:"50%",
                  marginBottom:10,
                  borderRadius:11
                }}
              title="Valider"
              onPress={validate}
              /> 
            </ImageBackground>  
        </View>
    )
}

export default index;

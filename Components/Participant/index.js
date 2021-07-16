import React, { useState  } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button, Divider, Input   } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import  { useSelector, useDispatch } from 'react-redux';
import { addNumbPlayer } from '../../Redux/Actions/nombreJoueurs';


const index = ({navigation}) => {

    const [number, setNumber] = useState(null);
    const {nombreJoueurs} = useSelector(state => state);

    const dispatch = useDispatch() ;

    const validate = () => {

        dispatch(addNumbPlayer(number))
         console.log("nombre de joueurs :", number )
         navigation.navigate("SaisieJoueur");
    };

    return (
        <View >
            <ImageBackground source={ require('../../images/foule.jpg')}
                            style={{resizeMode:'cover',
                                    width:'100%',
                                    height:'100%',
                                    alignItems:'center'}}>
            <Text style= {{    fontSize: 20,
                               fontWeight: "bold",
                               fontFamily: "Cochin",
                               marginBottom:30
                          }}> 
                          Veuillez entrer le nombre de participants ? 
            </Text>
                            <Input
                                    placeholder='Nombre de joueurs...'
                                    onChangeText={setNumber}
                                    value={number}
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
                  borderRadius:11,
                  justifyContent:'center',
                }}
              title="Valider"
              onPress={validate}
              /> 
            </ImageBackground>  
        </View>
    )
}

export default index;

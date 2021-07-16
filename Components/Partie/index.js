import React, { useState,useEffect  } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button, Divider, Input   } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import  { useSelector, useDispatch } from 'react-redux';
import { afficheliste } from '../../Redux/Actions/listplayer';


const index = ({navigation}) => {

    const [name, setName] = useState(null);
    const [session, setSession] = useState([]);
    const [quest, setQuestions] = useState(null);

    const {listPlayer, questions} = useSelector(state => state);

    const dispatch = useDispatch() ;

    const validate = () => {
        dispatch(afficheliste(name))
    };

    const action = () => {
        const indexaction = getRandomInt(questions.action.length);
        console.log('quest act :', indexaction);
        console.log(' quest :', questions.action[indexaction].question);
        setQuestions(questions.action[indexaction].question);
    };

    const verite = () => {
        const indexverite = getRandomInt(questions.verite.length);
        console.log('quest ver :', indexverite);
        console.log(' quest :', questions.verite[indexverite].question);
        setQuestions(questions.verite[indexverite].question);
    }

    const selectPlayer = () => {

        const indexPlayer = getRandomInt(listPlayer.length);
        // console.log('indexPlayer :', indexPlayer);
        // console.log(listPlayer[indexPlayer]);
        if(session.find(item=>item == indexPlayer) == undefined){
            setName(listPlayer[indexPlayer]);
            setSession([...session, indexPlayer]);
            console.log('session.find :',session.find(item=>item == indexPlayer));
        } else {
            if (session.length == listPlayer.length) {
                console.log('fin');
                setSession([]);
                return;
            } else {
                console.log('rechercher new player')
                selectPlayer();
            }
        }

        console.log('session :', session);

    }

    useEffect(() => {
        selectPlayer()
        return () => {
            
        }
    }, []);


    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      };


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
                          A ton tours : '{name}'
            </Text>
                        
                                   
          <Button
              buttonStyle=  {{
                  width:"50%",
                  marginBottom:10,
                  borderRadius:11
                }}
              title="Joueur suivant"
              onPress={selectPlayer}
              /> 

            

              <Button
                    buttonStyle=  {{
                        width:"50%",
                        marginBottom:10,
                        borderRadius:11
                        }}
                    title="Action"
                    onPress={action}
              />

                <Button
                    buttonStyle=  {{
                        width:"50%",
                        marginBottom:10,
                        borderRadius:11
                        }}
                    title="Vérité"
                    onPress={verite}
              />
                <View style={{backgroundColor:'white',
                             justifyContent:'center'}}>
                    <Text style= {{    fontSize: 20,
                               fontWeight: "normal",
                               fontFamily: "Cochin",
                               marginBottom:30
                          }}>{quest}</Text>
                </View>

            </ImageBackground>  
        </View>
    )
}

export default index;

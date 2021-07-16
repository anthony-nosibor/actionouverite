import React, { Fragment, useState  } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Button, Divider, Input   } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import  { useSelector, useDispatch } from 'react-redux';



const index = ({navigation}) => {


    const validate = () => {
         navigation.navigate("Participant");
    };

    return (
        // <View style={{flex:1}}>
        //     <ImageBackground source={ require('../../images/accueil.jpg')}
        //                     style={{resizeMode:'cover',
        //                             width:'100%',
        //                             height:'100%'}}>

        //     <Text style= {{    fontSize: 30,
        //                        fontWeight: "bold",
        //                        fontFamily: "Cochin",
        //                       textAlign:"center",
        //                       color:"white"
        //                   }}> 
        //                  Action ou vérité 
        //     </Text> 
        //     <View style={{  flex:1,
        //                     alignItems:'center',
        //                     justifyContent: 'flex-end'}}>                       
        //         <Button
        //             buttonStyle=  {{
        //                 marginBottom:50,
        //                 width:"50%",
        //                 borderRadius:10,
        //                 justifyContent:'center',
                       
        //                 }}
        //             title="Entrez dans la danse"
        //             onPress={validate}
        //             /> 
        //       </View>  
        //     </ImageBackground>  
        // </View>
        <Fragment>

            <View style={{flex:1,
            backgroundColor:'#F4ECEC'}}>

                <View style={{flex:0.4,
                            backgroundColor:'#436C9D',
                            borderBottomLeftRadius:40,
                            borderBottomRightRadius:40,
                            justifyContent:"center"}}>

                    <Text style= {{ fontSize: 30,
                                    fontWeight: "bold",
                                    fontFamily: "times",
                                    textAlign:"center",
                                    color:"white",
                                    
                          }}> 
                         Action ou vérité 
                    </Text>

                </View>

                <View style={{flex:0.6,
                            justifyContent:'flex-end'
                            }}>
                                <Button
                                    buttonStyle=  {{
                                        marginLeft:50,
                                        marginRight:50,
                                        marginBottom:50,
                                        borderRadius:15,
                                        backgroundColor:"#436C9D",
                                        fontFamily:"times",
                                        height:60
                                        }}
                                        
                                    title="Entrez dans la danse"
                                    onPress={validate}
                                    /> 

                </View>

             </View>

        </Fragment>
    )
}

export default index;

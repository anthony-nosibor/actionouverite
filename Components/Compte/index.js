import React from 'react';
import { View, Text } from 'react-native';
import { Button, Divider  } from 'react-native-elements';

const index = () => {
    
    return (
        <View>
            <Text style= {{    fontSize: 15,
                               fontWeight: "bold",
                               fontFamily: "Cochin",
                               marginBottom:30
                          }}>Alors qu'est ce qui vous tente ?</Text>
            <Button
              buttonStyle=  {{
                  width:"50%",
                  marginBottom:10,
                  borderRadius:11
                }}
              title="Action"/>

              <Text style={{marginBottom:10}}>ou</Text>

            <Button
              buttonStyle=  {{
                width:"50%",
                marginBottom:10,
                borderRadius:11
              }}
              title="Vérité"/>
        </View>
    )
}

export default index

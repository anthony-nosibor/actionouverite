import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const index = () => {
    return (
        <View>

            <Header
                ViewComponent={LinearGradient} // Don't forget this!
                centerComponent={{ text: 'Action ou vérité', style: { color: '#fff',fontSize:22 } }}
                linearGradientProps={{
                    colors: ['green', 'yellow'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                />

        </View>
    )
}

export default index

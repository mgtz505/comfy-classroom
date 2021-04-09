import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Welcome = props => {
    return(
        <View style={styles.topContainer}>
                <Button style={styles.topButton} title="See the Class"></Button>
                <Button style={styles.topButton} title="Who's Not Comfy?"></Button>    
        </View>
        );
    };
const styles = StyleSheet.create({
        topContainer: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginVertical: '5%',
            marginLeft: '2.5%',
            marginRight: '2.5%',
            padding: 5,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 5,
            shadowOpacity: 0.45,
            backgroundColor: 'white',
        },
        topButton: {
            fontSize: 10,
            fontWeight: 'bold',
        }
    
    
    });



export default Welcome
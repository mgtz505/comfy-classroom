import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Modal } from 'react-native';
import {Container, Header, Left, Right, Button, Icon} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import HeaderBar from './Components/HeaderBar';
import Welcome from './Components/Screens/Welcome';
import StudentAdd from './Components/StudentAdd';

export default function App() {
  //Color Scheme
  // https://icolorpalette.com/color/a9dcc6
  
const [isOpen, setIsOpen] = useState(false)


  return (
    <Container>
      <View>
        <HeaderBar title="Comfy Classroom" />
      </View>
        <Welcome />

      {/* <Header>
       <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
       </Left>
       <Right>
         <Button rounded onPress={() => setIsOpen(true)} >
           <Text>USER</Text>
         </Button>
       </Right>
      </Header> */}
     
      
      <View style={styles.container}>
        <StudentAdd />
      </View>

    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1
  }
});

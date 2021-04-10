import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert
} from "react-native";
import { Container, Content, Header, Left, Right, Button, List, ListItem, Icon, } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';


const StudentAdd = (props) => {

//Handle the Text input for listed student additions:
const [listStudent, setlistStudent] = useState("");
const [classRoster, setClassRoster] = useState([]);
function studentListHandler(name){
    setlistStudent(name);
}
//Handle the use of the add button
function handleButtonPress(){
    setClassRoster(classRoster => [...classRoster, listStudent]);
};


function showAlert() {
    Alert.alert(
      "YOLO"
    )
  }


  return (
    <Container>
      <Content>
        <Grid>
        <Col style={{ backgroundColor: 'white', height: 200 }}>
        <Button iconLeft full light onPress={handleButtonPress} style={styles.addButton}>
            <Text>Add a Student</Text>
            <Icon name="home"/> 
          </Button>
          <TextInput style={styles.input} placeholder="Student Name..." onChangeText={studentListHandler} value={listStudent}/>
          

        </Col>
        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
        </Col>
      <View style={styles.addContainer}>
        </View>
        </Grid>

        <View>
        <FlatList data={classRoster} renderItem={studentData => (
            <TouchableOpacity onPress={showAlert}>
                <View style={styles.listedStudents}><Text>{studentData.item}</Text></View>
            </TouchableOpacity>
        ) }/>
          {/* {classRoster.map((student) => )} */}
      </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  addContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center'      
  },
  addButton: {
      height: '30%',
      marginLeft: '0%',
      backgroundColor: "#347905",
      width: '100%'

  },
 
  input: {
      borderBottomWidth: 1,
      fontSize: 22,
      color: '#347905',
      width: '100%',

  },
  listedStudents: {
      backgroundColor: '#a9dcc6',
      borderColor: "#508053",
      borderWidth: 1,
      padding: 5

  },
  listedMediumStudents: {
    backgroundColor: 'yellow',
    borderWidth: 1,
    padding: 5
  },
  ListedConcernStudents: {
    backgroundColor: 'red',
    borderWidth: 1,
    padding: 5
  }
});

export default StudentAdd;

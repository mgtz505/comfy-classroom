import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
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
const [studentStatus, setStudentStatus] = useState("");
const [emotionalStatus, setEmotionalStatus] = useState("")

const [isAddMode, setIsAddMode]=useState(false);

//Handle the use of the student list
function studentListHandler(name){
    setlistStudent(name);
}
//Handle the use of the add button
function handleButtonPress(){
    setClassRoster(classRoster => [...classRoster, {key: Math.random(), value: listStudent}]);
};

function designateStatus(){
  setStudentStatus()
}

function handleEmotionalStatus(){
  Alert.alert(
    "Yolo"
  )
  setEmotionalStatus("Anxious")

}
//Alert Function (on rendered student press)
function showAlert() {
    Alert.alert(
      <Text>"YOLO"</Text>
    )
  }


  return (
    <Container>
      <Content>
        <Grid>
        <Col style={{ backgroundColor: 'white', height: 200 }}>
        <Button style={styles.addButton} 
        iconLeft full light onPress={handleButtonPress} 
        style={styles.addButton}>
            <Icon name="home"> 
            <Text>Add Student</Text>
            </Icon>
          </Button>
          <TextInput style={styles.input} 
          placeholder="Student Name..." 
          onChangeText={studentListHandler} 
          value={listStudent}/>
          <Button>
            <Text>See the Class</Text>
          </Button>

        </Col>
        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
        </Col>
      <View style={styles.addContainer}>
        </View>
        </Grid>

        <View>
        <FlatList data={classRoster} renderItem={studentData => (
            <TouchableOpacity onPress={handleEmotionalStatus}>
                <View key={studentData.item.name} style={styles.listedStudents}>
                  <Text>{studentData.item.value} - {emotionalStatus}</Text>
                  <Button onPress={ () => setIsAddMode(true)}>
                    <Text>Set Status</Text>
                  </Button>
                </View>
            </TouchableOpacity>
        ) }/>
          {/* {classRoster.map((student) => )} */}
      </View>

      <View style={styles.modalContainer}>
        <Modal 
        visible={isAddMode}
        animationType="slide"
        >
          <View>
            
            <Text>Student Name </Text>

            <Button iconLeft style={styles.modalButton} onPress={ () => setIsAddMode(false)}>
              <Icon name='home'>
              <Text> Home</Text>
              </Icon>
            </Button>
          </View>
        </Modal>
      </View>
        
      
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalButton: {
    alignSelf: 'center',
    marginTop: '180%',
    width: '35%',
    },
  addContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center'      
  },
  addButton: {
      height: '30%',
      marginLeft: '0%',
      backgroundColor: "#347905",
      width: '100%',

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

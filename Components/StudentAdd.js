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
//Student Attributes: 
const [listStudent, setlistStudent] = useState("");
const [listStudentEmotion, setlistStudentEmotion] = useState("");


const [classRoster, setClassRoster] = useState([]);
const [studentStatus, setStudentStatus] = useState("");

const [isAddMode, setIsAddMode]=useState(false);

//Handle the use of the student list
function studentListHandler(name){
    setlistStudent(name);
  }

function studentEmotionListHandler(emotion){
  setlistStudentEmotion(emotion)};

//Handle the use of the add button
function handleButtonPress(){
  //Store my student information in an object
    setClassRoster(classRoster => [...classRoster, {key: Math.random(), name: listStudent, emotion: listStudentEmotion}]);
};

function designateStatus(){
  setStudentStatus()
}

//Test Functions
function handleEmotionalStatus(){
  Alert.alert(
    "Yolo"
  )
  setEmotionalStatus("Anxious")

}
//Alert Function (on rendered student press)
// function showAlert() {
//     Alert.alert(
//       <Text>"YOLO"</Text>
//     )
//   }


  return (
    <Container>
      <Content>
        <Grid>
        <Col style={{ backgroundColor: 'white', height: 200 }}>
        <Button style={styles.addButton} 
        iconLeft full light onPress={handleButtonPress} 
        style={styles.addButton}>
            <Icon name="add"> 
            <Text>Add Student</Text>
            </Icon>
          </Button>
          {/* Input Boxes */}
          <TextInput style={styles.input} 
          placeholder="Student Name..." 
          onChangeText={studentListHandler} 
          value={listStudent}/>
           <TextInput style={styles.input} 
          placeholder="Emotions" 
          onChangeText={studentEmotionListHandler} 
          value={listStudentEmotion}/>
         

        </Col>
        <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
        </Col>
      <View style={styles.addContainer}>
        </View>
        </Grid>
{/* Rendered Flat List */}
        <View>
        <FlatList data={classRoster} renderItem={studentData => (
            <TouchableOpacity >
                <View key={studentData.item.name} style={styles.listedStudents}>
                
                  <Text style={styles.renderedText}>{studentData.item.name} is feeling {studentData.item.emotion} </Text>
                  <Button iconleft style={styles.displayModalButton} onPress={ () =>{
                      setIsAddMode(true)
                      console.log(classRoster)
                  }}>
                    <Text style={styles.displayModalButtonFont}>Set Status <Icon name="school"> </Icon></Text>
                  </Button>
                </View>
            </TouchableOpacity>
        )}/>
      </View>

      <View style={styles.modalContainer}>
        <Modal 
        visible={isAddMode}
        animationType="slide"
>
          <View>
            <Text style={styles.modalHeader}>{classRoster[0].name}</Text>

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
    modalHeader: {
      marginTop: '10%',
      marginLeft: '20%'
    },
  addContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center'      
  },
  addButton: {
      height: '30%',
      // marginLeft: '0%',
      backgroundColor: "#347905",
      width: '100%',
      paddingRight: '5%'
  },
 
  input: {
      borderBottomWidth: 1,
      fontSize: 22,
      color: '#347905',
      width: '100%',

  },
  listedStudents: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#a9dcc6',
      borderColor: "#508053",
      borderWidth: 1,
      padding: 5,
    

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
  },
  renderedText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  displayModalButton: {
    width: '35%',
    
  },
  displayModalButtonFont: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 20
    
  }
});

export default StudentAdd;

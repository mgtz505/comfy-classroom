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
//Listed Student Attributes (Key Value Pairs for Object): 
const [listStudent, setlistStudent] = useState("");
const [listStudentEmotion, setlistStudentEmotion] = useState("");
const [selectedStudent, setSelectedStudent] = useState("");
const [listStudentAcademics, setListStudentAcademics] = useState("");
const [listStudentCovid, setListStudentCovid] = useState("");
const [listStudentAssistance, setListStudentAssistance]=useState("");

const [classRoster, setClassRoster] = useState([]);

const [isAddMode, setIsAddMode]=useState(false);

//Handle the use of the student list
function studentListHandler(name){
    setlistStudent(name);
  };

function studentEmotionListHandler(emotion){
  setlistStudentEmotion(emotion);
};

function studentAcadmeicListHandler(academics){
  setListStudentAcademics(academics);
};

function studentCovidListHandler(corona){
  setListStudentCovid(corona);
};

function studentAssistanceListHandler(tutoring){
  setListStudentAssistance(tutoring);
}

//Handle the use of the add button
function handleButtonPress(){
  //Store my student information in an object
    setClassRoster(classRoster => [...classRoster, {key: Math.random(), name: listStudent, emotion: listStudentEmotion, academics: listStudentAcademics, covid: listStudentCovid, assistance: listStudentAssistance }]);
    setlistStudent("");
    setlistStudentEmotion("");
    setListStudentAcademics("");
    setListStudentCovid("");
    setListStudentAssistance("");
};


function designateStatus(){
  setStudentStatus()
}

console.log(selectedStudent)

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
          placeholder="Emotions..." 
          onChangeText={studentEmotionListHandler} 
          value={listStudentEmotion}/>

            <TextInput style={styles.input} 
          placeholder="Academic Status..." 
          onChangeText={studentAcadmeicListHandler} 
          value={listStudentAcademics}/>

          <TextInput style={styles.input} 
          placeholder="COVID-19 Status..." 
          onChangeText={studentCovidListHandler} 
          value={listStudentCovid}/>
         
         <TextInput style={styles.input} 
          placeholder="Requires Assistance?" 
          onChangeText={studentAssistanceListHandler} 
          value={listStudentAssistance}/>

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
                
                  <Text style={styles.renderedText}>{studentData.item.name} </Text>
                  <Button iconleft style={styles.displayModalButton} onPress={ () =>{
                      setIsAddMode(true)
                      setSelectedStudent(studentData.item.name)
                  }}>
                    <Text style={styles.displayModalButtonFont}>See Details <Icon name="school"> </Icon></Text>
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
            {/* Filtered & Rendered Text within Modal: */}
            <Text style={styles.modalHeader}>{selectedStudent && classRoster.filter((pupil) => {
              return pupil.name === selectedStudent;
            })[0].name
            }</Text>
            <Text style={styles.modalSubHeader}>Emotional Status: {selectedStudent && classRoster.filter((pupil) => {
              return pupil.name === selectedStudent;
            })[0].emotion
            }</Text>
             <Text style={styles.modalSubHeader}>Academic Status: {selectedStudent && classRoster.filter((pupil) => {
              return pupil.name === selectedStudent;
            })[0].academics
            }</Text>
             <Text style={styles.modalSubHeader}>Covid Status: {selectedStudent && classRoster.filter((pupil) => {
              return pupil.name === selectedStudent;
            })[0].covid
            }</Text>
            <Text style={styles.modalSubHeader}>Does need academic assistance? {selectedStudent && classRoster.filter((pupil) => {
              return pupil.name === selectedStudent;
            })[0].assistance
            }</Text>

            <Button iconLeft style={styles.modalButton} onPress={ () => {
              setSelectedStudent(null)
              setIsAddMode(false)}}>
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
    marginTop: '160%',
    width: '35%',
    },
    modalHeader: {
      marginTop: '15%',
      marginLeft: '20%',
      fontWeight: 'bold',
      fontSize: 28
    },
    modalSubHeader: {
      marginLeft: '20%',
      fontWeight: "bold",
      fontSize: 18
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

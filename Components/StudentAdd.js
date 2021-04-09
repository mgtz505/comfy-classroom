import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  FlatList
} from "react-native";
import { Container, Header, Left, Right, Button, List, ListItem, Icon } from "native-base";

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

  return (
    <View style={styles.addContainer}>
      <Button full light onPress={handleButtonPress} style={styles.addButton}>
        <Text>Add a Student</Text>
      </Button>
      <TextInput style={styles.input} placeholder="Enter Student Name..." onChangeText={studentListHandler} value={listStudent}/>
      <FlatList data={classRoster} renderItem={studentData => (
          <TouchableOpacity onPress={styles.listedMediumStudents}>
              <View style={styles.listedStudents}><Text>{studentData.item}</Text></View>
          </TouchableOpacity>
      ) }/>
        {/* {classRoster.map((student) => )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    //   alignItems: 'center'
  },
  addButton: {
      height: '20%',
      marginBottom: '10%'
  },
  input: {
      borderBottomWidth: 1
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

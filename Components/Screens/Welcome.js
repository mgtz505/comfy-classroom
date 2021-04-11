import React, { useState } from 'react';
import {View, Image, Text, StyleSheet, Modal, Linking, TouchableOpacity} from 'react-native';
import { Button, Icon, Left, Toast, Card} from 'native-base';
const Welcome = props => {


//Control the individual modals using State:
const [viewModal, setViewModal] = useState(false);
const [viewModalTwo, setViewModalTwo] = useState(false);
const [showToast, setShowToast] = useState(false);

    return(
    <View>
        <View style={styles.topContainer}>
                <Button iconLeft
                style={styles.topButton} 
                title="Instructions"
                onPress={ () => {setViewModal(true)}}>
                    <Icon name='information'>
                        <Text style={styles.buttonText}>Instructions</Text>
                    </Icon>
                </Button>

                <Button iconleft
                style={styles.topButton} 
                title="Teacher Resources"
                onPress={ () => {setViewModalTwo(true)}}>
                    <Icon name='book'>
                        <Text style={styles.buttonText}>Resources</Text>
                    </Icon>
                </Button>    
        </View>

        <View>
            <Modal 
            visible={viewModal}
            animationType="slide"
            style={styles.modalContainer}>
                <View>
                    <Button iconleft
                            onPress = { () => {setViewModal(false)}}
                            style={styles.modalReturnButton}>
                    <Icon name='home'>
                    <Text> Home</Text>
                    </Icon>
                    </Button>
                </View>
            </Modal>
        </View>

        <View>
            <Modal 
            style={styles.modalContainer}
            visible={viewModalTwo}
            animationType="slide">
                <View>
                    <Text style={styles.modalHeader}>Resources for Instructors</Text>
                    
                       <Text style={styles.modalSubHeader}>Vaccine Resources</Text>
                   <TouchableOpacity>
                       <Text style={styles.resourceText} onPress={ () => Linking.openURL('https://vaccinefinder.org/')}>
                           Find a Vaccine Appointment
                       </Text>
                       <Text 
                       style={styles.resourceText}
                       onPress={ () => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/vaccines/recommendations/specific-groups/teachers-childcare.html')}>
                           Vaccines for Teachers and Staff</Text>
                        <Text style={styles.resourceText}
                        onPress ={ () => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/vsafe.html')}>
                            Report Vaccine Side-Effects via V-Safe
                        </Text>
           
                   </TouchableOpacity>

                   <Text style={styles.modalSubHeader}>Returning to the Classroom</Text>
                   <TouchableOpacity>
                   <Text style={styles.resourceText}
                        onPress ={ () => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/community/pdf/How-Do-I-Set-Up-My-Classroom.pdf')}>
                            How do I setup my Clasroom? A quick guide for Teachers (PDF)
                        </Text>
                       <Text style={styles.resourceText} onPress={ () => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/mask-fit-and-filtration.html')}>
                           CDC Mask Guidance
                       </Text>
                       <Text 
                       style={styles.resourceText}
                       onPress={ () => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/FINAL-0321420_B_K-12_Mitigation_Toolkit508.pdf')}>
                           K-12 COVID-19 Mitigation Toolkit (PDF)</Text>
                   </TouchableOpacity>

                   <Text style={styles.modalSubHeader}>Day-to-Day Diligence</Text>
                   <TouchableOpacity>
                   <Text style={styles.resourceText}
                        onPress ={ () => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/symptom-screening.html')}>
                            Symptoms of COVID-19
                        </Text>
                       <Text style={styles.resourceText} onPress={ () => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/symptom-screening.html#flowchart')}>
                           Symptom Screening Flowchart
                       </Text>
                       <Text 
                       style={styles.resourceText}
                       onPress={ () => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/symptom-screening.html#deciding')}>
                           Deciding when a student should remain at home</Text>
                           <Text 
                       style={styles.resourceText}
                       onPress={ () => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/community/schools-childcare/symptom-screening.html#students')}>
                           Students who become sick at School</Text>
                   </TouchableOpacity>

                   <Text style={styles.modalSubHeader}>Mental Health and Emotional Wellbeing</Text>
                   <TouchableOpacity>
                   <Text style={styles.resourceText}
                        onPress ={ () => Linking.openURL('https://www.strong4life.com/en/pages/behavior/articles/helping-kids-and-teens-deal-with-grief')}>
                            Helping kids and teens deal with grief
                        </Text>
                       <Text style={styles.resourceText} onPress={ () => Linking.openURL('https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Helping-Teenagers-With-Stress-066.aspx')}>
                           Stress Management for Teens
                       </Text>
                       <Text 
                       style={styles.resourceText}
                       onPress={ () => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/talking-with-children.html')}>
                           Speaking with Young Children about Covid-19</Text>
                           <Text 
                       style={styles.resourceText}
                       onPress={ () => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/stress-coping/alcohol-use.html')}>
                           Alcohol and Substance Abuse</Text>
                   </TouchableOpacity>

                   

                    <Button iconleft
                    onPress = { () => {setViewModalTwo(false)}}
                    style={styles.modalReturnButton}>
                    <Icon name='home'>
                    <Text> Home</Text>   
                    </Icon>
                    </Button>
                </View>
            </Modal>
        </View>


        
    </View>


        );
    };
const styles = StyleSheet.create({
        topContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: '5%',
            marginLeft: '2.5%',
            marginRight: '2.5%',
            padding: 10,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 2},
            shadowRadius: 5,
            shadowOpacity: 0.45,
            backgroundColor: 'white',
        },
        topButton: {
        //    flex: 1,
           width: '49%',
           padding: 1
        },
        buttonText: {
            fontSize: 25
        },
        modalContainer: {
            
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
        fontSize: 18,
        },
        resourceText: {
        marginLeft: '20%',
        fontWeight: "bold",
        fontSize: 14,
        color: 'blue'
        },
        modalReturnButton: {
        marginTop: '100%',
        alignSelf: 'center'
        },
    
    
    });



export default Welcome
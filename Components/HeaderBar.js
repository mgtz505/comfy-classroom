import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Container, Header, Left, Right, Button, Icon } from "native-base";

const HeaderBar = (props) => {
    return (
        <View style={styles.header}>
        <Left>
           
        </Left>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 40,
        backgroundColor: '#347905',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
        paddingBottom: 15
    },
    menuButton: {
        alignItems: "flex-start"
    }


});

export default HeaderBar;


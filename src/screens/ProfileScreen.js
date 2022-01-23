import { StyleSheet, Image, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Divider, Text, Button } from '@ui-kitten/components';
import React from 'react';
import { signOut, getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { collection, query, where } from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const db = firebase.firestore();


const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [secondUser, setSecondUser] = useState({});

  const getUser = async () => {

    db.collection("users").where("id", "==", firebase.auth().currentUser.uid)
      .get()
      .then((querySnapshot) => {
        let currentUser = {}
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          currentUser = doc.data()
        });
        setUser(currentUser)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      })
  }
  useEffect(() => {
    getUser();
  }, []);

  const onMatch = async () => {

    db.collection("users").where("host", "==", user.university)
      .get()
      .then((querySnapshot) => {
        let otherUser = {}
        querySnapshot.forEach((doc) => {
          otherUser = doc.data()
        });
        setSecondUser(otherUser)
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      })

    if (secondUser.host == user.university) {
      navigation.navigate('Chat', {
        user1: user.id,
        user2: secondUser.id
      })
    }
    else if (secondUser.city == user.city) {
      navigation.navigate('Chat', {
        user1: user.id,
        user2: secondUser.id
      })
    }
    else { <Text style={styles.fieldStyle} category='s1'>We didn't find anybody to match you with. We are sorry for the inconvenience</Text> }
  }

  return (
    <View >
      <View style={styles.header}></View>
      <Image style={styles.avatar} source={{ uri: 'http://www.gravatar.com/avatar/?d=mp' }} />
      <View style={styles.content}>
        <Text style={styles.titleStyle} category='h3'>{user.username}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.fields}>
          <Text style={styles.fieldStyle} category='h5'>City</Text>
          <Text style={styles.fieldStyle} category='s1'>{user.city}</Text>
        </View>

        <View style={styles.fields}>
          <Text style={styles.fieldStyle} category='h5'>Major</Text>
          <Text style={styles.fieldStyle} category='s1'>{user.major}</Text>
        </View>

        <View style={styles.fields}>
          <Text style={styles.fieldStyle} category='h5'>Home University</Text>
          <Text style={styles.fieldStyle} category='s1'>{user.university}</Text>
        </View>

        <View style={styles.fields}>
          <Text style={styles.fieldStyle} category='h5'>Host University</Text>
          <Text style={styles.fieldStyle} category='s1'>{user.host}</Text>
        </View>

        <View style={styles.buttonsAllign}>
          <View>
            <Button style={styles.matchUpButton} appearance='ghost' onPress={() => onMatch()}> <Text style={styles.text}>Match</Text></Button>
          </View>
          <View >
            <Button style={styles.matchUpButton} appearance='ghost' onPress={() => signOut(getAuth())}> <Text style={styles.text}>Logout</Text></Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFE2E2",
    height: 120,
  },
  body: {
    marginLeft: 15,
    marginTop: 15,
  },
  fields: {
    paddingBottom: 15,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 30,
  },
  titleStyle: {
    paddingTop: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  fieldStyle: {
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 4,
  },
  matchUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#8785A2",
    color: 'white',
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30
  },
  text: {
    color: 'white',
  },
  buttonsAllign: {
    flexDirection: "row",
    justifyContent: 'center',
  },
});

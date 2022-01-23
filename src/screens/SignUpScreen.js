import { StyleSheet, View, Alert } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Text, Input } from '@ui-kitten/components';
import React, { useState } from 'react';
import { firebase } from '../firebase/config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection } from "firebase/firestore";


export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [university, setUniversity] = useState('')
  const [host, setHost] = useState('')
  const [major, setMajor] = useState('')
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const onSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then(async (response) => {

      const uid = response.user.uid
      const data = {
        id: uid,
        email,
        username,
        city,
        university,
        host,
        major,
      };
      // Add a new document with a generated id
      const usersRef = doc(collection(firebase.firestore(), "users"));
      // later..
      await setDoc(usersRef, data);
    })
    .then((userRecord) => {
      navigation.navigate('Sign In')
    })
    .catch(err => 
      Alert.alert("You have to fill every field correctly"))
  };

  return (
    <Layout style={styles.container}>
      <Text style={styles.titleStyle} category='h1'>Sign Up</Text>
      <Input style={styles.inputBox} status='basic' autoCapitalize='none' placeholder='Username' onChangeText={username => setUsername(username)} />
      <Input style={styles.inputBox} status='basic' autoCapitalize='none' placeholder='Email' onChangeText={email => setEmail(email)} />
      <Input style={styles.inputBox} status='basic' autoCapitalize='none' placeholder='Password' secureTextEntry={secureTextEntry} onChangeText={password => setPassword(password)} />
      <Input style={styles.inputBox} status='basic' autoCapitalize='none' placeholder='City' onChangeText={city => setCity(city)} />
      <Input style={styles.inputBox} status='basic' autoCapitalize='none' placeholder='University you are attending' onChangeText={university => setUniversity(university)} />
      <Input style={styles.inputBox} status='basic' autoCapitalize='none' placeholder='University you will attend' onChangeText={host => setHost(host)} />
      <Input style={styles.inputBox} status='basic' autoCapitalize='none' placeholder='Major' onChangeText={major => setMajor(major)} />
      <Button style={styles.signUpButton} appearance='ghost' onPress={() => onSignUp()}>Sign Up</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    paddingTop: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.4
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#F6F6F6"
  },
  textStyle: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFC7C7",
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30
  },
  inputBox: {
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30
  },
});
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Button, Text, Input } from '@ui-kitten/components';
import React, { useState } from 'react';

const SignUpScreen = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [university, setUniversity] = useState('')
  const [host, setHost] = useState('')
  const [major, setMajor] = useState('')

  return (
    <Layout style={styles.container}>
        <Text style={styles.titleStyle} category='h1'>Sign Up</Text>
        <Input style={styles.inputBox} status='basic' placeholder='Username' onChangeText={username => setUsername(username)}/>
        <Input style={styles.inputBox} status='basic' placeholder='Email' onChangeText={email => setEmail(email)}/>
        <Input style={styles.inputBox} status='basic' placeholder='Password' onChangeText={password => setPassword(password)}/>
        <Input style={styles.inputBox} status='basic' placeholder='City' onChangeText={city => setCity(city)}/>
        <Input style={styles.inputBox} status='basic' placeholder='University you are attending' onChangeText={university => setUniversity(university)}/>
        <Input style={styles.inputBox} status='basic' placeholder='University you will attend' onChangeText={host => setHost(host)}/>
        <Input style={styles.inputBox} status='basic' placeholder='Major' onChangeText={major => setMajor(major)}/>
        <Button style={styles.signUpButton} appearance='ghost'>Sign Up</Button>
    </Layout>
  );
};

export default SignUpScreen;

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
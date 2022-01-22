import { StyleSheet, TextInput } from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Button, Layout, Text, Input } from '@ui-kitten/components';
import React from 'react';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  return (
    <Layout style={styles.content}>
      <Text  style={styles.titleStyle} category='h3'>Sign in</Text>
      <Input 
        style={styles.inputStyle}
        placeholder='Enter your email address'
        email = {email}
        label='Email'
        onChangeText={nextEmail => setEmail(nextEmail)}
      />
      <Input
        style={styles.inputStyle}
        password={setPassword}
        label='Password'
        placeholder='Enter your password'
        secureTextEntry={secureTextEntry}
        onChangeText={nextPassword => setPassword(nextPassword)}
      />
      <Button style={styles.signInButton}>SIGN IN</Button>
      <Text>Do not have an account? <Text style={styles.signUpButton} onPress={() => navigation.navigate('Sign Up')}> Sign up</Text></Text>
    </Layout>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  titleStyle: {
    paddingTop: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  textStyle: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  signInButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  content: {
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    padding: 10,
  },

  inputStyle: {
    margin: 5,
  },

  signUpButton: {
    color: "#0000FF",
  },
});

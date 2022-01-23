import { StyleSheet, TextInput } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Layout, Text, Input } from '@ui-kitten/components';
import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const onSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate('Profile')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
      });
  }

  return (
    <Layout style={styles.content}>
      <Text style={styles.titleStyle} category='h3'>Sign in</Text>
      <Input
        style={styles.inputStyle}
        autoCapitalize='none'
        placeholder='Enter your email address'
        email={email}
        label='Email'
        onChangeText={setEmail}
      />
      <Input
        style={styles.inputStyle}
        autoCapitalize='none'
        password={setPassword}
        label='Password'
        placeholder='Enter your password'
        secureTextEntry={secureTextEntry}
        onChangeText={setPassword}
      />
      <Button style={styles.signInButton} onPress={onSignIn}>SIGN IN</Button>
      <Text>Do not have an account? <Text style={styles.signUpButton} onPress={() => navigation.navigate('Sign Up')}> Sign up</Text></Text>
    </Layout>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  titleStyle: {
    paddingTop: 10,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  textStyle: {
    fontWeight: 'bold',
    marginVertical: 10,
  },

  signInButton: {
    margin: 10,
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
  },

  inputStyle: {
    margin: 5,
  },

  signUpButton: {
    color: "#0000FF",
  },
});

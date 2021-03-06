import { StyleSheet, TextInput, Image, View } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Layout, Text, Input } from '@ui-kitten/components';
import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const logo = require('../../assets/uChange.png');

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
      <View>
        <Image
            style={styles.logo}
            source={logo}
        />
      </View>
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
    borderColor:"#FFC7C7",
    backgroundColor: "#FFC7C7",
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 30,
    marginRight: 30
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#F6F6F6"
  },

  inputStyle: {
    margin: 15,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30
  },

  signUpButton: {
    color: "#0000FF",
  },

  logo: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',    
    },
});

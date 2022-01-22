import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SignUpScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Sign up screen</Text>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold'
  }
});

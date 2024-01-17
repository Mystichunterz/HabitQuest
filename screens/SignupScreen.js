// screens/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('Test');
  const [password, setPassword] = useState('123');
  const [confirmPassword, setConfirmPassword] = useState('123');
  const handleSignup = () => {
    // Add your authentication logic here
    console.log('A new user signed up with email', email);
  };
  const handleLogin = () => {
    // Navigate to the SignupScreen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
       <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
      />
<Text style={styles.loginText} onPress={handleLogin}>
        Not a user? Sign up here
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  loginText: {
    marginTop: 20,
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SignupScreen;

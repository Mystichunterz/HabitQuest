import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import colorPalette from "../config/colours";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email: ", email);
    console.log("Password: ", password);

    // Placeholder logic for login
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <Text style={styles.subTitle}>Please sign in to continue</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
        <Text style={styles.buttonText}> ➜ </Text>
      </TouchableOpacity>
      <View style={styles.signUpText}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUpScreen")}
        >
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.complement,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    marginBottom: 8,
    color: colorPalette.primary,
    alignSelf: "flex-start",
    marginTop: 100,
    paddingLeft: 45,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "black",
  },
  subTitle: {
    fontSize: 24,
    marginBottom: 24,
    color: colorPalette.primary,
    alignSelf: "flex-start",
    marginTop: 8,
    paddingLeft: 45,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "black",
  },
  inputContainer: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    margin: 24,
  },
  inputWrapper: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    margin: 12,
    padding: 12,
    backgroundColor: colorPalette.primary,
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "black",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 8,
    color: "#3C4D78",
  },
  input: {
    alignSelf: "stretch",
    fontSize: 18,
    padding: 8,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colorPalette.secondary,
  },
  button: {
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: colorPalette.blue,
    padding: 12,
    margin: 12,
    marginRight: 40,
    borderRadius: 50,
    flexDirection: "row",
  },
  buttonText: {
    color: colorPalette.primary,
    fontSize: 18,
  },
  signUpText: {
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 24,
    padding: 12,
    position: "absolute",
    bottom: 24,
  },
  link: {
    color: colorPalette.blue,
    fontWeight: "bold",
  },
});

export default LoginScreen;

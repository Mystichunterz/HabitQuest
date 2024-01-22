// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login'); // Replace 'Login' with the name of your login screen
    }, 2000); // 2000 milliseconds or 2 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>My App</Text> */}
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo} // Apply the style here
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // or your preferred background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    // additional styling if needed
  },
  logo: {
    width: 300, // Adjust width as needed
    height: 300, // Adjust height as needed
    resizeMode: 'contain', // This ensures the aspect ratio is preserved
  },
});

export default SplashScreen;

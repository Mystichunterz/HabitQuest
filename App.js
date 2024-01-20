import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/screens/LoginScreen';
import SignupScreen from './app/screens/SignupScreen';
import HomeScreen from './app/components/Navbar';
import CommunityScreen from './app/screens/CommunityScreen';
import AddCommunityScreen from './app/screens/AddCommunity';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShadowVisible: false,
      }} initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        options={{ headerShown: false }}
        component={LoginScreen} 
      />
      <Stack.Screen 
        name="Signup" 
        options={{ headerShown: false }}
        component={SignupScreen} 
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Community" 
        component={CommunityScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="AddCommunity" 
        component={AddCommunityScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


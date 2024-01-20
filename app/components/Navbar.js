import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";

// Components for each tab screen
import HomepageScreen from "../screens/HomeScreen.js";
import ChatScreen from "../screens/ChatScreen.js";
import SkillInfoScreen from "../screens/SkillInfoScreen.js";
import InboxScreen from "../screens/InboxScreen.js";
import CommunityScreen from "../screens/CommunityScreen.js";
import SettingsPlaceholderScreen from "../screens/SettingsScreen.js";
import UserProfileScreen from "../screens/UserProfileScreen.js";
import StudyResourcesScreen from "../screens/StudyResourcesScreen.js";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Navbar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SettingsPlaceholderScreen"
        component={SettingsPlaceholderScreen}
      />
    </Stack.Navigator>
  );
};

const Navbar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homepage"
        component={HomepageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Skills"
        component={SkillInfoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="create" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="chat" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="group" size={size} color={color} />
          ),
        }}
      />
            <Tab.Screen
        name="Resources"
        component={StudyResourcesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu-book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="inbox" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

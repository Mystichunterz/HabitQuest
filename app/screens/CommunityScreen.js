import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colorPalette from "../config/colours";
import CommunityList from "../components/communityList";
const CommunityScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => navigation.navigate("SettingsPlaceholderScreen")}
      ></TouchableOpacity>
      <CommunityList data={data} title="Joined Communities" />
      <MaterialCommunityIcons name="chat" size={50} color="black" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colorPalette.complement,
    flex: 1,
  },
  settingsButton: {
    position: "absolute",
    top: 30,
    left: 30,
  },
});

const data = [
  {
    key: "1",
    heading: "Guitar Lover (Bishan)",
    streakCount: "26",
    skillAddedOnDate: "12/29/2022"
  },
  {
    key: "2",
    heading: "Easy learn German",
    streakCount: "14",
    skillAddedOnDate: "11/15/2022"
  },
  {
    key: "3",
    heading: "Only Water(Ang Mo kio)",
    streakCount: "2",
    skillAddedOnDate: "1/5/2023"
  },
  {
    key: "4",
    heading: "Join a New community!",
    url:"AddCommunity",
    streakCount: "",
    skillAddedOnDate: ""
  },
];
export default CommunityScreen;

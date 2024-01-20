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
import AddCommunityList from "../components/addCommunityList";
const AddCommunityScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => {alert("You have join the community sucessfully")}}
      ></TouchableOpacity>
      <AddCommunityList data={data} title="Popular Communities" />
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
    currentMenber: "26",
    communityFoundedAt: "12/29/2021"
  },
  {
    key: "2",
    heading: "Easy learn German",
    currentMenber: "30",
    communityFoundedAt: "12/29/2020"
  },
  {
    key: "3",
    heading: "Only Water(Ang Mo kio)",
    currentMenber: "20",
    communityFoundedAt: "3/31/2022"
  },
  {
    key: "4",
    heading: "Bishan English helpers",
    currentMenber: "200",
    communityFoundedAt: "3/31/2020"
  },
];

export default AddCommunityScreen;
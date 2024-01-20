import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colorPalette from "../config/colours";

import ResourceList from "../components/resourceList";

const StudyResourcesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => navigation.navigate("SettingsPlaceholderScreen")}
      >
        <MaterialCommunityIcons
          name="cog"
          size={30}
          color={colorPalette.primary}
        />
      </TouchableOpacity>

      <View style={styles.resourcesContainer}>
          <View style={styles.resourcesTitleContainer}>
            <View style={styles.resourcesDesc}>
              <Text style={styles.resourcesDescHeader}>Study Resources</Text>
              <Text style={styles.resourcesDescText}>
                Here, you can find tutorials from around the web that are recommended based on your
                "Ongoing Habits & Skills". 
              </Text>
            </View>
          </View>
      </View>

      <ResourceList data={data} title="Sources"/>
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
    resourcesContainer: {
      alignSelf: "stretch",
      alignItems: "center",
      marginTop: 60,
      padding: 24,
    },
    resourcesTitleContainer: {
      flexDirection: "row",
    },
    resourcesDesc: {
      alignSelf: "center",
    },
    resourcesDescHeader: {
      fontSize: 24,
      fontWeight: "bold",
      color: colorPalette.primary,
    },
    resourcesDescText: {
      fontSize: 18,
      color: colorPalette.primary,
    },
    navbar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      backgroundColor: colorPalette.primary,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: -5 },
      shadowColor: "black",
      padding: 12,
    },
    navbarButton: {
      alignItems: "center",
      color: "#121212",
    },
  });
  
  const data = [
    {
      key: "1",
      heading: "Simply Guitar",
      ongoingSkill: "Guitar",
      skillRange: "Beginner"
    },
    {
      key: "2",
      heading: "Duolingo",
      ongoingSkill: "German",
      skillRange: "Beginner - Intermediate"
    },
    {
      key: "3",
      heading: "Waterllama",
      ongoingSkill: "Drink more water",
      skillRange: "N/A"
    },
    {
      key: "4",
      heading: "Add a new Skill or Habit!",
      ongoingSkill: "",
      skillRange: ""
    },
  ];

export default StudyResourcesScreen;
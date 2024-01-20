import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colorPalette from "../config/colours";

import TutorList from "../components/skillList";

const MainMenuScreen = ({ navigation }) => {
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

      <View style={styles.userProfileContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("UserProfileScreen");
          }}
        >
          <View style={styles.userProfile}>
            <View style={styles.userProfilePicture}>
              {/* Profile Picture */}
            </View>
            <View style={styles.userProfileDetails}>
              <Text style={styles.userProfileName}>Slug Pickle</Text>
              <Text style={styles.userProfileEmail}>
                slugpickle.11@gmail.com
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <TutorList data={data} title="Ongoing Habits & Skills" />
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
  userProfileContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    marginTop: 60,
    padding: 24,
  },
  userProfile: {
    flexDirection: "row",
  },
  userProfilePicture: {
    width: 100,
    height: 100,
    backgroundColor: "#FF0000", // placeholder for image
    borderRadius: 50,
    marginRight: 24,
  },
  userProfileDetails: {
    alignSelf: "center",
  },
  userProfileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: colorPalette.primary,
  },
  userProfileEmail: {
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
    heading: "Instrument: Guitar",
    streakCount: "26",
    skillAddedOnDate: "12/29/2022"
  },
  {
    key: "2",
    heading: "Language: German",
    streakCount: "14",
    skillAddedOnDate: "11/15/2022"
  },
  {
    key: "3",
    heading: "Habit: Drink more Water",
    streakCount: "2",
    skillAddedOnDate: "1/5/2023"
  },
  {
    key: "4",
    heading: "Add a new Skill or Habit!",
    streakCount: "",
    skillAddedOnDate: ""
  },
];

export default MainMenuScreen;

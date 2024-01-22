import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colorPalette from "../config/colours";

import SkillList from "../components/skillList";
import StreakDisplay from '../components/streakDisplay'; // Adjust the path as necessary


const MainMenuScreen = ({ navigation }) => {
  const handleSelectSkill = (skill) => {
    // Implement navigation logic here
    // For example:
    navigation.navigate('SkillDetailScreen', { skill });
  };

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

      <StreakDisplay streakData={streakData} />

      <SkillList 
        data={data} 
        title="Ongoing Habits & Skills" 
        onAddNew={() => navigation.navigate('AddNewSkillScreen')}
        onSelectSkill={handleSelectSkill}
      />
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
  streakContainer: {
    alignSelf: "stretch",
    alignItems: "center",
    marginTop: 60,
    padding: 24,
  },
  streakNumber: {
    fontSize: 30,
    fontWeight: "bold",
    color: colorPalette.primary,
  },
  streakMessage: {
    fontSize: 18,
    color: colorPalette.primary,
    textAlign: "center",
    marginVertical: 10,
  },
  weekCircles: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  dayContainer: {
    alignItems: "center",
  },
  dayNumber: {
    fontSize: 16,
    color: colorPalette.primary,
  },
  dayCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginTop: 5,
  },
  circleFilled: {
    backgroundColor: colorPalette.primary,
  },
  circleEmpty: {
    backgroundColor: colorPalette.secondary,
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
];

const streakData = {
  currentStreak: 5, // This represents the current streak count
  weekData: [
    { dayNumber: 'Mon', completed: true },
    { dayNumber: 'Tue', completed: true },
    { dayNumber: 'Wed', completed: true },
    { dayNumber: 'Thu', completed: false },
    { dayNumber: 'Fri', completed: false },
    { dayNumber: 'Sat', completed: false },
    { dayNumber: 'Sun', completed: false },
  ],
};

export default MainMenuScreen;


import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colorPalette from "../config/colours";

const SkillDetailScreen = () => {
  // Placeholder data - replace with actual data passed from navigation params
  const skillData = {
    title: "Piano",
    description: "Learn and practice piano skills daily.",
    tasks: [
      "Do your scales",
      "Practice for 30 minutes",
      "Learn a new song",
      // ... more tasks
    ],
  };

  // Function to handle task click (placeholder)
  const handleTaskClick = (task) => {
    console.log(`Task clicked: ${task}`);
    // Here you can add logic for what happens when a task is clicked
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>{skillData.title}</Text>
        <Text style={styles.description}>{skillData.description}</Text>

        <View style={styles.taskList}>
          <Text style={styles.taskListTitle}>Daily Tasks:</Text>
          {skillData.tasks.map((task, index) => (
            <TouchableOpacity key={index} onPress={() => handleTaskClick(task)}>
              <Text style={styles.taskItem}>- {task}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <MaterialCommunityIcons name="piano" size={50} color="black" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colorPalette.primary,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  taskList: {
    alignSelf: "stretch",
    marginBottom: 20,
  },
  taskListTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colorPalette.secondary,
    marginBottom: 5,
  },
  taskItem: {
    fontSize: 16,
    marginLeft: 10,
    padding: 5,
    // Add more styling if needed, such as background color for clicked state
  },
});

export default SkillDetailScreen;

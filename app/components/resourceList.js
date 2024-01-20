import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import colorPalette from "../config/colours";

const resourceList = ({ data, title, }) => {
  return (
    <View style={styles.dragContainer}>
      <View style={styles.dragHeader}>
        <Text style={styles.dragHeaderText}>{title}</Text>
        <View style={styles.dragHeaderOptions}>
          <TouchableOpacity style={styles.dragHeaderOption}>
            <Text style={styles.dragHeaderOptionText}>See All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dragHeaderOption}>
            <Text style={styles.dragHeaderOptionText}>Sort ↓</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() => {
              navigateToCustomPage(item);
            }}
          >
            <View style={styles.listBar}>
              <View style={styles.listBarImage}>{/* Image or red fill */}</View>
              <View style={styles.listBarDetails}>
                <Text style={styles.listBarHeading}>{item.heading}</Text>
                <Text style={styles.listBarstreakCount}>
                  Skill/Habit: {item.ongoingSkill}
                </Text>
                <Text style={styles.skillRangeLevel}>
                  Skill Range: {item.skillRange}
                </Text>
                <Text style={styles.skillListViewMore}>
                  View More
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dragContainer: {
    backgroundColor: "#37006b",
    alignSelf: "stretch",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 24,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: "black",
  },
  dragHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  dragHeaderText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colorPalette.titleBlue,
    marginRight: "auto",
    color: "#FFFFFF",
  },
  dragHeaderOption: {
    marginRight: 12,
    alignSelf: "center",
  },
  dragHeaderOptionText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
  listContainer: {
    alignSelf: "stretch",
    alignItems: "flex-start",
    marginBottom: 24,
  },
  listBar: {
    backgroundColor: '#780096',
    alignSelf: "stretch",
    borderRadius: 25,
    flexDirection: "row",
    padding: 12,
  },
  listBarImage: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF", // placeholder for image
    borderRadius: 30,
    marginRight: 12,
    alignSelf: "center",
  },
  listBarDetails: {
    alignSelf: "center",
    alignItems: "flex-start",
  },
  listBarHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  listBarstreakCount: {
    fontSize: 14,
    color: "#ffffff",
  },
  skillRangeLevel: {
    fontSize: 14,
    color: "#ffffff",
  },
  skillListViewMore: {
    fontSize: 14,
    color: "#ffffff",
  },
});

export default resourceList;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colorPalette from '../config/colours';

const StreakDisplay = ({ streakData }) => {
  if (!streakData) {
    return <View><Text>Loading streak data...</Text></View>;
  }

  console.log('Streak Data:', streakData); // Logging the entire streak data

  return (
    <View style={styles.streakContainer}>
      <Text style={styles.streakNumber}>{streakData.currentStreak}</Text>
      <Text style={styles.streakMessage}>
        Progress a skill today to advance your streak!
      </Text>
      <View style={styles.weekCircles}>
        {streakData.weekData.map((day, index) => {
          console.log(`Day: ${day.dayNumber}, Completed: ${day.completed}`); // Logging each day's status
          return (
            <View key={index} style={styles.dayContainer}>
              <Text style={styles.dayNumber}>{day.dayNumber}</Text>
              <View
                style={[
                  styles.dayCircle,
                  day.completed ? styles.circleFilled : styles.circleEmpty,
                ]}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  streakContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 60,
    padding: 24,
  },
  streakNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colorPalette.primary,
  },
  streakMessage: {
    fontSize: 18,
    color: colorPalette.primary,
    textAlign: 'center',
    marginVertical: 10,
  },
  weekCircles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  dayContainer: {
    alignItems: 'center',
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
    backgroundColor: colorPalette.pastelGreen,
  },
  circleEmpty: {
    backgroundColor: colorPalette.secondary,
  },
});

export default StreakDisplay;

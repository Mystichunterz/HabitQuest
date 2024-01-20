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

const InboxPlaceholderScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Placeholder!</Text>
      <MaterialCommunityIcons name="inbox" size={50} color="black" />
    </View>
  );
};

export default InboxPlaceholderScreen;

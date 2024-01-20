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

const ChatPlaceholderScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Chat Placeholder!</Text>
      <Text>Might outsource later</Text>
      <MaterialCommunityIcons name="chat" size={50} color="black" />
    </View>
  );
};

export default ChatPlaceholderScreen;

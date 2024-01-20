import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from "react-native";
import colorPalette from "../config/colours";
import { useNavigation } from '@react-navigation/native';
const AddCommunityList = ({ data, title }) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {

        return (
            <TouchableOpacity
                style={[
                    styles.listContainer,
                ]}
                onPress={() => {
                    navigation.navigate(item.url);
                }}
            >
                <View style={styles.listBar}>
                    <View style={styles.listBarImage}>{/* Image or red fill */}</View>
                    <View style={styles.listBarDetails}>
                        <Text style={styles.listBarHeading}>{item.heading}</Text>


                        <Text style={styles.listBarstreakCount}>
                            Current Member: {item.currentMenber}
                        </Text>
                        <Text style={styles.skillAddedOn}>
                            Founded on: {item.communityFoundedAt}
                        </Text>
                        <Text style={styles.skillListViewMore}>View More</Text>



                    </View>
                </View>
            </TouchableOpacity>
        );
    };

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
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    dragContainer: {
        backgroundColor: colorPalette.secondary,
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
    },
    dragHeaderOption: {
        marginRight: 12,
        alignSelf: "center",
    },
    dragHeaderOptionText: {
        fontSize: 18,
        color: colorPalette.titleBlue,
    },
    listContainer: {
        alignSelf: "stretch",
        alignItems: "flex-start",
        marginBottom: 24,
    },
    listBar: {
        backgroundColor: colorPalette.primary,
        alignSelf: "stretch",
        borderRadius: 25,
        flexDirection: "row",
        padding: 12,
    },
    joinNewCommunityItem: {
        backgroundColor: colorPalette.addCommunity,
        alignSelf: "stretch",
        borderRadius: 25,
        flexDirection: "row",
        padding: 12,
    },
    listBarImage: {
        width: 60,
        height: 60,
        backgroundColor: "#FF0000", // placeholder for image
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
        color: colorPalette.titleBlue,
        fontWeight: "bold",
    },
    listBarstreakCount: {
        fontSize: 14,
        color: colorPalette.titleBlue,
    },
    skillAddedOn: {
        fontSize: 14,
        color: colorPalette.titleBlue,
    },
    skillListViewMore: {
        fontSize: 14,
        color: colorPalette.titleBlue,
    },
});

export default AddCommunityList;

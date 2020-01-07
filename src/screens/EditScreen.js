import React from "react";
import { Text, View, StyleSheet } from "react-native";

const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Edit Screen - {navigation.getParam("id")}</Text>
    </View>
  );
};

style = StyleSheet.create({});

export default EditScreen;

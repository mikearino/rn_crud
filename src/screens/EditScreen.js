import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Context } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);

  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput value={title} onChangeText={setTitle} />
      <Text>Edit Content:</Text>
      <TextInput value={content} onChangeText={setContent} />
    </View>
  );
};

style = StyleSheet.create({});

export default EditScreen;

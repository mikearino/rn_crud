import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.inputStyle}
      />
      <Text style={styles.label}>Enter Contents:</Text>
      <TextInput
        value={content}
        onChangeText={text => setContent(text)}
        style={styles.inputStyle}
      />
      <Button
        onPress={() =>
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          })
        }
        title="Add Blog Post"
      />
    </View>
  );
};

styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center"
  },
  inputStyle: {
    fontSize: 18,
    width: 300,
    height: 50,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    marginTop: 20,
    fontSize: 20,
    marginBottom: 5
  }
});

export default CreateScreen;

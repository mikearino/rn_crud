import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
        onPress={() => {
          onSubmit(title, content);
        }}
        title="Save Blog Post"
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default BlogPostForm;

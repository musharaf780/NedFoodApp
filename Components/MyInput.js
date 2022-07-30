import React from "react";
import { View, Text, TextInput } from "react-native";
import Color from "../Constants/Color";
const MyInput = (props) => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text>{props.title}</Text>
      <View
        style={{
          height: 50,
          width: "100%",

          borderRadius: 10,
          borderColor: Color.primaryColor,
          borderWidth: 0.5,
          paddingHorizontal: 10,
          marginTop: 10,
        }}
      >
        <TextInput
          secureTextEntry={props.secureTextEntry}
          onChangeText={props.onChangeText}
          placeholder={props.placeholder}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </View>
  );
};
export default MyInput;

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Color from "../Constants/Color";
const MyAuthButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        height: 50,
        width: "100%",
        backgroundColor: Color.btnColor,
        borderRadius: 20,
        marginTop: "10%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 14, fontWeight: "bold", color: "white" }}>
        {props.btnTitle}
      </Text>
    </TouchableOpacity>
  );
};
export default MyAuthButton;

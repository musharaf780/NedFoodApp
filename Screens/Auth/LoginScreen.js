import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import Color from "../../Constants/Color";
import MyInput from "../../Components/MyInput";
import MyAuthButton from "../../Components/MyAuthButton";
const LoginScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          height: "25%",
          width: "100%",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/Images/log.png")}
          style={{ height: 80, width: 80 }}
        />
        <Text>FOOD APP</Text>
      </View>

      <View style={{ height: "75%", width: "100%", paddingHorizontal: 10 }}>
        <MyInput
          placeholder="Please enter your email address"
          title="Email Address"
        />
        <MyInput placeholder="Please enter your password" title="Password" />

        <View>
          <MyAuthButton
            onPress={() => {
              alert("Yahoo its press 1");
            }}
            btnTitle="LOGIN"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

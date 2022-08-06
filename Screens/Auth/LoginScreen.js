import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import Color from "../../Constants/Color";
import MyInput from "../../Components/MyInput";
import MyAuthButton from "../../Components/MyAuthButton";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    // if (email === "") {
    //   alert("Please enter your email first");
    // } else if (password === "") {
    //   alert("Please enter your password first");
    // } else if (email === "musharaf@gmail.com" && password === "admin123") {
    // props.navigation.navigate("CategoryScreens");
    // } else {
    //   alert("Please enter a valid email or password");
    // }
    props.navigation.navigate("Category");
  };

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
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <MyInput
          secureTextEntry
          placeholder="Please enter your password"
          title="Password"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />

        <View>
          <MyAuthButton onPress={loginHandler} btnTitle="LOGIN" />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

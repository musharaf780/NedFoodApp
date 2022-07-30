import React from "react";
import { View, Text, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Imagea
        source={require("../assets/Images/log.png")}
        style={{ height: 100, width: 100}}
      />
      <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>
        FOOD APP
      </Text>
    </View>
  );
};
export default SplashScreen;

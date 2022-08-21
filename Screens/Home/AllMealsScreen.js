import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { AllMeals } from "../../Data/DummyData";
const AllMealsScreen = (props) => {
  const CatId = props.route.params.catId;
  const Data = props.route.params.data;

  const MyMeals = AllMeals.filter((item) => item.catId == CatId);

  return (
    <View>
      <FlatList
        data={MyMeals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("MealsDetailScreen", {
                  mealsData: itemData.item,
                });
              }}
              style={{
                height: 100,
                width: "97%",
                margin: 5,
              }}
            >
              <ImageBackground
                borderRadius={10}
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "flex-end",
                  overflow: "hidden",
                }}
                source={{ uri: itemData.item.image }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#00000082",
                    borderRadius: 10,
                    justifyContent: "flex-end",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 20,
                    }}
                  >
                    {itemData.item.name}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default AllMealsScreen;

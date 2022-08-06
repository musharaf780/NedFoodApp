import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { CATEGORY } from "../../Data/DummyData";
const CategoryScreen = (props) => {
  return (
    <View>
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <FlatList
          data={CATEGORY}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={(itemData) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("AllMealsScreen", {
                    catId: itemData.item.id,
                  });
                }}
                style={{
                  height: 120,
                  width: "48%",
                  margin: 5,
                }}
              >
                <ImageBackground
                  borderRadius={20}
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
                      borderRadius: 20,
                      justifyContent: "flex-end",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 18,
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
    </View>
  );
};

export default CategoryScreen;

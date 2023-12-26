import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { BlurView } from "expo-blur";
import Categories from "../components/Categories";
import { Ionicons } from "@expo/vector-icons";
import SPACING from "../configs/SPACING";
import SearchField from "../components/SearchField";
import coffees from "../configs/coffees";
import colors from "../configs/colors";
import { useState } from "react";

const avatar = require("../assets/avatar.jpg");
const { width } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.dark }}>
      <StatusBar />
      <ScrollView style={{ padding: SPACING }}>
        <View
          style={{
            padding: SPACING,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: SPACING,
              overflow: "hidden",
              width: SPACING * 4,
              height: SPACING * 4,
            }}
          >
            <BlurView
              style={{
                width: SPACING * 4,
                height: SPACING * 4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="menu"
                size={SPACING * 2.5}
                color={colors.secondary}
              />
            </BlurView>
          </TouchableOpacity>
          <View
            style={{
              overflow: "hidden",
              width: SPACING * 4,
              height: SPACING * 4,
              borderRadius: SPACING,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                padding: SPACING / 2,
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: SPACING,
                }}
                source={avatar}
              />
            </BlurView>
          </View>
        </View>

        <View style={{ width: "60%", marginVertical: SPACING * 3 }}>
          <Text
            style={{
              color: colors.white,
              fontSize: SPACING * 4,
              fontWeight: "bold",
            }}
          >
            Find the best coffee for you
          </Text>
        </View>
        <SearchField />
        <Categories onChange={(id) => setActiveCategory(id)} />

        {/* Show Products */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {coffees
            .filter((item) => {
              if (activeCategory === null) {
                return true;
              }
              return item.categoryId === activeCategory;
            })
            .map((item) => (
              <View
                key={item.id}
                style={{
                  width: width / 2 - SPACING * 2,
                  marginBottom: SPACING,
                  borderRadius: SPACING * 2,
                  overflow: "hidden",
                }}
              >
                <BlurView
                  tint="dark"
                  intensity={90}
                  style={{
                    padding: SPACING,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: "100%",
                      height: 150,
                    }}
                  >
                    <Image
                      source={item.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: SPACING * 2,
                      }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        borderBottomStartRadius: SPACING * 3,
                        borderTopEndRadius: SPACING * 2,
                        overflow: "hidden",
                      }}
                    >
                      <BlurView
                        tint="dark"
                        intensity={70}
                        style={{
                          flexDirection: "row",
                          padding: SPACING - 2,
                        }}
                      >
                        <Ionicons
                          name="star"
                          style={{
                            marginLeft: SPACING / 2,
                          }}
                          color={colors.primary}
                          size={SPACING * 1.7}
                        />
                        <Text
                          style={{
                            color: colors.white,
                            marginLeft: SPACING / 2,
                          }}
                        >
                          {item.rating}
                        </Text>
                      </BlurView>
                    </View>
                  </TouchableOpacity>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: colors.white,
                      fontWeight: "bold",
                      fontSize: SPACING * 1.7,
                      marginTop: SPACING,
                      marginBottom: SPACING / 2,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{ color: colors.white, fontSize: SPACING * 1.7 }}
                  >
                    {item.included}
                  </Text>
                  <View
                    style={{
                      marginVertical: SPACING / 2,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: colors.white,
                          marginRight: SPACING / 2,
                          fontSize: SPACING * 1.6,
                        }}
                      >
                        $
                      </Text>
                      <Text
                        style={{
                          color: colors.white,
                          fontSize: SPACING * 1.6,
                        }}
                      >
                        {item.price}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("Coffee", {
                          coffee: item,
                        })
                      }
                      style={{
                        backgroundColor: colors.primary,
                        padding: SPACING / 2,
                        borderRadius: SPACING,
                      }}
                    >
                      <Ionicons
                        name="add"
                        size={SPACING * 2}
                        color={colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

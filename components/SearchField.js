import { StyleSheet, Text, TextInput, View } from "react-native";

import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import SPACING from "../configs/SPACING";
import colors from "../configs/colors";

const SearchField = () => {
  return (
    <View style={{ borderRadius: SPACING, overflow: "hidden" }}>
      <BlurView
        intensity={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            width: "100%",
            color: colors.white,
            fontSize: SPACING * 1.7,
            padding: SPACING,
            paddingLeft: SPACING * 3,
          }}
          placeholder="Find Your Coffee..."
          placeholderTextColor={colors.light}
        />
        <Ionicons
          name="search"
          style={{
            position: "absolute",
            left: SPACING / 2,
            paddingLeft: 5,
          }}
          size={SPACING * 2}
          color={colors.light}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({});

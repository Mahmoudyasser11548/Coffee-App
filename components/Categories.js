import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import SPACING from "../configs/SPACING";
import categories from "../configs/categories";
import colors from "../configs/colors";

const Categories = ({ onChange }) => {
  const [activeCategory, setActiveCategory] = useState(1);

  const handlePress = (id) => {
    setActiveCategory(id);
    onChange(id);
  };

  return (
    <View>
      <FlatList
        horizontal={true}
        data={categories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginVertical: SPACING }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginRight: SPACING * 2, alignItems: "center" }}
            onPress={() => handlePress(item.id)}
          >
            <Text
              style={[
                { color: colors.secondary, fontSize: SPACING * 2.5 },
                activeCategory === item.id && { color: colors.primary },
              ]}
            >
              {item.name}
            </Text>
            {activeCategory === item.id && (
              <View
                style={{
                  height: SPACING,
                  width: SPACING,
                  backgroundColor: colors.primary,
                  borderRadius: SPACING / 2,
                  marginTop: SPACING / 2,
                }}
              />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});

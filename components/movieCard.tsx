import * as WebBrowser from "expo-web-browser";
import React, { PureComponent } from "react";
import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";

type CharacterProps = {
  title?: string;
  children?: Element;
  style?: any;
};

export const MovieCard = ({ title }: CharacterProps) => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100",
  },

  cardText: {},

  card: {
    borderRadius: 20,

    width: 140,
    height: 180,

    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  cardImage: {},
});

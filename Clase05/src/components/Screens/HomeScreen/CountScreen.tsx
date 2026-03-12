import React from "react";
import { Pressable, Text, View } from "react-native";
import { stylesCountScreen } from "./CountScreen.style";

type CountScreenProps = {
  label: string;
  OnPress: () => void;
};

export const CountScreen: React.FC<CountScreenProps> = ({ label, OnPress }) => {
  return (
    <View style={stylesCountScreen.container}>
      <Pressable style={stylesCountScreen.button} onPress={OnPress}>
        <Text style={stylesCountScreen.label}>{label}</Text>
      </Pressable>
    </View>
  );
};
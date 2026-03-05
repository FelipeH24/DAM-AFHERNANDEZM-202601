import React from "react";
import { Pressable, Text } from "react-native";
import { stylesCountScreen } from "./CountScreen.style";

type CountScreenProps = {
  label: string; // string en minúscula (no String)
  OnPress: () => void;
};

export const CountScreen: React.FC<CountScreenProps> = ({ label, OnPress }) => {
  return (
    <Pressable style={stylesCountScreen.button} onPress={OnPress}>
      <Text style={stylesCountScreen.label}>
        {label}
      </Text>
    </Pressable>
  );
};
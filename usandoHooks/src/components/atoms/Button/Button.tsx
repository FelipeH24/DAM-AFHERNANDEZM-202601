import { Pressable, Text } from "react-native";
import { colors, space } from "../../../themes";

export const Button = ({ label, onPress }: any) => (
  <Pressable
    onPress={onPress}
    style={{
      backgroundColor: colors.primary,
      padding: space.m,
      margin: space.s,
      borderRadius: 8,
      minWidth: 60,
      alignItems: "center",
    }}
  >
    <Text style={{ color: colors.white }}>{label}</Text>
  </Pressable>
);
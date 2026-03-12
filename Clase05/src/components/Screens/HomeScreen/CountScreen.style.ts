import { StyleSheet } from "react-native";
import { colors, space } from "../../../themes";

export const stylesCountScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.primary,
    padding: space.m,
    borderRadius: 8,
    alignItems: "center",
  },
  label: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
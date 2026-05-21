import { StyleSheet } from "react-native";
import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: sizes.xxs,
    backgroundColor: colors.white,
  },
  title: {
    textAlign: "center",
    fontSize: sizes.xxl,
    fontWeight: "700",
    color: colors.black,
    marginBottom: sizes.sm,
  },
  subtitle: {
    textAlign: "center",
    fontSize: sizes.lg,
    color: colors.black,
    marginBottom: sizes.xl,
  },
  content: {
    width: "100%",
  },
});

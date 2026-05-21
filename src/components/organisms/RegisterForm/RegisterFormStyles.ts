import { StyleSheet } from "react-native";

import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({

  // Contenedor principal
  container: {
    flex: 1,

    justifyContent: "center",
  },

  // Contenedor footer
  footerContainer: {
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",

    marginTop: sizes.lg,
  },

  // Texto normal footer
  footerText: {
    fontSize: sizes.md,
  },

  // Texto LOGIN
  loginText: {
    marginLeft: sizes.xs,

    color: colors.secondary,

    fontSize: sizes.md,
    fontWeight: "600",
  },
});
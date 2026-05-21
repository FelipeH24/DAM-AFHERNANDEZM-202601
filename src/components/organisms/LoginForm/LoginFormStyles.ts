import { StyleSheet } from "react-native";

import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({

  // Contenedor principal
  container: {
    flex: 1,

    justifyContent: "center",
  },

  // Texto forgot password
  forgotPassword: {
    width: "90%",

    alignSelf: "center",
    textAlign: "right",

    marginTop: sizes.xxs,

    color: colors.primary,

    fontSize: sizes.md,
    fontWeight: "600",
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

  // Texto SIGN UP
  signUpText: {
    marginLeft: sizes.xs,

    color: colors.secondary,

    fontSize: sizes.md,
    fontWeight: "600",
  },
});
import { StyleSheet } from "react-native";

import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({

  // Contenedor principal
  container: {

    // altura
    width: "100%",

    //el margen de arriba
    marginTop: sizes.sm,
  },

  // Estilo del label
  label: {

    //margen 
    marginLeft: "5%",
    marginBottom: sizes.sm,

    color: colors.black,

    fontSize: sizes.md,
    fontWeight: "600",
  },
});
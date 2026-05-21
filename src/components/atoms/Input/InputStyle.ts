import { StyleSheet } from "react-native";

// Importamos colores y tamaños
import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({

  // Estilos del input
  input: {

    // tamaño del input
    width: "90%",
    height: sizes.inputHeight,

    // centramos el input
    alignSelf: "center",

    // bordes
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: sizes.radiusMd,

    // espaciado interno
    paddingHorizontal: sizes.md,

    // separacion entre los inputs
    marginTop: sizes.xxs,

    // Color de fondo
    backgroundColor: colors.white,

    // Color del texto escrito
    color: colors.secondary,



  },
});
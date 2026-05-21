import { StyleSheet } from "react-native";

// Importamos colores y tamaños
import { colors, sizes } from "../../../themes";

export const styles = StyleSheet.create({

  // Estilo del boton
  container: {

    // el ancho del boton
    width: "90%",

    // la altura 
    height: sizes.buttonHeight,

    // el color del fondo 
    backgroundColor: colors.primary,

    // centramos el texto del boton vertial y horizontal
    justifyContent: "center",
    alignItems: "center",

    // centramos el boton en la pantalla
    alignSelf: "center",


    // separacion superior
    marginTop: sizes.md,
    paddingHorizontal: sizes.md,

    // rendondemoa los botones
    borderRadius: sizes.radiusMd,

    // bordes
    borderWidth: 2,
    borderColor: colors.secondary,
  },


  // Estilo del texto
  text: {
    color: colors.white,
    fontSize: sizes.lg,
    fontWeight: "700",
  },
});
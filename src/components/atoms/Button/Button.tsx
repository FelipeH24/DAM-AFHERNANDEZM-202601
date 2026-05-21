import React from "react";
import { Pressable, Text } from "react-native";

// Importamos los estilos de los botones
import { styles } from "./ButtonStyle";

interface ButtonProps {
  title: string;
  onSubmit?: () => void;
}

const Button = ({ title, onSubmit }: ButtonProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={onSubmit}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
import React from "react";

import { View, Text } from "react-native";

// Estilos
import { styles } from "./AuthTemplateStyles";

// Props
interface AuthTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const AuthTemplate = ({
  title,
  subtitle,
  children,
}: AuthTemplateProps) => {

  return (

    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.title}>
        {title}
      </Text>

      {/* Subtítulo */}
      {subtitle && (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      )}

      {/* Contenido */}
      <View style={styles.content}>
        {children}
      </View>

    </View>
  );
};

export default AuthTemplate;
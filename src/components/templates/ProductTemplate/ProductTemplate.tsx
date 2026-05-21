import React from "react";
import { View, Text } from "react-native";

import { styles } from "./ProductTemplateStyles";

interface ProductTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const ProductTemplate = ({
  title,
  subtitle,
  children,
}: ProductTemplateProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default ProductTemplate;

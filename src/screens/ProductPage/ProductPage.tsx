import React from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { ProductTemplate } from "../../components/templates";
import { ProductForm } from "../../components/organisms";
import { AuthStackParamList } from "../../Routes";
import { insertProduct, ProductRecord } from "../../core/config";

const ProductPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleRegisterProduct = async (product: ProductRecord) => {
    try {
      await insertProduct(product);
      Alert.alert("Producto guardado", "El producto se registró correctamente.");
      navigation.navigate("Dashboard");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "No se pudo guardar el producto.");
    }
  };

  return (
    <ProductTemplate
      title="Registrar producto"
      subtitle="Completa los datos del producto"
    >
      <ProductForm onSubmit={handleRegisterProduct} />
    </ProductTemplate>
  );
};

export default ProductPage;

import React, { useCallback, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Button } from "../../components/atoms";
import { AuthStackParamList } from "../../Routes";
import { getProducts, ProductRecord } from "../../core/config";

import { styles } from "./DashboardPageStyles";

const DashboardPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const [productsCount, setProductsCount] = useState(0);
  const [products, setProducts] = useState<ProductRecord[]>([]);

  const loadProducts = async () => {
    const products = await getProducts();
    setProducts(products);
    setProductsCount(products.length);
  };

  useFocusEffect(
    useCallback(() => {
      loadProducts();
    }, [])
  );

  const handleOpenProduct = () => {
    navigation.navigate("Product");
  };

  const renderProduct = ({ item }: { item: ProductRecord }) => (
    <View style={styles.productCard}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productMeta}>{`Código: ${item.code}`}</Text>
      <Text style={styles.productMeta}>{`Stock: ${item.stock}`}</Text>
      <Text style={styles.productMeta}>{`Precio: $${item.price}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar producto</Text>
      <Text style={styles.subtitle}>
        Desde aquí puedes registrar y administrar tus productos.
      </Text>
      <Text style={styles.counter}>{`Productos guardados: ${productsCount}`}</Text>
      <Button title="Registrar nuevo producto" onSubmit={handleOpenProduct} />

      <View style={styles.recentBar}>
        <Text style={styles.recentText}>Todos los productos recientes</Text>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item, index) => `${item.code}-${index}`}
        renderItem={renderProduct}
        contentContainerStyle={styles.productList}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay productos registrados aún.</Text>
        }
      />
    </View>
  );
};

export default DashboardPage;

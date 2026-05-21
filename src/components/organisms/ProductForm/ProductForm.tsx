import React, { useState } from "react";
import { View } from "react-native";

import { InputField } from "../../moleculas";
import { Button } from "../../atoms";

import { styles } from "./ProductFormStyles";
import { ProductRecord } from "../../../core/config";

interface ProductFormProps {
  onSubmit: (product: ProductRecord) => void;
}

const ProductForm = ({ onSubmit }: ProductFormProps) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [stock, setStock] = useState("");
  const [cost, setCost] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    onSubmit({
      name,
      code,
      stock: Number(stock) || 0,
      cost: Number(cost) || 0,
      price: Number(price) || 0,
      description,
    });
  };

  return (
    <View style={styles.container}>
      <InputField
        label="Nombre del producto"
        placeholder="Ej. Agua mineral"
        value={name}
        onChangeText={setName}
      />
      <InputField
        label="Código"
        placeholder="Ej. P001"
        value={code}
        onChangeText={setCode}
      />
      <InputField
        label="Cantidad en stock"
        placeholder="Ej. 100"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
      />
      <InputField
        label="Costo de venta"
        placeholder="Ej. 10.00"
        value={cost}
        onChangeText={setCost}
        keyboardType="numeric"
      />
      <InputField
        label="Precio de venta"
        placeholder="Ej. 15.00"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <InputField
        label="Descripción"
        placeholder="Descripción del producto"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Registrar producto" onSubmit={handleSubmit} />
    </View>
  );
};

export default ProductForm;

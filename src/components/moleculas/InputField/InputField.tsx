import React from "react";

import { View, Text, KeyboardTypeOptions } from "react-native";

import { Input } from "../../atoms";

import { styles } from "./InputFieldStyle";

interface InputFieldProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
}

const InputField = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  keyboardType,
  multiline,
}: InputFieldProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        multiline={multiline}
      />
    </View>
  );
};

export default InputField;
import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Button } from "../../atoms";

import { styles } from "./RegisterFormStyles"; 

// Importamos molecules
import {
  InputField,
} from "../../moleculas";

interface RegisterFormProps {
  onSubmit: (username: string, password: string, email: string) => void;
}

const RegisterForm = (
  { onSubmit }: RegisterFormProps
) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!username || !password || !email) {
      Alert.alert("Error", "Debes completar username, email y contraseña.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    onSubmit(username, password, email);
  };

  return (
    <View>
      <InputField
        label="FULL NAME"
        placeholder="Enter your full name"
        value={fullName}
        onChangeText={setFullName}
      />
      <InputField
        label="USERNAME"
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        label="EMAIL"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <InputField
        label="DATE OF BIRTH"
        placeholder="YYYY-MM-DD"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />
      <InputField
        label="PASSWORD"
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <InputField
        label="CONFIRM PASSWORD"
        placeholder="Confirm your password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button
        title="CREATE ACCOUNT"
        onSubmit={handleRegister}
      />
    </View>
  );
};

export default RegisterForm;
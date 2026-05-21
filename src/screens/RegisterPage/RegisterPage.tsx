import React from "react";
import { Alert } from "react-native";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";
import { saveUser } from "../../core/auth" ;

const RegisterPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleRegister = async (
    username: string,
    password: string,
    email: string
  ) => {
    if (!username || !password || !email) {
      Alert.alert("Error", "Debes completar username, email y contraseña.");
      return;
    }

    const result = await saveUser({ username, password, email });

    if (result) {
      Alert.alert("Cuenta creada", "Ahora inicia sesión con tu usuario.");
      navigation.navigate("Login");
      return;
    }

    Alert.alert("Error", "No se pudo crear la cuenta. Intenta nuevamente.");
  };

  return (
    <AuthTemplate
      title="Register"
      subtitle="Create a new account"
    >
      <RegisterForm onSubmit={handleRegister} />
    </AuthTemplate>
  );
};

export default RegisterPage;
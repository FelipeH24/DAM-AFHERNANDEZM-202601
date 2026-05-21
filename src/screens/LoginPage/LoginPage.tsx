import React from "react";
import { Alert } from "react-native";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";
import { loginUser } from "../../core/auth";

const LoginPage = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleLogin = async (username: string, password: string) => {
    const success = await loginUser({ username, password });

    if (success) {
      navigation.navigate("Dashboard");
      return;
    }

    Alert.alert("Error", "Usuario o contraseña incorrectos.");
  };

  const handleSignUp = () => {
    navigation.navigate("Register");
  };

  return (
    <AuthTemplate
      title="LOGIN"
    >
      <LoginForm
        onLogin={handleLogin}
        onSignUp={handleSignUp}
      />
    </AuthTemplate>
  );
};

export default LoginPage;
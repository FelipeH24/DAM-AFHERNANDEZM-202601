import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";

// Importamos atoms
import { Button } from "../../atoms";

import { styles } from "./LoginFormStyles"; 

// Importamos molecules
import {
  InputField,
} from "../../moleculas";

// Props del formulario
interface LoginProps {
  onLogin: (username: string, password: string) => void;
  onSignUp: () => void;
}

// Organism LoginForm
const LoginForm = ({
  onLogin,
  onSignUp,
}: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onLogin(username, password);
  };

  return (
    <View>
      <InputField
        label="Username"
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>
      <Button
        title="LOGIN"
        onSubmit={handleLogin}
      />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={onSignUp}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;
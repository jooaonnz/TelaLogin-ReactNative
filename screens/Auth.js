import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Alert,
  Pressable,
} from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons"; // importando ícones
import PageHome from './screens/PageHome'; // Importando a tel

//tela default/inicial de login
function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // estado para mostrar/esconder senha

  const handleLogin = () => {
    Alert.alert("Login realizado com sucesso!");
  };

  const handleResetPassword = () => {
    Alert.alert("Tela de redefinição de senha em breve!");
  };

  // Validação para habilitar o botão
  const isValid = email.trim() !== "" && password.trim() !== "";

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://www.pikpng.com/pngl/b/220-2200174_carros-png-carros-seminovos-png-clipart.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.title1}>Seja bem vindo</Text>
      <Text style={styles.title1}>á Locamobi!</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeButton}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </Pressable>
      </View>

      <Button
        style={styles.Buttons}
        title="ENTRAR"
        onPress={() => navigation.navigate("PageHome")}
        disabled={!isValid}
      />

      <View style={styles.linksContainer}>
        <Button
          style={styles.Buttons}
          title="CRIARCONTA"
          onPress={() => navigation.navigate("Register")}
        ></Button>

        <Button
          style={styles.Button}
          title="ESQUECI MINHA SENHA"
          onPress={() => navigation.navigate("ForgetPassword")}
        />
      </View>
    </View>
  );
}
//tela de cadastro
function RegisterScreen() {
  const navigation = useNavigation();

  const handleRegister = () => {
    Alert.alert("Cadastro realizado com sucesso!");
    navigation.goBack("Login");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");

  const isValid =
    email.trim() !== "" &&
    password.trim() !== "" &&
    cpf.trim() !== "" &&
    name.trim() !== "";

  return (
    <View style={styles.container2}>
      <Text style={styles.title1}>Crie sua conta na Locamobi!</Text>

      <TextInput
        style={styles.inputName}
        placeholder="Nome"
        keyboardType="text"
        autoCapitalize="words"
        textContentType="name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.cpfContainer}>
        <TextInput
          style={styles.cpfInput}
          placeholder="cpf"
          value={cpf}
          onChangeText={setCpf}
          keyboardType="numeric"
          maxLength={11}
          autoCapitalize="none"
          textContentType="cpf"
        />
      </View>

      <Button
        style={styles.Button}
        title="Cadastrar"
        onPress={handleRegister}
        disabled={!isValid}
      />
    </View>
  );
}

//tela de redefinição de senha
function ForgetPassword() {
  const navigation = useNavigation();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValid = newPassword.trim() !== "" && confirmPassword.trim() !== "";

  const handleReset = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert("As senhas não coincidem!");
      return;
    } else {
      Alert.alert("Senha atualizada!");
      navigation.goBack("Login");
    }
  };

  return (
    <View style={styles.container3}>
      <Text style={styles.title1}>Refefinir senha</Text>

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Nova senha"
          style={styles.passwordInput}
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirmar nova senha"
          style={styles.passwordInput}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <Button
        style={styles.Button}
        title="Redefinir senha"
        onPress={handleReset}
        disabled={!isValid}
        onChangeText
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  logo: {
    width: 350,
    height: 100,
    alignSelf: "center",
    marginBottom: 40,
  },
  title1: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  eyeButton: {
    padding: 5,
  },
  linksContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    color: "#007BFF",
    marginTop: 10,
  },
  container2: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  inputName: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  cpfContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  cpfInput: {
    flex: 1,
    height: 50,
  },
  container3: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
});

//navegação entre telas
const RootStack = createNativeStackNavigator({
  initialRouteName: "Login",
  screens: {
    Login: LoginScreen,
    Register: RegisterScreen,
    ForgetPassword: ForgetPassword,
    PageHome: PageHome
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />


}

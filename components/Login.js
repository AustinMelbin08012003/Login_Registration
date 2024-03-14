import * as React from "react";
import { View, text, Image, StyleSheet, Text, Keyboard } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";

import logo from "../assets/logo.jpg";

function Login(props) {
  const [showPassword, setShowPassword] = React.useState(false);
  console.log(props);
  return (
    <View
      style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#a4925b",}}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.greet}>Welcome Back!</Text>
      <TextInput
        style={styles.emaill}
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        style={styles.passl}
        placeholder="Password"
        label="Password"
        secureTextEntry = {!showPassword}
        right = {
          <TextInput.Icon
          icon={showPassword ? "eye" : "eye-off"}
          onPress={()=>{
            Keyboard.dismiss;
            setShowPassword(!showPassword);
        }}
        />
      }
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Text
        style={styles.forgot}
        onPress={() => props.navigation.navigate("Recovery")}
      >
        Forgot Password?
      </Text>
      <Button
        style={styles.login}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Landing")}
      >
        Login
      </Button>
      <Text>
        Don't have an account?
        <Text
          style={{ color: "white" }}
          onPress={() => props.navigation.navigate("Registration")}
        >
        Registration
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    logo: {
      height: 200,
      width: 200,
    },
    login: {
      marginTop: 20,
      width: "60%",
      backgroundColor: "black",
    },
    passl: {
      width: "60%",
      marginTop: 20,
    },
    forgot: {
      color: "purple",
      fontSize: 10,
      textAlign: "right",
    },
    greet: {
      color: "purple",
      fontSize: 30,
      fontWeight: "950",
      marginBottom: 20,
    },
    emaill: {
      width: "60%",
      marginTop: 20,
    }
  });
  

export default Login;
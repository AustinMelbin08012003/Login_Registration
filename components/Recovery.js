import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";

import logo from "../assets/logo.jpg";

function Recovery(props) {
  console.log(props);
  return (
    <View
      style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#a4925b",}}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.rest}>Reset Password</Text>
      <TextInput
        style={styles.passl}
        label="Email address"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button
        style={styles.reset}
        icon="login"
        mode="contained"
        onPress={() => console.log("Pressed")}
      >
        SEND RESET CODE
      </Button>
      <Text
        style={styles.back}
        onPress={() => props.navigation.navigate("Login")}
      >
        Back to Login
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    color: "purple",
    fontSize: 12,
  },
  reset: {
    width: "60%",
    marginTop: 20,
    backgroundColor: "black",
  },
  logo: {
    height: 200,
    width: 200,
  },
  login: {
    width: "20%",
  },
  passl: {
    marginTop: 40,
    width: "60%",
  },
  forgot: {
    color: "white",
    fontSize: 10,
    textAlign: "right",
  },
  rest: {
    color: "purple",
    fontSize: 30,
    fontWeight: "900",
  },
});

export default Recovery;
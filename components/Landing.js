import * as React from "react";
import { View, text, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";

import logo from "../assets/logo.jpg";

function Landing(props) {
  console.log(props);
  return (
    <View
      style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#a4925b",}}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={styles.grt}>Welcome to our LODI_CODE</Text>
      <Button
        style={styles.logout}
        icon="login"
        mode="contained"
        onPress={() => props.navigation.navigate("Home")}
      >
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    logo: {
      height: 200,
      width: 200,
      marginTop: -50,
    },
    login: {
      marginTop: 10,
      width: "20%",
    },
    passl: {
      marginTop: 10,
    },
    forgot: {
      color: "purple",
      fontSize: 10,
      textAlign: "right",
    },
    grt: {
      color: "purple",
      fontSize: 30,
      fontWeight: "1000",
      textAlign: "center",
    },
    logout: {
      width: "60%",
      marginTop: 200,
      backgroundColor: "black",
    },
  });  

export default Landing;
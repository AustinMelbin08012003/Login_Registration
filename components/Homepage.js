import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

import logo from "../assets/LODI_CODE.png";
import item1 from "../assets/Item1.jpg";
import item2 from "../assets/Item2.png";
import item3 from "../assets/Iterm3.png";
import item4 from "../assets/Item4.png";
import item5 from "../assets/Item5.png";
import item6 from "../assets/Item6.png";

const Homepage = ({ navigation }) => {
  const handleLogout = () => {
    navigation.replace('Homepage'); 
    
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.header}>Welcome to Our Dashboard</Text>
        </View>
        <View style={styles.menuContainer}>
          {/* Item Container 1 */}
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={item1} style={styles.itemImage} />
            <Text style={styles.itemText}>Jacket</Text>
          </TouchableOpacity>

          {/* Item Container 2 */}
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={item2} style={styles.itemImage} />
            <Text style={styles.itemText}>Longsleeve</Text>
          </TouchableOpacity>

          {/* Item Container 3 */}
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={item3} style={styles.itemImage} />
            <Text style={styles.itemText}>Tshirt-Onmyouji</Text>
          </TouchableOpacity>

          {/* Item Container 4 */}
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={item4} style={styles.itemImage} />
            <Text style={styles.itemText}>Shoes</Text>
          </TouchableOpacity>

          {/* Item Container 5 */}
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={item5} style={styles.itemImage} />
            <Text style={styles.itemText}>Cargo Pants</Text>
          </TouchableOpacity>

          {/* Item Container 6 */}
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={item6} style={styles.itemImage} />
            <Text style={styles.itemText}>Watch</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#2c305f",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FFFFFF', // Change text color to white
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%', // Adjust the width as per your preference
    backgroundColor: '#303030', // Change background color
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10, // Add padding to create space between item image and text
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  itemText: {
    color: 'white', // Change text color to white
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10, // Add margin to create space between item text and button
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 30, // Reduced paddingHorizontal value
    borderRadius: 25,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Homepage;

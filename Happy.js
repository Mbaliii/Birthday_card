import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Happy = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false }); 
  }, [navigation]);

  const navigateToHome = () => {
    navigation.navigate("Home"); 
  };

  return (
    <ImageBackground
      source={require('./assets/Card.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
       
      </View>

      
      <TouchableOpacity onPress={navigateToHome} style={styles.button}>
        <Text style={styles.buttonText}>Byeee!!!!</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    marginBottom: 40,
  },
  text: {
    textAlign: "center",     
    color: "white", 
  },
  button: {
    padding: 10,
    backgroundColor: "Blue",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Happy;

import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Happy from "./Happy";

const Home = ({ navigation }) => {
    const navigateToOtherPage = () => {
        navigation.navigate(Happy);
    };

    return (
        <ImageBackground
            source={require('./assets/Thembi.png')}
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity  onPress={navigateToOtherPage}>
                    <Text  style={{ color: 'white', fontSize: 18 }}>Click Me</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Home;

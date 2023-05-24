import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from '../config/colors'
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";

const WelcomeScreen = () => {
    return ( 
        <ImageBackground
            source={require("../assets/WelcomeScreenImg.jpg")}
            style={styles.welcomeContainer}
        >
            <View
                style={styles.logoContainer}
            >
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                />
                <CustomText
                    style={styles.logoText}
                >
                    Welcome to the GuruWithIt!
                </CustomText>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton 
                    title="Login"
                    onPress={() => console.log("clicked login")}
                    style={styles.loginButton}
                />
                <CustomButton 
                    title="Register"
                    onPress={() => console.log("clicked register")}
                    style={styles.registerButton}
                    color="darkorange"
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
        width: "100%",
    },
    logoText: {
        color: colors.pink,
        fontWeight: "bold",
        fontSize: 20,
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
    },  
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.black,
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.white,
    }
})
 
export default WelcomeScreen;
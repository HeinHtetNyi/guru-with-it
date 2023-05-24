import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors"
import {FontAwesome} from "@expo/vector-icons"

const ViewImageScreen = () => {
    return ( 
        <View
            style={styles.container}
        >
            <FontAwesome name="close" style={styles.closeButton} color="white" size={35} />
            <FontAwesome name="trash-o" style={styles.deleteButton} size={35} color="white" />
            <Image 
                resizeMode="contain"
                source={require('../assets/jacket.jpg')}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    closeButton: {
        position: "absolute",
        top: 40,
        left: 30,
    },
    deleteButton: {
        position: "absolute",
        top: 40,
        right: 30,
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
 
export default ViewImageScreen;
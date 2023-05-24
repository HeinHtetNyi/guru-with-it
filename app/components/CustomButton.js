import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from "../config/colors"

const CustomButton = ({
    title,
    onPress,
    color = "orange",
    style
}) => {
    return ( 
        <TouchableOpacity onPress={onPress} style={[styles.container, {...style, backgroundColor: colors[color]}]}>
            <View>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginVertical: 10,
        width: "100%",
    },
    buttonText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: "bold",
    }
})
 
export default CustomButton;
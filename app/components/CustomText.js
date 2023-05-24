import { View, Text, StyleSheet, Platform } from 'react-native';

const CustomText = ({children, style, ...props}) => {
    return ( 
        <Text style={[styles.text, {...style}]} {...props}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})

export default CustomText;
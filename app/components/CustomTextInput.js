import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from '../config/colors'

const CustomTextInput = ({
    icon,
    width="100%",
    ...props
}) => {
    return (  
        <View style={[styles.container, {width: width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={30} style={styles.icon} />}
            <TextInput 
                placeholderTextColor={colors.grey}
                style={styles.textInput}
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        gap: 10,
        alignItems: "center",
    },
    textInput: {
        color: colors.black,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    },
    icon: {

    }
})
 
export default CustomTextInput;
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import colors from '../config/colors'

const CustomImagePicker = ({
    imageUri,
}) => {
    return (  
        <TouchableOpacity style={styles.container}>
            {
                imageUri ? <Image source={{uri: imageUri}} style={styles.image} /> :
                <MaterialCommunityIcons name="camera" size={40} style={styles.icon} />
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderRadius: 15,
        backgroundColor: colors.lightGrey,
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        alignSelf: "center",
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
 
export default CustomImagePicker;
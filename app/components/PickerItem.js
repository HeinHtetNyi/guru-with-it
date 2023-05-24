import { StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';

const PickerItem = ({
    item, 
    onPress,
}) => {
    return (  
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <CustomText>{item.label}</CustomText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    }
})
 
export default PickerItem;
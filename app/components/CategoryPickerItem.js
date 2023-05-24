import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import Icon from './Icon';

const CategoryPickerItem = ({
    item,
    onPress
}) => {
    return (
        <View style={styles.container}>
            <Icon name={item.name} backgroundColor={item.backgroundColor} size={62} />
            <TouchableOpacity onPress={onPress}>
                <CustomText style={{fontSize: 15}}>{item.label}</CustomText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 20,
        alignItems: "center",
    }
})
 
export default CategoryPickerItem;
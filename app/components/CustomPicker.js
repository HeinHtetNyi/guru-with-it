import React, {useState} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import CustomText from './CustomText';
import colors from '../config/colors'
import PickerItem from './PickerItem';

const CustomPicker = ({
    icon,
    items,
    PickerItemComponent=PickerItem,
    numColumns=1,
    selectedItem,
    onSelectedItem,
    placeholder,
    width="100%",
}) => {

    const [showModal, setShowModal] = useState(false)

    return (  
        <>
        <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
            <View style={[styles.container, {width: width}]}>
                {icon && <MaterialCommunityIcons name={icon} size={30} style={styles.icon} />}
                {
                    selectedItem ? 
                    <CustomText style={styles.text}>{selectedItem.label}</CustomText> :
                    <CustomText style={styles.placeholder}>{placeholder}</CustomText>
                }
                <MaterialCommunityIcons name="chevron-down" size={30} />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={showModal} animationType='slide'>
            <Button 
                title="close"
                onPress={() => setShowModal(false)}
            />
            <FlatList 
                data={items}
                keyExtractor={item => item.label}
                renderItem={({item}) => <PickerItemComponent 
                                    item={item}
                                    onPress={() => {
                                        setShowModal(false)
                                        onSelectedItem(item)
                                    }} 
                            />}
                numColumns={numColumns}
            />
        </Modal>
        </>
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
    placeholder: {
        color: colors.grey,
        flex: 1,
    },  
    text: {
        flex: 1
    }
})
 
export default CustomPicker;
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import {FontAwesome} from "@expo/vector-icons"

const ListItemDeletedAction = ({
    onPress,
}) => {
    return (  
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <FontAwesome name="trash-o" size={35} color={colors.white} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.red,
        width: 70,
        alignItems: "center",
        justifyContent: "center",
    }
})
 
export default ListItemDeletedAction;
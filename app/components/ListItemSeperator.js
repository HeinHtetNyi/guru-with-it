import { View, StyleSheet } from 'react-native';
import colors from "../config/colors"

const ListItemSeperator = () => {
    return (  
        <View style={styles.seperator}>

        </View>
    );
}

const styles = StyleSheet.create({
    seperator: {
        width: "100%",
        height: 1,
        backgroundColor: colors.lightGrey,
    }
})
 
export default ListItemSeperator;
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import CustomText from "./CustomText"
import colors from "../config/colors"
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListItem = ({
    title,
    subTitle,
    imagePath,
    iconComponent,
    onPress,
    renderRightActions
}) => {
    return ( 
        <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightGrey}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {iconComponent}
                    {
                        imagePath &&
                        <Image 
                            style={styles.image}
                            source={imagePath}
                            resizeMode='contain'
                        />
                    }
                    <View style={styles.detailContainer}>
                        <CustomText style={styles.title} numberOfLines={1}>{title}</CustomText>
                        { subTitle && <CustomText style={styles.subTitle} numberOfLines={2}>{subTitle}</CustomText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={24} color="black" />
                </View>
            </TouchableHighlight>
        </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        backgroundColor: "white",
    },
    detailContainer: {
        flex: 1,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "bold"
    },
    subTitle: {
        fontWeight: "600",
        fontSize: 13,
        color: colors.grey,
    }
})
 
export default ListItem;
import { View, StyleSheet, Image } from 'react-native';
import colors from "../config/colors"
import CustomText from "./CustomText"

const Card = ({
    title,
    subTitle,
    imagePath
}) => {
    return ( 
        <View style={styles.card}>
            <Image 
                source={imagePath}
                style={styles.image}
                resizeMode='contain'
            />
            <View style={styles.detailContainer}>
                <CustomText style={styles.title}>{title}</CustomText>
                <CustomText style={styles.subTitle}>{subTitle}</CustomText>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
        borderWidth: 1,
    },
    detailContainer: {
        padding: 15,
    },
    title: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    subTitle: {
        color: colors.darkorange,
        fontSize: 13,
        fontWeight: "bold",
    },
    image: {
        width: "100%",
        height: 215,
    }
})

export default Card;
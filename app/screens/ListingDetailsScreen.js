import { View, Image, StyleSheet } from 'react-native';
import Card from '../components/Card';
import CustomText from '../components/CustomText';
import colors from '../config/colors'
import ListItem from '../components/ListItem';

const ListingDetailsScreen = () => {
    return ( 
        <View>
            <Image 
                style={styles.image}
                source={require("../assets/jacket.jpg")}
                resizeMode='contain'
            />
            <View style={styles.detailContainer}>
                <CustomText style={styles.title}>Guru</CustomText>
                <CustomText style={styles.price}>$100</CustomText>
            </View>
            <ListItem 
                title="Guru Hein"
                subTitle="5 Listing"
                imagePath={require("../assets/jacket.jpg")}
            />
        </View>
    );
}
 
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailContainer: {
        padding: 15,
    },
    title: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    price: {
        color: colors.darkorange,
        fontSize: 13,
        fontWeight: "bold",
    }
})

export default ListingDetailsScreen;
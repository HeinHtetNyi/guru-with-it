import { View, StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import Card from '../components/Card';

const ListingsScreen = () => {

    const cardData = [
        {
            id: "1",
            title: "Red jacket for sale",
            subTitle: "$100",
            imagePath: require('../assets/jacket.jpg'),
        },
        {
            id: "2",
            title: "Red jacket for sale",
            subTitle: "$1000",
            imagePath: require('../assets/jacket.jpg'),
        }
    ]

    return (  
        <Screen>
            <FlatList 
                data={cardData}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => 
                    <Card 
                        title={item.title}
                        subTitle={item.subTitle}
                        imagePath={item.imagePath}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})
 
export default ListingsScreen;
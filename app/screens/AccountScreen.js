import { View, StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors'
import ListItemSeperator from '../components/ListItemSeperator';
import Icon from '../components/Icon';

const AccountScreen = () => {

    const iconList = [
        {
            title: "My Listings",
            icon: {
                name: "format-list-bulleted",
                backgroundColor: colors.pink,
            }
        },
        {
            title: "My Messages",
            icon: {
                name: "email",
                backgroundColor: colors.blue,
            }
        }
    ]

    return (  
        <Screen style={styles.screen}>
            <View style={[styles.block]}>
                <ListItem 
                    title="Guru Hein"
                    subTitle="5 Listing"
                    imagePath={require("../assets/jacket.jpg")}
                />
            </View>
            <View style={[styles.block]}>
                <FlatList 
                    data={iconList}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => 
                        <ListItem 
                        title={item.title}
                        iconComponent={<Icon 
                            name={item.icon.name}
                            backgroundColor={item.icon.backgroundColor}
                        />}
                    />}
                    ItemSeparatorComponent={ListItemSeperator}
                />  
            </View>
            <View style={styles.block}>
                <ListItem 
                    title="Log Out"
                    iconComponent={<Icon 
                        name="logout"
                        backgroundColor={colors.orange}
                    />}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        gap: 30,
    },
    block: {
        backgroundColor: colors.white,
    }
})
 
export default AccountScreen;
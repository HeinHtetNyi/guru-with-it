import React, {useState} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeletedAction from '../components/ListItemDeletedAction';
import colors from '../config/colors'

const MessagesScreen = () => {
    const initailMessages = [
        {
            id: 1,
            title: "Title 1",
            description: "Description 1",
            image: require('../assets/jacket.jpg')
        },
        {
            id: 2,
            title: "Title 2",
            description: "Description 2",
            image: require('../assets/jacket.jpg')
        }
    ]

    const [messages, setMessages] = useState(initailMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDeleteMessage = (item) => {
        setMessages(messages.filter(message => message.id !== item.id))
    }

    return (  
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                                <ListItem 
                                    title={item.title}
                                    subTitle={item.description}
                                    imagePath={item.image}
                                    onPress={() => console.log("Message clicked")}
                                    renderRightActions={
                                        () => <ListItemDeletedAction onPress={handleDeleteMessage}/>
                                    }
                                />}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => console.log("refreshing")}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})
 
export default MessagesScreen;
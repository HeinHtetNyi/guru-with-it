import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen'
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import CustomTextInput from './app/components/CustomTextInput';
import CustomPicker from './app/components/CustomPicker';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync()
    if (!result.granted) {
      alert('You need to enable permission to access the library!')
    }
  }

  const selectImage = async () => {
    try {
        const result = await ImagePicker.launchImageLibraryAsync()
        if (!result.canceled) {
            setImageUri(result.assets[0].uri)
        }
    } catch (error) {
        console.log("Error")
    }
  }

  const [imageUri, setImageUri] = useState();

  // useEffect(() => {
  //   requestPermission()
  // }, [])

  return (
    // <Screen style={styles.container}>
    //   <Button title="Select Image" onPress={selectImage} />
    //   <Image source={{uri: imageUri}} style={{height: 200, width: 200}} />
    // </Screen>
    <View style={styles.container}>
      <ListingEditScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
    // padding: 20,
    // paddingTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors'

const Screen = ({children, style}) => {
    return (  
        <SafeAreaView style={[styles.screen, style]}>
            <View style={styles.innerContainer}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.background,
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 20,
    }
})
 
export default Screen;
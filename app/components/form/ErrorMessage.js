import { View, StyleSheet, Text } from 'react-native';

const ErrorMessage = ({
    error,
    visible
}) => {
    if (!error || !visible) return

    return (  
        <View>
            <Text style={styles.error}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        color: "red"
    }
})
 
export default ErrorMessage;
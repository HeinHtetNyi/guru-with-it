import { StyleSheet, Image } from 'react-native';
import * as yup from 'yup';
import Screen from '../components/Screen';
import CustomFormField from '../components/form/CustomFormField';
import CustomForm from '../components/form/CustomForm';
import SubmitButton from '../components/form/SubmitButton';

const loginSchema = yup.object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password"),
})

const LoginScreen = () => {
    return (  
        <Screen>
            <Image 
                source={require("../assets/logo.png")}
                style={styles.logo}
            />
            <CustomForm
                initialValues={{email: "", password: ""}}
                onSubmit={() => console.log("submitted!")}
                validationSchema={loginSchema}
            >
                <CustomFormField 
                    icon="email"
                    name="email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Email"
                    keyboardType="email-address"
                />
                <CustomFormField 
                    icon="lock"
                    name="password"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Password"
                    secureTextEntry
                />
                <SubmitButton title="Login" />
            </CustomForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 100,
        width: 100,
        height: 100,
        alignSelf: "center",
    }
})
 
export default LoginScreen;
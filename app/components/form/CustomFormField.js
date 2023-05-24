import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';
import CustomTextInput from '../CustomTextInput';
import ErrorMessage from './ErrorMessage';

const CustomFormField = ({
    icon,
    name,
    width,
    ...props
}) => {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
    return (  
        <View>
            <CustomTextInput 
                icon={icon}
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...props}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    );
}

const styles = StyleSheet.create({
    
})
 
export default CustomFormField;
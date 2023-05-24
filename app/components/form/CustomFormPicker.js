import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';
import CustomPicker from '../CustomPicker';

const CustomFormPicker = ({
    items,
    name,
    placeholder,
    width,
    PickerItemComponent,
}) => {
    const { setFieldValue, errors, touched, values } = useFormikContext()

    return (  
        <View>
            <CustomPicker 
                items={items}
                selectedItem={values[name]}
                onSelectedItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                width={width}
                PickerItemComponent={PickerItemComponent}
                numColumns={3}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
    );
}
 
export default CustomFormPicker;
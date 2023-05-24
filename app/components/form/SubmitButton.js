import { View } from 'react-native';
import { useFormikContext } from 'formik';
import CustomButton from '../CustomButton';

const SubmitButton = ({title}) => {

    const { handleSubmit } = useFormikContext()
    
    return (  
        <View>
            <CustomButton 
                title={title}
                onPress={handleSubmit}
            />
        </View>
    );
}
 
export default SubmitButton;
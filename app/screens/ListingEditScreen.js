import { View, StyleSheet } from 'react-native';
import * as yup from 'yup';
import Screen from '../components/Screen';
import CustomForm from '../components/form/CustomForm';
import CustomFormField from '../components/form/CustomFormField';
import CustomFormPicker from '../components/form/CustomFormPicker';
import SubmitButton from '../components/form/SubmitButton';
import CategoryPickerItem from '../components/CategoryPickerItem';
import colors from '../config/colors'
import CustomImagePicker from '../components/CustomImagePicker';

const categories = [
    {label: "Furniture", value: 1, name: "apps", backgroundColor: colors.pink},
    {label: "Clothing", value: 2, name: "apps", backgroundColor: colors.pink},
    {label: "Camera", value: 3, name: "apps", backgroundColor: colors.pink},
]

const listingSchema = yup.object({
    title: yup.string().required().min(1).label("Title"),
    price: yup.number().required().min(1).max(10000).label("Price"),
    category: yup.object().required().nullable().label("Category"),
    description: yup.string().label("Description")
})

const ListingEditScreen = () => {
    return (  
        <Screen>
            <CustomForm
                initialValues={{
                    title: "", 
                    price: 0, 
                    category: "", 
                    description: ""
                }}
                onSubmit={() => console.log("submitted!")}
                validationSchema={listingSchema}
            >
                <CustomImagePicker 
                />

                <CustomFormField 
                    placeholder="Title"
                    name="title"
                />

                <CustomFormField 
                    placeholder="Price"
                    name="price"
                    keyboardType="number-pad"
                    width={120}
                />

                <CustomFormPicker 
                    items={categories}
                    name="category"
                    placeholder="Category"
                    width={170}
                    PickerItemComponent={CategoryPickerItem}
                />

                <CustomFormField 
                    placeholder="Description"
                    name="description"
                    multiline
                />

                <SubmitButton title="POST" />

            </CustomForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})
 
export default ListingEditScreen;
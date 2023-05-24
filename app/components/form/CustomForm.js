import { Formik } from "formik";

const CustomForm = ({
    children,
    initialValues,
    onSubmit,
    validationSchema
}) => {
    return (  
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    );
}
 
export default CustomForm;
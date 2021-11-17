import { useFormik } from "formik";
import * as yup from 'yup';
// const validateForm = (values) => {
//     const errors = {};
//     console.log("validate form:", values);
//     if (values.email.length < 5) {
//         errors.email = "please provide longer email"

//     }
//     else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//     ) {
//         errors.email = 'Invalid email address';
//     }
//     if (values.password.length < 8) {
//         errors.password = "please provide stronger one"
//     }
//     console.log(errors);
//     return errors;
// }
const formvalidationschema = yup.object({
    email: yup
        .string()
        .min(5, "need a bigger email")
        .required("enter the mail id")
        .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "pattern mismatch"),
    password: yup
        .string()
        .min(5, "not valid")
        .max(8, "bigger")
        .required("fill the password")
})
export function BasicForm() {

    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: { email: "", password: "" },
        // validate: validateForm,
        validationSchema: formvalidationschema,
        onSubmit: (values) => {
            console.log("onsubmit", values)
        },
    });
    return (
        <form onSubmit={handleSubmit}>
            <input
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Enter The Email">
            </input>
            {errors.email && touched.email && errors.email}
            <input
                id="password"         //formik need id and name to validate
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                placeholder="Enter the password">
            </input>
            {errors.password && touched.password && errors.password}
            <button type="submit">Submit</button>
        </form>
    );
}

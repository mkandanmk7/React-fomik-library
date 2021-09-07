import { Formik, Form, Field, ErrorMessage } from "formik";
// Form :no need form tag in jsx it will call autom to handleSubmit
//Field : reduce input value and onChange;
//ErrorMessage: handle your error span tag: showing errors
const validateEmail = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

// three props
// initial={} valiate={} onSubmit={}

function AppFormik() {
  return (
    <Formik
      initialValues={{
        fullName: "",
        emailId: "",
      }}
      validate={(values) => {
        //errors validation:
        // console.log(values);
        const errors = {};

        if (values.fullName.length <= 5) {
          errors.fullName = "full name min 6 chars";
        } else if (values.emailId.length <= 5)
          errors.emailId = "full name min 6 chars";
        else if (!validateEmail.test(values.emailId)) {
          errors.emailId = "Invalid";
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log("form submited");
        console.log(values);
      }}
    >
      {() => {
        return (
          <>
            <Form>
              <div>
                <label>Full name: </label>
                <Field name="fullName" type="text" />
                {/* <input  --> field will care it 
                  type="text"
                  value={values.fullName}
                  onChange={handleChange}
                  name="fullName"
                ></input> */}
                <ErrorMessage name="fullName" />
              </div>
              <br />
              <div>
                <label>E-mail : </label>
                <Field name="emailId" type="email" />
                <ErrorMessage name="emailId" />
              </div>
              <br />
              <button type="submit">Submit</button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}

export default AppFormik;

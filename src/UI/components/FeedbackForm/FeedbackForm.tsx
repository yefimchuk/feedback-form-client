import {useFormik} from "formik";

import {Button, Error, FormWrapper, Input, TextArea, Title} from "./FeedbackForm.styledComponent";

import {useDispatch} from "react-redux";
import {Simulate} from "react-dom/test-utils";
import {createMessageThunk} from "../../../BLL/createMessage/createMessage.slice";
import {fetchMessages} from "../../../BLL/allMessages/allMessages.slice";


const FeedbackForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit:async (values: any) => {
            await dispatch(createMessageThunk(values))
            dispatch(fetchMessages({}));
        },
        validate: (values) => {
            const errors: { name?: string, email?: string, message?: string } | null = {};
            if (!values.name) {
                errors.name = 'Required';
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.email) {
                errors.email = 'Required';
            }
            if (!values.message) {
                errors.message = 'Required';
            }
            return errors;
        }

    });

    return (

        <FormWrapper>
            <form onSubmit={formik.handleSubmit}>
                <FormWrapper>
                    <Title>Reach out to us</Title>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Your name*"
                        onChange={formik.handleChange('name')}
                        value={formik.values.name}
                    />
                    {formik.errors.name && (
                        <Error className="error">
                            {formik.errors.name}
                        </Error>
                    )}
                    <Input
                        id="email"
                        name="email"
                        placeholder="Your e-mail*"
                        onChange={formik.handleChange('email')}
                        value={formik.values.email}
                    />
                    {formik.errors.email && (
                        <Error className="error">
                            {formik.errors.email}
                        </Error>
                    )}
                    <TextArea className={`${formik.errors.message && "error"}`}
                              id="message"
                              name="message"
                              placeholder="Your message*"
                              onChange={formik.handleChange('message')}
                              value={formik.values.message}
                    />
                    {formik.errors.message && (
                        <Error>
                            {formik.errors.message}
                        </Error>
                    )}
                    <Button>Send
                        message
                    </Button>
                </FormWrapper>
            </form>
        </FormWrapper>

    )
}

export default FeedbackForm;
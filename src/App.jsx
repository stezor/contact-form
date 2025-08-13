import "./App.css";
import {useReducer} from "react";
import * as Validator from "./utils/validation.js";

const reducer = (state, action) => ({
    ...state,
    [action.payload.field]: {
        ...state[action.payload.field],
        [action.payload.property]: action.payload.propertyValue
    }
});

const initArgs = {
    fname: {
        value: "",
        isValid: false
    },
    lname: {
        value: "",
        isValid: false
    },
    email: {
        value: "",
        isValid: false
    },
    query: {
        value: "",
        isValid: false
    },
    message: {
        value: "",
        isValid: false
    },
    consent: {
        isChecked: false
    },
    form: {
        isPristine: true,
        isSuccessfullySubmitted: false
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initArgs);

    // FNAME
    const handleFnameValueChange = event => {
        dispatch({
            type: "FNAME_VALUE_CHANGE",
            payload: {
                field: "fname",
                property: "value",
                propertyValue: event.target.value
            }
        });
    };

    // LNAME
    const handleLnameValueChange = event => {
        dispatch({
            type: "LNAME_VALUE_CHANGE",
            payload: {
                field: "lname",
                property: "value",
                propertyValue: event.target.value
            }
        });
    };

    // EMAIL
    const handleEmailValueChange = event => {
        dispatch({
            type: "EMAIL_VALUE_CHANGE",
            payload: {
                field: "email",
                property: "value",
                propertyValue: event.target.value
            }
        });
    };

    // QUERY
    const handleQueryValueChange = event => {
        dispatch({
            type: "QUERY_VALUE_CHANGE",
            payload: {
                field: "query",
                property: "value",
                propertyValue: event.target.value
            }
        });
    };

    // MESSAGE
    const handleMessageValueChange = event => {
        dispatch({
            type: "MESSAGE_VALUE_CHANGE",
            payload: {
                field: "message",
                property: "value",
                propertyValue: event.target.value
            }
        });
    };

    // CONSENT
    const handleConsentIsCheckedChange = event => {
        dispatch({
            type: "CONSENT_IS_CHECKED_CHANGE",
            payload: {
                field: "consent",
                property: "isChecked",
                propertyValue: event.target.checked
            }
        });
    };

    // FORM
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "FORM_PRISTINE_CHANGE",
            payload: {
                field: "form",
                property: "isPristine",
                propertyValue: false
            }
        });

        const isFnameValid = !Validator.isEmpty(state.fname.value);
        const isLnameValid = !Validator.isEmpty(state.lname.value);
        const isEmailValid = Validator.isEmail(state.email.value);
        const isQueryValid = !Validator.isEmpty(state.query.value);
        const isMessageValid = !Validator.isEmpty(state.message.value);
        const isConsentChecked = state.consent.isChecked;

        // Dispatch updates for UI error messages
        dispatch({
            type: "FNAME_VALID_CHANGE",
            payload: {
                field: "fname",
                property: "isValid",
                propertyValue: isFnameValid
            }
        });
        dispatch({
            type: "LNAME_VALID_CHANGE",
            payload: {
                field: "lname",
                property: "isValid",
                propertyValue: isLnameValid
            }
        });
        dispatch({
            type: "EMAIL_VALID_CHANGE",
            payload: {
                field: "email",
                property: "isValid",
                propertyValue: isEmailValid
            }
        });
        dispatch({
            type: "QUERY_VALID_CHANGE",
            payload: {
                field: "query",
                property: "isValid",
                propertyValue: isQueryValid
            }
        });
        dispatch({
            type: "MESSAGE_VALID_CHANGE",
            payload: {
                field: "message",
                property: "isValid",
                propertyValue: isMessageValid
            }
        });

        if (
            isFnameValid &&
            isLnameValid &&
            isEmailValid &&
            isQueryValid &&
            isMessageValid &&
            isConsentChecked
        ) {
            dispatch({
                type: "FORM_SUCCESSFUL_SUBMISSION_CHANGE",
                payload: {
                    field: "form",
                    property: "isSuccessfullySubmitted",
                    propertyValue: true
                }
            });
            // console.log("Successfully submitted!");
        } else {
            // console.log("Fix values");
        }
    }

    return (
        <>
            {
                state.form.isSuccessfullySubmitted &&
                <div>
                    <p>Message Sent!</p>
                    <p>Thanks for completing the form. We'll be in touch soon!</p>
                </div>
            }
            <main>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <fieldset>
                        <label htmlFor="fname">First Name *</label>
                        <input
                            type="text"
                            name="fname"
                            id="fname"
                            value={state.fname.value}
                            onChange={handleFnameValueChange}
                        />
                        {
                            !state.form.isPristine &&
                            !state.fname.isValid &&
                            <p>This field is required</p>
                        }
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lname">Last Name *</label>
                        <input
                            type="text"
                            name="laname"
                            id="lname"
                            value={state.lname.value}
                            onChange={handleLnameValueChange}
                        />
                        {
                            !state.form.isPristine &&
                            !state.lname.isValid &&
                            <p>This field is required</p>
                        }
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={state.email.value}
                            onChange={handleEmailValueChange}
                        />
                        {
                            !state.form.isPristine &&
                            !state.email.isValid &&
                            <p>Please enter a valid email address</p>
                        }
                    </fieldset>
                    <fieldset>
                        <label htmlFor="">Query Type *</label>
                        <div>
                            <label htmlFor="enquiry">General Enquiry</label>
                            <input
                                type="radio"
                                name="query"
                                id="enquiry"
                                value="general-enquiry"
                                checked={state.query.value === "general-enquiry"}
                                onChange={handleQueryValueChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="request">Support Request</label>
                            <input
                                type="radio"
                                name="query"
                                id="request"
                                value="support-request"
                                checked={state.query.value === "support-request"}
                                onChange={handleQueryValueChange}
                            />
                        </div>
                        {
                            !state.form.isPristine &&
                            !state.query.isValid &&
                            <p>Please select a query type</p>
                        }
                    </fieldset>
                    <fieldset>
                        <label htmlFor="message">Message *</label>
                        <textarea
                            name="message"
                            id="message"
                            value={state.message.value}
                            onChange={handleMessageValueChange}
                            cols="30"
                            rows="10"
                        />
                        {
                            !state.form.isPristine &&
                            !state.message.isValid &&
                            <p>This field is required</p>
                        }
                    </fieldset>
                    <fieldset>
                        <label htmlFor="consent">I consent to being contacted by the team</label>
                        <input
                            type="checkbox"
                            name="consent"
                            id="consent"
                            checked={state.consent.isChecked}
                            onChange={handleConsentIsCheckedChange}
                        />
                        {
                            !state.form.isPristine &&
                            !state.consent.isChecked &&
                            <p>To submit this form, please consent to being contacted</p>
                        }
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    )
}

export default App

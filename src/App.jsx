import "./App.css";
import { useReducer } from "react";
import FormField from "./components/FormField/FormField.jsx";
import Input from "./components/Input/Input.jsx";
import Button from "./components/Button/Button.jsx";
import Radio from "./components/Radio/Radio.jsx";
import Textarea from "./components/Textarea/Textarea.jsx";
import Checkbox from "./components/Checkbox/Checkbox.jsx";
import Snackbar from "./components/Snackbar/Snackbar.jsx";
import * as Validators from "./utils/validators.js";

const ACTIONS = {
  fname: {
    FNAME_VALUE_CHANGE: "FNAME_VALUE_CHANGE",
    FNAME_IS_VALID_CHANGE: "FNAME_IS_VALID_CHANGE",
    FNAME_ERROR_MESSAGE_CHANGE: "FNAME_ERROR_MESSAGE_CHANGE",
  },
  lname: {
    LNAME_VALUE_CHANGE: "LNAME_VALUE_CHANGE",
    LNAME_IS_VALID_CHANGE: "LNAME_IS_VALID_CHANGE",
    LNAME_ERROR_MESSAGE_CHANGE: "LNAME_ERROR_MESSAGE_CHANGE",
  },
  email: {
    EMAIL_VALUE_CHANGE: "EMAIL_VALUE_CHANGE",
    EMAIL_IS_VALID_CHANGE: "EMAIL_IS_VALID_CHANGE",
    EMAIL_ERROR_MESSAGE_CHANGE: "EMAIL_ERROR_MESSAGE_CHANGE",
  },
  query: {
    QUERY_VALUE_CHANGE: "QUERY_VALUE_CHANGE",
    QUERY_IS_VALID_CHANGE: "QUERY_IS_VALID_CHANGE",
    QUERY_ERROR_MESSAGE_CHANGE: "QUERY_ERROR_MESSAGE_CHANGE",
  },
  message: {
    MESSAGE_VALUE_CHANGE: "MESSAGE_VALUE_CHANGE",
    MESSAGE_IS_VALID_CHANGE: "MESSAGE_IS_VALID_CHANGE",
    MESSAGE_ERROR_MESSAGE_CHANGE: "MESSAGE_ERROR_MESSAGE_CHANGE",
  },
  consent: {
    CONSENT_IS_CHECKED_CHANGE: "CONSENT_IS_CHECKED_CHANGE",
    CONSENT_ERROR_MESSAGE_CHANGE: "CONSENT_ERROR_MESSAGE_CHANGE",
  },
  form: {
    FORM_IS_PRISTINE_CHANGE: "FORM_IS_PRISTINE_CHANGE",
    FORM_SHOW_SUCCESS_MESSAGE_CHANGE: "FORM_SHOW_SUCCESS_MESSAGE_CHANGE",
  },
};

const reducer = (state, action) => ({
  ...state,
  [action.payload.field]: {
    ...state[action.payload.field],
    [action.payload.property]: action.payload.propertyValue,
  },
});

const initArgs = {
  fname: {
    value: "",
    isValid: false,
    errorMessage: "This field is required",
  },
  lname: {
    value: "",
    isValid: false,
    errorMessage: "This field is required",
  },
  email: {
    value: "",
    isValid: false,
    errorMessage: "Please enter a valid email address",
  },
  query: {
    value: "",
    isValid: false,
    errorMessage: "Please select a query type",
  },
  message: {
    value: "",
    isValid: false,
    errorMessage: "This field is required",
  },
  consent: {
    isChecked: false,
    errorMessage: "To submit this form, please consent to being contacted",
  },
  form: {
    isPristine: true,
    showSuccessMessage: false,
  },
};

function App() {
  const [state, dispatch] = useReducer(reducer, initArgs);

  // FNAME
  const handleFnameValueChange = (event) => {
    const value = event.target.value;
    dispatch({
      type: ACTIONS.fname.FNAME_VALUE_CHANGE,
      payload: {
        field: "fname",
        property: "value",
        propertyValue: value,
      },
    });
  };
  // LNAME
  const handleLnameValueChange = (event) => {
    const value = event.target.value;
    dispatch({
      type: ACTIONS.lname.LNAME_VALUE_CHANGE,
      payload: {
        field: "lname",
        property: "value",
        propertyValue: value,
      },
    });
  };
  // EMAIL
  const handleEmailValueChange = (event) => {
    const value = event.target.value;
    dispatch({
      type: ACTIONS.email.EMAIL_VALUE_CHANGE,
      payload: {
        field: "email",
        property: "value",
        propertyValue: value,
      },
    });
  };
  // QUERY
  const handleQueryValueChange = (event) => {
    const value = event.target.value;
    dispatch({
      type: ACTIONS.query.QUERY_VALUE_CHANGE,
      payload: {
        field: "query",
        property: "value",
        propertyValue: value,
      },
    });
  };
  // MESSAGE
  const handleMessageValueChange = (event) => {
    const value = event.target.value;
    dispatch({
      type: ACTIONS.message.MESSAGE_VALUE_CHANGE,
      payload: {
        field: "message",
        property: "value",
        propertyValue: value,
      },
    });
  };
  // CONSENT
  const handleConsentCheckedChange = (event) => {
    const isChecked = event.target.checked;
    dispatch({
      type: ACTIONS.consent.CONSENT_IS_CHECKED_CHANGE,
      payload: {
        field: "consent",
        property: "isChecked",
        propertyValue: isChecked,
      },
    });
  };
  // FORM
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ACTIONS.form.FORM_IS_PRISTINE_CHANGE,
      payload: {
        field: "form",
        property: "isPristine",
        propertyValue: false,
      },
    });

    const isFnameValid = !Validators.isEmpty(state.fname.value);
    const isLnameValid = !Validators.isEmpty(state.lname.value);
    const isEmailValid = Validators.isEmail(state.email.value);
    const isQueryValid = !Validators.isEmpty(state.query.value);
    const isMessageValid = !Validators.isEmpty(state.message.value);

    dispatch({
      type: ACTIONS.fname.FNAME_IS_VALID_CHANGE,
      payload: {
        field: "fname",
        property: "isValid",
        propertyValue: isFnameValid,
      },
    });
    dispatch({
      type: ACTIONS.lname.LNAME_IS_VALID_CHANGE,
      payload: {
        field: "lname",
        property: "isValid",
        propertyValue: isLnameValid,
      },
    });
    dispatch({
      type: ACTIONS.email.EMAIL_IS_VALID_CHANGE,
      payload: {
        field: "email",
        property: "isValid",
        propertyValue: isEmailValid,
      },
    });
    dispatch({
      type: ACTIONS.query.QUERY_IS_VALID_CHANGE,
      payload: {
        field: "query",
        property: "isValid",
        propertyValue: isQueryValid,
      },
    });
    dispatch({
      type: ACTIONS.query.QUERY_IS_VALID_CHANGE,
      payload: {
        field: "query",
        property: "isValid",
        propertyValue: isQueryValid,
      },
    });
    dispatch({
      type: ACTIONS.message.MESSAGE_IS_VALID_CHANGE,
      payload: {
        field: "message",
        property: "isValid",
        propertyValue: isMessageValid,
      },
    });

    const isFormValid =
      isFnameValid &&
      isLnameValid &&
      isEmailValid &&
      isQueryValid &&
      isMessageValid &&
      state.consent.isChecked;

    if (isFormValid) {
      dispatch({
        type: "FORM_SHOW_SUCCESS_MESSAGE_CHANGE",
        payload: {
          field: "form",
          property: "showSuccessMessage",
          propertyValue: true,
        },
      });
    }
  };
  // GENERIC
  const handleCloseSnackbar = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <main>
      <Snackbar
        isOpen={state.form.showSuccessMessage}
        onAutoClose={() =>
          handleCloseSnackbar(ACTIONS.form.FORM_SHOW_SUCCESS_MESSAGE_CHANGE, {
            field: "form",
            property: "showSuccessMessage",
            propertyValue: false,
          })
        }
      >
        <div className="snackbar__top">
          <span className="checkmark"></span>
          <p>Message Sent!</p>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </Snackbar>
      <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>

        <div className="name">
          {/*FNAME*/}
          <FormField
            errorMessageId="fname-error-message"
            errorMessage={state.fname.errorMessage}
            isInvalid={!state.fname.isValid && !state.form.isPristine}
            fullWidth
          >
            <Input
              type="text"
              name="fname"
              id="fname"
              value={state.fname.value}
              onChange={handleFnameValueChange}
              label="First Name *"
              errorMessageId="fname-error-message"
            />
          </FormField>
          {/*LNAME*/}
          <FormField
            errorMessageId="lname-error-message"
            errorMessage={state.lname.errorMessage}
            isInvalid={!state.lname.isValid && !state.form.isPristine}
            fullWidth
          >
            <Input
              type="text"
              name="lname"
              id="lname"
              value={state.lname.value}
              onChange={handleLnameValueChange}
              label="Last Name *"
              errorMessageId="lname-error-message"
            />
          </FormField>
        </div>
        {/*EMAIL*/}
        <FormField
          errorMessageId="email-error-message"
          errorMessage={state.email.errorMessage}
          isInvalid={!state.email.isValid && !state.form.isPristine}
          fullWidth
        >
          <Input
            type="email"
            name="email"
            id="email"
            value={state.email.value}
            onChange={handleEmailValueChange}
            label="Email *"
            errorMessageId="email-error-message"
          />
        </FormField>
        {/*QUERY*/}
        <FormField
          errorMessageId="query-error-message"
          errorMessage={state.query.errorMessage}
          isInvalid={!state.query.isValid && !state.form.isPristine}
          legend="Query Type"
          fullWidth
        >
          <div id="query-error-message" className="query-type">
            <Radio
              name="query-type"
              id="general-enquiry"
              value="general-enquiry"
              onChange={handleQueryValueChange}
              isSelected={state.query.value === "general-enquiry"}
              label="General Enquiry"
              fullWidth
            />
            <Radio
              name="query-type"
              id="support-request"
              value="support-request"
              onChange={handleQueryValueChange}
              isSelected={state.query.value === "support-request"}
              label="Support Request"
              fullWidth
            />
          </div>
        </FormField>
        {/*MESSAGE*/}
        <FormField
          errorMessageId="message-error-message"
          errorMessage={state.message.errorMessage}
          isInvalid={!state.message.isValid && !state.form.isPristine}
          fullWidth
        >
          <Textarea
            name="message"
            value={state.message.value}
            onChange={handleMessageValueChange}
            label="Message *"
            errorMessageId="message-error-message"
          />
        </FormField>
        {/*CONSENT*/}
        <FormField
          errorMessageId="consent-error-message"
          errorMessage={state.consent.errorMessage}
          isInvalid={!state.consent.isChecked && !state.form.isPristine}
          fullWidth
        >
          <Checkbox
            name="consent"
            id="consent"
            checked={state.consent.isChecked}
            onChange={handleConsentCheckedChange}
            label="I consent to being contacted by the team *"
            errorMessageId="consent-error-message"
          />
        </FormField>
        <Button type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </main>
  );
}

export default App;

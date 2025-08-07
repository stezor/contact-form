import './App.css';

function App() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div>
                <p>Message Sent!</p>
                <p>Thanks for completing the form. We'll be in touch soon!</p>
            </div>
            <main>
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <fieldset>
                        <label htmlFor="fname">First Name *</label>
                        <input type="text" name="fname" id="fname"/>
                        <p>This field is required</p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="lname">Last Name *</label>
                        <input type="text" name="laname" id="lname"/>
                        <p>This field is required</p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email Address *</label>
                        <input type="email" name="email" id="email"/>
                        <p>Please enter a valid email address / This field is required</p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="">Query Type *</label>
                        <div>
                            <label htmlFor="enquiry">General Enquiry</label>
                            <input type="radio" name="query" id="enquiry"/>
                        </div>
                        <div>
                            <label htmlFor="request">Support Request</label>
                            <input type="radio" name="query"  id="request"/>
                        </div>
                        <p>Please select a query type</p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="message">Message *</label>
                        <textarea name="message" id="message" cols="30" rows="10"/>
                        <p>This field is required</p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="consent">I consent to being contacted by the team</label>
                        <input type="checkbox" name="consent" id="consent"/>
                        <p>To submit this form, please consent to being contacted</p>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>
    )
}

export default App

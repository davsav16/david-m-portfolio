import React, { useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

       if (!errorMessage) {
           setFormState({ ...formState, [e.target.name]: e.target.value });
       }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return(
        <section>
            <h1 className="projectSec">Want to connect? Reach out! </h1>
            <form className="contactStyle" id="contact-form" onSubmit={handleSubmit}>
                <div className="contactDiv">
                    <input placeholder="Please Enter Your Name" type="text" defaultValue={name} onBlur={handleChange} name="name"  />
                </div>
                <div className="contactDiv">
                    <input placeholder="Please Enter Your Email" type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div className="contactDiv">
                    <textarea placeholder="Enter Your Message Here" name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            <div>
                <ul>
                    <li><a>Phone: 385.288.7920</a></li>
                    <li><a href="mailto:david.mcdougal00@gmail.com">Email: david.mcdougal00@gmail.com</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Contact;

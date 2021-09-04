import React, { Component, useState } from "react";
import * as emailjs from "emailjs-com";
import { validateEmail } from "../../utils/helpers";


export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            message: "",
            email: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_5tu8gsp",
            "template_swhfurs",
            ".contact_form_class",
            "user_d9lR5mRes2OOmibKQi35c"
        )
        .then()
        .catch();
        this.setState({
            name: "",
            phone: "",
            message: "",
            email: "",
        });
    };
    render() {
        return (
            <section className="contSection" >
                <div className="contactComp">
                <h1 className="projectSec">Want to connect? Reach out! </h1>
                <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className="contact_form_class contactStyle"
                    id="contact-form"
                >
                    <div className="contactDiv">
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            size="30"
                            placeholder="Please Enter Your Name"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this)}
                        ></input>
                    </div>
                    <div className="contactDiv">
                        <input 
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Please Enter Your Phone Number"
                            size="30"
                            value={this.state.phone}
                            onChange={this.handleChange.bind(this)}
                        ></input>
                    </div>
                    <div className="contactDiv">
                        <input 
                            type="text"
                            id="email"
                            name="email"
                            size="30"
                            placeholder="Please Enter Your Email"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)}
                        ></input>
                    </div>
                    <div className="contactDiv">
                        <textarea 
                            type="text"
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="What would you like to connect about? :)"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this)}
                        ></textarea>
                    </div>
                  
                    <button className="submitBtn" type="submit">Submit</button>
                </form>
                </div>
            </section>
        )
    }
}

export default Contact;






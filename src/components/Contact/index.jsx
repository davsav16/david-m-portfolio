import React, { Component } from "react";
import * as emailjs from "emailjs-com";


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
            <div>
                <form
                    onSubmit={this.handleSubmit.bind(this)}
                    className="contact_form_class"
                >
                    <div>
                        <label>Name: </label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="please enter your name"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this)}
                        ></input>
                    </div>
                    <div>
                        <label>Phone: </label>
                        <input 
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="please enter your phone"
                            value={this.state.phone}
                            onChange={this.handleChange.bind(this)}
                        ></input>
                    </div>
                    <div>
                        <label>Message: </label>
                        <input 
                            type="text"
                            id="message"
                            name="message"
                            placeholder="please enter your message"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this)}
                        ></input>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input 
                            type="text"
                            id="email"
                            name="email"
                            placeholder="please enter your email"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this)}
                        ></input>
                    </div>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default Contact;






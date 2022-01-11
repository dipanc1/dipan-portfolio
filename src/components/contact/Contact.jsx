import { useState } from "react";
import validator from 'validator'
import "./contact.scss"

export default function Contact() {

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('Valid Email :)')
        } else {
            setEmailError('Enter valid Email!')
        }
    }

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { email, message } = e.target.elements;
        let details = {
            email: email.value,
            message: message.value,
        };
        let response = await fetch("https://dipan-portfolio.herokuapp.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        setStatus(result.status);
    };

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" id="email" required onChange={(e) => validateEmail(e)} />
                    <textarea id="message" placeholder="Message" required></textarea>
                    <h3 style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{emailError}</h3>
                    {emailError === 'Enter valid Email!' ? null
                        : <button type="submit">{status}</button>}
                </form>
            </div>
        </div>
    )}

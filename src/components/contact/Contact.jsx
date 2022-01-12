import { useState, useRef, useContext } from "react";
import validator from 'validator'
import "./contact.scss"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

export default function Contact() {
    const formRef = useRef();

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('Valid Email :)')
        } else {
            setEmailError('Enter valid Email!')
        }
    }

    const [done, setDone] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_ef2nk5k",
                "template_rchms2o",
                formRef.current,
                "user_V88xEHCgH913EFMNqxCRw"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="contact" id="contact" style={{ backgroundColor: darkMode ? '#15023a' : 'white', color: darkMode && 'white' }}>
            <div className="left">
                <img src="assets/shake.svg" alt="" style={{ filter: darkMode && 'invert(100%)' }} />
            </div>
            <div className="right">
                <h2 style={{ color: darkMode ? 'white' : "#15023a" }}>Contact.</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" name="user_email" placeholder="Email" id="email" required onChange={(e) => validateEmail(e)} />
                    <textarea id="message" placeholder="Message" name="message" required></textarea>
                    <h3 style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{emailError}</h3>
                    {emailError === 'Enter valid Email!' ? null
                        : <button style={{backgroundColor: darkMode && '#59b256'}} type="submit">{done ? "Sent" : "Submit"}</button>}
                </form>
            </div>
        </div>
    )
}

import React, { useState } from "react";
// Import your custom styles if needed
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
// Import EmailJS
import emailjs from "@emailjs/browser";

function Contact({ mode }: { mode: "light" | "dark" }) {
    // State for form inputs
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    // State for error handling
    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);

    // State to show success message
    const [emailSent, setEmailSent] = useState<boolean>(false);

    // Email validation function
    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Form submission handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate inputs
        setNameError(name === "");
        setEmailError(!isValidEmail(email));
        setMessageError(message === "");

        // Proceed only if inputs are valid
        if (name && isValidEmail(email) && message) {
            console.log("Sending email...");

            // Template parameters for EmailJS
            const templateParams = {
                name: name, // Name entered by the user
                email: email, // Email entered by the user
                message: message, // Message entered by the user
            };

            // Send email using EmailJS
            emailjs
                .send(
                    "service_06yo40e", // Replace with your EmailJS Service ID
                    "template_xc9j5xi", // Replace with your EmailJS Template ID
                    templateParams,
                    "EYGP6vl1YH1Hc21y4" // Replace with your EmailJS Public API Key
                )
                .then(
                    (response) => {
                        console.log("SUCCESS!", response.status, response.text);
                        setEmailSent(true); // Show success message
                        // Reset form fields
                        setName("");
                        setEmail("");
                        setMessage("");
                    },
                    (error) => {
                        console.error("FAILED...", error);
                    }
                );
        }
    };

    return (
        <div id="contact">
            <div className="items-container">
                <div className="contact_wrapper">
                    <h1>Contact Me</h1>
                    <p>Get in touch—I’d be excited to explore opportunities with you!!</p>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        className={`contact-form ${mode}`} // Add dynamic class for light/dark mode
                        onSubmit={handleSubmit} // Form submission handler
                    >
                        {/* Name Field */}
                        <TextField
                            required
                            id="name-input"
                            label="Your Name"
                            placeholder="What's your name?"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={nameError}
                            helperText={nameError ? "Please enter your name" : ""}
                            fullWidth
                            margin="normal"
                        />
                        {/* Email Field */}
                        <TextField
                            required
                            id="email-input"
                            label="Your Email"
                            placeholder="How can I reach you?"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={emailError}
                            helperText={emailError ? "Please enter a valid email address" : ""}
                            fullWidth
                            margin="normal"
                        />
                        {/* Message Field */}
                        <TextField
                            required
                            id="message-input"
                            label="Message"
                            placeholder="Send me any inquiries or questions"
                            multiline
                            rows={6}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            error={messageError}
                            helperText={messageError ? "Please enter your message" : ""}
                            fullWidth
                            margin="normal"
                        />
                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            endIcon={<SendIcon />}
                            sx={{ mt: 2 }}
                        >
                            Send
                        </Button>
                        {/* Success Message */}
                        {emailSent && (
                            <p className="success-message" style={{ color: "green", marginTop: "1rem" }}>
                                Email sent successfully!
                            </p>
                        )}
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Contact;

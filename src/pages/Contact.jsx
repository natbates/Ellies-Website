import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate async submit
        setTimeout(() => {
            setSubmitting(false);
            setForm({ name: "", email: "", message: "" });
            alert("Message sent!");
        }, 1500);
    };

    const handleReset = () => {
        setForm({ name: "", email: "", message: "" });
    };

    // Disable buttons if all fields are empty or if submitting
    const allEmpty = !form.name && !form.email && !form.message;

    return (
        <div className="contact page">
            <h1>Contact Me</h1>
            <p>If you have any questions or would like to book a session, please reach out!</p>
            <div className="form-container">
                <form className="contact-form" onSubmit={handleSubmit} onReset={handleReset}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            disabled={submitting}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            disabled={submitting}
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            rows="5"
                            required
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            disabled={submitting}
                        ></textarea>
                    </label>
                    <div className="button-container push-right">
                        <button type="reset" disabled={submitting || allEmpty}>Reset</button>
                        <button type="submit" disabled={submitting || allEmpty}>Send Message</button>
                    </div>
                </form>

                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>Email: <a href="mailto:">your-email@example.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
                    <p>Follow me on social media for updates and more photos!</p>
                    <img src="/images/logo.png" alt="Logo" className="contact-logo" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
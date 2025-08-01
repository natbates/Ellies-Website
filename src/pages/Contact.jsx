import React, { useState } from "react";
import "../styles/Contact.css";
import { useTranslation } from "react-i18next";
import useInView from "../hooks/useInView";

const Contact = ({ default_value }) => {
    const { t } = useTranslation();
    const [form, setForm] = useState({
        name: "",
        email: "",
        enquiry: default_value || "",
        message: ""
    });
    const [submitting, setSubmitting] = useState(false);

    const [ref, visible] = useInView({ threshold: 0.2 });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        // Simulate async submit
        setTimeout(() => {
            setSubmitting(false);
            setForm({ name: "", email: "", enquiry: "", message: "" });
            alert(t("contact_form_sent") || "Message sent!");
        }, 1500);
    };

    const handleReset = () => {
        setForm({ name: "", email: "", enquiry: "", message: "" });
    };

    // Disable buttons if all fields are empty or if submitting
    const allEmpty = !form.name && !form.email && !form.enquiry && !form.message;

    return (
        <div ref={ref} className={`contact page fade-in${visible ? " visible" : ""}`}>
            <h1 className={`contact-title contact-anim${visible ? " contact-anim-visible" : ""}`}>{t("contact_title")}</h1>
            <p className={`contact-intro contact-anim${visible ? " contact-anim-visible contact-anim-delay-1" : ""}`}>{t("contact_intro")}</p>
            <div className="form-container">
                <form className="contact-form contact-anim-wrapper" onSubmit={handleSubmit} onReset={handleReset}>
                    <label className={`contact-anim${visible ? " contact-anim-visible contact-anim-delay-2" : ""}`}>
                        {t("contact_form_name")}:
                        <input
                            type="text"
                            name="name"
                            placeholder={t("contact_form_name_placeholder")}
                            required
                            value={form.name}
                            onChange={handleChange}
                            disabled={submitting}
                        />
                    </label>
                    <label className={`contact-anim${visible ? " contact-anim-visible contact-anim-delay-3" : ""}`}>
                        {t("contact_form_email")}:
                        <input
                            type="email"
                            name="email"
                            placeholder={t("contact_form_email_placeholder")}
                            required
                            value={form.email}
                            onChange={handleChange}
                            disabled={submitting}
                        />
                    </label>
                    <label className={`contact-anim${visible ? " contact-anim-visible contact-anim-delay-4" : ""}`}>
                        {t("contact_form_enquiry")}
                        <select
                            name="enquiry"
                            required
                            value={form.enquiry}
                            onChange={handleChange}
                            disabled={submitting}
                        >
                            <option value="">{t("contact_form_enquiry_placeholder")}</option>
                            <option value="weddings">{t("contact_form_enquiry_weddings")}</option>
                            <option value="restaurant-1month">{t("contact_form_enquiry_restaurant_1month")}</option>
                            <option value="restaurant-3month">{t("contact_form_enquiry_restaurant_3month")}</option>
                            <option value="maternity">{t("contact_form_enquiry_maternity")}</option>
                            <option value="private-event">{t("contact_form_enquiry_private_event")}</option>
                            <option value="other">{t("contact_form_enquiry_other")}</option>
                        </select>
                    </label>
                    <label className={`contact-anim${visible ? " contact-anim-visible contact-anim-delay-5" : ""}`}>
                        {t("contact_form_message")}:
                        <textarea
                            name="message"
                            rows="5"
                            required
                            placeholder={t("contact_form_message_placeholder")}
                            value={form.message}
                            onChange={handleChange}
                            disabled={submitting}
                        ></textarea>
                    </label>
                    <div className={`button-container push-right contact-anim${visible ? " contact-anim-visible contact-anim-delay-6" : ""}`}>
                        <button type="reset" disabled={submitting || allEmpty}>{t("contact_form_reset")}</button>
                        <button type="submit" disabled={submitting || allEmpty}>{t("contact_form_send")}</button>
                    </div>
                </form>

                <div className={`contact-info contact-anim${visible ? " contact-anim-visible contact-anim-delay-2" : ""}`}>
                    <h2>{t("contact_info_title")}</h2>
                    <p>{t("contact_info_email")}: <a href="mailto:Els.social.spark@gmail.com">Els.social.spark@gmail.com</a></p>
                    <p>{t("contact_info_phone")}: <a href="tel:+1234567890">+1 234 567 890</a></p>
                    <p>{t("contact_info_social")}</p>
                    <p>{t("contact_info_response_time")}</p>
                    <img src="/images/logo.png" alt="Logo" className="contact-logo" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactForm = () => {
    const [fromData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...fromData,
            [name]: value,
        });
    };

    const validate = () => {
        let errors = {};
        if (!fromData.name) errors.name = "Name is Required";
        if (!fromData.email) {
            errors.email = "Email is Required";
        } else if (!/\S+@\S+\.\S+/.test(fromData.email)) {
            errors.email = "Email is Invalid";
        }
        if (!fromData.message) errors.message = "Message is Required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs
                .send(
                    "service_tfiup2p",
                    "template_rkeifsp",
                    fromData,
                    "PFXREjSrZreYf3HVn"
                )
                .then((response) => {
                    toast.success("Message sent successfully");
                    setFormData({ name: "", email: "", message: "" });
                    setErrors({});
                })
                .catch((error) => {
                    console.log("FAILED...", error);
                    toast.error("Failed to send message. Please try again later.");
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <div className="border-b border-neutral-900 pb-4">
            <Toaster />
            <motion.h2
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl"
            >
                Let’s Connect
            </motion.h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 flex space-x-4">
                    <div className="lg:w-1/2">
                        <motion.input
                            type="text"
                            id="name"
                            name="name"
                            value={fromData.name}
                            placeholder="Name"
                            onChange={handleChange}
                            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                        {errors.name && (
                            <p className="text-sm text-rose-800">{errors.name}</p>
                        )}
                    </div>
                    <div className="lg:w-1/2">
                        <motion.input
                            type="email"
                            id="email"
                            name="email"
                            value={fromData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                        {errors.email && (
                            <p className="text-sm text-rose-800">{errors.email}</p>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <motion.textarea
                        id="message"
                        name="message"
                        value={fromData.message}
                        placeholder="Message"
                        onChange={handleChange}
                        className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                        rows="6"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    {errors.message && (
                        <p className="text-sm text-rose-800">{errors.message}</p>
                    )}
                </div>
                <button
                    type="submit"
                    className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300
                        ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
                    disabled={isSending}
                >
                    <div className="flex items-center justify-center gap-2">
                        {isSending ? "Sending..." : "Send"}
                        <FiSend />
                    </div>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

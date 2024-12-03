"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ email: "" });

  const form = useRef();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current.reset();
          setEmail("");
          setErrors({ email: "" });
        },
        (error) => {
          toast.error("Something went wrong!");
          console.log(error)
        },
      );
  };

  const text = "Say Hello";

  return (
    <motion.div className="h-full overflow-scroll" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1.5 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text container */}
        <div className=" xs:flex xs:flex-col xs:m-20 xs:text-2xl h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center l:text-6xl xl:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span key={index} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}>
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* Form container */}
        <form onSubmit={sendEmail} ref={form} className=" xs:h-full xs:w-full   h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
          <span>Dear Stefano Cumbo,</span>
          <textarea
            rows={6}
            name="user_message"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            required
          />
          <span>My mail address is:</span>
          <input
            type="email"
            name="user_email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          <span>Regards,</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;

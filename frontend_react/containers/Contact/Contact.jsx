import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

import { urlFor, sanityClient } from "../../sanity";
import styles from "./Contact.module.scss";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const onSubmit = (formData) => {
    window.location.href = `mailto:greglee0921@gmail.com?subject=${formData.subject}&body=${formData.message}`;
    setIsFormSubmitted(true);
  };

  return (
    <div className="app__wrapper app__flex">
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.8 }}
        className={styles.app__contact}
      >
        <h2 className="head-text">Let's Get In&nbsp;
        <span className='head-text'>Touch</span>
        </h2>

        <p className="p-text">
          Looking to hire a software engineer? I'm your guy!
        </p>
        <div className={styles.app__contactContainer}>
        <div className={styles.app__contactCards}>
          <div className={styles.app__contactCard}>
            <img src="/assets/email_image.png" alt="email" />
            <a style={{fontSize: '10px'}}
            href="mailto:greglee0921@gmail.com" className="p-text">
              greglee0921@gmail.com
            </a>
          </div>
          <div className={styles.app__contactCard}>
            <img src="/assets/mobile.png" alt="mobile" />
            <a href="tel: (718) 683-0722" className="p-text">
              (718) 683-0722
            </a>
          </div>
        </div>
        {!isFormSubmitted ? (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.app__contactForm}
          >
            <div className="app__flex">
              <input
                {...register("name")}
                className="p-text"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="app__flex">
              <input
                {...register("subject")}
                className="p-text"
                type="subject"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                {...register("message")}
                className="p-text"
                placeholder="Message"
              />
            </div>
            <button type="submit" className="p-text">
              Send Email
            </button>
          </form>
        ) : (
          <h3>Thank you for getting in touch!</h3>
        )}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { fadeIn, staggerContainer } from "@/framerMotion/variants";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append(
        "access_key",
        "3fba3a61-1228-4f30-a4e0-352ad9142c36"
      );
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-30 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 lg:justify-between">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            <Image
              width={1024}
              height={829}
              src="/contact.jpg"
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              variants={staggerContainer(0.3, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              className="mb-8"
            >
              <motion.h2
                variants={fadeIn("up", 0)}
                className="text-sm font-medium mb-2 tracking-wider uppercase text-gray-600"
              >
                Contact Us
              </motion.h2>
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "2.5rem" }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.6 }}
                className="w-[1px] bg-black mb-1"
              ></motion.div>
              <motion.h2
                variants={fadeIn("up", 0)}
                className="font-special2 font-[400] italic text-2xl md:text-3xl lg:text-4xl uppercase"
              >
                Get in
              </motion.h2>
              <motion.h2
                variants={fadeIn("up", 0)}
                className="font-special2 font-[650] text-3xl md:text-4xl lg:text-5xl tracking-wider uppercase"
              >
                Touch
              </motion.h2>
            </motion.div>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                <p className="font-medium">Thank you for your message!</p>
                <p className="text-sm">We&apos;ll get back to you soon.</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`w-full px-3 py-4 bg-gray-50 border-2 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white transition-all duration-300 ${
                    errors.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-black focus:shadow-lg"
                  }`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={`w-full px-3 py-4 bg-gray-50 border-2 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white transition-all duration-300 ${
                    errors.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-black focus:shadow-lg"
                  }`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full px-3 py-4 bg-gray-50 border-2 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:bg-white transition-all duration-300 resize-none ${
                    errors.message
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-200 focus:border-black focus:shadow-lg"
                  }`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full py-4 bg-black text-white font-semibold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-3 hover:cursor-pointer ${
                  isSubmitting
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-gray-900 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Submit
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

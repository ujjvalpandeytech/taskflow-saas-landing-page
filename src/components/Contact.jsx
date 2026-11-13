import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess(false);
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    setErrors({});
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">

          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            Contact Us
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Let's Start a
            <span className="text-indigo-600"> Conversation</span>
          </h2>

          <p className="text-gray-500 mt-5 text-lg">
            Have questions about TaskFlow? Send us a message.
            We'd love to hear from you.
          </p>

        </div>

        {/* Contact Layout */}
        <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg overflow-hidden">

          {/* Contact Information */}
          <div className="bg-indigo-600 text-white p-8 md:p-12">

            <h3 className="text-3xl font-bold">
              Get in Touch
            </h3>

            <p className="text-indigo-100 mt-4 leading-relaxed">
              Our team is here to help you get the most out
              of your productivity journey.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Mail size={22} />
                </div>

                <div>
                  <p className="text-indigo-200 text-sm">Email</p>
                  <p>ujjvalpandey.tech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <Phone size={22} />
                </div>

                <div>
                  <p className="text-indigo-200 text-sm">Phone</p>
                  <p>+91 9584307167</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <MapPin size={22} />
                </div>

                <div>
                  <p className="text-indigo-200 text-sm">Location</p>
                  <p>India</p>
                </div>
              </div>

            </div>
            </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12">

            <form onSubmit={handleSubmit} noValidate>

              {/* Name */}
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                />

                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Success Message */}
              {success && (
                <div
                  role="status"
                  className="bg-green-50 text-green-700 p-4 rounded-lg mb-5 flex items-center gap-2"
                >
                  <CheckCircle size={20} />
                  Thank you! Your message has been submitted successfully.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition"
              >
                Send Message
                <Send size={18} />
              </button>

              <p className="text-xs text-gray-400 mt-3">
                Demo form only. No message is sent to a server.
              </p>

            </form>
            </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
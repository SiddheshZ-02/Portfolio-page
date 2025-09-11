import { useState } from "react";
import Swal from "sweetalert2";
import Footer from "./Footer";
import Prof2  from "/prof2.png";




const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("message", formData.message);
    formDataObj.append("access_key", "309ee417-35e2-47a8-b6ee-86fd3c107407");

    const object = Object.fromEntries(formDataObj);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Thank you!",
          text: "Message Sent successfully!",
          icon: "success",
        });
        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to send message. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen overflow-hidden  justify-center items-center p-6 mt-10 relative "
    >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
        <aside className="w-full md:w-1/2 relative ">
          <div
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2  w-[300] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r
        from-[#6d2897] via-[#8e6cf5] to-[#bb61c5]  shadow-[0_0_70px_rgba(182,0,182,0.7)]"
          ></div>

          <img
            src={Prof2}
            alt="Contact illustration"
            className="h-[200px] sm:h-[250px] md:h-[450px] lg:h-[450px] w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-cover rounded-lg relative z-10 mx-auto md:top-20"
          />
        </aside>

        <section className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">
              Contact Us
            </h2>
          </header>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`w-full px-3 sm:px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 border-2"
                    : "focus:ring-purple-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2 text-sm sm:text-base"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={`w-full px-3 sm:px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 border-2"
                    : "focus:ring-purple-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 font-medium mb-2 text-sm sm:text-base"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className={`w-full px-3 sm:px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none focus:ring-2 min-h-[100px] sm:min-h-[120px] md:min-h-[150px] ${
                  errors.message
                    ? "border-red-500 border-2"
                    : "focus:ring-purple-500"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs sm:text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full text-white border-2 border-purple-500 py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base md:text-lg 
              hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(128,0,128,0.5)] transition-all duration-300"
            >
              Connect Me
            </button>
          </form>
        </section>
      </article>
      <Footer />
    </section>
  );
};

export default Contact;

import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid Email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Get In Touch
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind or want to discuss a new opportunity? We'd
              love to hear from you.
            </p>

            <div className="space-y-5">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  info@example.com
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  +91 9876543210
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Jaipur, Rajasthan, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
              Send Message
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full p-3 rounded-lg border bg-white dark:bg-gray-900 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-700"
                  }`}
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full p-3 rounded-lg border bg-white dark:bg-gray-900 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-700"
                  }`}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`w-full p-3 rounded-lg border bg-white dark:bg-gray-900 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-700"
                  }`}
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

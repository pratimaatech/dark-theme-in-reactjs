


export const Contact = () => {

  const handleSubmit = (e)=>{
 e.preventDefault();
  alert("Form Sumite")
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
              Have a project in mind or want to discuss a new opportunity?
              We'd love to hear from you.
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

              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
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
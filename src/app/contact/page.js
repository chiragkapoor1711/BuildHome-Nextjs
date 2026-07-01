export default function Contact() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-900">Contact Us</h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or planning your next construction project ,We had
            love to hear from you. Get in touch with our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">📍 Address</h3>
                <p className="text-gray-600">Ambala, Haryana, India</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">📞 Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">✉ Email</h3>
                <p className="text-gray-600">info@buildhome.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">🕒 Working Hours</h3>
                <p className="text-gray-600">Monday - Saturday</p>
                <p className="text-gray-600">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block font-medium mb-2">Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Phone</label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">Message</label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

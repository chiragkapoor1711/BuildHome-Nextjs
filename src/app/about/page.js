export default function About() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900">
            About Our Company
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            We are committed to building high-quality residential and commercial
            projects with innovative designs, premium materials, and skilled
            craftsmanship. Our goal is to transform your vision into reality.
          </p>
        </div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="/images/about-image.jpg"
              alt="About"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Building Excellence Since 2010
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Our experienced team delivers exceptional construction solutions
              that combine quality, safety, and innovation. From modern homes
              to commercial buildings, we ensure every project is completed with
              precision and attention to detail.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              Customer satisfaction is at the heart of everything we do. We
              believe in transparency, timely delivery, and creating spaces that
              inspire confidence and comfort.
            </p>

            <button className="mt-8 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-24">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="mt-2 text-gray-600">
                Years of Experience
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="mt-2 text-gray-600">
                Projects Completed
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="mt-2 text-gray-600">
                Happy Clients
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="mt-2 text-gray-600">
                Expert Engineers
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
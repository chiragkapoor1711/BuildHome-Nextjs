export default function Services() {
  const services = [
    {
      title: "Residential Construction",
      description:
        "We build modern, comfortable, and durable homes tailored to your lifestyle and budget.",
      icon: "🏠",
    },
    {
      title: "Commercial Construction",
      description:
        "Professional construction solutions for offices, shopping complexes, and commercial buildings.",
      icon: "🏢",
    },
    {
      title: "Interior Design",
      description:
        "Transform your interiors with stylish, functional, and elegant design solutions.",
      icon: "🛋️",
    },
    {
      title: "Renovation & Remodeling",
      description:
        "Upgrade your existing property with high-quality renovation and remodeling services.",
      icon: "🔨",
    },
    {
      title: "Architecture & Planning",
      description:
        "Creative architectural planning that combines innovation, functionality, and beauty.",
      icon: "📐",
    },
    {
      title: "Project Management",
      description:
        "From planning to completion, we manage every stage of your construction project efficiently.",
      icon: "📋",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900">
            Our Services
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            We provide complete construction solutions with quality,
            innovation, and customer satisfaction at the core of every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

              <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
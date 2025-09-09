export default function About() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold text-pink-700 mb-4">
            About the Artist
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Siri Chandana is a passionate performer who brings energy, grace,
            and creativity to every stage she steps on. With years of
            experience across cultural festivals, private events, and
            international showcases, her journey is built on dedication and
            artistry.
          </p>
        </div>

        {/* Right Column (Highlights) */}
        <div className="flex flex-col gap-6">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-pink-600">Experience</h3>
            <p className="text-gray-600">50+ live performances worldwide.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-pink-600">Achievements</h3>
            <p className="text-gray-600">
              Awarded Best Performer at multiple cultural events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

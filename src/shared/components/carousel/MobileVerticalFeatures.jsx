function MobileVerticalFeatures({ ContentImages }) {
  return (
    <section className="bg-[#FBF8F6] px-6 py-16 space-y-24">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-aero text-xs tracking-[0.2em] uppercase mb-3">
          Welcome Home
        </h2>
        <h1 className="text-habitat text-3xl font-serif leading-tight">
          The Final Word in Eco-Luxury Living
        </h1>
      </div>

      {/* Features */}
      {ContentImages.images.map((img) => (
        <div key={img.id} className="space-y-6">
          {/* Image */}
          <div className="h-[45vh] rounded-xl overflow-hidden shadow-lg">
            <picture>
              <source srcSet={img.avif} type="image/avif" />
              <source srcSet={img.webp} type="image/webp" />
              <img
                src={img.png}
                alt={img.title}
                className="w-full h-full object-cover"
              />
            </picture>
          </div>

          {/* Text */}
          <div className="space-y-3">
            <h3 className="text-2xl font-serif text-habitat">
              {img.title}
            </h3>
             <p
                    className="
                      max-w-xl 
                      font-serif 
                      text-sm sm:text-base 
                      font-light 
                      leading-relaxed 
                      text-slate-600 
                      mx-auto lg:mx-0

                      text-left              /* mobile */
                      sm:text-justify         /* tablet+ */
                      hyphens-none            /* mobile */
                      sm:hyphens-auto         /* tablet+ */
                      hidden sm:block        /* Show on tablet+ */
                      whitespace-pre-line
                    "
                  >
                    {img.description}
                  </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default MobileVerticalFeatures;

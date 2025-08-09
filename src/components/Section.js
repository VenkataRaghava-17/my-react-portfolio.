const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12 relative">
      {title}
      <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-600 rounded-full"></span>
    </h2>
    {children}
  </section>
);

export default Section;

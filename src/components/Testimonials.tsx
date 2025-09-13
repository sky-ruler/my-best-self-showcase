const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-text-secondary font-semibold mb-4 tracking-wider uppercase">
            Social Proof
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
            What People Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-pane rounded-[var(--radius-xl)] p-8 md:p-12 text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-text-primary leading-relaxed mb-8">
              "Ritesh's dedication to quality and his keen eye for detail are exceptional. 
              He consistently delivers well-architected solutions and is a true asset to any team."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-lg md:text-xl">
                JD
              </div>
              <div className="text-left">
                <h4 className="font-bold text-text-primary">Dr. Jane Doe</h4>
                <p className="text-text-secondary">Professor of Computer Science, ITER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
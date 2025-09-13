import { Code, Server, PenTool } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      delay: 100,
    },
    {
      icon: Server,
      title: "Backend Architecture", 
      delay: 200,
    },
    {
      icon: PenTool,
      title: "UI/UX & Prototyping",
      delay: 300,
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <div>
              <p className="text-text-secondary font-semibold mb-4 tracking-wider uppercase">
                About & Services
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-8">
                A Union of Engineering Discipline & Design Sensibility
              </h2>
            </div>
            
            <p className="text-lg text-text-secondary leading-relaxed">
              My journey through the structured curricula of RVS Academy (ICSE) and D.A.V. Bistupur (CBSE) 
              built a strong foundation in logical problem-solving. Now, as a B.Tech student at ITER, SOA, 
              I apply that engineering discipline to craft digital experiences that are not only powerful 
              under the hood but also intuitive and elegant in their design.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="glass-pane p-6 rounded-[var(--radius-md)] flex items-center gap-4 animate-fade-up"
                  style={{ animationDelay: `${service.delay}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <span className="text-lg font-medium text-text-primary">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
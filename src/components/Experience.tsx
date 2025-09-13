const Experience = () => {
  const timeline = [
    {
      title: "B.Tech, Computer Science & Engineering",
      company: "ITER, Siksha 'O' Anusandhan, Odisha",
      period: "2023 — Present",
      description: "Pursuing undergraduate degree with focus on software engineering and data structures.",
    },
    {
      title: "Software Engineer Intern (Planned)",
      company: "An innovative tech company building user-centric products",
      period: "Summer 2026",
      description: "Upcoming internship opportunity to apply theoretical knowledge in real-world projects.",
    },
    {
      title: "Higher Secondary Education (CBSE)",
      company: "D.A.V. Public School, Bistupur, Jamshedpur",
      period: "2021 — 2023",
      description: "Completed with excellent grades in Mathematics and Computer Science streams.",
    },
    {
      title: "Secondary Education (ICSE)",
      company: "RVS Academy, Jamshedpur",
      period: "2019 — 2021",
      description: "Strong foundation in analytical thinking and problem-solving methodologies.",
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-text-secondary font-semibold mb-4 tracking-wider uppercase">
            Career & Education
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
            My Journey So Far
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="border-l-2 border-glass-border relative">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-12 last:pb-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-brand-primary rounded-full border-4 border-background"></div>
                
                {/* Content */}
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <span className="text-text-secondary font-medium text-sm md:text-base">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-text-secondary font-medium">
                    {item.company}
                  </p>
                  
                  <p className="text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
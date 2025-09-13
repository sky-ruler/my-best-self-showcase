import { ExternalLink } from "lucide-react";

const Writings = () => {
  const articles = [
    {
      title: "Demystifying React Hooks",
      description: "A deep dive into the fundamentals of React Hooks and state management.",
      platform: "Medium",
      url: "https://medium.com/@rk_codes/demystifying-react-hooks",
      delay: 0,
    },
    {
      title: "A Guide to Building Accessible Web Components",
      description: "Practical tips and techniques for creating inclusive UI for everyone.",
      platform: "DEV.to",
      url: "https://dev.to/rk_codes/building-accessible-components",
      delay: 100,
    },
  ];

  return (
    <section id="writings" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-text-secondary font-semibold mb-4 tracking-wider uppercase">
            Writings
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
            Sharing Knowledge & Ideas
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article, index) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-interactive rounded-[var(--radius-lg)] p-8 group block animate-fade-up"
              style={{ animationDelay: `${article.delay}ms` }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {article.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-glass-border">
                  <span className="text-text-primary font-medium">
                    Read on {article.platform}
                  </span>
                  <ExternalLink className="w-5 h-5 text-text-secondary group-hover:text-brand-primary transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writings;
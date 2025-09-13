import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding text-center">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <p className="text-text-secondary font-semibold mb-4 tracking-wider uppercase">
              Have an idea?
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-8">
              Available for select freelance projects & internship opportunities.
            </h2>
          </div>

          <a
            href="mailto:hello.ritesh.k@gmail.com"
            className="glass-interactive inline-flex items-center gap-4 px-8 py-6 rounded-[var(--radius-md)] group"
          >
            <Mail className="w-6 h-6 text-brand-primary" />
            <span className="text-2xl md:text-3xl font-medium text-text-primary group-hover:text-brand-primary transition-colors">
              hello.ritesh.k@gmail.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
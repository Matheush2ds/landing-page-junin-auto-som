import React from 'react';
import { ShieldCheck, UserCheck, Award, Clock } from 'lucide-react';
import './Features.css';

const features = [
  { icon: Award, title: "Qualidade Premium", text: "Acabamento impecável e materiais de primeira linha." },
  { icon: ShieldCheck, title: "Garantia Real", text: "Nota fiscal e garantia de serviço e produtos." },
  { icon: UserCheck, title: "Profissionais Capacitados", text: "Equipe treinada para mexer em carros de luxo." },
  { icon: Clock, title: "Agilidade", text: "Respeitamos seu tempo com agendamento pontual." },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="container features-grid">
        {features.map((f, i) => (
          <div className="feature-box" key={i}>
            <div className="icon-box">
              <f.icon size={28} className="text-brand-yellow" />
            </div>
            <div>
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Features;
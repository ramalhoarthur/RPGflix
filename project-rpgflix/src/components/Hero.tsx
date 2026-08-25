import React from "react";
import { Sparkles, Play, Info } from "lucide-react";

interface HeroProps {
  hero: any;
  onSelect: (rpg: any) => void;
}

export function Hero({ hero, onSelect }: HeroProps) {
  return (
    <section
      className="gr-hero"
      style={{
        background: `
          radial-gradient(120% 90% at 15% 15%, ${hero.colors[0]}55, transparent 60%),
          linear-gradient(180deg, rgba(11,10,13,0.15) 0%, rgba(11,10,13,0.55) 55%, var(--bg) 100%),
          linear-gradient(115deg, ${hero.colors[0]}, ${hero.colors[1]} 70%)
        `,
      }}
    >
      <div>
        <div className="gr-hero-eyebrow">
          <Sparkles size={14} />
          Destaque do RPGFLIX
        </div>
        <h1 className="gr-hero-title font-display">{hero.title}</h1>
        <p className="gr-hero-desc">{hero.tagline} {hero.description}</p>
        <div className="gr-hero-actions">
          <button className="btn btn-primary" onClick={() => onSelect(hero)}>
            <Play size={18} fill="#1a1408" />
            Ver arquivos
          </button>
          <button className="btn btn-secondary" onClick={() => onSelect(hero)}>
            <Info size={18} />
            Mais informações
          </button>
        </div>
      </div>
    </section>
  );
}
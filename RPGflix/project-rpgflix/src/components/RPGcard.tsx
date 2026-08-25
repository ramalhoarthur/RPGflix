import React from "react";
import { FileText } from "lucide-react";

export function CardCover({ rpg, size = 64 }: { rpg: any; size?: number }) {
  const Icon = rpg.icon;
  return (
    <div
      className="gr-card-cover"
      style={{ background: `linear-gradient(150deg, ${rpg.colors[0]}, ${rpg.colors[1]})` }}
    >
      <Icon size={size} className="gr-card-emblem" color="#fff" strokeWidth={1.3} />
    </div>
  );
}

export function RPGCard({ rpg, onOpen }: { rpg: any; onOpen: (rpg: any) => void }) {
  return (
    <div className="gr-card" onClick={() => onOpen(rpg)}>
      <CardCover rpg={rpg} />
      <div className="gr-card-info">
        <span className="gr-card-genre">{rpg.genre}</span>
        <div className="gr-card-title">{rpg.title}</div>
        <div className="gr-card-meta">
          <FileText size={12} />
          <span>{rpg.files.length} arquivos disponíveis</span>
        </div>
      </div>
    </div>
  );
}
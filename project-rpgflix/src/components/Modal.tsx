import React, { useState, useEffect } from "react";
import { X, Sparkles, Users, FileText } from "lucide-react";
import { FileRow } from "./FileRow";
import { Recommendations } from "./Recommendations"; // Importe aqui

interface ModalProps {
  rpg: any;
  onClose: () => void;
  onSelectRpg?: (rpg: any) => void; // Adicione esta linha
}

export function Modal({ rpg, onClose, onSelectRpg }: ModalProps) {
  const [openFile, setOpenFile] = useState<number | null>(null);
  const Icon = rpg.icon;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Limpa os arquivos abertos caso mude de RPG com o modal aberto
  useEffect(() => {
    setOpenFile(null);
  }, [rpg.id]);

  return (
    <div className="gr-overlay" onClick={onClose}>
      <div className="gr-modal" onClick={(e) => e.stopPropagation()}>
        <div
          className="gr-modal-cover"
          style={{
            background: `linear-gradient(160deg, ${rpg.colors[0]}, ${rpg.colors[1]})`,
          }}
        >
          <button className="gr-modal-close" onClick={onClose} aria-label="Fechar">
            <X size={18} />
          </button>
          <div>
            <Icon size={26} color="var(--gold-soft)" style={{ marginBottom: 10 }} />
            <div className="gr-modal-title">{rpg.title}</div>
          </div>
        </div>

        <div className="gr-modal-body">
          <div className="gr-badges">
            <span className="gr-badge"><Sparkles size={13} />{rpg.genre}</span>
            <span className="gr-badge">{rpg.year}</span>
            <span className="gr-badge"><Users size={13} />{rpg.players}</span>
          </div>

          <p className="gr-modal-desc">{rpg.description}</p>

          <div className="gr-section-title">
            <FileText size={15} />
            Arquivos disponíveis
          </div>

          {rpg.files.map((file: any, i: number) => (
            <FileRow
              key={file.name}
              file={file}
              isOpen={openFile === i}
              onToggle={() => setOpenFile(openFile === i ? null : i)}
            />
          ))}

          {/* Adicione o componente de recomendações no final do modal */}
          <Recommendations currentRpgId={rpg.id} onSelectRpg={onSelectRpg} />
        </div>
      </div>
    </div>
  );
}
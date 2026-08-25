import React from "react";
import { ChevronRight, Download } from "lucide-react";

interface FileRowProps {
  file: {
    name: string;
    icon: any;
    pages: number;
    summary: string;
    url?: string;
  };
  isOpen: boolean;
  onToggle: () => void;
}

export function FileRow({ file, isOpen, onToggle }: FileRowProps) {
  const Icon = file.icon;

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita expandir ou recolher a sanfona ao clicar no ícone de download
  };

  return (
    <div className={`gr-file${isOpen ? " open" : ""}`}>
      <div className="gr-file-head" onClick={onToggle}>
        <div className="gr-file-icon">
          <Icon size={18} />
        </div>
        
        <div style={{ flex: 1 }}>
          <div className="gr-file-name">{file.name}</div>
          <div className="gr-file-pages">{file.pages} páginas</div>
        </div>

        {/* Botão de Download integrado */}
        {file.url && (
          <a
            href={file.url}
            download
            onClick={handleDownload}
            className="gr-file-download-btn"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px",
              marginRight: "8px",
              color: "#fff",
              opacity: 0.8,
              transition: "opacity 0.2s"
            }}
            title="Baixar Arquivo"
          >
            <Download size={18} />
          </a>
        )}

        <ChevronRight size={18} className="gr-file-chevron" />
      </div>
      
      <div className="gr-file-summary">{file.summary}</div>
    </div>
  );
}
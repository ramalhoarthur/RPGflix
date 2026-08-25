import React from "react";
import { ChevronRight } from "lucide-react";

interface FileRowProps {
  file: any;
  isOpen: boolean;
  onToggle: () => void;
}

export function FileRow({ file, isOpen, onToggle }: FileRowProps) {
  const Icon = file.icon;
  return (
    <div className={`gr-file${isOpen ? " open" : ""}`}>
      <div className="gr-file-head" onClick={onToggle}>
        <div className="gr-file-icon">
          <Icon size={18} />
        </div>
        <div>
          <div className="gr-file-name">{file.name}</div>
          <div className="gr-file-pages">{file.pages} páginas</div>
        </div>
        <ChevronRight size={18} className="gr-file-chevron" />
      </div>
      <div className="gr-file-summary">{file.summary}</div>
    </div>
  );
}
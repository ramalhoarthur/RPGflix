import React from "react";
import { Scroll, Search, X, Menu } from "lucide-react";

interface HeaderProps {
  scrolled: boolean;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  categorias: Array<{ id: string; title: string }>;
  onNavigateToRow: (id: string) => void;
}

export function Header({
  scrolled,
  searchOpen,
  setSearchOpen,
  query,
  setQuery,
  categorias,
  onNavigateToRow,
}: HeaderProps) {
  return (
    <header className={`gr-header${scrolled ? " scrolled" : ""}`}>
      <div className="gr-logo font-display">
        <Scroll size={22} color="var(--gold)" />
        RPGFLIX
      </div>
      <nav className="gr-nav">
        <div className="gr-nav-links">
          <button className="gr-nav-link" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Início
          </button>
          {categorias.map((c) => (
            <button key={c.id} className="gr-nav-link" onClick={() => onNavigateToRow(c.id)}>
              {c.title}
            </button>
          ))}
        </div>
        {searchOpen ? (
          <div className="gr-search">
            <Search size={16} color="var(--ink-muted)" />
            <input
              autoFocus
              placeholder="Buscar sistema de RPG..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="gr-icon-btn"
              onClick={() => {
                setSearchOpen(false);
                setQuery("");
              }}
              aria-label="Fechar busca"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <button className="gr-icon-btn" onClick={() => setSearchOpen(true)} aria-label="Buscar">
            <Search size={20} />
          </button>
        )}
        <button className="gr-icon-btn" aria-label="Menu" style={{ display: "none" }}>
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}
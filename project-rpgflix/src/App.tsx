import React, { useState, useEffect, useMemo } from "react";
import { RPGS, CATEGORIAS, HERO } from "./data/rpgsData";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Row } from "./components/Row";
import { RPGCard } from "./components/RPGcard";
import { Modal } from "./components/Modal";
import "./App.css";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const allRpgs = useMemo(() => Object.values(RPGS), []);

  const results = useMemo(() => {
    if (!query.trim()) return null;
    const q = query.toLowerCase();
    return allRpgs.filter(
      (r) => r.title.toLowerCase().includes(q) || r.genre.toLowerCase().includes(q)
    );
  }, [query, allRpgs]);

  const scrollToRow = (id: string) => {
    setSearchOpen(false);
    setQuery("");
    const el = document.getElementById(`row-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="rpgflix-app">
      <Header
        scrolled={scrolled}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        query={query}
        setQuery={setQuery}
        categorias={CATEGORIAS}
        onNavigateToRow={scrollToRow}
      />

      {query.trim() ? (
        results && results.length ? (
          <div className="gr-results">
            {results.map((r) => (
              <RPGCard key={r.id} rpg={r} onOpen={setSelected} />
            ))}
          </div>
        ) : (
          <div className="gr-empty">
            <span className="font-display">Nenhum sistema encontrado</span>
            Tente buscar por outro nome ou gênero.
          </div>
        )
      ) : (
        <>
          <Hero hero={HERO} onSelect={setSelected} />

          <section className="gr-rows">
            {CATEGORIAS.map((cat) => (
              <div id={`row-${cat.id}`} key={cat.id}>
                <Row
                  title={cat.title}
                  items={cat.items.map((id) => (RPGS as any)[id])}
                  onOpen={setSelected}
                />
              </div>
            ))}
          </section>
        </>
      )}

      {selected && (
  <Modal 
    rpg={selected} 
    onClose={() => setSelected(null)} 
    onSelectRpg={setSelected} 
  />
)}
    </div>
  );
}
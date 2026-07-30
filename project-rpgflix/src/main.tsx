@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');

:root {
  --bg-void: #0d0b14;
  --bg-panel: #17131f;
  --ink: #f2ece1;
  --ink-dim: #a79fb0;
  --gold: #d4a72c;
  --crimson: #8c2f39;
  --violet: #5b3e8c;
  --radius: 6px;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  background: var(--bg-void);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
}

.app { min-height: 100vh; background: var(--bg-void); }

/* ---------- Topo ---------- */
.topo {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 18px 48px;
  background: linear-gradient(to bottom, rgba(13,11,20,0.95), rgba(13,11,20,0));
}

.logo {
  font-family: 'Cinzel', serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 2px;
  color: var(--ink);
}
.logo-acento { color: var(--gold); }

.nav { display: flex; gap: 26px; }
.nav a {
  color: var(--ink-dim);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}
.nav a:hover, .nav-ativo { color: var(--ink) !important; }

/* ---------- Hero ---------- */
.hero {
  position: relative;
  padding: 140px 48px 90px;
  margin-top: -76px;
  min-height: 480px;
  display: flex;
  align-items: flex-end;
}

.hero-conteudo { max-width: 560px; }

.hero-eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--gold);
  margin: 0 0 10px;
}

.hero-titulo {
  font-family: 'Cinzel', serif;
  font-size: 56px;
  font-weight: 700;
  margin: 0 0 12px;
  line-height: 1.05;
  text-shadow: 0 4px 24px rgba(0,0,0,0.6);
}

.hero-meta {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 13px;
  color: var(--ink-dim);
  margin: 0 0 18px;
}

.hero-sinopse {
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink);
  margin: 0 0 28px;
  max-width: 480px;
}

.hero-acoes { display: flex; gap: 14px; }

.botao {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 26px;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  transition: transform 0.15s, background 0.15s;
}
.botao:hover { transform: translateY(-1px); }

.botao-primario { background: var(--gold); color: #1a1408; }
.botao-primario:hover { background: #e6bc3f; }

.botao-secundario { background: rgba(242,236,225,0.14); color: var(--ink); backdrop-filter: blur(4px); }
.botao-secundario:hover { background: rgba(242,236,225,0.24); }

/* ---------- Prateleiras ---------- */
.prateleiras { padding: 10px 0 60px; }

.prateleira { margin-bottom: 38px; }

.prateleira-titulo {
  font-family: 'Cinzel', serif;
  font-size: 19px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 0 0 14px;
  padding: 0 48px;
  color: var(--ink);
}

.prateleira-wrap { position: relative; }

.prateleira-trilho {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 4px 48px 14px;
  scrollbar-width: none;
}
.prateleira-trilho::-webkit-scrollbar { display: none; }

.seta {
  position: absolute;
  top: 0;
  bottom: 14px;
  width: 48px;
  border: none;
  background: linear-gradient(to right, var(--bg-void), transparent);
  color: var(--ink);
  font-size: 28px;
  cursor: pointer;
  z-index: 5;
  opacity: 0;
  transition: opacity 0.2s;
}
.prateleira-wrap:hover .seta { opacity: 1; }
.seta-esq { left: 0; }
.seta-dir { right: 0; background: linear-gradient(to left, var(--bg-void), transparent); }

/* ---------- Capa (card) ---------- */
.capa {
  position: relative;
  flex: 0 0 168px;
  height: 240px;
  border: none;
  border-radius: var(--radius);
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  text-align: left;
  transition: transform 0.25s ease, box-shadow 0.25s ease, z-index 0s;
  box-shadow: 0 6px 16px rgba(0,0,0,0.4);
}

.capa:hover {
  transform: scale(1.08) translateY(-6px);
  box-shadow: 0 16px 32px rgba(0,0,0,0.6);
  z-index: 2;
}

.capa-lombada {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 10px;
  background: rgba(0,0,0,0.35);
}

.capa-emblema {
  position: absolute;
  top: 14px;
  right: 14px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  color: rgba(242,236,225,0.55);
  border: 1px solid rgba(242,236,225,0.3);
  padding: 3px 7px;
  border-radius: 3px;
}

.capa-corpo {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.capa-titulo {
  font-family: 'Cinzel', serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.15;
  text-shadow: 0 2px 10px rgba(0,0,0,0.7);
}

.capa-edicao {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  color: rgba(242,236,225,0.65);
}

.capa-hover {
  position: absolute;
  inset: 0;
  background: rgba(10,8,14,0.55);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  padding: 0 18px;
  opacity: 0;
  transition: opacity 0.2s;
}
.capa:hover .capa-hover { opacity: 1; }

.capa-play {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--gold);
  color: #1a1408;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}

.capa-tags {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10.5px;
  color: var(--ink-dim);
}

.dados { display: flex; gap: 3px; }
.dado { font-size: 11px; color: rgba(242,236,225,0.25); }
.dado.ativo { color: var(--gold); }

/* ---------- Modal ---------- */
.modal-fundo {
  position: fixed;
  inset: 0;
  background: rgba(5,4,8,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 24px;
}

.modal-caixa {
  width: 100%;
  max-width: 560px;
  background: var(--bg-panel);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0,0,0,0.6);
}

.modal-capa {
  height: 160px;
  position: relative;
}

.modal-emblema {
  top: auto;
  bottom: 16px;
  left: 22px;
  right: auto;
  font-size: 13px;
}

.modal-conteudo { padding: 26px 28px 30px; position: relative; }

.modal-fechar {
  position: absolute;
  top: -46px;
  right: 22px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background: rgba(13,11,20,0.7);
  color: var(--ink);
  font-size: 18px;
  cursor: pointer;
}

.modal-conteudo h3 {
  font-family: 'Cinzel', serif;
  font-size: 26px;
  margin: 0 0 6px;
}

.modal-meta {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  color: var(--ink-dim);
  margin: 0 0 10px;
}

.modal-conteudo .dados { margin-bottom: 14px; }

.modal-sinopse { font-size: 15px; line-height: 1.6; margin: 0 0 16px; color: var(--ink); }

.modal-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
.tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  padding: 5px 10px;
  border-radius: 4px;
  background: rgba(242,236,225,0.08);
  color: var(--ink-dim);
}

.modal-acoes { display: flex; gap: 12px; }

/* ---------- Responsivo ---------- */
@media (max-width: 640px) {
  .topo, .prateleira-titulo, .prateleira-trilho { padding-left: 20px; padding-right: 20px; }
  .hero { padding: 110px 20px 60px; }
  .hero-titulo { font-size: 38px; }
  .capa { flex-basis: 130px; height: 190px; }
}
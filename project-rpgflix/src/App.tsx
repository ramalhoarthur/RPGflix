import { useRef, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import PaginaDnD from './PaginaDnD.tsx'
import './App.css'

type Sistema = {
  id: string
  titulo: string
  edicao: string
  genero: string
  editora: string
  ano: number
  complexidade: 1 | 2 | 3 | 4 | 5
  sinopse: string
  tags: string[]
  corA: string
  corB: string
  emblema: string
}

type Prateleira = {
  id: string
  nome: string
  sistemas: Sistema[]
}

const sistemas: Sistema[] = [
  {
    id: 'dnd5e',
    titulo: 'Dungeons & Dragons',
    edicao: '5ª Edição',
    genero: 'Fantasia Clássica',
    editora: 'Wizards of the Coast',
    ano: 2014,
    complexidade: 3,
    sinopse: 'A porta de entrada do hobby. Masmorras, dragões e uma classe pra cada estilo de jogador.',
    tags: ['Heroico', 'Grupo Grande', 'Combate Tático'],
    corA: '#6e1414',
    corB: '#1c0a0a',
    emblema: 'D20',
  },
  {
    id: 'pf2e',
    titulo: 'Pathfinder',
    edicao: '2ª Edição',
    genero: 'Fantasia Clássica',
    editora: 'Paizo',
    ano: 2019,
    complexidade: 5,
    sinopse: 'Regras profundas, builds precisas. Para mesas que amam otimizar cada ação.',
    tags: ['Tático', 'Alta Fidelidade', 'Build Complexa'],
    corA: '#7a4a12',
    corB: '#231303',
    emblema: 'PF',
  },
  {
    id: 'warhammer',
    titulo: 'Warhammer Fantasy',
    edicao: '4ª Edição',
    genero: 'Fantasia Clássica',
    editora: 'Cubicle 7',
    ano: 2018,
    complexidade: 4,
    sinopse: 'Fantasia suja e desesperada. Seu personagem começa fracasso e talvez morra assim.',
    tags: ['Sombrio', 'Baixa Fantasia', 'Percentual'],
    corA: '#3a3a2f',
    corB: '#101008',
    emblema: 'WF',
  },
  {
    id: 'coc',
    titulo: 'Call of Cthulhu',
    edicao: '7ª Edição',
    genero: 'Horror Cósmico',
    editora: 'Chaosium',
    ano: 2014,
    complexidade: 3,
    sinopse: 'Investigação, sanidade e o vazio indiferente. Sobreviver já é vitória.',
    tags: ['Investigativo', 'Sanidade', 'Terror'],
    corA: '#173d2e',
    corB: '#04120c',
    emblema: 'CoC',
  },
  {
    id: 'deltagreen',
    titulo: 'Delta Green',
    edicao: 'Agent\'s Handbook',
    genero: 'Horror Cósmico',
    editora: 'Arc Dream',
    ano: 2016,
    complexidade: 4,
    sinopse: 'Agentes federais contra horrores que o governo finge não existir.',
    tags: ['Conspiração', 'Moderno', 'Sanidade'],
    corA: '#1b3b3f',
    corB: '#051012',
    emblema: 'DG',
  },
  {
    id: 'vtm',
    titulo: 'Vampiro: A Máscara',
    edicao: '5ª Edição',
    genero: 'Horror Cósmico',
    editora: 'Renegade',
    ano: 2018,
    complexidade: 3,
    sinopse: 'Política de sangue nas sombras da cidade. A Fome sempre volta.',
    tags: ['Político', 'Drama Pessoal', 'Sociedade Secreta'],
    corA: '#5a0f1e',
    corB: '#0f0304',
    emblema: 'VtM',
  },
  {
    id: 'cyberpunkred',
    titulo: 'Cyberpunk RED',
    edicao: 'Edição Padrão',
    genero: 'Sci-Fi & Cyberpunk',
    editora: 'R. Talsorian',
    ano: 2020,
    complexidade: 3,
    sinopse: 'Night City, implantes e capitalismo tardio. Style over substance.',
    tags: ['Neon', 'Ação', 'Tecnologia'],
    corA: '#8c1f7a',
    corB: '#160318',
    emblema: 'CP',
  },
  {
    id: 'shadowrun',
    titulo: 'Shadowrun',
    edicao: '6ª Edição',
    genero: 'Sci-Fi & Cyberpunk',
    editora: 'Catalyst',
    ano: 2019,
    complexidade: 5,
    sinopse: 'Magia e matrix na mesma folha de personagem. Corporações são os novos reinos.',
    tags: ['Heist', 'Magia+Tech', 'Regras Densas'],
    corA: '#123a4a',
    corB: '#020f14',
    emblema: 'SR',
  },
  {
    id: 'alien',
    titulo: 'Alien',
    edicao: 'RPG Oficial',
    genero: 'Sci-Fi & Cyberpunk',
    editora: 'Free League',
    ano: 2019,
    complexidade: 2,
    sinopse: 'No espaço ninguém ouve seus dados de estresse subindo. Sobrevivência pura.',
    tags: ['Terror Espacial', 'Recursos Escassos', 'Tenso'],
    corA: '#1a1f24',
    corB: '#020304',
    emblema: 'ALN',
  },
  {
    id: 'blades',
    titulo: 'Blades in the Dark',
    edicao: '1ª Edição',
    genero: 'Indie & Narrativo',
    editora: 'Evil Hat',
    ano: 2015,
    complexidade: 2,
    sinopse: 'Uma gangue, uma cidade sombria e golpes que quase sempre dão errado.',
    tags: ['Narrativo', 'Flashback', 'Sem Mestre Onipotente'],
    corA: '#2b2438',
    corB: '#0a0810',
    emblema: 'BitD',
  },
  {
    id: 'morkborg',
    titulo: 'Mörk Borg',
    edicao: 'Edição Base',
    genero: 'Indie & Narrativo',
    editora: 'Free League',
    ano: 2020,
    complexidade: 1,
    sinopse: 'O mundo está acabando e seu personagem é só mais um detalhe irrelevante nisso.',
    tags: ['Apocalíptico', 'Letal', 'Regras Enxutas'],
    corA: '#c9a800',
    corB: '#100e00',
    emblema: 'MB',
  },
  {
    id: 'dungeonworld',
    titulo: 'Dungeon World',
    edicao: '1ª Edição',
    genero: 'Indie & Narrativo',
    editora: 'Sage Kobold',
    ano: 2012,
    complexidade: 2,
    sinopse: 'Fantasia clássica sem planilha. Fale, role, e deixe a ficção guiar as regras.',
    tags: ['Powered by the Apocalypse', 'Fluido', 'Foco em Fics'],
    corA: '#4a3418',
    corB: '#120c04',
    emblema: 'DW',
  },
]

const prateleiras: Prateleira[] = [
  { id: 'fantasia', nome: 'Fantasia Clássica', sistemas: sistemas.filter(s => s.genero === 'Fantasia Clássica') },
  { id: 'horror', nome: 'Horror Cósmico & Pessoal', sistemas: sistemas.filter(s => s.genero === 'Horror Cósmico') },
  { id: 'scifi', nome: 'Sci-Fi & Cyberpunk', sistemas: sistemas.filter(s => s.genero === 'Sci-Fi & Cyberpunk') },
  { id: 'indie', nome: 'Indie & Narrativo', sistemas: sistemas.filter(s => s.genero === 'Indie & Narrativo') },
]

const destaque = sistemas[0]

function Dados({ nivel }: { nivel: number }) {
  return (
    <span className="dados" title={`Complexidade ${nivel} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`dado ${i < nivel ? 'ativo' : ''}`}>⬡</span>
      ))}
    </span>
  )
}

function Capa({ sistema, onAbrir }: { sistema: Sistema; onAbrir: (s: Sistema) => void }) {
  const navigate = useNavigate()
  const temPaginaPropria = sistema.id === 'dnd5e'

  return (
    <button
      className="capa"
      style={{ background: `linear-gradient(155deg, ${sistema.corA}, ${sistema.corB})` }}
      onClick={() => (temPaginaPropria ? navigate('/sistemas/dnd5e') : onAbrir(sistema))}
    >
      <span className="capa-lombada" />
      <span className="capa-emblema">{sistema.emblema}</span>
      <span className="capa-corpo">
        <span className="capa-titulo">{sistema.titulo}</span>
        <span className="capa-edicao">{sistema.edicao}</span>
      </span>
      <span className="capa-hover">
        <span className="capa-play">▶</span>
        <span className="capa-tags">{sistema.tags.slice(0, 2).join(' · ')}</span>
        <Dados nivel={sistema.complexidade} />
      </span>
    </button>
  )
}

function Prateleira({ prateleira, onAbrir }: { prateleira: Prateleira; onAbrir: (s: Sistema) => void }) {
  const trilhoRef = useRef<HTMLDivElement>(null)

  function rolar(direcao: -1 | 1) {
    const trilho = trilhoRef.current
    if (!trilho) return
    trilho.scrollBy({ left: direcao * trilho.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <section className="prateleira">
      <h2 className="prateleira-titulo">{prateleira.nome}</h2>
      <div className="prateleira-wrap">
        <button className="seta seta-esq" aria-label="Anterior" onClick={() => rolar(-1)}>‹</button>
        <div className="prateleira-trilho" ref={trilhoRef}>
          {prateleira.sistemas.map(s => (
            <Capa key={s.id} sistema={s} onAbrir={onAbrir} />
          ))}
        </div>
        <button className="seta seta-dir" aria-label="Próximo" onClick={() => rolar(1)}>›</button>
      </div>
    </section>
  )
}

function Modal({ sistema, onFechar }: { sistema: Sistema; onFechar: () => void }) {
  return (
    <div className="modal-fundo" onClick={onFechar}>
      <div className="modal-caixa" onClick={e => e.stopPropagation()}>
        <div className="modal-capa" style={{ background: `linear-gradient(155deg, ${sistema.corA}, ${sistema.corB})` }}>
          <span className="capa-emblema modal-emblema">{sistema.emblema}</span>
        </div>
        <div className="modal-conteudo">
          <button className="modal-fechar" onClick={onFechar} aria-label="Fechar">×</button>
          <h3>{sistema.titulo}</h3>
          <p className="modal-meta">{sistema.edicao} · {sistema.editora} · {sistema.ano}</p>
          <Dados nivel={sistema.complexidade} />
          <p className="modal-sinopse">{sistema.sinopse}</p>
          <div className="modal-tags">
            {sistema.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
          <div className="modal-acoes">
            {sistema.id === 'dnd5e' ? (
              <Link to="/sistemas/dnd5e" className="botao botao-primario" style={{ textDecoration: 'none', display: 'inline-block' }}>
                ▶ Ver Página Completa
              </Link>
            ) : (
              <button className="botao botao-primario">▶ Iniciar Campanha</button>
            )}
            <button className="botao botao-secundario">+ Minha Mesa</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Home() {
  const [sistemaAberto, setSistemaAberto] = useState<Sistema | null>(null)
  const navigate = useNavigate()

  return (
    <div className="app">
      <header className="topo">
        <Link to="/" className="logo">RPG<span className="logo-acento">FLIX</span></Link>
        <nav className="nav">
          <Link to="/" className="nav-ativo">Início</Link>
          <a href="#sistemas-todos">Sistemas</a>
          <a href="#">Minha Mesa</a>
        </nav>
      </header>

      <section
        className="hero"
        style={{ background: `linear-gradient(120deg, ${destaque.corA}dd, ${destaque.corB}f5)` }}
      >
        <div className="hero-conteudo">
          <p className="hero-eyebrow">Sistema em Destaque</p>
          <h1 className="hero-titulo">{destaque.titulo}</h1>
          <p className="hero-meta">{destaque.edicao} · {destaque.genero} · {destaque.ano}</p>
          <p className="hero-sinopse">{destaque.sinopse}</p>
          <div className="hero-acoes">
            <button className="botao botao-primario" onClick={() => navigate('/sistemas/dnd5e')}>▶ Iniciar Campanha</button>
            <button className="botao botao-secundario" onClick={() => setSistemaAberto(destaque)}>ℹ Mais Informações</button>
          </div>
        </div>
      </section>

      <main className="prateleiras" id="sistemas-todos">
        {prateleiras.map(p => (
          <Prateleira key={p.id} prateleira={p} onAbrir={setSistemaAberto} />
        ))}
      </main>

      {sistemaAberto && <Modal sistema={sistemaAberto} onFechar={() => setSistemaAberto(null)} />}
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sistemas/dnd5e" element={<PaginaDnD />} />
    </Routes>
  )
}
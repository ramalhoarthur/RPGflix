import {
  Sword, Shield, Crown, Scroll, Ghost, Skull, Zap, Rocket, Dices, Users,
  BookOpen, Map as MapIcon, FileText, Sparkles,
} from "lucide-react";

export const RPGS = {
  tormenta20: {
    id: "tormenta20",
    title: "Tormenta20",
    genre: "Fantasia Épica Nacional",
    year: "2019",
    players: "3–6 jogadores",
    icon: Crown,
    colors: ["#8a5a12", "#2a1a05"],
    tagline: "O maior RPG brasileiro de fantasia.",
    description:
      "Em Arton, deuses caminharam entre mortais e deixaram um mundo repleto de magia, ruínas e monstros. Tormenta20 traz um sistema ágil de d20 para heróis que vão da taverna à lenda.",
    files: [
      { name: "Livro Básico", icon: BookOpen, pages: 428, summary: "Regras completas de criação de personagem, magia e combate." },
      { name: "Ameaças de Arton", icon: Skull, pages: 256, summary: "Bestiário oficial com criaturas e NPCs para todos os níveis." },
      { name: "Guia do Mestre", icon: Shield, pages: 180, summary: "Ferramentas, tabelas e conselhos para conduzir campanhas." },
      { name: "Mapa de Arton", icon: MapIcon, pages: 2, summary: "Cartografia completa do continente e suas nações." },
    ],
  },
  dnd5e: {
    id: "dnd5e",
    title: "Dungeons & Dragons 5ª Edição",
    genre: "Fantasia Heroica",
    year: "2014",
    players: "3–6 jogadores",
    icon: Sword,
    colors: ["#7c1f2b", "#1a0509"],
    tagline: "O clássico que definiu o gênero.",
    description:
      "O sistema mais jogado do mundo. Monte um grupo, explore masmorras e enfrente dragões em campanhas que vão da vila pacata a impérios em ruínas.",
    files: [
      { name: "Manual do Jogador", icon: BookOpen, pages: 320, summary: "Raças, classes, perícias e magias para criar seu herói." },
      { name: "Guia do Mestre", icon: Shield, pages: 288, summary: "Regras de campanha, tesouros e construção de mundos." },
      { name: "Manual dos Monstros", icon: Skull, pages: 352, summary: "Centenas de criaturas prontas para o combate." },
      { name: "Tela do Mestre", icon: FileText, pages: 4, summary: "Tabelas essenciais à mão durante a sessão." },
      { name: "A Mina Perdida de Phandelver", icon: Scroll, pages: 96, summary: "Aventura introdutória para grupos iniciantes." },
    ],
  },
  pathfinder2e: {
    id: "pathfinder2e",
    title: "Pathfinder — 2ª Edição",
    genre: "Fantasia Tática",
    year: "2019",
    players: "4–5 jogadores",
    icon: Shield,
    colors: ["#1f3a5f", "#050c15"],
    tagline: "Profundidade tática para quem ama regras.",
    description:
      "Um sistema de três ações por turno que recompensa planejamento e customização profunda de personagens, em um mundo vasto chamado Golarion.",
    files: [
      { name: "Manual Básico", icon: BookOpen, pages: 638, summary: "Núcleo completo de regras, ancestralidades e classes." },
      { name: "Guia do Mestre de Jogo", icon: Shield, pages: 384, summary: "Criação de aventuras e recompensas equilibradas." },
      { name: "Bestiário", icon: Skull, pages: 360, summary: "Monstros catalogados por nível de desafio." },
      { name: "Tela do Mestre", icon: FileText, pages: 4, summary: "Resumo de regras de ação e condições." },
    ],
  },
  olddragon2: {
    id: "olddragon2",
    title: "Old Dragon 2",
    genre: "Fantasia Old School",
    year: "2023",
    players: "3–6 jogadores",
    icon: Scroll,
    colors: ["#4a3524", "#100b06"],
    tagline: "A nostalgia dos primeiros RPGs, revisitada.",
    description:
      "Regras simples e diretas inspiradas na era dourada do RPG de mesa, com masmorras letais e heróis que crescem na base da experiência.",
    files: [
      { name: "Livro do Jogador", icon: BookOpen, pages: 210, summary: "Classes clássicas e regras enxutas de jogo." },
      { name: "Livro dos Monstros", icon: Skull, pages: 190, summary: "Ameaças old school para toda faixa de nível." },
      { name: "Livro do Mestre", icon: Shield, pages: 160, summary: "Criação de masmorras e recompensas justas." },
    ],
  },
  cthulhu: {
    id: "cthulhu",
    title: "Call of Cthulhu",
    genre: "Terror Investigativo",
    year: "1981",
    players: "2–5 jogadores",
    icon: Ghost,
    colors: ["#1b4332", "#04120b"],
    tagline: "A sanidade é o recurso mais escasso.",
    description:
      "Investigadores comuns encaram horrores cósmicos além da compreensão humana. Cada pista descoberta tem um preço — e nem sempre é possível pagá-lo.",
    files: [
      { name: "Livro de Regras", icon: BookOpen, pages: 448, summary: "Sistema de percentual, sanidade e investigação." },
      { name: "Guia do Guardião", icon: Shield, pages: 120, summary: "Conselhos para conduzir horror e mistério." },
      { name: "Companhia de Investigadores", icon: Users, pages: 32, summary: "Fichas e arquétipos prontos para jogar." },
      { name: "A Cidade Sem Nome", icon: Scroll, pages: 64, summary: "Cenário de investigação autocontido." },
    ],
  },
  vampiro: {
    id: "vampiro",
    title: "Vampiro: A Máscara",
    genre: "Horror Gótico-Punk",
    year: "1991",
    players: "3–5 jogadores",
    icon: Skull,
    colors: ["#4a1942", "#0e0510"],
    tagline: "A besta interior nunca dorme.",
    description:
      "Vampiros modernos disputam poder nas sombras das cidades, equilibrando humanidade e instinto em uma teia política sem fim.",
    files: [
      { name: "Livro de Regras", icon: BookOpen, pages: 400, summary: "Clãs, disciplinas e a trilha da humanidade." },
      { name: "Guia do Narrador", icon: Shield, pages: 150, summary: "Como conduzir crônicas de política e horror pessoal." },
      { name: "Bestiário de Kindred", icon: Skull, pages: 130, summary: "Antagonistas sobrenaturais para a crônica." },
      { name: "Chicago por Noite", icon: MapIcon, pages: 180, summary: "Cenário de campanha urbano completo." },
    ],
  },
  ordemparanormal: {
    id: "ordemparanormal",
    title: "Ordem Paranormal",
    genre: "Terror Nacional",
    year: "2018",
    players: "3–5 jogadores",
    icon: Zap,
    colors: ["#14281d", "#030805"],
    tagline: "O paranormal bateu à porta do Brasil.",
    description:
      "Agentes recrutados por uma organização secreta enfrentam entidades paranormais em cenários brasileiros reconhecíveis, entre o pânico e o dever.",
    files: [
      { name: "Livro Básico", icon: BookOpen, pages: 300, summary: "Classes, trilhas e o sistema NEX de poderes." },
      { name: "Ameaças Ocultas", icon: Skull, pages: 220, summary: "Bestiário paranormal completo." },
      { name: "Guia do Agente", icon: Shield, pages: 96, summary: "Missões, equipamentos e a estrutura da Ordem." },
      { name: "Mapa da Ordem", icon: MapIcon, pages: 2, summary: "Bases e núcleos regionais espalhados pelo país." },
    ],
  },
  shadowrun: {
    id: "shadowrun",
    title: "Shadowrun",
    genre: "Cyberpunk & Fantasia",
    year: "1989",
    players: "3–5 jogadores",
    icon: Zap,
    colors: ["#1a1a2e", "#050510"],
    tagline: "Magia e cibernética, lado a lado.",
    description:
      "Corporações controlam o mundo em um futuro onde dragões negociam ações na bolsa e mercenários magicamente talentosos cumprem trabalhos sujos nas sombras.",
    files: [
      { name: "Livro de Regras", icon: BookOpen, pages: 456, summary: "Magia, cibernética e o sistema de dados de sucesso." },
      { name: "Manual do Mestre", icon: Shield, pages: 180, summary: "Construção de runs e antagonistas corporativos." },
      { name: "Compêndio de Runners", icon: Users, pages: 140, summary: "Arquétipos prontos para grupos de sombra." },
      { name: "Suplemento: Seattle", icon: MapIcon, pages: 160, summary: "Guia de cenário urbano detalhado." },
    ],
  },
  cyberpunkred: {
    id: "cyberpunkred",
    title: "Cyberpunk RED",
    genre: "Cyberpunk",
    year: "2020",
    players: "3–5 jogadores",
    icon: Rocket,
    colors: ["#2b1a00", "#0a0600"],
    tagline: "Night City nunca dorme — nem perdoa.",
    description:
      "Sobreviva em uma metrópole dominada por corporações, implantes e violência. Reputação e estilo valem tanto quanto balas.",
    files: [
      { name: "Livro de Regras", icon: BookOpen, pages: 456, summary: "Papéis, ciberware e o sistema Interlock." },
      { name: "Guia do Mestre", icon: Shield, pages: 96, summary: "Ferramentas para rodar jobs e conflitos urbanos." },
      { name: "Manual de Equipamentos", icon: FileText, pages: 60, summary: "Armas, implantes e tecnologia disponível." },
      { name: "Noite Nova", icon: Scroll, pages: 40, summary: "Aventura introdutória em Night City." },
    ],
  },
  gurps: {
    id: "gurps",
    title: "GURPS",
    genre: "Sistema Genérico Universal",
    year: "1986",
    players: "2–6 jogadores",
    icon: Dices,
    colors: ["#2b2b2b", "#0a0a0a"],
    tagline: "Qualquer gênero, um único sistema.",
    description:
      "Um sistema modular baseado em pontos que se adapta a qualquer cenário — de faroeste a ficção científica dura — sem trocar de regras.",
    files: [
      { name: "Básico — Personagens", icon: BookOpen, pages: 336, summary: "Criação de personagem por sistema de pontos." },
      { name: "Básico — Campanhas", icon: Shield, pages: 416, summary: "Regras de mundo, combate e mestria." },
      { name: "Suplemento de Magia", icon: Sparkles, pages: 240, summary: "Sistema detalhado de feitiços e tradições." },
      { name: "Suplemento de Alta Tecnologia", icon: Zap, pages: 220, summary: "Equipamentos para cenários futuristas." },
    ],
  },
  operaespacial: {
    id: "operaespacial",
    title: "Ópera Estelar",
    genre: "Ficção Científica",
    year: "2016",
    players: "3–6 jogadores",
    icon: Rocket,
    colors: ["#0b1d3a", "#020712"],
    tagline: "As estrelas guardam impérios e ruínas.",
    description:
      "Tripulações independentes cruzam sistemas estelares negociando, contrabandeando e resistindo a impérios galácticos em decadência.",
    files: [
      { name: "Livro de Regras", icon: BookOpen, pages: 260, summary: "Naves, tripulações e viagens interestelares." },
      { name: "Guia da Galáxia", icon: MapIcon, pages: 140, summary: "Setores, facções e rotas comerciais." },
      { name: "Bestiário de Criaturas", icon: Skull, pages: 90, summary: "Vida alienígena catalogada por sistema." },
      { name: "Sinal Perdido", icon: Scroll, pages: 48, summary: "Aventura introdutória a bordo de uma nave." },
    ],
  },
  "3det": {
    id: "3det",
    title: "3D&T Alpha",
    genre: "Fantasia Leve Nacional",
    year: "2014",
    players: "3–6 jogadores",
    icon: Sword,
    colors: ["#6b2a1a", "#160603"],
    tagline: "Regras simples, aventuras imediatas.",
    description:
      "Um sistema brasileiro leve e flexível, ideal para grupos iniciantes ou mestres que preferem improviso a páginas de regras.",
    files: [
      { name: "Livro Básico", icon: BookOpen, pages: 120, summary: "Atributos simplificados e criação rápida de personagem." },
      { name: "Manual de Poderes", icon: Sparkles, pages: 80, summary: "Lista extensa de poderes e vantagens." },
      { name: "Bestiário", icon: Skull, pages: 70, summary: "Criaturas prontas para qualquer cenário." },
    ],
  },
};

export const CATEGORIAS = [
  { id: "fantasia", title: "Fantasia Épica", items: ["tormenta20", "dnd5e", "pathfinder2e", "olddragon2"] },
  { id: "terror", title: "Terror & Mistério", items: ["cthulhu", "vampiro", "ordemparanormal"] },
  { id: "ficcao", title: "Ficção Científica & Cyberpunk", items: ["shadowrun", "cyberpunkred", "operaespacial", "gurps"] },
  { id: "nacional", title: "Sistemas Nacionais", items: ["tormenta20", "ordemparanormal", "3det"] },
];

export const HERO = RPGS.tormenta20;
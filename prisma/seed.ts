import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o Seed do Banco de Dados...');

  // Limpeza prévia garantindo a ordem de integridade referencial
  await prisma.material.deleteMany({});
  await prisma.rPG_Tag.deleteMany({});
  await prisma.rPG.deleteMany({});
  await prisma.tag.deleteMany({});

  // 1. Criando as Tags/Categorias
  const tagFantasia = await prisma.tag.create({ data: { nome: 'Fantasia Épica' } });
  const tagTerror = await prisma.tag.create({ data: { nome: 'Terror & Mistério' } });
  const tagFiccao = await prisma.tag.create({ data: { nome: 'Ficção Científica & Cyberpunk' } });
  const tagNacional = await prisma.tag.create({ data: { nome: 'Sistemas Nacionais' } });

  // 2. Inserindo os RPGs e seus Materiais (Arquivos)

  // --- FANTASIA ÉPICA ---
  await prisma.rPG.create({
    data: {
      titulo: 'Tormenta20',
      sinopse: 'Em Arton, deuses caminharam entre mortais e deixaram um mundo repleto de magia, ruínas e monstros.',
      capa_url: '/images/tormenta20.jpg',
      materiais: {
        create: [
          { nome: 'Livro Básico', tipo: 'PDF', arquivo_url: '/files/tormenta20/livro-basico.pdf' },
          { nome: 'Ameaças de Arton', tipo: 'PDF', arquivo_url: '/files/tormenta20/ameacas-de-arton.pdf' },
          { nome: 'Guia do Mestre', tipo: 'PDF', arquivo_url: '/files/tormenta20/guia-do-mestre.pdf' },
          { nome: 'Mapa de Arton', tipo: 'PDF', arquivo_url: '/files/tormenta20/mapa-de-arton.pdf' },
        ],
      },
      tags: {
        create: [
          { tag_id: tagFantasia.id },
          { tag_id: tagNacional.id },
        ],
      },
    },
  });

  await prisma.rPG.create({
    data: {
      titulo: 'Dungeons & Dragons 5ª Edição',
      sinopse: 'O sistema mais jogado do mundo. Monte um grupo, explore masmorras e enfrente dragões.',
      capa_url: '/images/dnd5e.jpg',
      materiais: {
        create: [
          { nome: 'Manual do Jogador', tipo: 'PDF', arquivo_url: '/files/dnd5e/manual-do-jogador.pdf' },
          { nome: 'Guia do Mestre', tipo: 'PDF', arquivo_url: '/files/dnd5e/guia-do-mestre.pdf' },
          { nome: 'Manual dos Monstros', tipo: 'PDF', arquivo_url: '/files/dnd5e/manual-dos-monstros.pdf' },
          { nome: 'Tela do Mestre', tipo: 'PDF', arquivo_url: '/files/dnd5e/tela-do-mestre.pdf' },
        ],
      },
      tags: {
        create: [{ tag_id: tagFantasia.id }],
      },
    },
  });

  await prisma.rPG.create({
    data: {
      titulo: 'Pathfinder — 2ª Edição',
      sinopse: 'Um sistema de três ações por turno que recompensa planejamento e customização profunda.',
      capa_url: '/images/pathfinder2e.jpg',
      materiais: {
        create: [
          { nome: 'Manual Básico', tipo: 'PDF', arquivo_url: '/files/pathfinder2e/manual-basico.pdf' },
          { nome: 'Guia do Mestre de Jogo', tipo: 'PDF', arquivo_url: '/files/pathfinder2e/guia-do-mestre.pdf' },
          { nome: 'Bestiário', tipo: 'PDF', arquivo_url: '/files/pathfinder2e/bestiario.pdf' },
        ],
      },
      tags: {
        create: [{ tag_id: tagFantasia.id }],
      },
    },
  });

  // --- TERROR & MISTÉRIO ---
  await prisma.rPG.create({
    data: {
      titulo: 'Call of Cthulhu',
      sinopse: 'Investigadores comuns encaram horrores cósmicos além da compreensão humana.',
      capa_url: '/images/cthulhu.jpg',
      materiais: {
        create: [
          { nome: 'Livro de Regras', tipo: 'PDF', arquivo_url: '/files/cthulhu/livro-de-regras.pdf' },
          { nome: 'Guia do Guardião', tipo: 'PDF', arquivo_url: '/files/cthulhu/guia-do-guardiao.pdf' },
          { nome: 'Ficha de Investigador', tipo: 'Imagem', arquivo_url: '/files/cthulhu/ficha.jpg' },
        ],
      },
      tags: {
        create: [{ tag_id: tagTerror.id }],
      },
    },
  });

  await prisma.rPG.create({
    data: {
      titulo: 'Ordem Paranormal',
      sinopse: 'Agentes recrutados por uma organização secreta enfrentam entidades paranormais no Brasil.',
      capa_url: '/images/ordemparanormal.jpg',
      materiais: {
        create: [
          { nome: 'Livro Básico', tipo: 'PDF', arquivo_url: '/files/ordemparanormal/livro-basico.pdf' },
          { nome: 'Ameaças Ocultas', tipo: 'PDF', arquivo_url: '/files/ordemparanormal/ameacas-ocultas.pdf' },
        ],
      },
      tags: {
        create: [
          { tag_id: tagTerror.id },
          { tag_id: tagNacional.id },
        ],
      },
    },
  });

  // --- FICÇÃO CIENTÍFICA & CYBERPUNK ---
  await prisma.rPG.create({
    data: {
      titulo: 'Cyberpunk RED',
      sinopse: 'Sobreviva em uma metrópole dominada por corporações, implantes e violência.',
      capa_url: '/images/cyberpunkred.jpg',
      materiais: {
        create: [
          { nome: 'Livro de Regras', tipo: 'PDF', arquivo_url: '/files/cyberpunkred/livro-de-regras.pdf' },
          { nome: 'Manual de Equipamentos', tipo: 'PDF', arquivo_url: '/files/cyberpunkred/equipamentos.pdf' },
        ],
      },
      tags: {
        create: [{ tag_id: tagFiccao.id }],
      },
    },
  });

  console.log('Seed executado com sucesso e sincronizado ao Prisma Schema!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
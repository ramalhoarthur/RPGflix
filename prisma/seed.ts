import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o Seed do Banco de Dados...');

  // 1. Criando as Tags
  const tagFantasia = await prisma.tag.upsert({ where: { nome: 'Fantasia Medieval' }, update: {}, create: { nome: 'Fantasia Medieval' }});
  const tagHorror = await prisma.tag.upsert({ where: { nome: 'Horror Cósmico' }, update: {}, create: { nome: 'Horror Cósmico' }});
  const tagInvestigacao = await prisma.tag.upsert({ where: { nome: 'Investigação' }, update: {}, create: { nome: 'Investigação' }});

  // 2. Inserindo os Sistemas de RPG
  await prisma.rPG.create({
    data: {
      titulo: 'Dungeons & Dragons 5e',
      sinopse: 'O clássico RPG de mesa de fantasia medieval, focado em exploração de masmorras e combates épicos.',
      capa_url: 'https://exemplo.com/dnd5e.jpg',
      materiais: {
        create: [
          { nome: 'Livro do Jogador', tipo: 'PDF', arquivo_url: 'https://exemplo.com/dnd/jogador.pdf' },
          { nome: 'Guia do Mestre', tipo: 'PDF', arquivo_url: 'https://exemplo.com/dnd/mestre.pdf' },
        ]
      },
      tags: { create: [{ tag_id: tagFantasia.id }] }
    }
  });

  await prisma.rPG.create({
    data: {
      titulo: 'Tormenta20',
      sinopse: 'O maior RPG de mesa brasileiro. Um cenário de fantasia épica onde deuses e heróis lutam contra a ameaça da Tormenta.',
      capa_url: 'https://exemplo.com/t20.jpg',
      materiais: {
        create: [{ nome: 'Livro Básico', tipo: 'PDF', arquivo_url: 'https://exemplo.com/t20/basico.pdf' }]
      },
      tags: { create: [{ tag_id: tagFantasia.id }] }
    }
  });

  await prisma.rPG.create({
    data: {
      titulo: 'Call of Cthulhu 7ª Edição',
      sinopse: 'RPG de horror, mistério e investigação baseado nas obras de H.P. Lovecraft.',
      capa_url: 'https://exemplo.com/coc.jpg',
      materiais: {
        create: [
          { nome: 'Livro do Guardião', tipo: 'PDF', arquivo_url: 'https://exemplo.com/coc/guardiao.pdf' },
          { nome: 'Ficha de Investigador', tipo: 'Imagem', arquivo_url: 'https://exemplo.com/coc/ficha.jpg' }
        ]
      },
      tags: {
        create: [{ tag_id: tagHorror.id }, { tag_id: tagInvestigacao.id }]
      }
    }
  });

  console.log('Seed concluído com sucesso! Os RPGs foram adicionados.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
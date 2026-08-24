-- CreateTable
CREATE TABLE "RPGs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "capa_url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Materiais" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "arquivo_url" TEXT NOT NULL,
    "rpg_id" INTEGER NOT NULL,
    CONSTRAINT "Materiais_rpg_id_fkey" FOREIGN KEY ("rpg_id") REFERENCES "RPGs" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RPG_Tags" (
    "rpg_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    PRIMARY KEY ("rpg_id", "tag_id"),
    CONSTRAINT "RPG_Tags_rpg_id_fkey" FOREIGN KEY ("rpg_id") REFERENCES "RPGs" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "RPG_Tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Tags_nome_key" ON "Tags"("nome");

import { pgTable, serial, text, smallint, numeric, integer, pgEnum, primaryKey } from 'drizzle-orm/pg-core';

// Define the enum for "categoria"
export const categoriaEnum = pgEnum('categoria_enum', ['Frutíferas', 'Floríferas', 'Perenes', 'Caducifólias']);

// Bonsais table
export const bonsais = pgTable('bonsais', {
    id: serial('id').primaryKey(),
    nome: text('nome').notNull(),
    descricao: text('descricao'),
    categoria: categoriaEnum('categoria').notNull(),
    sol: smallint('sol').notNull(),
    agua: smallint('agua').notNull(),
    tamanho: smallint('tamanho').notNull(),
    poda: smallint('poda').notNull(),
    solo: smallint('solo').notNull(),
    delicadeza: smallint('delicadeza').notNull(),
    preco: numeric('preco', { precision: 6, scale: 2 }).notNull()
});

// Pedidos table
export const pedidos = pgTable('pedidos', {
    id: serial('id').primaryKey(),
    preco_total: numeric('preco_total', { precision: 6, scale: 2 })
});

// Pedido_Bonsais table
export const pedidoBonsais = pgTable('pedido_bonsais', {
    pedido_id: integer('pedido_id').notNull().references(() => pedidos.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    bonsai_id: integer('bonsai_id').notNull().references(() => bonsais.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    quantidade: integer('quantidade').notNull(),
}, (pedidoBonsais) => ({
    primaryKey: primaryKey(pedidoBonsais.pedido_id, pedidoBonsais.bonsai_id),
}));

// Type inference for inserting data
export type Bonsai = typeof bonsais.$inferInsert;
export type Pedido = typeof pedidos.$inferInsert;
export type PedidoBonsai = typeof pedidoBonsais.$inferInsert;
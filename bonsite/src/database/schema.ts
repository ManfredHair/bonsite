import { integer, pgTable, text, bigint } from 'drizzle-orm/pg-core';

// Bonsai table definition
export const bonsaiTable = pgTable('bonsai', {
    id: bigint('id', { mode: 'number' }).primaryKey(),
    name: text('name').notNull(),
    amount: integer('amount').notNull(),
  });
  //to search later, this is an example of drizzle orm,


export type InsertBonsai = typeof bonsaiTable.$inferInsert;
export type SelectBonsai = typeof bonsaiTable.$inferSelect;

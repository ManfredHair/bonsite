DO $$ BEGIN
 CREATE TYPE "public"."categoria_enum" AS ENUM('Frutíferas', 'Floríferas', 'Perenes', 'Caducifólias');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bonsais" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"descricao" text,
	"categoria" "categoria_enum" NOT NULL,
	"sol" smallint NOT NULL,
	"agua" smallint NOT NULL,
	"tamanho" smallint NOT NULL,
	"poda" smallint NOT NULL,
	"solo" smallint NOT NULL,
	"delicadeza" smallint NOT NULL,
	"preco" numeric(6, 2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pedido_bonsais" (
	"pedido_id" integer NOT NULL,
	"bonsai_id" integer NOT NULL,
	"quantidade" integer NOT NULL,
	CONSTRAINT "pedido_bonsais_pedido_id_bonsai_id_pk" PRIMARY KEY("pedido_id","bonsai_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "pedidos" (
	"id" serial PRIMARY KEY NOT NULL,
	"preco_total" numeric(6, 2)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pedido_bonsais" ADD CONSTRAINT "pedido_bonsais_pedido_id_pedidos_id_fk" FOREIGN KEY ("pedido_id") REFERENCES "public"."pedidos"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "pedido_bonsais" ADD CONSTRAINT "pedido_bonsais_bonsai_id_bonsais_id_fk" FOREIGN KEY ("bonsai_id") REFERENCES "public"."bonsais"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

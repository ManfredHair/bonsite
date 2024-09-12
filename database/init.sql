DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'categoria_enum') THEN
        CREATE TYPE categoria_enum AS ENUM ('Frutíferas', 'Floríferas', 'Perenes', 'Caducifólias');
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'bonsais') THEN
        CREATE TABLE bonsais (
            id SERIAL PRIMARY KEY,
            nome TEXT NOT NULL,
            descricao TEXT,
            categoria categoria_enum NOT NULL,
            sol SMALLINT CHECK (sol BETWEEN 1 AND 5),
            agua SMALLINT CHECK (agua BETWEEN 1 AND 5),
            tamanho SMALLINT CHECK (tamanho BETWEEN 1 AND 5),
            poda SMALLINT CHECK (poda BETWEEN 1 AND 5),
            solo SMALLINT CHECK (solo BETWEEN 1 AND 5),
            delicadeza SMALLINT CHECK (delicadeza BETWEEN 1 AND 5),
            preco NUMERIC(6,2) NOT NULL
        );
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'pedidos') THEN
        CREATE TABLE pedidos (
            id SERIAL PRIMARY KEY,
            preco_total NUMERIC(6, 2)
        );
    END IF;
END $$;

DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = 'pedido_bonsais') THEN
        CREATE TABLE pedido_bonsais (
            pedido_id INT NOT NULL,
            bonsai_id INT NOT NULL,
            quantidade INT NOT NULL CHECK (quantidade > 0),
            PRIMARY KEY (pedido_id, bonsai_id),
            FOREIGN KEY (pedido_id) REFERENCES pedidos (id)
                ON DELETE CASCADE
                ON UPDATE CASCADE,
            FOREIGN KEY (bonsai_id) REFERENCES bonsais (id)
                ON DELETE CASCADE
                ON UPDATE CASCADE
        );
    END IF;
END $$;

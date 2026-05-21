import { open } from "react-native-quick-sqlite";

const DB_NAME = "navegation.db";
const DB_LOCATION = "default";

export const database = open({
  name: DB_NAME,
  location: DB_LOCATION,
});

export const setupDatabase = async () => {
  try {
    await database.executeAsync(
      `CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          code TEXT,
          stock INTEGER,
          cost REAL,
          price REAL,
          description TEXT
        );`
    );
  } catch (error) {
    console.error("setupDatabase error", error);
  }
};

export interface ProductRecord {
  name: string;
  code: string;
  stock: number;
  cost: number;
  price: number;
  description: string;
}

export const insertProduct = async (product: ProductRecord) => {
  const { name, code, stock, cost, price, description } = product;

  return database.executeAsync(
    `INSERT INTO products (name, code, stock, cost, price, description) VALUES (?, ?, ?, ?, ?, ?);`,
    [name, code, stock, cost, price, description]
  );
};

export const getProducts = async () => {
  const result = await database.executeAsync(`SELECT * FROM products;`);
  return result.rows?._array ?? [];
};

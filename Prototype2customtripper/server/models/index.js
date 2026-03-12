import path from "path";
import { fileURLToPath } from "url";
import { Sequelize } from "sequelize";
import { BookingModel } from "./booking.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dialect = process.env.DB_DIALECT ?? "sqlite";

const sequelize = new Sequelize({
  dialect,
  logging: false,
  ...(dialect === "sqlite"
    ? { storage: path.join(__dirname, "..", "data", "database.sqlite") }
    : {
        host: process.env.DB_HOST ?? "127.0.0.1",
        port: parseInt(process.env.DB_PORT ?? "3306", 10),
        username: process.env.DB_USER ?? "root",
        password: process.env.DB_PASSWORD ?? "",
        database: process.env.DB_NAME ?? "planner",
      }),
});

const Booking = BookingModel(sequelize);

export async function initDb() {
  await sequelize.sync();
}

export { sequelize, Booking };

import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 8000;
export const BD_HOST = process.env.BD_HOST || localhost;
export const BD_PORT = process.env.BD_PORT || 3306;
export const BD_USER = process.env.BD_USER || root;
export const BD_PASSWORD = process.env.BD_PASSWORD || Password;
export const BD_DATABASE = process.env.BD_DATABASE || clientesguci;

import { Client } from "pg";
import config from "./config";


export function getClient(): Client {
  return new Client({
    connectionString: config.POSTGRES_URL,
  });
  
}
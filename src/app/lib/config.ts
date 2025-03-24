import { loadEnvConfig } from "@next/env";
import dotenv from 'dotenv';
dotenv.config();
const projectDir = process.cwd();

loadEnvConfig(projectDir);
const config = {
    POSTGRES_URL : process.env.POSTGRES_URL,
}

export default config;
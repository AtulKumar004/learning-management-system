// scripts/merge-schema.ts
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

// __dirname workaround in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const base = readFileSync(join(__dirname, '../prisma/schema.base.prisma'), 'utf8');

const modelsDir = join(__dirname, '../prisma/models');
const modelFiles = readdirSync(modelsDir).filter((f) => f.endsWith('.prisma'));

const models = modelFiles
  .map((file) => readFileSync(join(modelsDir, file), 'utf8'))
  .join('\n\n');

writeFileSync(join(__dirname, '../prisma/schema.prisma'), base + '\n\n' + models);

console.log('✅ schema.prisma generated from models/');

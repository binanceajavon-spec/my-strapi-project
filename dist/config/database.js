"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = ({ env }) => {
    const databaseUrl = env('DATABASE_URL');
    // Si on est sur Railway (DATABASE_URL existe)
    if (databaseUrl) {
        return {
            connection: {
                client: 'postgres',
                connection: {
                    connectionString: databaseUrl,
                    ssl: { rejectUnauthorized: false },
                },
                pool: { min: 2, max: 10 },
            },
        };
    }
    // Si on est en local sur ton Windows (DATABASE_URL n'existe pas)
    return {
        connection: {
            client: 'sqlite',
            connection: {
                filename: path_1.default.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
            },
            useNullAsDefault: true,
        },
    };
};
